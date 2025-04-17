@echo off
echo ###################################################
echo # Description: Loop a video [x] times
echo # Usage: videoLoopConcat.cmd /video/path.mp4 2
echo # Param 1: Video file
echo # Param 2: Number of loops
echo # Requires: ffmpeg
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be a video file
    exit /b 1
)

set "loops=2"
IF NOT "%~2"=="" set "loops=%~2"

REM Get filename
set "filename=%~1"
set "extension=%~x1"
set "outputFile=%filename%.%loops%-loops%extension%"

REM Calculate stream_loop parameter (loops-1 because ffmpeg counts original playback + loops)
set /a stream_loop_count=%loops%-1

echo Looping video %filename% [%loops%] times

REM Use the simpler stream_loop approach
ffmpeg -stream_loop %stream_loop_count% -i "%filename%" -c copy "%outputFile%"

REM Complete
echo Success: Video looped: 
echo # %outputFile%