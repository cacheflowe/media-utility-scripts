// Streaming audio speed change for the time-lapse feature, as a Mediabunny audio
// `process` hook. Two modes:
//
//  - "stretch": WSOLA (waveform-similarity overlap-add). Hann-windowed frames
//    are taken from the input `speed` times further apart than they're laid
//    down in the output; each frame's start is nudged within a small tolerance
//    to the spot whose waveform best continues the previous frame, so the
//    cross-fades don't phase-cancel. Duration changes, pitch doesn't.
//  - "pitch": plain resampling (like playing a tape faster): pitch follows speed.
//
// Input arrives in small chunks, so both modes keep a rolling input buffer and
// emit output as soon as it's final. Output timestamps run contiguously from
// the first input timestamp divided by the speed, matching the video retiming.

import { AudioSample } from "mediabunny";

export type AudioSpeedMode = "stretch" | "pitch";

const FRAME_SECONDS = 0.04; // WSOLA frame length
const TOLERANCE_SECONDS = 0.012; // how far a frame may shift to find the best match

export function createAudioSpeedProcess(speed: number, mode: AudioSpeedMode) {
  let sampleRate = 0;
  let channels = 0;
  let outStart: number | null = null; // output timestamp of the first emitted frame
  let outEmitted = 0; // frames emitted so far

  // Rolling input buffer: in[c][i] holds absolute input frame `inBase + i`;
  // `mono` is the channel mix, used only for the similarity search
  let input: Float32Array[] = [];
  let mono = new Float32Array(0);
  let inBase = 0;
  let inLength = 0; // absolute index one past the last buffered frame

  // WSOLA state
  let N = 0; // frame length
  let Hs = 0; // synthesis hop (output spacing) = N / 2
  let tol = 0;
  let window: Float32Array;
  let frameIndex = 0;
  let prevSel = 0; // input start of the previously used frame
  let overlap: Float32Array[] = []; // pending output tail (length N) per channel

  // Resample state
  let readPos = 0; // fractional absolute input position of the next output frame

  function init(s: AudioSample) {
    sampleRate = s.sampleRate;
    channels = s.numberOfChannels;
    input = Array.from({ length: channels }, () => new Float32Array(0));
    N = Math.round(sampleRate * FRAME_SECONDS) & ~1;
    Hs = N / 2;
    tol = Math.round(sampleRate * TOLERANCE_SECONDS);
    window = new Float32Array(N);
    // Periodic Hann: copies spaced N/2 apart sum to exactly 1
    for (let i = 0; i < N; i++) window[i] = 0.5 - 0.5 * Math.cos((2 * Math.PI * i) / N);
    overlap = Array.from({ length: channels }, () => new Float32Array(N));
    outStart = s.timestamp / speed;
  }

  function append(s: AudioSample) {
    const n = s.numberOfFrames;
    for (let c = 0; c < channels; c++) {
      const plane = new Float32Array(n);
      s.copyTo(plane, { planeIndex: Math.min(c, s.numberOfChannels - 1), format: "f32-planar" });
      const merged = new Float32Array(input[c].length + n);
      merged.set(input[c]);
      merged.set(plane, input[c].length);
      input[c] = merged;
    }
    const m = new Float32Array(mono.length + n);
    m.set(mono);
    for (let c = 0; c < channels; c++) {
      const src = input[c];
      for (let i = 0; i < n; i++) m[mono.length + i] += src[src.length - n + i];
    }
    mono = m;
    inLength += n;
  }

  /** Drop buffered input before absolute frame `keepFrom`. */
  function trimInput(keepFrom: number) {
    const drop = Math.min(Math.max(0, Math.floor(keepFrom) - inBase), inLength - inBase);
    if (drop <= 0) return;
    for (let c = 0; c < channels; c++) input[c] = input[c].slice(drop);
    mono = mono.slice(drop);
    inBase += drop;
  }

  /** Cross-correlation of the mono mix at absolute positions a and b over `len` frames (every 2nd frame). */
  function correlate(a: number, b: number, len: number) {
    const ia = a - inBase;
    const ib = b - inBase;
    let sum = 0;
    for (let i = 0; i < len; i += 2) sum += mono[ia + i] * mono[ib + i];
    return sum;
  }

  function makeSample(planes: Float32Array[], frames: number): AudioSample {
    const data = new Float32Array(frames * channels);
    for (let c = 0; c < channels; c++) data.set(planes[c].subarray(0, frames), c * frames);
    const sample = new AudioSample({
      data,
      format: "f32-planar",
      numberOfChannels: channels,
      sampleRate,
      timestamp: outStart! + outEmitted / sampleRate,
    });
    outEmitted += frames;
    return sample;
  }

  function runStretch(): AudioSample | null {
    const Ha = Hs * speed; // analysis hop (input spacing)
    const L = N - Hs; // overlap length compared during the search
    const ready: Float32Array[] = Array.from({ length: channels }, () => new Float32Array(0));
    let readyFrames = 0;

    for (;;) {
      const target = Math.round(frameIndex * Ha);
      // Need the whole search range plus a frame of input before placing this frame
      if (target + tol + N > inLength) break;

      let sel = target;
      if (frameIndex > 0) {
        // Find the shift whose waveform best matches the natural continuation of the previous frame
        // (coarse pass every 4 frames, then refine around the best)
        const ref = prevSel + Hs;
        const lo = Math.max(inBase, target - tol);
        const hi = target + tol;
        let best = -Infinity;
        for (let cand = lo; cand <= hi; cand += 4) {
          const corr = correlate(ref, cand, L);
          if (corr > best) {
            best = corr;
            sel = cand;
          }
        }
        const coarse = sel;
        for (let cand = Math.max(lo, coarse - 3); cand <= Math.min(hi, coarse + 3); cand++) {
          const corr = correlate(ref, cand, L);
          if (corr > best) {
            best = corr;
            sel = cand;
          }
        }
      }

      // Overlap-add the windowed frame; its first Hs output frames are then final
      for (let c = 0; c < channels; c++) {
        const o = overlap[c];
        const src = input[c];
        for (let i = 0; i < N; i++) o[i] += window[i] * src[sel - inBase + i];
        const grown = new Float32Array(readyFrames + Hs);
        grown.set(ready[c].subarray(0, readyFrames));
        grown.set(o.subarray(0, Hs), readyFrames);
        ready[c] = grown;
        o.copyWithin(0, Hs);
        o.fill(0, N - Hs);
      }
      readyFrames += Hs;
      prevSel = sel;
      frameIndex++;
    }

    // Keep what the next frame's search and the continuation reference still need
    trimInput(Math.min(prevSel + Hs, Math.round(frameIndex * Ha) - tol));
    return readyFrames ? makeSample(ready, readyFrames) : null;
  }

  function runResample(): AudioSample | null {
    // Output frames whose interpolation inputs are both buffered
    const count = Math.max(0, Math.floor((inLength - 1 - readPos) / speed) + 1);
    if (inLength < 2 || count <= 0) return null;
    const planes = Array.from({ length: channels }, () => new Float32Array(count));
    for (let j = 0; j < count; j++) {
      const p = readPos + j * speed;
      const i0 = Math.floor(p);
      const f = p - i0;
      for (let c = 0; c < channels; c++) {
        const src = input[c];
        const a = src[i0 - inBase];
        const b = src[Math.min(i0 + 1, inLength - 1) - inBase];
        planes[c][j] = a + (b - a) * f;
      }
    }
    readPos += count * speed;
    trimInput(Math.floor(readPos) - 1);
    return makeSample(planes, count);
  }

  return (sample: AudioSample): AudioSample | null => {
    if (outStart === null) init(sample);
    append(sample);
    return mode === "stretch" ? runStretch() : runResample();
  };
}
