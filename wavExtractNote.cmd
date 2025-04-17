@echo off
echo ###################################################
echo # Description: Extract a specific note from an audio file
echo # Usage: wavExtractNote.cmd audio.wav 1.5 0.5
echo # Param 1: Audio file
echo # Param 2: Start time (seconds)
echo # Param 3: Duration (seconds)
echo # Requires: ffmpeg
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be an audio file
    exit /b 1
)

IF "%~2"=="" (
    echo Error: 2nd arg must be start time in seconds
    exit /b 1
)

IF "%~3"=="" (
    echo Error: 3rd arg must be duration in seconds
    exit /b 1
)

REM Get filename
set "filename=%~1"
set "startTime=%~2"
set "duration=%~3"
set "outputFile=%~n1.note-%startTime%s-%duration%s.wav"

echo Extracting note from %startTime%s for %duration%s from: %filename%

REM Do extraction
ffmpeg -i "%filename%" -ss %startTime% -t %duration% "%outputFile%"

REM Complete
echo Success: Note extracted:
echo # %outputFile%