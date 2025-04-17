@echo off
echo ###################################################
echo # Description: Convert WebM video to MP4 format
echo # Usage: videoWebmToMp4.cmd /path/to/video.webm ["-crf 23"]
echo # Param 1: WebM video file
echo # Param 2 [Optional]: Custom ffmpeg args (default: "-crf 23")
echo # Requires: ffmpeg
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be a WebM video file
    exit /b 1
)

REM Set defaults
set "customArgs=-crf 23"
IF NOT "%~2"=="" set "customArgs=%~2"

REM Get filename
set "filename=%~1"
set "outputFile=%~n1.mp4"

echo Converting WebM to MP4: %filename%
echo Using custom args: %customArgs%

REM Do conversion
ffmpeg -i "%filename%" -c:v libx264 -pix_fmt yuv420p %customArgs% -c:a aac -b:a 192k "%outputFile%"

REM Complete
echo Success: WebM converted to MP4:
echo # %outputFile%