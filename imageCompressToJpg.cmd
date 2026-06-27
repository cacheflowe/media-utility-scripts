@echo off
setlocal enabledelayedexpansion
echo ###################################################
echo # Description: Compress an image to jpg, with a specified quality
echo # Usage: imageCompressToJpg.cmd /path/to/image.png [quality] [width] [height]
echo # Param 1: Image file
echo # Param 2 [Optional]: JPG quality (0-100, default: 85)
echo # Param 3 [Optional]: Width in pixels (for resize, maintains aspect ratio if used alone)
echo # Param 4 [Optional]: Height in pixels (for resize, used with width for exact dimensions)
echo # Requires: imagemagick, jpegoptim (optional)
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be an image file
    exit /b 1
)

IF NOT EXIST "%~1" (
    echo Error: Image file not found: %~1
    exit /b 1
)

IF EXIST "%~1\" (
    echo Error: "%~1" is a directory, not a file.
    echo Use imageCompressToJpgDir.cmd for directories.
    exit /b 1
)

REM Set default quality if not specified
set "quality=85"
IF NOT "%~2"=="" set "quality=%~2"

REM Set optional resize parameters
set "width=%~3"
set "height=%~4"
set "resize="
set "sizeSuffix="

IF NOT "%width%"=="" (
    IF NOT "%height%"=="" (
        set "resize=-resize %width%x%height%^!"
        set "sizeSuffix=_%width%x%height%"
    ) ELSE (
        set "resize=-resize %width%x"
        set "sizeSuffix=_w%width%"
    )
) ELSE IF NOT "%height%"=="" (
    set "resize=-resize x%height%"
    set "sizeSuffix=_h%height%"
)

set "filename=%~1"
set "outputFile=%~dp1%~n1%sizeSuffix%.q%quality%.jpg"

echo Processing:
echo - Input: %filename%
echo - Quality: %quality%%%
IF DEFINED resize echo - Resize: %resize%
echo - Output: %outputFile%
echo.

REM Check if ImageMagick is available
where magick >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
    echo Error: ImageMagick is not installed or not in PATH
    exit /b 1
)

REM Convert image
echo Converting image...
IF DEFINED resize (
    magick "%filename%[0]" %resize% -sampling-factor 4:2:0 -strip -quality %quality% -interlace JPEG -colorspace sRGB "%outputFile%"
) ELSE (
    magick "%filename%[0]" -sampling-factor 4:2:0 -strip -quality %quality% -interlace JPEG -colorspace sRGB "%outputFile%"
)

IF !ERRORLEVEL! NEQ 0 (
    echo Error: Failed to convert image
    exit /b 1
)

REM Apply lossless optimization if jpegoptim is available
where jpegoptim >nul 2>nul
IF %ERRORLEVEL% EQU 0 (
    jpegoptim "%outputFile%" 2>nul
)

echo.
echo Success: Compressed jpg at %quality%%% quality:
echo # %outputFile%
exit /b 0