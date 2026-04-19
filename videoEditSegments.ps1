###################################################
# Description: Cut multiple segments from a video and concatenate them without re-encoding
# Usage: .\videoEditSegments.ps1 "C:\path\to\video.mov" "62.8-73.0 10.8-23.0" "-map 0"
# Param 1: Input video file
# Param 2: Space-separated start and end times for each segment, formatted as START-END
#          Time format can be HH:MM:SS.MILLISECONDS (e.g., 00:01:30) or Seconds (e.g., 90 or 12.5)
#          Example using mixed formats: "00:01:30-105.5"
# Param 3 [Optional]: Custom args (applied to each segment during extraction)
# Requires: ffmpeg
###################################################

param(
    [Parameter(Mandatory=$true)]
    [string]$VideoFile,
    
    [Parameter(Mandatory=$true)]
    [string]$Segments,
    
    [Parameter(Mandatory=$false)]
    [string]$CustomArgs = ""
)

# Validate input file
if (-not (Test-Path $VideoFile)) {
    Write-Error "Error: File not found: $VideoFile"
    exit 1
}

# Parse segments
$segmentList = $Segments -split '\s+'
if ($segmentList.Count -eq 0) {
    Write-Error "Error: No segments provided"
    exit 1
}

# Setup output files
$outputFile = "$VideoFile.edit.mp4"
$listFile = "$VideoFile.concat_list.txt"

# Display optional args
if ($CustomArgs) {
    Write-Host "[Optional]: Using custom args: $CustomArgs"
} else {
    Write-Host "[Optional]: Using default args (none)"
}

Write-Host "Processing video: $VideoFile"
Write-Host ""

# Clear/create concat list file
Set-Content -Path $listFile -Value $null -NoNewline

# Track temporary files
$tempFiles = @()

# Process each segment
for ($i = 0; $i -lt $segmentList.Count; $i++) {
    $segment = $segmentList[$i]
    
    # Parse segment (START-END format)
    if ($segment -match '^(.+)-(.+)$') {
        $start = $Matches[1]
        $end = $Matches[2]
        
        $tempVid = "$VideoFile.temp_$i.mp4"
        $tempFiles += $tempVid
        
        Write-Host "Cutting segment ${i}: $start to $end"
        
        # Extract segment using ffmpeg
        $ffmpegArgs = @(
            '-y'
            '-ss', $start
            '-to', $end
            '-i', $VideoFile
            '-c', 'copy'
        )
        
        if ($CustomArgs) {
            $ffmpegArgs += $CustomArgs -split '\s+'
        }
        
        $ffmpegArgs += $tempVid
        
        & ffmpeg @ffmpegArgs
        
        # Add to concat list
        $fileName = Split-Path -Leaf $tempVid
        Add-Content -Path $listFile -Value "file '$fileName'"
    }
    else {
        Write-Warning "Invalid segment format: $segment (expected START-END)"
    }
}

Write-Host ""
Write-Host "Concatenating $($tempFiles.Count) segments into final video..."

# Concatenate all segments
& ffmpeg -y -f concat -safe 0 -i $listFile -c copy $outputFile

Write-Host ""
Write-Host "Cleaning up temporary files..."

# Clean up temp files
foreach ($tempFile in $tempFiles) {
    if (Test-Path $tempFile) {
        Remove-Item $tempFile -Force
    }
}

if (Test-Path $listFile) {
    Remove-Item $listFile -Force
}

Write-Host ""
Write-Host "Success: Video Edited: $outputFile" -ForegroundColor Green
