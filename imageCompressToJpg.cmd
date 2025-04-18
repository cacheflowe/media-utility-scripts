@echo off
echo ###################################################
echo # Description: Compress an image to jpg, with a specified quality
echo # Usage: imageCompressToJpg.cmd /path/to/image.png [quality] [width] [height]
echo # Param 1: Image file
echo # Param 2 [Optional]: JPG quality (0-100, default: 85)
echo # Param 3 [Optional]: Width in pixels (for resize, maintains aspect ratio if used alone)
echo # Param 4 [Optional]: Height in pixels (for resize, used with width for exact dimensions)
echo # Requires: imagemagick, jpegoptim
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be an image file
    exit /b 1
)

REM Verify input file exists
IF NOT EXIST "%~1" (
    echo Error: Image file not found: %~1
    exit /b 1
)

REM Set default quality if not specified
set "quality=85"
IF NOT "%~2"=="" (
    set "quality=%~2"
    
    REM Validate quality parameter is within range
    IF %quality% LSS 0 (
        echo Error: Quality must be between 0-100
        exit /b 1
    )
    IF %quality% GTR 100 (
        echo Error: Quality must be between 0-100
        exit /b 1
    )
)

REM Set optional resize parameters
set "width="
set "height="
set "resize="
IF NOT "%~3"=="" set "width=%~3"
IF NOT "%~4"=="" set "height=%~4"

REM Construct resize parameter if dimensions provided
IF NOT "%width%"=="" (
    IF NOT "%height%"=="" (
        REM Both width and height provided - exact resize
        set "resize=-resize %width%x%height%^!"
        set "sizeSuffix=_%width%x%height%"
    ) ELSE (
        REM Only width provided - maintain aspect ratio
        set "resize=-resize %width%x"
        set "sizeSuffix=_w%width%"
    )
) ELSE (
    IF NOT "%height%"=="" (
        REM Only height provided - maintain aspect ratio
        set "resize=-resize x%height%"
        set "sizeSuffix=_h%height%"
    ) ELSE (
        REM No dimensions provided - no resize
        set "resize="
        set "sizeSuffix="
    )
)

REM Get filename and extension
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

REM Check if jpegoptim is available
where jpegoptim >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
    echo Error: jpegoptim is not installed or not in PATH
    echo Continuing without jpegoptim optimization...
    set "skip_jpegoptim=1"
)

echo Converting image...
REM Do conversion with resize if specified
IF DEFINED resize (
    echo Resizing and compressing...
    magick convert "%filename%" %resize% -sampling-factor 4:2:0 -strip -quality %quality% -interlace JPEG -colorspace RGB "%outputFile%"
) ELSE (
    echo Compressing only...
    magick convert "%filename%" -sampling-factor 4:2:0 -strip -quality %quality% -interlace JPEG -colorspace RGB "%outputFile%"
)

IF %ERRORLEVEL% NEQ 0 (
    echo Error: Failed to convert image
    exit /b 1
)

REM Apply lossless compression if jpegoptim is available
IF NOT DEFINED skip_jpegoptim (
    echo Optimizing JPEG...
    jpegoptim "%outputFile%" 2>nul
    IF %ERRORLEVEL% NEQ 0 (
        echo Warning: jpegoptim optimization failed, but the image was still created
    )
)

REM Complete
echo.
echo Success: Compressed jpg at %quality%%% quality: 
echo # %outputFile%
exit /b 0