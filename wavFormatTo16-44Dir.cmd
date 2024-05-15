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
    echo 1st arg must be a directory of audio files
    exit /b 1
)
set inputPath=%1
pushd %inputPath%

@REM ################################################################################
@REM Print args
echo ### userArgs: %userArgs%
echo ### inputPath: %inputPath%
echo ###################################################

@REM print current path
echo Current path: %CD%

@REM ################################################################################

@REM Loop through .wav files in the directory and convert each, replacing each source .wav
for %%i in (.\*.wav) do (
    @REM remove the relative path
    @REM set inputFile=%%~nxi
    @REM wavFormatTo16-44.cmd %%i
    @REM get file name from current path
    @REM echo processing file: %%~nxi
    wavFormatTo16-44.cmd %%~nxi
)

@REM ################################################################################
@REM ################################################################################

popd
pause