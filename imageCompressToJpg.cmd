@echo off
echo ###################################################
echo # Description: Compress an image to jpg, with a specified quality
echo # Usage: imageCompressToJpg.cmd /path/to/image.png 85
echo # Param 1: Image file
echo # Param 2: JPG quality (0-100)
echo # Requires: imagemagick, jpegoptim
echo ###################################################

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be an image file
    exit /b 1
)

IF "%~2"=="" (
    echo Error: 2nd arg must be compression quality
    exit /b 1
)

REM Get filename and extension
set "filename=%~1"
set "extension=%~x1"
set "outputFile=%~1.compressed.%~2.jpg"

REM Do conversion
magick convert "%~1" -sampling-factor 4:2:0 -strip -quality %~2 -interlace JPEG -colorspace RGB "%outputFile%"
REM And do lossless compression
jpegoptim "%outputFile%"

REM Complete
echo Success: Compressed jpg at %~2%% quality: %outputFile%