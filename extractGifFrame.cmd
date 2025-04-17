@echo off
echo ###################################################
echo # Description: Extract a specific frame from a GIF
echo # Usage: extractGifFrame.cmd image.gif 5
echo # Param 1: GIF file
echo # Param 2: Frame number to extract
echo # Requires: ImageMagick
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be a GIF file
    exit /b 1
)

IF "%~2"=="" (
    echo Error: 2nd arg must be the frame number to extract
    exit /b 1
)

REM Get filename
set "filename=%~1"
set "frame=%~2"
set "outputFile=%~n1.frame-%frame%.png"

echo Extracting frame %frame% from %filename%

REM Do conversion
magick convert "%filename%[%frame%]" "%outputFile%"

REM Complete
echo Success: Extracted frame to:
echo # %outputFile%