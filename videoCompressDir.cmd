@echo off
echo ###################################################
echo # Description: Compress videos in a directory to MP4
echo # Usage: videoCompressDir.cmd C:\path\to\videos ["-crf 23 -preset medium"]
echo # Param 1: Directory containing videos
echo # Param 2 [Optional]: Custom ffmpeg args (default: "-crf 23 -preset medium")
echo # Requires: ffmpeg
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be a directory
    exit /b 1
)

REM Validate directory exists
IF NOT EXIST "%~1\" (
    echo Error: Directory not found: %~1
    exit /b 1
)

REM Set defaults
set "customArgs=-crf 23 -preset medium"
IF NOT "%~2"=="" set "customArgs=%~2"
echo Using custom args: %customArgs%

REM Get directory
set "directory=%~1"
echo Processing videos in: %directory%

REM Loop through video files
FOR %%i IN ("%directory%\*.mp4" "%directory%\*.mov" "%directory%\*.avi" "%directory%\*.mkv" "%directory%\*.wmv") DO (
    CALL :ProcessVideo "%%i" "%customArgs%"
)

echo Success: All videos processed

exit /b 0

:ProcessVideo
REM Process a single video
set "filename=%~1"
set "customArgs=%~2"
set "outputFile=%~dpn1.compressed.mp4"

echo Compressing: %filename%

REM Do conversion
ffmpeg -i "%filename%" -c:v libx264 -pix_fmt yuv420p %customArgs% -c:a aac -b:a 192k "%outputFile%"

echo Success: Compressed to %outputFile%

exit /b 0