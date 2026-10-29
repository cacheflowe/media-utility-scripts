// Speed change / time-lapse as a Mediabunny video `process` hook.
//
// Source timestamps are divided by the speed factor and the result is resampled
// onto a fixed output frame rate. Each output slot is filled either by the first
// source frame that lands in it ("skip": a classic sharp time-lapse) or by the
// average of every source frame that lands in it ("blend": motion blur). Speeds
// below 1× repeat frames to fill the slots (slow motion without interpolation).

import { VideoSample } from "mediabunny";

export type TimelapseFrameMode = "skip" | "blend";

export function createTimelapseProcess(speed: number, fps: number, mode: TimelapseFrameMode) {
  const interval = 1 / fps;
  const eps = interval * 1e-3;
  let nextSlot: number | null = null; // output timestamp of the next frame to emit

  // Blend state: running average of the source frames in the current slot
  let canvas: HTMLCanvasElement | null = null;
  let ctx: CanvasRenderingContext2D | null = null;
  let blendCount = 0;

  function flushBlend(): VideoSample {
    const out = new VideoSample(canvas!, { timestamp: nextSlot!, duration: interval });
    nextSlot! += interval;
    blendCount = 0;
    return out;
  }

  return (sample: VideoSample): VideoSample[] | null => {
    const start = sample.timestamp / speed;
    const end = (sample.timestamp + sample.duration) / speed;
    if (nextSlot === null) nextSlot = start;

    if (mode === "blend" && speed > 1) {
      const out: VideoSample[] = [];
      // This frame belongs to a later slot: emit the finished average first
      if (blendCount > 0 && start >= nextSlot + interval - eps) {
        out.push(flushBlend());
        // Skip slots no frame landed in (e.g. gaps), keeping the timeline continuous
        while (start >= nextSlot + interval - eps) nextSlot += interval;
      }
      const w = sample.displayWidth;
      const h = sample.displayHeight;
      if (!canvas || canvas.width !== w || canvas.height !== h) {
        canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        ctx = canvas.getContext("2d")!;
      }
      blendCount++;
      ctx!.globalAlpha = 1 / blendCount; // incremental mean: avg_k = avg_{k-1} + (x - avg_{k-1}) / k
      ctx!.drawImage(sample.toCanvasImageSource(), 0, 0, w, h);
      ctx!.globalAlpha = 1;
      return out.length ? out : null;
    }

    // Skip mode: emit a copy of this frame for every output slot it covers
    const out: VideoSample[] = [];
    while (nextSlot < end - eps) {
      if (nextSlot >= start - eps) {
        const copy = sample.clone();
        copy.setTimestamp(nextSlot);
        copy.setDuration(interval);
        out.push(copy);
      }
      nextSlot += interval;
    }
    return out.length ? out : null;
  };
}
