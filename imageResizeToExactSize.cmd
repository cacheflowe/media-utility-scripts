@echo off
setlocal enabledelayedexpansion

echo ###################################################
echo # Description: Resize an image to an exact size
echo # Usage: imageResizeToExactSize.cmd image.jpg 640 480 [custom args]
echo #        imageResizeToExactSize.cmd /path/to/images/ 640 480 [custom args]
echo # Param 1: Image file or directory
echo # Param 2: Width in pixels
echo # Param 3: Height in pixels
echo # Param 4+ [Optional]: Custom args for ImageMagick
echo # Requires: ImageMagick
echo ###################################################
echo.

@REM ################################################################################
@REM # check parameters & set defaults
@REM ################################################################################

@REM Check 1st arg
IF "%~1"=="" (
    echo Error: 1st arg must be an image file or directory
    exit /b 1
)
set inputPath=%1

@REM Check 2nd arg (width)
IF "%~2"=="" (
    echo Error: 2nd arg must be width
    exit /b 1
)
set width=%2

@REM Check 3rd arg (height)
IF "%~3"=="" (
    echo Error: 3rd arg must be height
    exit /b 1
)
set height=%3

@REM Get remaining args for ImageMagick
set imgArgs=
if "%4"=="" (
    echo ### Using default resize settings
) else (
    @REM Use all arguments after the third one
    set "allArgs=%*"
    for /f "tokens=1,2,3,* delims= " %%a in ("!allArgs!") do set "imgArgs=%%d"
    echo ### Using user-defined args: !imgArgs!
)

@REM ################################################################################
@REM Check if path is a directory or a file
@REM ################################################################################

if exist "%inputPath%\" (
    @REM Process directory
    echo.
    echo Processing all image files in directory: %inputPath%
    
    @REM Process all image files in the directory
    for %%F in ("%inputPath%\*.jpg" "%inputPath%\*.jpeg" "%inputPath%\*.png" "%inputPath%\*.gif" "%inputPath%\*.bmp" "%inputPath%\*.tif" "%inputPath%\*.tiff") do (
        echo.
        echo Processing: %%F
        CALL :ProcessFile "%%F" "%width%" "%height%" "%imgArgs%"
    )
    
    echo.
    echo Finished resizing all images in directory: %inputPath%
) else (
    @REM Process single file
    CALL :ProcessFile "%inputPath%" "%width%" "%height%" "%imgArgs%"
)

exit /b 0

:ProcessFile
@REM Process a single image file
set "filename=%~1"
set "width=%~2"
set "height=%~3"
set "extraArgs=%~4"
set "outputFile=%~dpn1_resized_%width%x%height%%~x1"

echo Resizing image: %filename% to %width%x%height%

@REM Do conversion - resize exactly (will distort if aspect ratio differs)
magick "%filename%" -resize "%width%x%height%!" %extraArgs% "%outputFile%"

echo Success: Image resized to: %outputFile%

exit /b 0