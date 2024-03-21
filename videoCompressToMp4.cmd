@echo off
echo ##################################################
echo ### Description: Compress a video to mp4
echo ### Usage: $ videoCompressToMp4.cmd video.mov -crf 12 -vf scale=1280:-1 -an
echo ### Param 1: Video file
echo ### Param 2 [Optional]: Custom args
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
    echo 1st arg must be a video file
    exit /b 1
)
set inputFile=%1

if "%2"=="" (
    @REM Check optional 2nd arg and provide default value
    set convertArgs=%inputFile% %defaultArgs%
    echo ### Using default convertArgs: %defaultArgs%
) else (
    @REM Or use full arg list and inerst into the ffmpeg command
    set convertArgs=%userArgs%
    echo ### Using user-defined convertArgs: %userArgs%
)

@REM ################################################################################
@REM Print args
echo ### userArgs: %userArgs%
echo ### inputFile: %inputFile%
echo ### convertArgs: %convertArgs%
echo ###################################################


@REM ################################################################################

@REM # Set output filename
set outputFile=%inputFile%.compressed.mp4

@REM # do conversion
echo Compressing video: %inputFile%
ffmpeg -y -i %convertArgs% -vcodec libx264 -pix_fmt yuv420p -f mp4 %outputFile%

@REM ################################################################################
@REM ################################################################################

echo Video Compressed: %inputFile%
