@echo off
echo ##################################################
echo # Description: Resize images to a maximum dimension
echo # Usage: imageResizeDirToMaxDimension.cmd C:\path\to\images 640
echo # Param 1: Directory of images
echo # Param 2: Maximum width/height
echo # Requires: Imagemagick
echo ##################################################

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be a directory
    exit /b 1
)

IF "%~2"=="" (
    echo Error: 2nd arg must be maximum size
    exit /b 1
)

REM Loop through files
for %%i in (%~1\*.*) do (
    REM Check if file extension is an image
    if "%%~xi"==".png" (
        call imageResizeToMaxDimension.cmd "%%i" %~2
    ) else if "%%~xi"==".jpg" (
        call imageResizeToMaxDimension.cmd "%%i" %~2
    ) else if "%%~xi"==".jpeg" (
        call imageResizeToMaxDimension.cmd "%%i" %~2
    ) else if "%%~xi"==".gif" (
        call imageResizeToMaxDimension.cmd "%%i" %~2
    )
)

REM Complete
echo Success: Resized files in: %~1