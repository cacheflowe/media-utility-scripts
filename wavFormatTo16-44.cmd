@echo off
setlocal enabledelayedexpansion

echo ###################################################
echo # Description: Convert audio files to 16-bit 44.1kHz format
echo # Usage: wavFormatTo16-44.cmd /path/to/audio.wav [custom args]
echo #        wavFormatTo16-44.cmd /path/to/audio/files/ [custom args]
echo # Param 1: Audio file or directory
echo # Param 2+ [Optional]: Custom args for SoX
echo # Requires: SoX
echo ###################################################
echo.

@REM ################################################################################
@REM # check parameters & set defaults
@REM ################################################################################

set userArgs=%*
set defaultArgs=-b 16 -r 44100

@REM Check 1st arg
IF "%1"=="" (
    echo Error: 1st arg must be an audio file or directory
    exit /b 1
)
set inputPath=%1

@REM Get remaining args for SoX
set soxArgs=
if "%2"=="" (
    @REM Check optional 2nd arg and provide default value
    set soxArgs=%defaultArgs%
    echo ### Using default args: %defaultArgs%
) else (
    @REM Use all arguments after the first one
    set "allArgs=%*"
    for /f "tokens=1,* delims= " %%a in ("!allArgs!") do set "soxArgs=%%b"
    echo ### Using user-defined args: !soxArgs!
)

@REM ################################################################################
@REM Check if path is a directory or a file
@REM ################################################################################

if exist "%inputPath%\" (
    @REM Process directory
    echo.
    echo Processing all audio files in directory: %inputPath%
    
    @REM Process all audio files in the directory
    for %%F in ("%inputPath%\*.wav" "%inputPath%\*.aif" "%inputPath%\*.aiff" "%inputPath%\*.mp3" "%inputPath%\*.flac") do (
        echo.
        echo Processing: %%F
        CALL :ProcessFile "%%F" 
    )
    
    echo.
    echo Finished converting all audio files in directory: %inputPath%
) else (
    @REM Process single file
    CALL :ProcessFile "%inputPath%"
)

exit /b 0

:ProcessFile
@REM Process a single audio file
set "filename=%~1"
set "outputFile=%~dpn1.16-44.wav"

echo Converting: %filename%

@REM Do conversion
sox "%filename%" %soxArgs% "%outputFile%"

echo Success: Converted to 16/44.1: %outputFile%

exit /b 0
