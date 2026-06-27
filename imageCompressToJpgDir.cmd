@echo off
echo ###################################################
echo # Description: Compress all images in a directory to jpg, with a specified quality
echo # Usage: imageCompressToJpgDir.cmd /path/to/directory [quality] [width] [height]
echo # Param 1: Directory containing images
echo # Param 2 [Optional]: JPG quality (0-100, default: 85)
echo # Param 3 [Optional]: Width in pixels (for resize, maintains aspect ratio if used alone)
echo # Param 4 [Optional]: Height in pixels (for resize, used with width for exact dimensions)
echo # Requires: imagemagick, jpegoptim
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be a directory
    exit /b 1
)

REM Verify input directory exists
IF NOT EXIST "%~1\" (
    echo Error: Directory not found: %~1
    exit /b 1
)

set "inputDir=%~1"
set "quality=%~2"
set "width=%~3"
set "height=%~4"

set "count=0"

echo Processing directory: %inputDir%
echo.

REM Process common image formats
for %%f in ("%inputDir%\*.png" "%inputDir%\*.jpg" "%inputDir%\*.jpeg" "%inputDir%\*.tif" "%inputDir%\*.tiff" "%inputDir%\*.bmp" "%inputDir%\*.webp" "%inputDir%\*.heic" "%inputDir%\*.heif" "%inputDir%\*.avif") do (
    if exist "%%f" (
        echo ---
        call "%~dp0imageCompressToJpg.cmd" "%%f" %quality% %width% %height%
        set /a count+=1
        echo.
    )
)

echo ===================================
echo Done! Processed %count% image(s).
exit /b 0
