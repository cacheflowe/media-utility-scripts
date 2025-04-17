@echo off
echo ##################################################
echo # Description: Resize images to a maximum dimension
echo # Usage: imageResize.cmd image.jpg|directory 640
echo # Param 1: Image file or directory of images
echo # Param 2: Maximum width/height
echo # Requires: ImageMagick
echo ##################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be an image file or directory
    exit /b 1
)

IF "%~2"=="" (
    echo Error: 2nd arg must be maximum size
    exit /b 1
)

REM Check if input is a directory
IF EXIST "%~1\" (
    echo Processing directory: %~1
    
    REM Loop through image files in directory
    FOR %%i IN (%~1\*.png %~1\*.jpg %~1\*.jpeg %~1\*.gif %~1\*.webp) DO (
        CALL :ProcessImage "%%i" %~2
    )
    
    echo Success: Resized files in: %~1
) ELSE (
    CALL :ProcessImage "%~1" %~2
)

exit /b 0

:ProcessImage
REM Process a single image
set "filename=%~1"
set "maxSize=%~2"
set "outputFile=%~dpn1.%maxSize%%~x1"

echo Resizing image: %filename%

REM Do conversion with ImageMagick
magick convert %filename% -resize %maxSize%x%maxSize% "%outputFile%"

echo Success: Image resized to max dimension of: %maxSize%
echo %outputFile%

exit /b 0