@echo off
echo ###################################################
echo # Description: Add audio file to mp4
echo # Usage: videoAddAudioToMp4.cmd /video/path.mp4 /audio/path.mp4
echo # Param 1: Video file
echo # Param 2: Audio file
echo # Requires: ffmpeg
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be a video file
    exit /b 1
)

IF "%~2"=="" (
    echo Error: 2nd arg must be an audio file
    exit /b 1
)

REM Verify files exist
IF NOT EXIST "%~1" (
    echo Error: Video file not found: %~1
    exit /b 1
)

IF NOT EXIST "%~2" (
    echo Error: Audio file not found: %~2
    exit /b 1
)

REM Get filenames and paths
set "videoFile=%~1"
set "audioFile=%~2"
set "outputFile=%~dp1%~n1.with-audio%~x1"

echo.
echo Processing:
echo - Video: %videoFile%
echo - Audio: %audioFile%
echo - Output will be saved to: %outputFile%
echo.

REM Add audio
echo Adding audio... Please wait.
ffmpeg -y -i "%videoFile%" -i "%audioFile%" -c:v copy -c:a aac -b:a 320k -strict -2 -map 0:v:0 -map 1:a:0 "%outputFile%" 2>nul

REM Check if operation was successful
IF %ERRORLEVEL% NEQ 0 (
    echo.
    echo Error: Failed to add audio to video.
    exit /b 1
)

REM Complete
echo.
echo Success: Video with added audio has been created:
echo # %outputFile%
exit /b 0