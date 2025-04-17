@echo off
echo ###################################################
echo # Description: Convert video to WebM
echo # Usage: videoCompressToWebM.cmd /path/to/video.mov 1000k [noalpha] [interpolate]
echo # Param 1: Video file
echo # Param 2: Video bitrate (quality)
echo # Param 3 [Optional]: "noalpha" to exclude alpha channel
echo # Param 4 [Optional]: "interpolate" to enable frame interpolation
echo # Requires: ffmpeg
echo ###################################################

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be a video file
    exit /b 1
)

IF "%~2"=="" (
    echo Error: 2nd arg must be video bitrate
    exit /b 1
)

REM Get filename and extension
set "filename=%~1"
set "bitrate=%~2"
set "outputFile=%~n1.webm"

REM Set interpolation filter if specified
set "filter="
IF "%~4"=="interpolate" (
    set "filter=-vf minterpolate='fps=60:mi_mode=mci:mc_mode=aobmc:me_mode=bidir:vsbmc=1'"
)

REM Check for noalpha option
IF "%~3"=="noalpha" (
    REM Single pass conversion without alpha
    ffmpeg -y -i "%filename%" -c:v libvpx-vp9 -b:v %bitrate% %filter% "%outputFile%"
) ELSE (
    REM First pass
    ffmpeg -y -i "%filename%" -c:v libvpx-vp9 -b:v %bitrate% -pass 1 -an -f null NUL

    REM Second pass
    ffmpeg -y -i "%filename%" -c:v libvpx-vp9 -b:v %bitrate% -pass 2 %filter% "%outputFile%"
)

REM Complete
echo Success: Video converted to WebM format: %outputFile%
