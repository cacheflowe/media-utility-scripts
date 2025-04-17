@echo off
echo ###################################################
echo # Description: Removes audio track from video
echo # Usage: videoRemoveAudioTrack.cmd /path/to/video.mp4
echo # Param 1: Video file
echo # Requires: ffmpeg
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be a video file
    exit /b 1
)

REM Get filename
set "filename=%~1"
set "outputFile=%~n1.noaudio%~x1"

echo Removing audio from video: %filename%

REM Do conversion
ffmpeg -i "%filename%" -vcodec copy -an "%outputFile%"

REM Complete
echo Success: Removed audio from video: 
echo # %outputFile%