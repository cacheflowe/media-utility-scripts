@echo off
echo ###################################################
echo # Description: Change the speed of a video file
echo # Usage: videoChangeRate.cmd C:\path\to\video.mov 1.5 16
echo # Param 1: Video file
echo # Param 2: New rate time multiplier (0.5 is 2x as fast)
echo # Param 3: crf compression quality (lower is better)
echo # Requires: ffmpeg
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be a video file
    exit /b 1
)

IF "%~2"=="" (
    echo Error: 2nd arg must be new rate
    exit /b 1
)

IF "%~3"=="" (
    echo Error: 3rd arg must be crf compression quality
    exit /b 1
)

REM Get filename
set "filename=%~1"
set "rate=%~2"
set "crf=%~3"
set "outputFile=%~n1.rate-%rate%.mp4"

echo Changing video rate: %filename%

REM Do conversion
ffmpeg -i "%filename%" -filter:v "setpts=%rate%*PTS" -filter:a "atempo=1.0/%rate%" -vcodec libx264 -crf %crf% -pix_fmt yuv420p -f mp4 "%outputFile%"

REM Complete
echo Success: Video rate changed:
echo # %outputFile%