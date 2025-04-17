@echo off
echo ###################################################
echo # Description: Normalizes a wav file
echo # Usage: wavNormalize.cmd audio.wav [-3]
echo # Param 1: Audio file
echo # Param 2 [Optional]: dB to normalize to (0 is max volume)
echo # Requires: SoX
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be an audio file
    exit /b 1
)

REM Set gain default
set "gain=0"
IF NOT "%~2"=="" set "gain=%~2"
echo [Optional]: Using gain of %gain%

REM Get filename
set "filename=%~1"
set "outputFile=%~n1.normalized%~x1"
echo Normalizing audio: %filename%

REM Do conversion
sox "%filename%" "%outputFile%" norm %gain%

REM Complete
echo Success: Normalized: %outputFile%