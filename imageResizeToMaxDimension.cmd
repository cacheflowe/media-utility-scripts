@echo off
echo ##################################################
echo # Description: Resize an image to a maximum dimension
echo # Usage: imageResizeToMaxDimension.cmd image_file.jpg 640
echo # Param 1: Image file
echo # Param 2: Maximum width/height
echo # Requires: Imagemagick
echo ##################################################

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be an image file
    exit /b 1
)

IF "%~2"=="" (
    echo Error: 2nd arg must be maximum size
    exit /b 1
)

REM Get filename
set "filename=%~1"
set "extension=%~x1"
echo Resizing image: %filename%
set "outputFile=%~1.%~2%~x1"

REM Do conversion
magick convert %1 -resize %2x%2 %outputFile%

REM Complete
echo Success: Image resized to max dimension of: %2
echo %outputFile%