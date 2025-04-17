@echo off
echo ###################################################
echo # Description: Video to optimized gif
echo # Usage: videoToGif.cmd input.mov 600 [60]
echo # Param 1: Video file
echo # Param 2: Output width
echo # Param 3 [Optional]: framerate (default: 30)
echo # Requires: ffmpeg
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be a video file
    exit /b 1
)

IF "%~2"=="" (
    echo Error: 2nd arg must be output width
    exit /b 1
)

REM Set defaults
set "fps=30"
IF NOT "%~3"=="" set "fps=%~3"
echo [Optional]: Using framerate of %fps%

REM Get filename
set "filename=%~1"
set "outputFile=%~n1.%~2w.%fps%-fps.gif"
echo Converting to GIF: %outputFile%

REM Create tmp directory if it doesn't exist
if not exist ".\tmp\" mkdir .\tmp

REM Set palette and filter variables
set "palette=.\tmp\palette.png"
set "filters=fps=%fps%,scale=%~2:-1:flags=lanczos"

REM Do conversion (2-pass for better quality)
ffmpeg -v warning -i "%filename%" -vf "%filters%,palettegen=max_colors=128" -y "%palette%"
ffmpeg -v warning -i "%filename%" -i "%palette%" -lavfi "%filters% [x]; [x][1:v] paletteuse" -y "%outputFile%"

REM Complete
echo Success: Movie to GIF complete:
echo # %outputFile%