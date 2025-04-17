@echo off
echo ###################################################
echo # Description: Convert ProRes QuickTime video to WebM with transparency
echo # Usage: videoCompressToWebM.cmd /path/to/video.mov 1000k
echo # Param 1: Video file
echo # Param 2: Video bitrate (quality)
echo # Requires: ffmpeg
echo ###################################################

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be a video file
    exit /b 1
)

IF "%~2"=="" (
    echo Error: 2nd arg must be video bitrate
    exit /b 1
)

REM Get filename and extension
set "filename=%~1"
set "bitrate=%~2"
set "outputFile=%~n1.webm"

REM First pass
ffmpeg -i "%filename%" -c:v libvpx-vp9 -b:v %bitrate% -pass 1 -an -f null NUL

REM Second pass
ffmpeg -i "%filename%" -c:v libvpx-vp9 -b:v %bitrate% -pass 2 "%outputFile%"

REM Complete
echo Success: Video converted to WebM format with transparency: %outputFile%