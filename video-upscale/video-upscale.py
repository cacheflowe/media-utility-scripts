#!/usr/bin/env python3
"""
Video Upscaling + Frame Interpolation tool.

Drives the standalone precompiled ncnn-vulkan binaries:
  - rife-ncnn-vulkan       (AI frame interpolation, GPU via Vulkan)
  - realesrgan-ncnn-vulkan (AI resolution upscaling, GPU via Vulkan)

This intentionally uses NO Python ML stack (no torch / basicsr / opencv).
Everything here is Python standard library, so it runs on any modern Python
(3.8 - 3.14+) with nothing to `pip install`. You only need:
  - ffmpeg on PATH
  - the two ncnn-vulkan binaries (bundled in ./bin, see README)

Examples:
  python video-upscale.py in.mp4 out.mp4 -i        # interpolate up to 60fps
  python video-upscale.py in.mp4 out.mp4 -u        # 2x resolution
  python video-upscale.py in.mp4 out.mp4 -i -u     # both
"""

import argparse
import re
import shutil
import subprocess
import sys
import tempfile
import time
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
DEFAULT_BIN_DIR = SCRIPT_DIR / "bin"


def fmt_duration(seconds):
    """Human-friendly elapsed time, e.g. '8.3s', '2m 04.1s', '1h 03m 12s'."""
    m, s = divmod(seconds, 60)
    if m >= 60:
        h, m = divmod(int(m), 60)
        return f"{h}h {int(m):02d}m {s:02.0f}s"
    if m >= 1:
        return f"{int(m)}m {s:04.1f}s"
    return f"{s:.1f}s"


def run(cmd, **kwargs):
    """Run a command, raising with captured stderr on failure."""
    result = subprocess.run(cmd, capture_output=True, text=True, **kwargs)
    if result.returncode != 0:
        raise subprocess.CalledProcessError(
            result.returncode, cmd, output=result.stdout, stderr=result.stderr
        )
    return result


def ffmpeg_progress(line):
    """Parse an ffmpeg progress line -> display string (or None)."""
    if "frame=" in line:
        try:
            return f"frame {line.split('frame=')[1].split()[0].strip()}"
        except (IndexError, ValueError):
            return None
    return None


def percent_progress():
    """Parser for tools that emit bare `NN.NN%` lines (e.g. realesrgan). Tracks
    a monotonic max so duplicate/per-thread lines don't make the readout jump
    backwards. Returns a fresh stateful parser each call."""
    state = {"max": -1.0}
    pat = re.compile(r"(\d+(?:\.\d+)?)%")

    def parse(line):
        m = pat.search(line)
        if not m:
            return None
        pct = float(m.group(1))
        if pct >= state["max"]:
            state["max"] = pct
            return f"{pct:.0f}%"
        return None

    return parse


def run_streaming(cmd, label, parser=ffmpeg_progress, done=None):
    """Run a command, streaming single-line progress. `parser(line)` returns a
    display string to show (or None to ignore the line). `done`, if given, is
    shown in place of the last progress value on success (e.g. '100%' for tools
    whose progress never quite reaches the end)."""
    proc = subprocess.Popen(
        cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, bufsize=1
    )
    tail = []
    shown = False
    for line in proc.stdout:
        tail.append(line)
        tail[:] = tail[-40:]
        disp = parser(line)
        if disp is not None:
            print(f"\r  {label}... {disp}", end="", flush=True)
            shown = True
    proc.wait()
    if proc.returncode == 0 and shown and done is not None:
        print(f"\r  {label}... {done}", end="", flush=True)
    if shown:
        print()
    if proc.returncode != 0:
        raise subprocess.CalledProcessError(
            proc.returncode, cmd, output="".join(tail)
        )


def run_dir_progress(cmd, label, out_dir, total, poll=0.5):
    """Run a command that emits no progress of its own (e.g. rife-ncnn-vulkan)
    but writes output frames to `out_dir`. Poll the directory and show how many
    of `total` frames have been written so far."""
    proc = subprocess.Popen(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    while proc.poll() is None:
        n = sum(1 for _ in out_dir.glob("*.png"))
        print(f"\r  {label}... {n}/{total} frames", end="", flush=True)
        time.sleep(poll)
    print(f"\r  {label}... {total}/{total} frames")
    if proc.returncode != 0:
        raise subprocess.CalledProcessError(proc.returncode, cmd)


class VideoUpscaler:
    def __init__(self, bin_dir=DEFAULT_BIN_DIR, temp_dir=None, gpu="auto"):
        self.bin_dir = Path(bin_dir)
        self.temp_dir = temp_dir
        self.gpu = str(gpu)
        self.rife_exe = self.bin_dir / "rife" / "rife-ncnn-vulkan.exe"
        self.rife_model_dir = self.bin_dir / "rife"
        self.esrgan_exe = self.bin_dir / "realesrgan" / "realesrgan-ncnn-vulkan.exe"
        self.esrgan_model_dir = self.bin_dir / "realesrgan" / "models"

    # ---- probing -----------------------------------------------------------
    def probe(self, video_path):
        """Return (fps, frame_count, has_audio)."""
        def ffprobe(args):
            return run(["ffprobe", "-v", "error", *args, str(video_path)]).stdout.strip()

        fps_str = ffprobe([
            "-select_streams", "v:0", "-show_entries", "stream=r_frame_rate",
            "-of", "default=noprint_wrappers=1:nokey=1",
        ])
        if "/" in fps_str:
            num, den = fps_str.split("/")
            fps = float(num) / float(den)
        else:
            fps = float(fps_str)

        count_str = ffprobe([
            "-select_streams", "v:0", "-count_packets",
            "-show_entries", "stream=nb_read_packets",
            "-of", "default=noprint_wrappers=1:nokey=1",
        ])
        try:
            frame_count = int(count_str)
        except ValueError:
            count_str = ffprobe([
                "-select_streams", "v:0", "-count_frames",
                "-show_entries", "stream=nb_read_frames",
                "-of", "default=noprint_wrappers=1:nokey=1",
            ])
            frame_count = int(count_str)

        audio = ffprobe([
            "-select_streams", "a:0", "-show_entries", "stream=codec_type",
            "-of", "default=noprint_wrappers=1:nokey=1",
        ])
        return fps, frame_count, audio == "audio"

    # ---- ffmpeg frame I/O --------------------------------------------------
    def extract_frames(self, video_path, out_dir):
        out_dir.mkdir(parents=True, exist_ok=True)
        run_streaming([
            "ffmpeg", "-y", "-i", str(video_path),
            "-qscale:v", "1", "-qmin", "1",
            str(out_dir / "%08d.png"),
        ], label="extracting")

    def extract_audio(self, video_path, audio_path):
        # Re-encode to AAC so it muxes cleanly into mp4 regardless of source codec.
        try:
            run([
                "ffmpeg", "-y", "-i", str(video_path),
                "-vn", "-c:a", "aac", "-b:a", "192k", str(audio_path),
            ])
            return audio_path.exists()
        except subprocess.CalledProcessError:
            return False

    def frames_to_video(self, frames_dir, output_path, fps, audio_path=None,
                        codec="libx264", crf=17, preset="slow",
                        pix_fmt="yuv420p", faststart=True):
        first = sorted(frames_dir.glob("*.png"))
        if not first:
            raise ValueError("No frames to encode!")
        start_number = int(first[0].stem)
        has_audio = bool(audio_path and Path(audio_path).exists())

        print(f"  codec={codec} crf={crf} preset={preset} pix_fmt={pix_fmt}")
        cmd = [
            "ffmpeg", "-y",
            "-framerate", f"{fps}",
            "-start_number", str(start_number),
            "-i", str(frames_dir / "%08d.png"),
        ]
        if has_audio:
            cmd += ["-i", str(audio_path)]
        cmd += ["-c:v", codec, "-crf", str(crf), "-preset", preset,
                "-pix_fmt", pix_fmt]
        # 4:2:0 chroma subsampling requires even dimensions; crop at most 1px
        # so odd-sized frames (e.g. 3x of an odd dimension) stay compatible.
        if "420" in pix_fmt:
            cmd += ["-vf", "crop=trunc(iw/2)*2:trunc(ih/2)*2"]
        if faststart:
            # Move the moov atom to the front for streaming / broad compatibility
            cmd += ["-movflags", "+faststart"]
        if has_audio:
            cmd += ["-c:a", "aac", "-b:a", "192k", "-shortest"]
        cmd += [str(output_path)]
        run_streaming(cmd, label="encoding")

    # ---- AI stages ---------------------------------------------------------
    def interpolate_rife(self, in_dir, out_dir, fps, target_fps, model):
        """Interpolate frames up to target_fps (duration preserved). RIFE
        distributes the new frames evenly via its arbitrary target-count mode,
        so we can hit an exact destination fps from any source fps."""
        if not self.rife_exe.exists():
            raise FileNotFoundError(
                f"rife binary not found at {self.rife_exe}\n"
                "See README for download instructions, or use --ffmpeg-interpolation."
            )
        out_dir.mkdir(parents=True, exist_ok=True)
        in_count = len(list(in_dir.glob("*.png")))
        target_count = max(in_count, round(in_count * target_fps / fps))

        print(f"\n  RIFE interpolation: {model}")
        print(f"    {in_count} -> {target_count} frames, "
              f"{fps:.2f} -> {target_fps:.2f} fps")
        # rife-ncnn-vulkan prints no progress, so poll the output frame count.
        run_dir_progress([
            str(self.rife_exe),
            "-i", str(in_dir), "-o", str(out_dir),
            "-m", model, "-n", str(target_count), "-g", self.gpu,
        ], label="interpolating", out_dir=out_dir, total=target_count)
        return target_fps

    def interpolate_ffmpeg(self, in_dir, out_dir, fps, target_fps):
        """Fallback interpolation using ffmpeg minterpolate (CPU)."""
        out_dir.mkdir(parents=True, exist_ok=True)
        print(f"\n  ffmpeg minterpolate -> {target_fps:.2f} fps")
        run_streaming([
            "ffmpeg", "-y", "-framerate", f"{fps}",
            "-i", str(in_dir / "%08d.png"),
            "-vf", f"minterpolate=fps={target_fps}:mi_mode=mci:"
                   "mc_mode=aobmc:me_mode=bidir:vsbmc=1",
            "-qscale:v", "1", "-qmin", "1",
            str(out_dir / "%08d.png"),
        ], label="interpolating")
        return target_fps

    def upscale_esrgan(self, in_dir, out_dir, scale, model):
        if not self.esrgan_exe.exists():
            raise FileNotFoundError(
                f"realesrgan binary not found at {self.esrgan_exe}\n"
                "See README for download instructions."
            )
        out_dir.mkdir(parents=True, exist_ok=True)
        print(f"\n  RealESRGAN upscale: {model} x{scale}")
        # realesrgan-ncnn-vulkan emits overall batch progress as `NN.NN%` lines.
        run_streaming([
            str(self.esrgan_exe),
            "-i", str(in_dir), "-o", str(out_dir),
            "-n", model, "-s", str(scale),
            "-m", str(self.esrgan_model_dir), "-g", self.gpu,
            "-f", "png",
        ], label="upscaling", parser=percent_progress(), done="100%")

    # ---- pipeline ----------------------------------------------------------
    def process(self, input_path, output_path, interpolate=False, upscale=False,
                upscale_scale=2, upscale_model="realesr-animevideov3",
                rife_model="rife-v4.6", target_fps=60, use_ffmpeg_interp=False,
                codec="libx264", crf=17, preset="slow", pix_fmt="yuv420p",
                faststart=True):
        input_path = Path(input_path)
        output_path = Path(output_path)
        if not input_path.exists():
            raise FileNotFoundError(f"Input video not found: {input_path}")
        output_path.parent.mkdir(parents=True, exist_ok=True)

        t_start = time.perf_counter()
        timings = []

        fps, frame_count, has_audio = self.probe(input_path)
        print(f"\nInput: {input_path.name}")
        print(f"  {frame_count} frames @ {fps:.2f} fps, "
              f"audio: {'yes' if has_audio else 'no'}")

        with tempfile.TemporaryDirectory(prefix="video_upscale_", dir=self.temp_dir) as td:
            td = Path(td)

            audio_path = td / "audio.m4a"
            if has_audio:
                has_audio = self.extract_audio(input_path, audio_path)

            frames = td / "frames_in"
            print("\n[1/4] Extracting frames")
            self.extract_frames(input_path, frames)
            current = frames

            if interpolate and fps >= target_fps - 0.01:
                print(f"\n[2/4] Interpolation skipped "
                      f"({fps:.2f}fps already >= target {target_fps:.0f}fps)")
            elif interpolate:
                interp = td / "frames_interp"
                print(f"\n[2/4] Interpolating toward {target_fps:.0f}fps")
                t0 = time.perf_counter()
                if use_ffmpeg_interp:
                    fps = self.interpolate_ffmpeg(current, interp, fps, target_fps)
                else:
                    fps = self.interpolate_rife(current, interp, fps,
                                                target_fps, rife_model)
                current = interp
                elapsed = time.perf_counter() - t0
                timings.append(("Interpolation", elapsed))
                print(f"  Interpolation took {fmt_duration(elapsed)}")
            else:
                print("\n[2/4] Interpolation skipped")

            if upscale:
                up = td / "frames_up"
                print("\n[3/4] Upscaling")
                t0 = time.perf_counter()
                self.upscale_esrgan(current, up, upscale_scale, upscale_model)
                current = up
                elapsed = time.perf_counter() - t0
                timings.append(("Upscaling", elapsed))
                print(f"  Upscaling took {fmt_duration(elapsed)}")
            else:
                print("\n[3/4] Upscaling skipped")

            print("\n[4/4] Encoding final video")
            self.frames_to_video(current, output_path, fps,
                                 audio_path if has_audio else None,
                                 codec=codec, crf=crf, preset=preset,
                                 pix_fmt=pix_fmt, faststart=faststart)

        total = time.perf_counter() - t_start
        print("\nTiming:")
        for name, secs in timings:
            print(f"  {name:<14} {fmt_duration(secs)}")
        print(f"  {'Total':<14} {fmt_duration(total)}")
        print(f"\nDone -> {output_path}")


def main():
    p = argparse.ArgumentParser(
        description="Video frame interpolation + AI upscaling via ncnn-vulkan.",
        epilog="Example: python video-upscale.py in.mp4 out.mp4 -i -u",
        formatter_class=argparse.ArgumentDefaultsHelpFormatter,
    )
    p.add_argument("input", help="Input video path")
    p.add_argument("output", help="Output video path")
    p.add_argument("-i", "--interpolate", action="store_true",
                   help="Interpolate frames up toward --target-fps (default 60). "
                        "Never exceeds the target; skipped if source fps is "
                        "already >= target.")
    p.add_argument("-u", "--upscale", action="store_true",
                   help="Upscale resolution using RealESRGAN")
    p.add_argument("-c", "--content", choices=["video", "phone", "photo", "anime"],
                   help="Pick the RealESRGAN model+scale for your content type: "
                        "video=realesr-animevideov3 x2 (fast, flexible), "
                        "phone=realesr-general-wdn-x4v3 x4 (real camera video, "
                        "with denoise), "
                        "photo=realesrgan-x4plus x4 (sharpest for stills), "
                        "anime=realesrgan-x4plus-anime x4. "
                        "Overridden by explicit --upscale-model/--upscale-scale.")
    p.add_argument("--upscale-scale", type=int, choices=[2, 3, 4], default=None,
                   help="RealESRGAN upscale factor (default: 2)")
    p.add_argument("--upscale-model", default=None,
                   help="RealESRGAN model name (e.g. realesr-animevideov3, "
                        "realesrgan-x4plus, realesrgan-x4plus-anime). "
                        "Default: realesr-animevideov3")
    p.add_argument("--rife-model", default="rife-v4.6",
                   help="RIFE model folder name under bin/rife/")
    p.add_argument("--target-fps", type=float, default=60,
                   help="Destination frame rate for interpolation (hard ceiling)")
    p.add_argument("--gpu", default="auto",
                   help="GPU id (e.g. 0), or 'auto', or -1 for CPU")
    # ---- output encoding ----
    p.add_argument("-q", "--crf", type=int, default=17,
                   help="Quality (x264/x265 CRF, 0-51). Lower = better/bigger. "
                        "~18 visually lossless, 23 default-ish, 28 small.")
    p.add_argument("--codec", default="libx264",
                   help="Video codec (libx264 = most compatible; libx265 = "
                        "smaller but less compatible)")
    p.add_argument("--preset", default="slow",
                   help="x264/x265 preset (ultrafast..veryslow); slower = "
                        "better compression at same quality")
    p.add_argument("--pix-fmt", default="yuv420p",
                   help="Pixel format (yuv420p = most compatible)")
    p.add_argument("--no-faststart", action="store_true",
                   help="Don't move the moov atom to the front "
                        "(faststart aids streaming/compatibility)")
    p.add_argument("--ffmpeg-interpolation", action="store_true",
                   help="Use ffmpeg minterpolate (CPU) instead of RIFE")
    p.add_argument("--bin-dir", default=str(DEFAULT_BIN_DIR),
                   help="Directory holding rife/ and realesrgan/ binaries")
    p.add_argument("--temp-dir", help="Directory for temp frames "
                   "(default: system temp; needs lots of free space)")
    args = p.parse_args()

    if not args.interpolate and not args.upscale:
        p.error("Specify at least one of --interpolate / --upscale")

    if shutil.which("ffmpeg") is None or shutil.which("ffprobe") is None:
        print("Error: ffmpeg/ffprobe not found on PATH.", file=sys.stderr)
        sys.exit(1)

    # Resolve the content preset, letting explicit flags win over it.
    CONTENT_PRESETS = {
        "video": ("realesr-animevideov3", 2),
        "phone": ("realesr-general-wdn-x4v3", 4),
        "photo": ("realesrgan-x4plus", 4),
        "anime": ("realesrgan-x4plus-anime", 4),
    }
    model, scale = args.upscale_model, args.upscale_scale
    if args.content:
        preset_model, preset_scale = CONTENT_PRESETS[args.content]
        model = model or preset_model
        scale = scale or preset_scale
    model = model or "realesr-animevideov3"
    scale = scale or 2
    # Only the animevideov3 model ships separate x2/x3/x4 weights; every other
    # bundled model is 4x-only.
    if "animevideov3" not in model and scale != 4:
        print(f"Note: model '{model}' is 4x-only; using --upscale-scale 4.")
        scale = 4
    args.upscale_model, args.upscale_scale = model, scale

    upscaler = VideoUpscaler(bin_dir=args.bin_dir, temp_dir=args.temp_dir, gpu=args.gpu)
    try:
        upscaler.process(
            args.input, args.output,
            interpolate=args.interpolate,
            upscale=args.upscale,
            upscale_scale=args.upscale_scale,
            upscale_model=args.upscale_model,
            rife_model=args.rife_model,
            target_fps=args.target_fps,
            use_ffmpeg_interp=args.ffmpeg_interpolation,
            codec=args.codec,
            crf=args.crf,
            preset=args.preset,
            pix_fmt=args.pix_fmt,
            faststart=not args.no_faststart,
        )
    except Exception as e:
        print(f"\nError: {e}", file=sys.stderr)
        if isinstance(e, subprocess.CalledProcessError) and (e.stderr or e.output):
            print((e.stderr or e.output or "")[-2000:], file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
