@echo off
echo ###################################################
echo # Description: Extract a poster frame from a video
echo # Usage: videoToImagePoster.cmd /path/to/video.mov 2.0
echo # Param 1: Video file
echo # Param 2 [Optional]: Time in seconds
echo # Requires: ffmpeg
echo ###################################################

REM Check parameters & set defaults
IF "%~1"=="" (
    echo Error: 1st arg must be a video file
    exit /b 1
)

SET extractTime=0
IF NOT "%~2"=="" SET extractTime=%~2

REM Get filename and extension
SET "filename=%~1"
SET "outputFile=%filename%.%extractTime%.jpg"
REM Uncomment the next line and comment out the previous line to use a fixed output filename format
REM SET "outputFile=%filename%-thumb.jpg"

echo Saving thumbnail for movie: %filename%

REM Do conversion
ffmpeg -ss %extractTime% -i "%filename%" -t 1 -q:v 0 -f image2 "%outputFile%"

REM Complete
echo Extracted poster frame at %extractTime% seconds: 
echo # %outputFile%