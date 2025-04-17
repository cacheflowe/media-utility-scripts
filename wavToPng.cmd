@echo off
echo ###################################################
echo # Description: Convert audio/video to waveform PNG
echo # Usage: wavToPng.cmd audio.wav 800 200
echo # Param 1: Audio/video file
echo # Param 2: Width in pixels
echo # Param 3: Height in pixels
echo # Requires: ffmpeg
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be an audio/video file
    exit /b 1
)

IF "%~2"=="" (
    echo Error: 2nd arg must be width in pixels
    exit /b 1
)

IF "%~3"=="" (
    echo Error: 3rd arg must be height in pixels
    exit /b 1
)

REM Get filename
set "filename=%~1"
set "width=%~2"
set "height=%~3"
set "outputFile=%~n1.%width%x%height%.png"

echo Creating waveform image: %outputFile%

REM Do conversion
ffmpeg -i "%filename%" -filter_complex "aformat=channel_layouts=mono,showwavespic=s=%width%x%height%" -frames:v 1 "%outputFile%"

REM Complete
echo Success: Waveform created:
echo # %outputFile%