@echo off
echo ###################################################
echo # Description: Extract a time segment of a video to a new file
echo # Usage: videoTimeCrop.cmd C:\path\to\video.mp4 10 15 ["-crf 24 -vf scale=800:-1 -an"]
echo # Param 1: Video file
echo # Param 2: Start time (seconds)
echo # Param 3: End time (seconds)
echo # Param 4 [Optional]: Custom ffmpeg args (default: "-crf 1")
echo # Requires: ffmpeg
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be a video file
    exit /b 1
)

IF "%~2"=="" (
    echo Error: 2nd arg must be start time (seconds)
    exit /b 1
)

IF "%~3"=="" (
    echo Error: 3rd arg must be end time (seconds)
    exit /b 1
)

REM Get filename and set default arguments
set "filename=%~1"
set "startTime=%~2"
set "endTime=%~3"
set "customArgs=-crf 1"
IF NOT "%~4"=="" set "customArgs=%~4"
set "outputFile=%~n1.crop.%startTime%-%endTime%s.mp4"

echo Time cropping video from %startTime% to %endTime% with customArgs: %customArgs%
echo Input: %filename%

REM Do conversion
ffmpeg -y -i "%filename%" -vcodec libx264 %customArgs% -pix_fmt yuv420p -f mp4 -ss %startTime% -to %endTime% "%outputFile%"

REM Complete
echo Success: Video time cropped: 
echo # %outputFile%