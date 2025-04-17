@echo off
echo ###################################################
echo # Description: Extract image sequence from a video
echo # Usage: videoToImageSequence.cmd /path/to/video.mov [jpg]
echo # Param 1: Video file
echo # Param 2 [Optional]: Output file format [jpg]
echo # Requires: ffmpeg
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be a video file
    exit /b 1
)

REM Set defaults
set "outputFormat=png"
IF NOT "%~2"=="" set "outputFormat=%~2"
echo [Optional]: Using image format of %outputFormat%

REM Get filename
set "filename=%~1"
set "newDir=%~n1-frames"

echo Saving images from video: %filename%

REM Create output directory
if not exist "%newDir%" mkdir "%newDir%"
echo Created directory: %newDir%

REM Do conversion
IF /I "%outputFormat%"=="jpg" (
    REM Higher quality JPEGs
    ffmpeg -i "%filename%" -qscale:v 1 "%newDir%\ffout%%08d.jpg"
) ELSE (
    REM Default PNG output
    ffmpeg -i "%filename%" "%newDir%\ffout%%08d.png"
)

REM Complete
echo Success: Extracted video frames: 
echo # %newDir%