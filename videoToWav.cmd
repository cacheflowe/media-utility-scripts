@echo off
setlocal enabledelayedexpansion

echo ###################################################
echo # Description: Video to audio format 16/44.1 wav
echo # Usage: videoToWav.cmd /path/to/video.mp4 [custom args]
echo #        videoToWav.cmd /path/to/videos/ [custom args]
echo # Param 1: Video file or directory containing video files
echo # Param 2+ [Optional]: Custom args for ffmpeg audio conversion
echo # Requires: ffmpeg
echo ###################################################
echo.

@REM ################################################################################
@REM # check parameters & set defaults
@REM ################################################################################

set userArgs=%*
set defaultArgs=-af aformat=s16:44100

@REM Check 1st arg
IF "%1"=="" (
    echo Error: 1st arg must be a video file or directory
    exit /b 1
)
set inputPath=%1

@REM Get remaining args for ffmpeg
set ffmpegArgs=
if "%2"=="" (
    @REM Check optional 2nd arg and provide default value
    set ffmpegArgs=%defaultArgs%
    echo ### Using default args: %defaultArgs%
) else (
    @REM Use all arguments after the first one
    set "allArgs=%*"
    for /f "tokens=1,* delims= " %%a in ("!allArgs!") do set "ffmpegArgs=%%b"
    echo ### Using user-defined args: !ffmpegArgs!
)

@REM ################################################################################
@REM Check if path is a directory or a file
@REM ################################################################################

if exist "%inputPath%\" (
    @REM Process directory
    echo.
    echo Processing all video files in directory: %inputPath%
    
    @REM Process all video files in the directory
    for %%F in ("%inputPath%\*.mp4" "%inputPath%\*.mov" "%inputPath%\*.avi" "%inputPath%\*.mkv" "%inputPath%\*.wmv" "%inputPath%\*.webm") do (
        echo.
        echo Processing: %%F
        CALL :ProcessFile "%%F"
    )
    
    echo.
    echo Finished extracting audio from all videos in directory: %inputPath%
) else (
    @REM Process single file
    CALL :ProcessFile "%inputPath%"
)

exit /b 0

:ProcessFile
@REM Process a single video file
set "filename=%~1"
set "outputFile=%~dpn1.wav"

echo Extracting audio from video: %filename%

@REM Do conversion
ffmpeg -i "%filename%" %ffmpegArgs% "%outputFile%"

echo Success: Extracted audio to 16/44.1 wav: %outputFile%
