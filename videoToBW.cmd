@echo off
echo ###################################################
echo # Description: Convert a video to black and white
echo # Usage: videoToBW.cmd /path/to/video.mp4 ["-crf 20"]
echo # Param 1: Video file
echo # Param 2 [Optional]: Custom ffmpeg args (default: "-crf 23")
echo # Requires: ffmpeg
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be a video file
    exit /b 1
)

REM Set defaults
set "customArgs=-crf 23"
IF NOT "%~2"=="" set "customArgs=%~2"

REM Get filename
set "filename=%~1"
set "outputFile=%~n1.bw%~x1"

echo Converting video to black and white: %filename%
echo Using custom args: %customArgs%

REM Do conversion
ffmpeg -i "%filename%" -vf hue=s=0 -c:v libx264 -pix_fmt yuv420p %customArgs% -c:a copy "%outputFile%"

REM Complete
echo Success: Video converted to black and white:
echo # %outputFile%