@echo off
echo ###################################################
echo # Description: Remove every other frame from a GIF to reduce size
echo # Usage: gifRemoveEveryOtherFrame.cmd image.gif
echo # Param 1: GIF file
echo # Requires: ImageMagick
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be a GIF file
    exit /b 1
)

REM Get filename
set "filename=%~1"
set "outputFile=%~n1.reduced.gif"

echo Removing every other frame from %filename%

REM Do conversion with ImageMagick
magick convert "%filename%" -coalesce -delete 1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59 "%outputFile%"

REM Complete
echo Success: Created reduced GIF:
echo # %outputFile%