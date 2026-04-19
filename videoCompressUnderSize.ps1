<#
.SYNOPSIS
    Compress videos to stay under a maximum file size using H.264 two-pass encoding.

.DESCRIPTION
    For each video:
      - If the file is already under MaxMB, it is skipped.
      - If the file would be under MaxMB at the default bitrate, the default is used.
      - Otherwise, bitrate is calculated to target exactly MaxMB.

.EXAMPLE
    .\videoCompressUnderSize.ps1 myvideo.mp4
    .\videoCompressUnderSize.ps1 C:\Videos
    .\videoCompressUnderSize.ps1 clip1.mov clip2.mov C:\OtherVideos -Recurse
    .\videoCompressUnderSize.ps1 C:\Videos -MaxMB 50 -DefaultVideoBitrate 8
    .\videoCompressUnderSize.ps1 myvideo.mp4 -NoAudio
#>

[CmdletBinding(PositionalBinding=$false)]
param(
    [Parameter(Mandatory=$true, ValueFromRemainingArguments=$true, Position=0)]
    [string[]]$Paths,

    # Upper size limit — files already under this are skipped
    [int]$MaxMB = 100,

    # Default video bitrate in Mbps — used when it keeps the file under MaxMB
    [double]$DefaultVideoBitrate = 5,

    # Audio bitrate (kbps) — ignored when -NoAudio is set
    [int]$AudioBitrate = 128,

    # Strip the audio track from the output
    [switch]$NoAudio,

    # x264 preset: ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow
    [string]$Preset = "medium",

    # Suffix added to the output filename (e.g. myvideo_compressed.mp4)
    [string]$OutputSuffix = "_compressed",

    # Also search subfolders when a directory is given
    [switch]$Recurse
)

# Binary MB: 1 MB = 1,048,576 bytes = 8,388,608 bits
# 1 kbps   = 1,000 bits/sec  (standard video encoding convention)
# So: size_MB = (bitrate_kbps * 1000 * duration_sec) / 8 / 1048576
#             = bitrate_kbps * duration_sec / 8388.608
$BITS_PER_MB = 8388.608  # kbits per binary MB (1 MB in bits / 1000)

$videoExtensions = @('.mp4', '.mov', '.avi', '.mkv', '.mts', '.m4v', '.wmv', '.flv', '.webm')

# ──────────────────────────────────────────────────────────────────────────────

function Get-VideoDurationSeconds {
    param([string]$FilePath)
    $out = & ffprobe -v error -show_entries format=duration `
        -of default=noprint_wrappers=1:nokey=1 $FilePath 2>$null
    if (-not $out) { return 0 }
    return [double]$out
}

function Compress-Video {
    param([string]$InputFile)

    $info      = Get-Item $InputFile
    $sizeMB    = $info.Length / 1MB
    $outputFile = Join-Path $info.DirectoryName "$($info.BaseName)$OutputSuffix.mp4"

    Write-Host ""
    Write-Host "Processing: $InputFile" -ForegroundColor Cyan
    Write-Host ("  Size:     {0:N1} MB" -f $sizeMB)

    # ── Skip if already small enough ──────────────────────────────────────────
    if ($sizeMB -le $MaxMB) {
        Write-Host "  Already under ${MaxMB} MB — skipping." -ForegroundColor Yellow
        return
    }

    # ── Get duration ──────────────────────────────────────────────────────────
    $duration = Get-VideoDurationSeconds $InputFile
    if ($duration -le 0) {
        Write-Host "  ERROR: Could not read duration via ffprobe." -ForegroundColor Red
        return
    }
    Write-Host ("  Duration: {0:N1} s" -f $duration)

    # ── Choose bitrate ────────────────────────────────────────────────────────
    $defaultVideoKbps = [int]($DefaultVideoBitrate * 1000)   # Mbps → kbps
    $effectiveAudio   = if ($NoAudio) { 0 } else { $AudioBitrate }
    $totalDefaultKbps = $defaultVideoKbps + $effectiveAudio
    $estimatedMB      = ($totalDefaultKbps * $duration) / $BITS_PER_MB

    if ($estimatedMB -le $MaxMB) {
        $videoBitrate = $defaultVideoKbps
        Write-Host ("  Default bitrate {0} Mbps fits ({1:N1} MB estimated) — using default." `
            -f $DefaultVideoBitrate, $estimatedMB)
    } else {
        # Solve: (videoBitrate + effectiveAudio) * duration / BITS_PER_MB = MaxMB
        $targetTotal  = ($MaxMB * $BITS_PER_MB) / $duration
        $videoBitrate = [math]::Max([int]($targetTotal - $effectiveAudio), 200)
        Write-Host ("  Default {0} Mbps would yield {1:N1} MB — using {2} kbps to target {3} MB." `
            -f $DefaultVideoBitrate, $estimatedMB, $videoBitrate, $MaxMB)
    }

    if ($NoAudio) { Write-Host "  Audio:    stripped (-NoAudio)" }

    Write-Host "  Output:   $outputFile"

    # ── Two-pass encode ───────────────────────────────────────────────────────
    Write-Host "  Pass 1 ..." -NoNewline

    & ffmpeg -y -i $InputFile `
        -vcodec libx264 -pix_fmt yuv420p -preset $Preset -b:v "${videoBitrate}k" `
        -pass 1 -an -f null NUL 2>&1 | Out-Null

    if ($LASTEXITCODE -ne 0) {
        Write-Host " FAILED" -ForegroundColor Red
        return
    }
    Write-Host " done" -ForegroundColor DarkGreen

    Write-Host "  Pass 2 ..." -NoNewline

    $audioArgs = if ($NoAudio) { @('-an') } else { @('-c:a', 'aac', '-b:a', "${AudioBitrate}k") }

    & ffmpeg -y -i $InputFile `
        -vcodec libx264 -pix_fmt yuv420p -preset $Preset -b:v "${videoBitrate}k" `
        -pass 2 @audioArgs -f mp4 $outputFile 2>&1 | Out-Null

    if ($LASTEXITCODE -ne 0) {
        Write-Host " FAILED" -ForegroundColor Red
        return
    }
    Write-Host " done" -ForegroundColor DarkGreen

    # Clean up two-pass log files (written to current directory by ffmpeg)
    Remove-Item "ffmpeg2pass-0.log"        -ErrorAction SilentlyContinue
    Remove-Item "ffmpeg2pass-0.log.mbtree" -ErrorAction SilentlyContinue

    $outMB = (Get-Item $outputFile).Length / 1MB
    Write-Host ("  Output size: {0:N1} MB" -f $outMB) -ForegroundColor Green
}

# ──────────────────────────────────────────────────────────────────────────────
# Main: resolve paths and collect files
# ──────────────────────────────────────────────────────────────────────────────

$filesToProcess = [System.Collections.Generic.List[string]]::new()

foreach ($path in $Paths) {
    if (Test-Path $path -PathType Container) {
        $found = if ($Recurse) {
            Get-ChildItem $path -Recurse -File |
                Where-Object { $videoExtensions -contains $_.Extension.ToLower() }
        } else {
            Get-ChildItem $path -File |
                Where-Object { $videoExtensions -contains $_.Extension.ToLower() }
        }
        foreach ($f in $found) { $filesToProcess.Add($f.FullName) }
    } elseif (Test-Path $path -PathType Leaf) {
        $filesToProcess.Add((Resolve-Path $path).Path)
    } else {
        Write-Host "Not found: $path" -ForegroundColor Red
    }
}

# Skip files that are themselves outputs of this script
$filesToProcess = $filesToProcess |
    Where-Object { -not $_.EndsWith("$OutputSuffix.mp4") }

if ($filesToProcess.Count -eq 0) {
    Write-Host "No video files found."
    exit 0
}

Write-Host "Found $($filesToProcess.Count) video file(s)."

foreach ($file in $filesToProcess) {
    Compress-Video $file
}

Write-Host ""
Write-Host "All done." -ForegroundColor Green
