@echo off
setlocal enabledelayedexpansion

echo ###################################################
echo # Description: AI frame-interpolate (up to 60fps) and/or upscale a video
echo #              using RIFE + RealESRGAN (ncnn-vulkan, GPU accelerated)
echo # Usage: videoUpscale.cmd /path/to/video.mp4 [extra args]
echo # Param 1: Video file
echo # Param 2+ [Optional]: Extra args passed to video-upscale.py
echo #          (default when none given: -i -u  = interpolate to 60fps + upscale 2x)
echo # Examples:
echo #   videoUpscale.cmd clip.mp4                  (interpolate to 60fps + 2x upscale)
echo #   videoUpscale.cmd clip.mp4 -i               (interpolate to 60fps only)
echo #   videoUpscale.cmd clip.mp4 -u               (2x upscale only)
echo #   videoUpscale.cmd clip.mp4 -i -u -c phone   (60fps + 4x for real phone/camera video)
echo #   videoUpscale.cmd clip.mp4 -u -c anime      (4x upscale tuned for anime/art)
echo #   videoUpscale.cmd clip.mp4 -i -u -q 23      (lower quality / smaller file)
echo # Requires: python, ffmpeg, and bin\ binaries (see video-upscale\README.md)
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be a video file
    exit /b 1
)
IF NOT EXIST "%~1" (
    echo Error: Video file not found: %~1
    exit /b 1
)
IF EXIST "%~1\" (
    echo Error: "%~1" is a directory, not a file.
    exit /b 1
)

REM Check python
where python >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
    echo Error: python is not installed or not in PATH
    exit /b 1
)

set "script=%~dp0video-upscale\video-upscale.py"
set "inputFile=%~1"
set "outputFile=%~dpn1.upscaled.mp4"

REM Collect optional extra args (everything after param 1). Use a shift loop so
REM spaces in the input path don't corrupt the argument list. Default to "-i -u".
shift
set "extraArgs="
:gatherArgs
IF "%~1"=="" GOTO argsDone
set "extraArgs=!extraArgs! %1"
shift
GOTO gatherArgs
:argsDone
IF NOT DEFINED extraArgs set "extraArgs=-i -u"

echo Processing:
echo - Input:  %inputFile%
echo - Output: %outputFile%
echo - Args:   !extraArgs!
echo.

python "%script%" "%inputFile%" "%outputFile%" !extraArgs!

IF !ERRORLEVEL! NEQ 0 (
    echo Error: video-upscale failed
    exit /b 1
)

echo.
echo Success: %outputFile%
exit /b 0
