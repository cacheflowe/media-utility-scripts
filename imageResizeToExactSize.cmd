@echo off
echo ###################################################
echo # Description: Resize an image to an exact size
echo # Usage: imageResizeToExactSize.cmd image.jpg 640 480
echo # Param 1: Image file or directory
echo # Param 2: Width in pixels
echo # Param 3: Height in pixels
echo # Requires: ImageMagick
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be an image file or directory
    exit /b 1
)

IF "%~2"=="" (
    echo Error: 2nd arg must be width
    exit /b 1
)

IF "%~3"=="" (
    echo Error: 3rd arg must be height
    exit /b 1
)

REM Set variables
set "width=%~2"
set "height=%~3"

REM Check if input is a directory
IF EXIST "%~1\" (
    echo Processing directory: %~1
    
    REM Loop through image files
    FOR %%i IN ("%~1\*.jpg" "%~1\*.png" "%~1\*.jpeg" "%~1\*.gif") DO (
        CALL :ProcessImage "%%i" %width% %height%
    )
    
    echo Success: Resized all images in %~1
) ELSE (
    CALL :ProcessImage "%~1" %width% %height%
)

exit /b 0

:ProcessImage
REM Process a single image
set "filename=%~1"
set "width=%~2"
set "height=%~3"
set "outputFile=%~dpn1.%width%x%height%%~x1"

echo Resizing image: %filename% to %width%x%height%

REM Do conversion - resize exactly (will distort if aspect ratio differs)
magick convert "%filename%" -resize %width%x%height%! "%outputFile%"

echo Success: Image resized to: %outputFile%

exit /b 0