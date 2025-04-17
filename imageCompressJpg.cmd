@echo off
echo ###################################################
echo # Description: Compress image(s) to jpg with specified quality
echo # Usage: imageCompressJpg.cmd image.png|directory 85
echo # Param 1: Image file or directory of images
echo # Param 2: JPG quality (0-100)
echo # Requires: imagemagick, jpegoptim
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be an image file or directory
    exit /b 1
)

IF "%~2"=="" (
    echo Error: 2nd arg must be compression quality (0-100)
    exit /b 1
)

REM Check if input is a directory
IF EXIST "%~1\" (
    echo Processing directory: %~1
    
    REM Loop through image files in directory
    FOR %%i IN (%~1\*.png %~1\*.jpg %~1\*.jpeg %~1\*.gif %~1\*.webp) DO (
        CALL :ProcessImage "%%i" %~2
    )
    
    echo Success: Compressed files in: %~1
) ELSE (
    CALL :ProcessImage "%~1" %~2
)

exit /b 0

:ProcessImage
REM Process a single image
set "filename=%~1"
set "quality=%~2"
set "outputFile=%~dpn1.q%quality%.jpg"

echo Compressing image: %filename% with quality: %quality%%%

REM Do conversion with ImageMagick
magick convert "%filename%" -sampling-factor 4:2:0 -strip -quality %quality% -interlace JPEG -colorspace RGB "%outputFile%"

REM Run lossless compression with jpegoptim if available
where jpegoptim >nul 2>&1
IF NOT ERRORLEVEL 1 (
    jpegoptim "%outputFile%"
)

echo Success: Compressed jpg at %quality%%% quality: %outputFile%

exit /b 0