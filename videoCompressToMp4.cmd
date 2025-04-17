@echo off
setlocal enabledelayedexpansion

echo ##################################################
echo ### Description: Compress a video or videos in a directory to mp4
echo ### Usage: $ videoCompressToMp4.cmd video.mov -crf 12 -vf scale=1280:-1 -an
echo ###        $ videoCompressToMp4.cmd /path/to/videos/ -crf 12 -vf scale=1280:-1 -an
echo ### Param 1: Video file or directory containing video files
echo ### Param 2+ [Optional]: Custom args
echo ### Requires: ffmpeg
echo ###################################################

@REM ################################################################################
@REM # check parameters & set defaults
@REM ################################################################################

set userArgs=%*
set defaultArgs=-crf 10 -an

@REM Check 1st arg
if "%1"=="" (
    echo.
    echo 1st arg must be a video file or directory
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
    for %%F in ("%inputPath%\*.mp4" "%inputPath%\*.mov" "%inputPath%\*.avi" "%inputPath%\*.mkv" "%inputPath%\*.wmv") do (
        echo.
        echo Processing: %%F
        
        @REM Set output filename
        set "outputFile=%%~nF.compressed.mp4"
        
        echo Compressing video: %%F with args: %ffmpegArgs%
        
        @REM Do conversion
        ffmpeg -y -i "%%F" -vcodec libx264 -pix_fmt yuv420p -f mp4 %ffmpegArgs% "%%~dpF%%~nF.compressed.mp4"
        
        echo Video Compressed: %%~dpF%%~nF.compressed.mp4
    )
    
    echo.
    echo Finished compressing all videos in directory: %inputPath%
) else (
    @REM Process single file
    @REM Set output filename with proper file path expansion
    echo.
    echo Processing file: %inputPath%
    
    @REM Do conversion
    echo Compressing video: %inputPath% with args: %ffmpegArgs%
    ffmpeg -y -i "%inputPath%" -vcodec libx264 -pix_fmt yuv420p -f mp4 %ffmpegArgs% "%~dp1%~n1.compressed.mp4"
    
    echo Video Compressed: %~dp1%~n1.compressed.mp4 with args: %ffmpegArgs%
)
