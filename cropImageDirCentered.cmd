@echo off
echo ###################################################
echo # Description: Crop images in a directory to be centered
echo # Usage: cropImageDirCentered.cmd C:\path\to\images 640 480
echo # Param 1: Directory of images
echo # Param 2: New width
echo # Param 3: New height
echo # Requires: ImageMagick
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be a directory
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
set "directory=%~1"
set "width=%~2"
set "height=%~3"

REM Validate directory exists
IF NOT EXIST "%directory%\" (
    echo Error: Directory not found: %directory%
    exit /b 1
)

echo Processing images in %directory% to %width%x%height%

REM Loop through image files
FOR %%i IN ("%directory%\*.jpg" "%directory%\*.png" "%directory%\*.jpeg" "%directory%\*.gif") DO (
    CALL :ProcessImage "%%i" %width% %height%
)

echo Success: All images processed

exit /b 0

:ProcessImage
REM Process a single image
set "filename=%~1"
set "width=%~2"
set "height=%~3"
set "outputFile=%~dpn1.crop.%width%x%height%%~x1"

echo Cropping image: %filename% to %width%x%height%

REM Do conversion - gravity center crops from the center
magick convert "%filename%" -gravity center -resize %width%x%height%^ -extent %width%x%height% "%outputFile%"

exit /b 0