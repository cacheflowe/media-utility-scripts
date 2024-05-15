@echo off
echo ##################################################
echo ### Description: Forces format to 16/44.1 wav
echo ### Usage: $ wavFormatTo16-44.cmd path\to\audio-to-extract.mp4
echo ### Param 1: Audio/video file
echo ### Requires: ffmpeg
echo ###################################################

@REM ################################################################################
@REM # check parameters & set defaults
@REM ################################################################################

set userArgs=%*

@REM Check 1st arg
if "%1"=="" (
    echo.
    echo 1st arg must be an audio/video file
    exit /b 1
)
set inputFile=%1


@REM ################################################################################
@REM Print args
echo ### userArgs: %userArgs%
echo ### inputFile: %inputFile%
echo ###################################################


@REM ################################################################################

@REM # Set output filename
set outputFile=%inputFile%.16-44.wav

@REM # do conversion
echo Converting audio: %inputFile% to %outputFile%
ffmpeg -i %inputFile% -af aformat=s16:44100 %outputFile%

@REM delete input file
del %inputFile%
@REM get filename without the path
@REM set fileName=%~nx1
@REM rename saved file to original name
rename %outputFile% %inputFile%

@REM ################################################################################
@REM ################################################################################

echo Audio saved: %inputFile%
