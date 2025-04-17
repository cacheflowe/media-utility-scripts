@echo off
echo ###################################################
echo # Description: Crops a portion of a video
echo # Usage: videoCropDimensions.cmd /path/to/video.mp4 10 10 200 200 ["-crf 1"]
echo # Param 1: Video file
echo # Param 2: x
echo # Param 3: y
echo # Param 4: width
echo # Param 5: height
echo # Param 6 [Optional]: Custom args "-crf 1"
echo # Requires: ffmpeg
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be a video file
    exit /b 1
)

IF "%~2"=="" (
    echo Error: 2nd arg must be a crop x
    exit /b 1
)

IF "%~3"=="" (
    echo Error: 3rd arg must be a crop y
    exit /b 1
)

IF "%~4"=="" (
    echo Error: 4th arg must be a crop width
    exit /b 1
)

IF "%~5"=="" (
    echo Error: 5th arg must be a crop height
    exit /b 1
)

REM Set defaults
set "customArgs=-crf 1"
IF NOT "%~6"=="" set "customArgs=%~6"
set "extraVFArgs="
IF NOT "%~7"=="" set "extraVFArgs=%~7"

REM Get filename
set "filename=%~1"
set "cropX=%~2"
set "cropY=%~3"
set "cropWidth=%~4"
set "cropHeight=%~5"
set "outputFile=%~n1.crop.x%cropX%.y%cropY%.w%cropWidth%.h%cropHeight%.mp4"

echo Cropping video: %filename%

REM Do conversion
ffmpeg -i "%filename%" -filter:v "crop=%cropWidth%:%cropHeight%:%cropX%:%cropY% %extraVFArgs%" -pix_fmt yuv420p -vcodec libx264 %customArgs% -f mp4 "%outputFile%"

REM Complete
echo Success: Video cropped: 
echo # %outputFile%