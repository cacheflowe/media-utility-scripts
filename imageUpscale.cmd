@echo off
setlocal enabledelayedexpansion

echo ###################################################
echo # Description: AI-upscale an image (or a folder of images) using
echo #              RealESRGAN (ncnn-vulkan, GPU accelerated via Vulkan)
echo # Usage: imageUpscale.cmd /path/to/image.png [preset^|scale] [model]
echo #        imageUpscale.cmd /path/to/images/   [preset^|scale] [model]
echo # Param 1: Image file OR a directory of images
echo # Param 2 [Optional]: a content PRESET or an upscale FACTOR (default: 2)
echo #          Presets:  photo  = realesrgan-x4plus         x4 (real photos)
echo #                    phone  = realesr-general-wdn-x4v3  x4 (phone/camera, denoise)
echo #                    anime  = realesrgan-x4plus-anime   x4 (anime/art)
echo #                    video  = realesr-animevideov3      x2 (all-rounder)
echo #          Factors:  2, 3, or 4
echo # Param 3 [Optional]: Model name, explicitly overrides the preset/default
echo # Requires: bin\realesrgan binaries (see video-upscale\README.md)
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be an image file or directory
    exit /b 1
)
IF NOT EXIST "%~1" (
    echo Error: Path not found: %~1
    exit /b 1
)

REM Defaults
set "scale=2"
set "model=realesr-animevideov3"

REM Param 2 may be a content preset keyword OR an upscale factor (2/3/4)
IF /I "%~2"=="photo" (
    set "model=realesrgan-x4plus" & set "scale=4"
) ELSE IF /I "%~2"=="phone" (
    set "model=realesr-general-wdn-x4v3" & set "scale=4"
) ELSE IF /I "%~2"=="anime" (
    set "model=realesrgan-x4plus-anime" & set "scale=4"
) ELSE IF /I "%~2"=="video" (
    set "model=realesr-animevideov3" & set "scale=2"
) ELSE IF NOT "%~2"=="" (
    set "scale=%~2"
)

REM Param 3 explicitly overrides the model
IF NOT "%~3"=="" set "model=%~3"

REM Only animevideov3 ships x2/x3/x4 weights; every other model is 4x-only.
echo %model% | findstr /c:"animevideov3" >nul
IF !ERRORLEVEL! NEQ 0 (
    IF NOT "!scale!"=="4" (
        echo Note: model "%model%" is 4x-only; using scale 4.
        set "scale=4"
    )
)

set "esrganDir=%~dp0video-upscale\bin\realesrgan"
set "esrganExe=%esrganDir%\realesrgan-ncnn-vulkan.exe"
set "modelDir=%esrganDir%\models"

IF NOT EXIST "%esrganExe%" (
    echo Error: realesrgan binary not found at %esrganExe%
    echo See video-upscale\README.md for download instructions.
    exit /b 1
)

REM Directory or single file?
IF EXIST "%~1\" (
    REM ---- Directory: batch process into a sibling _upscaled folder ----
    set "inputDir=%~1"
    set "outputDir=%~f1_x!scale!_upscaled"
    IF NOT EXIST "!outputDir!" mkdir "!outputDir!"

    echo Processing directory:
    echo - Input:  !inputDir!
    echo - Output: !outputDir!
    echo - Scale:  x!scale!
    echo - Model:  %model%
    echo.

    "%esrganExe%" -i "!inputDir!" -o "!outputDir!" -n %model% -s !scale! -m "%modelDir%" -f png
    IF !ERRORLEVEL! NEQ 0 (
        echo Error: upscaling failed
        exit /b 1
    )
    echo.
    echo Success: Upscaled images at: !outputDir!
) ELSE (
    REM ---- Single file ----
    set "inputFile=%~1"
    set "outputFile=%~dpn1.x!scale!.upscaled.png"

    echo Processing image:
    echo - Input:  !inputFile!
    echo - Output: !outputFile!
    echo - Scale:  x!scale!
    echo - Model:  %model%
    echo.

    "%esrganExe%" -i "!inputFile!" -o "!outputFile!" -n %model% -s !scale! -m "%modelDir%" -f png
    IF !ERRORLEVEL! NEQ 0 (
        echo Error: upscaling failed
        exit /b 1
    )
    echo.
    echo Success: Upscaled image at: !outputFile!
)

exit /b 0
