@echo off
setlocal enabledelayedexpansion

echo ##################################################
echo # Description: Resize an image to a maximum dimension
echo # Usage: imageResizeToMaxDimension.cmd image_file.jpg 640
echo #        imageResizeToMaxDimension.cmd /path/to/images/ 640 [custom args]
echo # Param 1: Image file or directory
echo # Param 2: Maximum width/height
echo # Param 3+ [Optional]: Custom args for ImageMagick
echo # Requires: Imagemagick
echo ##################################################

REM ################################################################################
REM # check parameters & set defaults
REM ################################################################################

REM Check first parameter (image file or directory)
IF "%~1"=="" (
    echo Error: 1st arg must be an image file or directory
    exit /b 1
)
set inputPath=%1

REM Check second parameter (max dimension)
IF "%~2"=="" (
    echo Error: 2nd arg must be maximum size
    exit /b 1
)
set maxDimension=%2

REM Get remaining args for ImageMagick
set imgArgs=
if "%3"=="" (
    echo ### Using default resize settings
) else (
    REM Use all arguments after the second one
    set "allArgs=%*"
    for /f "tokens=1,2,* delims= " %%a in ("!allArgs!") do set "imgArgs=%%c"
    echo ### Using user-defined args: !imgArgs!
)

REM ################################################################################
REM Check if path is a directory or a file
REM ################################################################################

if exist "%inputPath%\" (
    REM Process directory
    echo.
    echo Processing all image files in directory: %inputPath%
    
    REM Process all image files in the directory
    for %%F in ("%inputPath%\*.jpg" "%inputPath%\*.jpeg" "%inputPath%\*.png" "%inputPath%\*.gif" "%inputPath%\*.bmp" "%inputPath%\*.tif" "%inputPath%\*.tiff") do (
        echo.
        echo Processing: %%F
        CALL :ProcessFile "%%F" "%maxDimension%" "%imgArgs%"
    )
    
    echo.
    echo Finished resizing all images in directory: %inputPath%
) else (
    REM Process single file
    CALL :ProcessFile "%inputPath%" "%maxDimension%" "%imgArgs%"
)

exit /b 0

:ProcessFile
REM Process a single image file
set "filename=%~1"
set "dimension=%~2"
set "extraArgs=%~3"
set "outputFile=%~dpn1_resized_%dimension%%~x1"

echo Resizing image: %filename% to max dimension: %dimension%

REM Do conversion
magick "%filename%" -resize "%dimension%x%dimension%" %extraArgs% "%outputFile%"

echo Success: Image resized to max dimension of: %dimension%
echo %outputFile%

exit /b 0