@echo off
echo ###################################################
echo # Description: Add audio file to mp4
echo # Usage: videoAddAudioToMp4.cmd /video/path.mp4 /audio/path.mp4
echo # Param 1: Video file
echo # Param 2: Audio file
echo # Requires: ffmpeg
echo ###################################################

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be a video file
    exit /b 1
)

IF "%~2"=="" (
    echo Error: 2nd arg must be an audio file
    exit /b 1
)

REM Get filename and extension
set "filename=%~1"
set "audioFile=%~2"
set "outputFile=%~1.with-audio.%~x1"
echo Adding audio %~2 to %~1

REM Add audio
ffmpeg -y -i "%filename%" -i "%audioFile%" -c:v copy -c:a aac -b:a 320k -strict -2 -map 0:v:0 -map 1:a:0 "%outputFile%"

REM Complete
echo Success: Video with audio: 
echo # %outputFile%