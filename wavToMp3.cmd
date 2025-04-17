@echo off
echo ###################################################
echo # Description: Convert WAV to MP3 format
echo # Usage: wavToMp3.cmd /path/to/audio.wav [192]
echo # Param 1: Audio file or directory
echo # Param 2 [Optional]: Bitrate in kbps (default: 320)
echo # Requires: ffmpeg
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be an audio file or directory
    exit /b 1
)

REM Set defaults
set "bitrate=320"
IF NOT "%~2"=="" set "bitrate=%~2"
echo [Optional]: Using bitrate of %bitrate%kbps

REM Check if input is a directory
IF EXIST "%~1\" (
    echo Processing directory: %~1
    
    REM Loop through wav files in directory
    FOR %%i IN ("%~1\*.wav") DO (
        CALL :ProcessFile "%%i" %bitrate%
    )
    
    echo Success: Converted files in: %~1
) ELSE (
    CALL :ProcessFile "%~1" %bitrate%
)

exit /b 0

:ProcessFile
REM Process a single audio file
set "filename=%~1"
set "bitrate=%~2"
set "outputFile=%~dpn1.mp3"

echo Converting: %filename% to MP3 at %bitrate%kbps

REM Do conversion
ffmpeg -i "%filename%" -ab %bitrate%k "%outputFile%"

echo Success: Created MP3: %outputFile%

exit /b 0