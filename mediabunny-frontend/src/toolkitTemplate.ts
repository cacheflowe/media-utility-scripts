// Shared UI markup — single source of truth for both the standalone site
// (src/main.ts) and the web component (src/component.ts). Edit the markup here.

export const TOOLKIT_MARKUP = /*html*/ `
<nav class="brand-nav">
      <ul>
        <li>
          <strong><code>&lt;media-converter&gt;</code></strong>
        </li>
      </ul>
      <ul>
        <li>
          <button id="theme-toggle" class="theme-toggle-btn" aria-label="Toggle theme">
            <!-- Moon Icon (Dark Mode active, click to light) -->
            <svg
              id="theme-icon-moon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
            <!-- Sun Icon (Light Mode active, click to dark, hidden by default in JS) -->
            <svg
              id="theme-icon-sun"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              style="display: none"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m0 13.5V21M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M3 12h2.25m13.5 0H21M6.34 17.66l-1.42 1.42m12.72-12.72l-1.42 1.42M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>

    <main>
      <!-- Step 1: drop a file (full-width entry point) -->
      <div id="dropzone" role="button" tabindex="0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
          />
        </svg>
        <h3>Drag & Drop media file here</h3>
        <p style="margin-bottom: 0.5rem; font-size: 0.9rem; color: var(--pico-muted-color)">
          or click to select a file from your device
        </p>
        <small style="font-size: 0.8rem; opacity: 0.7"
          >Supports video (MP4, WebM, MOV), images (PNG, JPG, WebP, AVIF), and audio (MP3, WAV, M4A, FLAC, OGG)</small
        >
        <input type="file" id="video-file-input" accept="video/*,image/*,audio/*" multiple />
      </div>

      <!-- Loaded media: 3-column workflow (info | settings | output) -->
      <section id="loaded-file-section" style="display: none">
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem">🎬 Source Media Workshop</h2>

        <div id="video-workspace" class="workshop-layout">
          <!-- Column 1: input / info -->
          <div class="workshop-sidebar">
            <!-- Live Video Preview & Seeking -->
            <article class="info-card">
              <header class="card-header">
                Original Video Player
              </header>
              <div class="video-container">
                <video id="preview-video" controls muted playsinline></video>
                <div id="video-crop-overlay" class="crop-overlay" style="display: none">
                  <div class="crop-box" id="video-crop-box">
                    <span class="crop-handle" data-handle="nw"></span>
                    <span class="crop-handle" data-handle="ne"></span>
                    <span class="crop-handle" data-handle="sw"></span>
                    <span class="crop-handle" data-handle="se"></span>
                  </div>
                </div>
              </div>
              <small style="display: block; text-align: center; margin-top: 0.5rem; color: var(--pico-muted-color)">
                💡 Use player's controls or sliders to scrub frames for cutouts
              </small>
            </article>

            <!-- Source Video Properties -->
            <article class="info-card">
              <header class="card-header">
                Attributes & Metadata
              </header>

              <div class="meta-grid">
                <div class="meta-item">
                  <span class="meta-label">File Name</span>
                  <span id="meta-name" style="word-break: break-all; font-weight: 500">-</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">File Size</span>
                  <span id="meta-size">-</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Duration</span>
                  <span id="meta-duration">-</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Resolution</span>
                  <span id="meta-resolution">-</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Aspect Ratio</span>
                  <span id="meta-aspect">-</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Video Codec</span>
                  <span id="meta-vcodec">-</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Original FPS</span>
                  <span id="meta-fps">-</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Audio Tracks</span>
                  <span id="meta-atrack">-</span>
                </div>
              </div>

              <div
                style="
                  background-color: var(--pico-card-sectioning-background-color);
                  border: 1px solid var(--pico-muted-border-color);
                  border-radius: 6px;
                  padding: 0.75rem;
                "
              >
                <strong style="font-size: 0.85rem; display: block; margin-bottom: 0.25rem"
                  >📝 Embedded Metadata Tags</strong
                >
                <pre id="meta-tags" style="margin: 0; font-size: 0.8rem; max-height: 120px; overflow-y: auto">
None detected</pre
                >
              </div>
            </article>
          </div>
          <!-- Column 2: conversion settings -->
          <div class="workshop-main">
            <!-- Settings & Form Options Block -->
            <form id="conversion-form" class="settings-stack" style="margin-bottom: 0">
                <details class="config-card" id="panel-processing">
                  <summary class="card-header">⚡ Processing Mode</summary>
                  <div class="config-card-body">
                    <fieldset style="margin-bottom: 0">
                      <label for="fast-copy-tag">
                        <input type="checkbox" id="fast-copy-tag" name="fast-copy-tag" />
                        ⚡ Fast Copy Mode (Only Trim, No Re-encoding)
                      </label>
                      <span
                        class="help-text"
                        style="font-size: 0.8rem; color: var(--pico-muted-color); display: block; margin-top: 0.25rem; margin-left: 1.5rem"
                      >
                        Copies streams without re-encoding — instant, lossless trims
                      </span>
                    </fieldset>
                  </div>
                </details>

                <details class="config-card" id="panel-trim">
                  <summary class="card-header">✂️ Time Crop & Trim</summary>
                  <div class="config-card-body">
                  <fieldset>
                    <label for="enable-trim">
                      <input type="checkbox" id="enable-trim" name="enable-trim" />
                      Enable Trimming / Time Crop
                    </label>
                  </fieldset>

                  <div id="trim-controls-group" style="display: none; padding-top: 0.5rem">
                    <div class="slider-group" style="margin-bottom: 0.5rem">
                      <div
                        style="
                          display: flex;
                          justify-content: space-between;
                          align-items: center;
                          margin-bottom: 0.5rem;
                        "
                      >
                        <span style="font-weight: 500; font-size: 0.9rem">Cut / Clip Window Range:</span>
                        <span class="time-val">
                          <span id="trim-start-val" style="font-weight: bold; color: var(--primary-color)">0.00s</span>
                          to
                          <span id="trim-end-val" style="font-weight: bold; color: var(--primary-color)">10.00s</span>
                        </span>
                      </div>

                      <div class="range-slider-wrapper">
                        <div class="trim-visualizer">
                          <div class="trim-selection" id="trim-selection-bar"></div>
                        </div>
                        <input
                          type="range"
                          id="trim-start"
                          class="range-slider-input"
                          name="trim-start"
                          min="0"
                          max="100"
                          step="0.01"
                          value="0"
                          style="z-index: 3"
                        />
                        <input
                          type="range"
                          id="trim-end"
                          class="range-slider-input"
                          name="trim-end"
                          min="0"
                          max="100"
                          step="0.01"
                          value="100"
                          style="z-index: 2"
                        />
                      </div>

                      <small
                        style="
                          display: block;
                          color: var(--pico-muted-color);
                          text-align: center;
                          margin-top: 0.25rem;
                          font-size: 0.75rem;
                        "
                      >
                        💡 Drag the left/right handles above to set your trimming window.
                      </small>
                    </div>
                  </div>
                
                  </div>
                </details>

                <!-- Spatial crop / framing -->
                <details class="config-card" id="panel-crop">
                  <summary class="card-header">🔲 Crop / Frame</summary>
                  <div class="config-card-body">
                    <fieldset>
                      <label for="enable-crop-video">
                        <input type="checkbox" id="enable-crop-video" name="enable-crop-video" />
                        Enable Frame Cropping
                      </label>
                    </fieldset>

                    <div id="crop-controls-group" style="display: none; padding-top: 0.5rem">
                      <small style="display: block; color: var(--pico-muted-color); margin-bottom: 0.75rem; font-size: 0.75rem">
                        💡 Drag the box or its corners on the preview to set the crop region.
                      </small>
                      <div class="grid" style="margin-bottom: 0.5rem">
                        <div>
                          <label for="crop-x">X</label>
                          <input type="number" id="crop-x" min="0" value="0" />
                        </div>
                        <div>
                          <label for="crop-y">Y</label>
                          <input type="number" id="crop-y" min="0" value="0" />
                        </div>
                      </div>
                      <div class="grid" style="margin-bottom: 0.5rem">
                        <div>
                          <label for="crop-w">Width</label>
                          <input type="number" id="crop-w" min="1" value="1" />
                        </div>
                        <div>
                          <label for="crop-h">Height</label>
                          <input type="number" id="crop-h" min="1" value="1" />
                        </div>
                      </div>
                      <div class="grid" style="margin-bottom: 0">
                        <button type="button" id="crop-full" class="secondary">Use Full Frame</button>
                        <button type="button" id="crop-square" class="secondary">Centered Square</button>
                      </div>
                    </div>
                  </div>
                </details>

                <!-- Box 2: Aspect and Dimension Resizing -->
                <details class="config-card" id="panel-resize">
                  <summary class="card-header">📐 Resolution & Aspect Ratio Resize</summary>
                  <div class="config-card-body">
                  <fieldset>
                    <label for="enable-resize">
                      <input type="checkbox" id="enable-resize" name="enable-resize" />
                      Enable Video Resizing
                    </label>
                  </fieldset>

                  <div id="resize-controls-group" style="display: none; padding-top: 0.5rem">
                    <fieldset>
                      <label for="resize-preset">Preset Dimensions</label>
                      <select id="resize-preset" name="resize-preset">
                        <option value="custom" selected>Custom Size</option>
                        <option value="1920">1080p Full HD (Max 1920px)</option>
                        <option value="1280">720p HD (Max 1280px)</option>
                        <option value="854">480p SD (Max 854px)</option>
                        <option value="640">360p (Max 640px)</option>
                        <option value="square-1080">Square 1:1 HD (1080x1080)</option>
                        <option value="square-720">Square 1:1 Standard (720x720)</option>
                      </select>
                    </fieldset>

                    <div class="grid" style="margin-bottom: 0.5rem">
                      <div>
                        <label for="resize-width">Width (px)</label>
                        <input
                          type="number"
                          id="resize-width"
                          name="resize-width"
                          min="16"
                          placeholder="Original Width"
                        />
                      </div>
                      <div>
                        <label for="resize-height">Height (px)</label>
                        <input
                          type="number"
                          id="resize-height"
                          name="resize-height"
                          min="16"
                          placeholder="Original Height"
                        />
                      </div>
                    </div>

                    <div class="grid" style="align-items: center; margin-top: 0.5rem">
                      <div>
                        <label for="preserve-aspect">
                          <input type="checkbox" id="preserve-aspect" name="preserve-aspect" checked />
                          Lock Aspect Ratio
                        </label>
                      </div>
                      <div>
                        <label for="resize-fit">Fit Mode</label>
                        <select id="resize-fit" name="resize-fit">
                          <option value="fill">Fill (Stretch)</option>
                          <option value="contain" selected>Contain (Letterbox)</option>
                          <option value="cover">Cover (Crop)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                
                  </div>
                </details>

                <details class="config-card" id="panel-codec">
                  <summary class="card-header">💿 Output Format & Codec</summary>
                  <div class="config-card-body">
                    <div class="grid" style="margin-bottom: 0">
                      <div>
                        <label for="out-format">Output Format / Container</label>
                        <select id="out-format" name="out-format">
                          <option value="mp4" selected>MP4 (.mp4) - Most Compatible</option>
                          <option value="webm">WebM (.webm) - Modern Open-Source</option>
                        </select>
                      </div>
                      <div>
                        <label for="out-vcodec">Video Encoder Codec</label>
                        <select id="out-vcodec" name="out-vcodec">
                          <option value="avc" selected>H.264 / AVC (High compatibility)</option>
                          <option value="hevc">H.265 / HEVC (High compression)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </details>

                <details class="config-card" id="panel-compression">
                  <summary class="card-header">🗜️ Compression & Quality</summary>
                  <div class="config-card-body">
                    <div class="slider-group" style="margin-bottom: 0">
                      <label for="out-quality" style="display: block; margin-bottom: 0.5rem">
                        Video Compression (Subjective Quality):
                      </label>
                      <div class="quality-readout">
                        <span>
                          <span class="time-val time-val-primary" id="out-quality-val">Medium</span>
                          <span id="out-quality-rate" class="quality-rate">~3.5 Mbps</span>
                        </span>
                        <span
                          id="quality-help"
                          style="font-size: 0.8rem; display: block; color: var(--pico-muted-color); margin-top: 0.25rem"
                        >
                          Balanced bitrate and visual fidelity for typical social/web sharing.
                        </span>
                      </div>
                      <input type="range" id="out-quality" name="out-quality" min="1" max="5" value="3" step="1" />

                      <!-- Custom Bitrate Override Option -->
                      <div
                        style="
                          margin-top: 1rem;
                          border-top: 1px dashed var(--pico-muted-border-color);
                          padding-top: 0.75rem;
                        "
                      >
                        <label for="use-custom-bitrate">
                          <input type="checkbox" id="use-custom-bitrate" name="use-custom-bitrate" />
                          🔧 Use Explicit Target Bitrate Override
                        </label>
                        <div id="custom-bitrate-group" style="display: none; margin-top: 0.6rem">
                          <div class="grid" style="align-items: center; margin-bottom: 0">
                            <div>
                              <label for="custom-bitrate" style="font-size: 0.8rem">Target Bitrate (bps):</label>
                              <input
                                type="number"
                                id="custom-bitrate"
                                name="custom-bitrate"
                                placeholder="e.g. 3500000"
                                min="100000"
                                step="50000"
                                value="3500000"
                                style="margin-bottom: 0"
                              />
                            </div>
                            <div style="display: flex; align-items: flex-end; padding-top: 1.4rem">
                              <span class="time-val" id="custom-bitrate-mbps-label" style="font-weight: bold; padding: 8px 12px">3.50 Mbps</span>
                            </div>
                          </div>
                          <small style="display: block; color: var(--pico-muted-color); margin-top: 0.25rem">
                            💡 Provide standard bits per second (e.g. 5,000,000 is 5.0 Mbps, 800,000 is 800 kbps).
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>

                <details class="config-card" id="panel-rotation">
                  <summary class="card-header">🔄 Rotation</summary>
                  <div class="config-card-body">
                    <div class="grid" style="align-items: center; margin-bottom: 0">
                      <div>
                        <label for="rotate-correction">Rotation Correction</label>
                        <select id="rotate-correction" name="rotate-correction">
                          <option value="0" selected>0° (Keep natural state)</option>
                          <option value="90">90° Clockwise</option>
                          <option value="180">180° Half-flip</option>
                          <option value="270">270° Counter-Clockwise</option>
                        </select>
                      </div>
                      <div>
                        <fieldset style="margin-bottom: 0; padding-top: 1.25rem">
                          <label for="allow-rot-metadata">
                            <input type="checkbox" id="allow-rot-metadata" name="allow-rot-metadata" checked />
                            Allow Rotation Metadata
                          </label>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </details>

                <details class="config-card" id="panel-resample">
                  <summary class="card-header">⏱️ Frame Rate Resample</summary>
                  <div class="config-card-body">
                    <label for="enable-fps">
                      <input type="checkbox" id="enable-fps" name="enable-fps" />
                      ⏱️ Resample / Normalize Frame Rate (FPS)
                    </label>
                    <div id="fps-controls-group" style="display: none; margin-top: 0.6rem">
                      <div class="grid" style="align-items: center; margin-bottom: 0">
                        <div>
                          <label for="target-fps" style="font-size: 0.8rem">Target Frame Rate (FPS):</label>
                          <select id="target-fps" name="target-fps" style="margin-bottom: 0">
                            <option value="15">15 FPS (Classic / Low bandwidth)</option>
                            <option value="24">24 FPS (Cinematic standard)</option>
                            <option value="25">25 FPS (PAL standard)</option>
                            <option value="30" selected>30 FPS (Standard smooth NTSC)</option>
                            <option value="50">50 FPS (PAL high-framerate)</option>
                            <option value="60">60 FPS (Ultra smooth / gaming standard)</option>
                          </select>
                        </div>
                        <div>
                          <label for="fps-mode" style="font-size: 0.8rem">Resampling Mode:</label>
                          <select id="fps-mode" name="fps-mode" style="margin-bottom: 0">
                            <option value="duplicate" selected>Frame Repeating (Fast / Standard)</option>
                            <option value="blend">Traditional Bidirectional Blending (Smooth)</option>
                          </select>
                        </div>
                      </div>
                      <small style="display: block; color: var(--pico-muted-color); margin-top: 0.5rem; font-size: 0.8rem">
                        💡 <strong>Bidirectional Blending</strong> uses hardware-accelerated 2D canvas interpolation to
                        blend adjacent source frames dynamically, making video playback look cinematic and ultra-smooth
                        on higher frame rates.
                      </small>
                    </div>
                  </div>
                </details>

                <!-- Box 4: Audio Track Handling -->
                <details class="config-card" id="panel-audio">
                  <summary class="card-header">🔊 Audio Stream Handlers</summary>
                  <div class="config-card-body">
                  <fieldset>
                    <legend style="font-weight: 500; font-size: 0.95rem; margin-bottom: 0.5rem">
                      Audio Mode Select
                    </legend>
                    <label for="audio-mode-copy">
                      <input type="radio" id="audio-mode-copy" name="audio-mode" value="copy" checked />
                      ⚡ Retain Original Audio Stream (Raw Copy)
                    </label>
                    <label for="audio-mode-transcode">
                      <input type="radio" id="audio-mode-transcode" name="audio-mode" value="transcode" />
                      ⚙️ Transcode / Convert Audio
                    </label>
                    <label for="audio-mode-mute">
                      <input type="radio" id="audio-mode-mute" name="audio-mode" value="mute" />
                      🔇 Strip Audio Track (Mute Video)
                    </label>
                  </fieldset>

                  <div
                    id="audio-transcode-controls"
                    style="
                      display: none;
                      border-top: 1px solid var(--pico-muted-border-color);
                      padding-top: 1rem;
                      margin-top: 0.5rem;
                    "
                  >
                    <div class="grid" style="margin-bottom: 0.5rem">
                      <div>
                        <label for="audio-codec">Audio Codec</label>
                        <select id="audio-codec" name="audio-codec">
                          <option value="aac" selected>AAC (Highly compatible)</option>
                          <option value="opus">Opus (High quality, lower bitrate)</option>
                          <option value="mp3">MP3</option>
                          <option value="flac">FLAC (Lossless)</option>
                        </select>
                      </div>
                      <div>
                        <label for="audio-bitrate">Bitrate</label>
                        <select id="audio-bitrate" name="audio-bitrate">
                          <option value="64000">64 kbps (Mobile optimization)</option>
                          <option value="128000" selected>128 kbps (Balanced)</option>
                          <option value="192000">192 kbps (High Fidelity)</option>
                          <option value="320000">320 kbps (Premium)</option>
                        </select>
                      </div>
                    </div>

                    <div class="grid" style="margin-bottom: 0">
                      <div>
                        <label for="audio-channels">Channels</label>
                        <select id="audio-channels" name="audio-channels">
                          <option value="0" selected>Original Channels</option>
                          <option value="1">1 (Mono)</option>
                          <option value="2">2 (Stereo)</option>
                        </select>
                      </div>
                      <div>
                        <label for="audio-samplerate">Sample Rate</label>
                        <select id="audio-samplerate" name="audio-samplerate">
                          <option value="0" selected>Original Sample Rate</option>
                          <option value="44100">44,100 Hz</option>
                          <option value="48000">48,000 Hz</option>
                          <option value="32000">32,000 Hz</option>
                        </select>
                      </div>
                    </div>
                  </div>
                
                  </div>
                </details>
            </form>
          </div>
          <!-- Column 3: output / download -->
          <div class="workshop-output">
            <div class="output-actions">
              <button type="submit" form="conversion-form" id="convert-btn" class="contrast">
                🚀 Convert & Process Video File
              </button>
              <button type="button" id="cancel-btn" class="secondary" style="display: none">🛑 Cancel Conversion</button>
              <div class="size-estimate">
                Estimated output: <strong id="size-estimate">—</strong>
                <small style="display: block; color: var(--pico-muted-color); margin-top: 0.15rem">
                  Rough estimate (bitrate × duration; accounts for crop, trim, resize & frame rate).
                </small>
              </div>
            </div>

            <div id="output-placeholder" class="output-shell">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <p>Your processed video will appear here</p>
            </div>

            <section id="progress-section" style="display: none; margin-top: 2rem">
        <article>
          <h4 style="margin-bottom: 0.5rem; display: flex; justify-content: space-between">
            <span id="progress-title">🐰 Processing Video Sample...</span>
            <strong id="progress-percentage">0%</strong>
          </h4>
          <progress id="conversion-progress" value="0" max="100"></progress>
          <div
            style="display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--pico-muted-color)"
          >
            <span id="progress-time-processed">Processed Time: 0s / 0s</span>
            <span id="progress-speed">Processing speed: Normal</span>
          </div>
        </article>
      </section>
            <section id="result-section" style="display: none; margin-top: 2rem">
        <!-- Processed output shown first; the original already lives in the input column -->
        <article class="result-card">
          <header class="card-header success">Processed Output</header>
          <div class="video-container">
            <video id="output-video" controls autoplay></video>
          </div>
        </article>

        <ins class="success-note">
          <h3>🎉 Success! Conversion Completed Successfully</h3>
          <p style="margin-bottom: 1rem; font-size: 0.95rem">
            Your media has been processed on-the-fly and packaged directly in your browser. No server uploads occurred.
          </p>

          <div class="grid" style="align-items: center; margin-bottom: 0">
            <div>
              <a
                href="#"
                id="download-anchor"
                download="mediabunny_result.mp4"
                class="button download-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <span>Download Processed Video</span>
              </a>
              <span id="output-size-tag" class="output-size"
                >-</span
              >
            </div>
          </div>
        </ins>
      </section>

            <details class="config-card log-section">
              <summary class="card-header">🔍 System Console & Transcoding logs (verbose)</summary>
              <div class="config-card-body">
                <div style="position: relative">
                  <button
                    id="clear-console-btn"
                    class="outline secondary"
                    style="position: absolute; right: 10px; top: 10px; font-size: 0.7rem; padding: 4px 10px; margin: 0; width: auto"
                  >
                    Clear Log
                  </button>
                  <pre id="log-console">System diagnostic logger initialized. Waiting for media file drop...</pre>
                </div>
              </div>
            </details>
          </div>
        </div>

        <div id="image-workspace" class="workshop-layout" style="display: none">
          <!-- Column 1: input / info -->
          <div class="workshop-sidebar">
            <article class="info-card">
              <header class="card-header">
                Image Preview & Blur Paint Mask
              </header>
              <div class="image-canvas-stage" id="image-canvas-stage">
                <canvas id="image-preview-canvas"></canvas>
                <canvas id="image-mask-canvas"></canvas>
              </div>
              <div class="canvas-tool-picker" role="radiogroup" aria-label="Canvas Tool">
                <span class="canvas-tool-label">Canvas Tool</span>
                <div>
                  <label>
                    <input type="radio" name="img-canvas-tool" value="crop" id="img-tool-crop" checked />
                    ✂️ Crop
                  </label>
                  <label>
                    <input type="radio" name="img-canvas-tool" value="paint" id="img-tool-paint" />
                    🙈 Redaction
                  </label>
                </div>
              </div>
              <small style="display: block; text-align: center; margin-top: 0.5rem; color: var(--pico-muted-color)">
                Enable Crop or Redaction to activate a tool. Drag crop corners directly on the preview, or paint
                redactions over sensitive areas.
              </small>
            </article>

            <article class="info-card">
              <header class="card-header">
                Image Attributes
              </header>
              <div class="meta-grid">
                <div class="meta-item">
                  <span class="meta-label">File Name</span>
                  <span id="img-meta-name" style="word-break: break-all; font-weight: 500">-</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">File Size</span>
                  <span id="img-meta-size">-</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Original Size</span>
                  <span id="img-meta-resolution">-</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Aspect Ratio</span>
                  <span id="img-meta-aspect">-</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Detected Type</span>
                  <span id="img-meta-type">-</span>
                </div>
              </div>
            </article>
          </div>
          <!-- Column 2: image settings -->
          <div class="workshop-main">
            <form id="image-form" class="settings-stack" style="margin-bottom: 0">
              <details class="config-card" id="panel-img-crop">
                  <summary class="card-header">✂️ Crop Region</summary>
                  <div class="config-card-body">
                  <fieldset>
                  <label for="img-enable-crop">
                    <input type="checkbox" id="img-enable-crop" checked />
                    Enable Crop
                  </label>
                </fieldset>
                <div class="grid" style="margin-bottom: 0.5rem">
                  <div>
                    <label for="img-crop-x">X</label>
                    <input type="number" id="img-crop-x" min="0" value="0" />
                  </div>
                  <div>
                    <label for="img-crop-y">Y</label>
                    <input type="number" id="img-crop-y" min="0" value="0" />
                  </div>
                </div>
                <div class="grid" style="margin-bottom: 0.5rem">
                  <div>
                    <label for="img-crop-width">Crop Width</label>
                    <input type="number" id="img-crop-width" min="1" value="1" />
                  </div>
                  <div>
                    <label for="img-crop-height">Crop Height</label>
                    <input type="number" id="img-crop-height" min="1" value="1" />
                  </div>
                </div>
                <div class="grid" style="margin-bottom: 0">
                  <button type="button" id="img-crop-full" class="secondary">Use Full Image</button>
                  <button type="button" id="img-crop-square" class="secondary">Centered Square</button>
                </div>
              
                  </div>
                </details>

              <details class="config-card" id="panel-img-resize">
                  <summary class="card-header">📐 Output Resize</summary>
                  <div class="config-card-body">
                  <fieldset>
                  <label for="img-enable-resize">
                    <input type="checkbox" id="img-enable-resize" />
                    Enable Resize
                  </label>
                </fieldset>
                <div class="grid" style="margin-bottom: 0.5rem">
                  <div>
                    <label for="img-out-width">Output Width</label>
                    <input type="number" id="img-out-width" min="1" value="1" />
                  </div>
                  <div>
                    <label for="img-out-height">Output Height</label>
                    <input type="number" id="img-out-height" min="1" value="1" />
                  </div>
                </div>
                <div class="grid" style="margin-bottom: 0.5rem">
                  <div>
                    <label for="img-scale-preset">Scale Preset</label>
                    <select id="img-scale-preset">
                      <option value="" selected>Select scale...</option>
                      <option value="0.25">25% (0.25x)</option>
                      <option value="0.5">50% (0.5x)</option>
                      <option value="0.75">75% (0.75x)</option>
                      <option value="1">100% (1x)</option>
                      <option value="1.25">125% (1.25x)</option>
                      <option value="1.5">150% (1.5x)</option>
                      <option value="2">200% (2x)</option>
                      <option value="3">300% (3x)</option>
                      <option value="4">400% (4x)</option>
                    </select>
                  </div>
                  <div>
                    <label for="img-maxdim-preset">Max Dimension Preset</label>
                    <select id="img-maxdim-preset">
                      <option value="" selected>Fit longest side to...</option>
                      <option value="256">256 px (2^8)</option>
                      <option value="512">512 px (2^9)</option>
                      <option value="720">720 px</option>
                      <option value="1024">1024 px (2^10)</option>
                      <option value="1080">1080 px</option>
                      <option value="1280">1280 px</option>
                      <option value="1920">1920 px</option>
                      <option value="2048">2048 px (2^11)</option>
                      <option value="2560">2560 px</option>
                      <option value="3840">3840 px</option>
                      <option value="4096">4096 px (2^12)</option>
                    </select>
                  </div>
                </div>
                <fieldset>
                  <label for="img-lock-aspect">
                    <input type="checkbox" id="img-lock-aspect" checked />
                    Lock Aspect Ratio
                  </label>
                </fieldset>
              
                  </div>
                </details>

              <details class="config-card" id="panel-img-redact">
                  <summary class="card-header">🙈 Redaction Brush</summary>
                  <div class="config-card-body">
                  <fieldset>
                  <label for="img-enable-blur">
                    <input type="checkbox" id="img-enable-blur" checked />
                    Enable Redaction Mask Painting
                  </label>
                </fieldset>
                <div class="grid" style="margin-bottom: 0.5rem">
                  <div>
                    <label for="img-redaction-mode">Redaction Effect</label>
                    <select id="img-redaction-mode">
                      <option value="blur" selected>Blur</option>
                      <option value="pixelate">Pixelate</option>
                      <option value="black">Solid Black</option>
                    </select>
                  </div>
                  <div>
                    <label for="img-brush-size">Brush Size (px)</label>
                    <input type="range" id="img-brush-size" min="8" max="180" value="40" step="1" />
                  </div>
                  <div>
                    <label for="img-blur-strength">Effect Strength</label>
                    <input type="range" id="img-blur-strength" min="2" max="100" value="4" step="0.25" />
                  </div>
                </div>
                <div class="grid" style="margin-bottom: 0">
                  <label for="img-erase-mode" style="align-self: center; margin-bottom: 0">
                    <input type="checkbox" id="img-erase-mode" />
                    Erase Mask Mode
                  </label>
                  <button type="button" id="img-clear-mask" class="secondary">Clear Blur Mask</button>
                </div>
              
                  </div>
                </details>

              <details class="config-card" id="panel-img-format">
                  <summary class="card-header">💾 Format & Compression</summary>
                  <div class="config-card-body">
                  <div class="grid" style="margin-bottom: 0.5rem">
                  <div>
                    <label for="img-out-format">Output Format</label>
                    <select id="img-out-format">
                      <option value="image/jpeg" selected>JPEG (.jpg)</option>
                      <option value="image/png">PNG (.png, lossless)</option>
                      <option value="image/webp">WebP (.webp)</option>
                      <option value="image/avif">AVIF (.avif)</option>
                    </select>
                  </div>
                  <div>
                    <label for="img-quality">Compression Quality</label>
                    <input type="range" id="img-quality" min="0.1" max="1" value="0.86" step="0.01" />
                    <small id="img-quality-label">0.86</small>
                  </div>
                </div>
              
                  </div>
                </details>

            </form>
          </div>
          <!-- Column 3: output / download -->
          <div class="workshop-output">
            <div class="output-actions">
              <button type="submit" form="image-form" id="image-process-btn" class="contrast">
                🖼️ Process & Export Image
              </button>
            </div>

            <div id="image-output-placeholder" class="output-shell">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <p>Your processed image will appear here</p>
            </div>

            <section id="image-result-section" style="display: none; margin-top: 2rem">
        <!-- Processed image shown first; the original already lives in the input column -->
        <article class="result-card">
          <header class="card-header success">Processed Image</header>
          <img id="image-output-preview" alt="Processed image" style="width: 100%; height: auto; display: block" />
        </article>

        <ins class="success-note">
          <h3>🎉 Image Ready</h3>
          <p style="margin-bottom: 1rem; font-size: 0.95rem">
            Your image was cropped, redacted, scaled, and re-encoded directly in browser memory.
          </p>
          <div class="grid" style="align-items: center; margin-bottom: 0">
            <div>
              <a
                href="#"
                id="image-download-anchor"
                download="processed-image.jpg"
                class="button download-btn"
              >
                Download Processed Image
              </a>
              <span
                id="image-output-size-tag" class="output-size"
                >-</span
              >
            </div>
          </div>
        </ins>
      </section>

            <details class="config-card log-section">
              <summary class="card-header">🔍 System Console & Transcoding logs (verbose)</summary>
              <div class="config-card-body">
                <div style="position: relative">
                  <button
                    id="clear-console-btn-img"
                    class="outline secondary"
                    style="position: absolute; right: 10px; top: 10px; font-size: 0.7rem; padding: 4px 10px; margin: 0; width: auto"
                  >
                    Clear Log
                  </button>
                  <pre id="log-console-img">System diagnostic logger initialized. Waiting for media file drop...</pre>
                </div>
              </div>
            </details>
          </div>
        </div>

        <div id="audio-workspace" class="workshop-layout" style="display: none">
          <!-- Column 1: input / info -->
          <div class="workshop-sidebar">
            <article class="info-card">
              <header class="card-header">
                Original Audio Player
              </header>
              <audio id="audio-preview" controls style="width: 100%; display: block"></audio>
              <canvas id="audio-waveform" class="audio-waveform"></canvas>
              <small style="display: block; text-align: center; margin-top: 0.5rem; color: var(--pico-muted-color)">
                💡 Play to preview, click the waveform to seek; enable trimming below to clip a time range.
              </small>
            </article>

            <article class="info-card">
              <header class="card-header">
                Audio Attributes
              </header>
              <div class="meta-grid">
                <div class="meta-item">
                  <span class="meta-label">File Name</span>
                  <span id="audio-meta-name" style="word-break: break-all; font-weight: 500">-</span>
                </div>
                <div class="meta-item"><span class="meta-label">File Size</span><span id="audio-meta-size">-</span></div>
                <div class="meta-item"><span class="meta-label">Duration</span><span id="audio-meta-duration">-</span></div>
                <div class="meta-item"><span class="meta-label">Codec</span><span id="audio-meta-codec">-</span></div>
                <div class="meta-item">
                  <span class="meta-label">Sample Rate</span><span id="audio-meta-samplerate">-</span>
                </div>
                <div class="meta-item"><span class="meta-label">Channels</span><span id="audio-meta-channels">-</span></div>
                <div class="meta-item"><span class="meta-label">Bitrate</span><span id="audio-meta-bitrate">-</span></div>
              </div>
            </article>
          </div>

          <!-- Column 2: audio settings -->
          <div class="workshop-main">
            <form id="audio-form" class="settings-stack" style="margin-bottom: 0">
              <details class="config-card" id="panel-audio-trim">
                <summary class="card-header">✂️ Time Crop & Trim</summary>
                <div class="config-card-body">
                  <fieldset>
                    <label for="audio-enable-trim">
                      <input type="checkbox" id="audio-enable-trim" />
                      Enable Trimming / Time Crop
                    </label>
                  </fieldset>
                  <div id="audio-trim-controls" style="display: none; padding-top: 0.5rem">
                    <div class="slider-group" style="margin-bottom: 0.5rem">
                      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem">
                        <span style="font-weight: 500; font-size: 0.9rem">Cut / Clip Window Range:</span>
                        <span class="time-val">
                          <span id="audio-trim-start-val" style="font-weight: bold; color: var(--primary-color)">0.00s</span>
                          to
                          <span id="audio-trim-end-val" style="font-weight: bold; color: var(--primary-color)">0.00s</span>
                        </span>
                      </div>
                      <div class="range-slider-wrapper">
                        <div class="trim-visualizer"><div class="trim-selection" id="audio-trim-selection-bar"></div></div>
                        <input type="range" id="audio-trim-start" class="range-slider-input" min="0" max="100" step="0.01" value="0" style="z-index: 3" />
                        <input type="range" id="audio-trim-end" class="range-slider-input" min="0" max="100" step="0.01" value="100" style="z-index: 2" />
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              <details class="config-card" id="panel-audio-output">
                <summary class="card-header">🎧 Output Format & Encoding</summary>
                <div class="config-card-body">
                  <div class="grid" style="margin-bottom: 0.5rem">
                    <div>
                      <label for="audio-out-format">Output Format</label>
                      <select id="audio-out-format" name="audio-out-format">
                        <option value="mp3" selected>MP3 (.mp3)</option>
                        <option value="m4a">M4A / AAC (.m4a)</option>
                        <option value="opus">Opus (.ogg)</option>
                        <option value="wav">WAV (.wav, lossless)</option>
                        <option value="flac">FLAC (.flac, lossless)</option>
                      </select>
                    </div>
                    <div>
                      <label for="audio-out-bitrate">Bitrate</label>
                      <select id="audio-out-bitrate" name="audio-out-bitrate">
                        <option value="96000">96 kbps</option>
                        <option value="128000">128 kbps</option>
                        <option value="192000" selected>192 kbps</option>
                        <option value="256000">256 kbps</option>
                        <option value="320000">320 kbps</option>
                      </select>
                    </div>
                  </div>
                  <div class="grid" style="margin-bottom: 0">
                    <div>
                      <label for="audio-out-samplerate">Sample Rate</label>
                      <select id="audio-out-samplerate" name="audio-out-samplerate">
                        <option value="0" selected>Original</option>
                        <option value="48000">48,000 Hz</option>
                        <option value="44100">44,100 Hz</option>
                        <option value="32000">32,000 Hz</option>
                        <option value="22050">22,050 Hz</option>
                      </select>
                    </div>
                    <div>
                      <label for="audio-out-channels">Channels</label>
                      <select id="audio-out-channels" name="audio-out-channels">
                        <option value="0" selected>Original</option>
                        <option value="1">1 (Mono)</option>
                        <option value="2">2 (Stereo)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </details>
            </form>
          </div>

          <!-- Column 3: output / download -->
          <div class="workshop-output">
            <div class="output-actions">
              <button type="submit" form="audio-form" id="audio-process-btn" class="contrast">🎵 Convert & Process Audio</button>
              <button type="button" id="audio-cancel-btn" class="secondary" style="display: none">🛑 Cancel Conversion</button>
              <div class="size-estimate">
                Estimated output: <strong id="audio-size-estimate">—</strong>
                <small style="display: block; color: var(--pico-muted-color); margin-top: 0.15rem">
                  Rough estimate (bitrate × duration; trim-aware).
                </small>
              </div>
            </div>

            <div id="audio-output-placeholder" class="output-shell">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
              </svg>
              <p>Your processed audio will appear here</p>
            </div>

            <section id="audio-progress-section" style="display: none">
              <article>
                <h4 style="margin-bottom: 0.5rem; display: flex; justify-content: space-between">
                  <span id="audio-progress-title">🎵 Processing audio...</span>
                  <strong id="audio-progress-pct">0%</strong>
                </h4>
                <progress id="audio-progress" value="0" max="100"></progress>
              </article>
            </section>

            <section id="audio-result-section" style="display: none">
              <article class="result-card">
                <header class="card-header success">Processed Audio</header>
                <audio id="audio-output-preview" controls style="width: 100%; display: block"></audio>
              </article>
              <ins class="success-note">
                <h3>🎉 Audio Ready</h3>
                <p style="margin-bottom: 1rem; font-size: 0.95rem">
                  Processed directly in your browser. No server uploads occurred.
                </p>
                <a href="#" id="audio-download-anchor" download="audio_web_export.mp3" class="button download-btn">
                  Download Processed Audio
                </a>
                <span id="audio-output-size-tag" class="output-size">-</span>
              </ins>
            </section>

            <details class="config-card log-section">
              <summary class="card-header">🔍 System Console & Transcoding logs (verbose)</summary>
              <div class="config-card-body">
                <div style="position: relative">
                  <button id="clear-console-btn-audio" class="outline secondary" style="position: absolute; right: 10px; top: 10px; font-size: 0.7rem; padding: 4px 10px; margin: 0; width: auto">
                    Clear Log
                  </button>
                  <pre id="log-console-audio">System diagnostic logger initialized. Waiting for media file drop...</pre>
                </div>
              </div>
            </details>
          </div>
        </div>

        <div id="batch-workspace" style="display: none">
          <div class="workshop-layout">
            <!-- Column 1: input previews -->
            <div class="workshop-sidebar">
              <article class="info-card">
                <header class="card-header">
                  Batch Input (<span id="batch-input-count">0</span>)
                </header>
                <div id="batch-thumbs" class="batch-thumbs"></div>
                <small style="display: block; margin-top: 0.75rem; color: var(--pico-muted-color)">
                  Total input size: <strong id="batch-total-size">-</strong>
                </small>
              </article>
            </div>
            <!-- Column 2: shared settings applied to every image -->
            <div class="workshop-main">
              <details class="config-card" id="panel-batch-format" open>
                <summary class="card-header">💾 Output Format & Quality</summary>
                <div class="config-card-body">
                  <div class="grid" style="margin-bottom: 0.5rem">
                    <div>
                      <label for="batch-out-format">Output Format</label>
                      <select id="batch-out-format">
                        <option value="image/jpeg" selected>JPEG (.jpg)</option>
                        <option value="image/png">PNG (.png, lossless)</option>
                        <option value="image/webp">WebP (.webp)</option>
                        <option value="image/avif">AVIF (.avif)</option>
                      </select>
                    </div>
                    <div>
                      <label for="batch-quality">Compression Quality</label>
                      <input type="range" id="batch-quality" min="0.1" max="1" value="0.86" step="0.01" />
                      <small id="batch-quality-label">0.86</small>
                    </div>
                  </div>
                </div>
              </details>

              <details class="config-card" id="panel-batch-resize" open>
                <summary class="card-header">📐 Resize</summary>
                <div class="config-card-body">
                  <fieldset>
                    <label for="batch-enable-resize">
                      <input type="checkbox" id="batch-enable-resize" />
                      Enable Resize (applied to all)
                    </label>
                  </fieldset>
                  <div id="batch-resize-controls" style="display: none">
                    <div class="grid" style="margin-bottom: 0">
                      <div>
                        <label for="batch-maxdim-preset">Max Dimension Preset</label>
                        <select id="batch-maxdim-preset">
                          <option value="" selected>Choose a preset…</option>
                          <option value="512">512 px</option>
                          <option value="1024">1024 px</option>
                          <option value="1280">1280 px</option>
                          <option value="1920">1920 px</option>
                          <option value="2560">2560 px</option>
                          <option value="3840">3840 px</option>
                        </select>
                      </div>
                      <div>
                        <label for="batch-maxdim">Max Dimension (px)</label>
                        <input type="number" id="batch-maxdim" min="1" placeholder="e.g. 1920" />
                      </div>
                    </div>
                    <small style="display: block; color: var(--pico-muted-color); margin-top: 0.5rem; font-size: 0.75rem">
                      💡 Caps the longest side to this value (downscale only — never enlarged; aspect ratio preserved).
                      Pick a preset or type an exact size.
                    </small>
                  </div>
                </div>
              </details>

            </div>

            <!-- Column 3: actions, results queue, and logs -->
            <div class="workshop-output">
              <div class="output-actions">
                <button type="button" id="batch-process-btn" class="contrast">🖼️ Process All Images</button>
                <button type="button" id="batch-download-all" class="secondary" style="display: none">
                  ⬇️ Download All (.zip)
                </button>
              </div>

              <article class="info-card">
                <header class="card-header">
                  Batch Queue (<span id="batch-count">0</span>)
                </header>
                <div id="batch-queue"></div>
              </article>

              <details class="config-card log-section">
                <summary class="card-header">🔍 System Console & logs (verbose)</summary>
                <div class="config-card-body">
                  <div style="position: relative">
                    <button id="clear-console-btn-batch" class="outline secondary" style="position: absolute; right: 10px; top: 10px; font-size: 0.7rem; padding: 4px 10px; margin: 0; width: auto">
                      Clear Log
                    </button>
                    <pre id="log-console-batch">System diagnostic logger initialized. Waiting for media file drop...</pre>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>

        <div id="video-batch-workspace" style="display: none">
          <div class="workshop-layout">
            <!-- Column 1: input previews -->
            <div class="workshop-sidebar">
              <article class="info-card">
                <header class="card-header">
                  Batch Input (<span id="vbatch-input-count">0</span>)
                </header>
                <div id="vbatch-thumbs" class="batch-thumbs"></div>
                <small style="display: block; margin-top: 0.75rem; color: var(--pico-muted-color)">
                  Total input size: <strong id="vbatch-total-size">-</strong>
                </small>
              </article>
            </div>
            <!-- Column 2: shared settings applied to every video -->
            <div class="workshop-main settings-stack">
              <details class="config-card" id="panel-vbatch-codec" open>
                <summary class="card-header">💿 Output Format & Codec</summary>
                <div class="config-card-body">
                  <div class="grid" style="margin-bottom: 0">
                    <div>
                      <label for="vbatch-out-format">Output Format</label>
                      <select id="vbatch-out-format">
                        <option value="mp4" selected>MP4 (.mp4)</option>
                        <option value="webm">WebM (.webm)</option>
                      </select>
                    </div>
                    <div>
                      <label for="vbatch-out-codec">Video Codec</label>
                      <select id="vbatch-out-codec">
                        <option value="avc" selected>H.264 / AVC (High compatibility)</option>
                        <option value="hevc">H.265 / HEVC (High compression)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </details>

              <details class="config-card" id="panel-vbatch-compress" open>
                <summary class="card-header">🗜️ Compression & Audio</summary>
                <div class="config-card-body">
                  <label for="vbatch-quality" style="display: block; margin-bottom: 0.5rem">
                    Video Compression (Subjective Quality):
                  </label>
                  <div class="quality-readout">
                    <span class="time-val time-val-primary" id="vbatch-quality-val">Medium</span>
                    <span id="vbatch-quality-rate" class="quality-rate">~3.5 Mbps</span>
                  </div>
                  <input type="range" id="vbatch-quality" min="1" max="5" value="3" step="1" />
                  <fieldset style="margin-top: 1rem; margin-bottom: 0">
                    <label for="vbatch-mute">
                      <input type="checkbox" id="vbatch-mute" />
                      🔇 Remove audio track
                    </label>
                  </fieldset>
                </div>
              </details>

              <details class="config-card" id="panel-vbatch-resize" open>
                <summary class="card-header">📐 Resize</summary>
                <div class="config-card-body">
                  <fieldset>
                    <label for="vbatch-enable-resize">
                      <input type="checkbox" id="vbatch-enable-resize" />
                      Enable Resize (applied to all)
                    </label>
                  </fieldset>
                  <div id="vbatch-resize-controls" style="display: none">
                    <div class="grid" style="margin-bottom: 0">
                      <div>
                        <label for="vbatch-maxdim-preset">Max Dimension Preset</label>
                        <select id="vbatch-maxdim-preset">
                          <option value="" selected>Choose a preset…</option>
                          <option value="480">480 px</option>
                          <option value="720">720 px</option>
                          <option value="1080">1080 px</option>
                          <option value="1280">1280 px</option>
                          <option value="1920">1920 px</option>
                        </select>
                      </div>
                      <div>
                        <label for="vbatch-maxdim">Max Dimension (px)</label>
                        <input type="number" id="vbatch-maxdim" min="1" placeholder="e.g. 1080" />
                      </div>
                    </div>
                    <small style="display: block; color: var(--pico-muted-color); margin-top: 0.5rem; font-size: 0.75rem">
                      💡 Caps the longest side (downscale only — never enlarged; aspect ratio preserved).
                    </small>
                  </div>
                </div>
              </details>
            </div>

            <!-- Column 3: actions, results queue, and logs -->
            <div class="workshop-output">
              <div class="output-actions">
                <button type="button" id="vbatch-process-btn" class="contrast">🎬 Process All Videos</button>
                <button type="button" id="vbatch-download-all" class="secondary" style="display: none">
                  ⬇️ Download All (.zip)
                </button>
              </div>

              <article class="info-card">
                <header class="card-header">
                  Batch Queue (<span id="vbatch-count">0</span>)
                </header>
                <div id="vbatch-queue"></div>
              </article>

              <details class="config-card log-section">
                <summary class="card-header">🔍 System Console & logs (verbose)</summary>
                <div class="config-card-body">
                  <div style="position: relative">
                    <button id="clear-console-btn-vbatch" class="outline secondary" style="position: absolute; right: 10px; top: 10px; font-size: 0.7rem; padding: 4px 10px; margin: 0; width: auto">
                      Clear Log
                    </button>
                    <pre id="log-console-vbatch">System diagnostic logger initialized. Waiting for media file drop...</pre>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer
      style="
        margin-top: 4rem;
        padding: 1.5rem 0;
        border-top: 1px solid var(--pico-muted-border-color);
        text-align: center;
        font-size: 0.85rem;
        color: var(--pico-muted-color);
      "
    >
      <p>Powered by <strong>WebCodecs</strong> & <strong>MediaBunny</strong>. Built by Cacheflowe 👋</p>
    </footer>
`;
