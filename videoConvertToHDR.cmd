@echo off
setlocal enabledelayedexpansion

echo ##################################################
echo ### Description: Convert an SDR video to fake HDR (HDR10) using zscale + x265
echo ### Usage: $ videoConvertToHDR.cmd video.mp4
echo ###        $ videoConvertToHDR.cmd video.mp4 -crf 20
echo ### Param 1: Input video file
echo ### Param 2+ [Optional]: Additional ffmpeg args (override defaults)
echo ### Requires: ffmpeg with zscale (libzimg) and libx265 support
echo ###################################################

@REM ################################################################################
@REM # check parameters & set defaults
@REM ################################################################################

set defaultCrf=18

if "%~1"=="" (
    echo.
    echo Error: 1st arg must be a video file
    exit /b 1
)

set "inputFile=%~1"

if not exist "%inputFile%" (
    echo.
    echo Error: File not found: %inputFile%
    exit /b 1
)

@REM Get any extra ffmpeg args from param 2 onward
set "extraArgs="
if not "%~2"=="" (
    set "allArgs=%*"
    for /f "tokens=1,* delims= " %%a in ("!allArgs!") do set "extraArgs=%%b"
)

@REM Build output filename: <name>.hdr.mp4
set "outputFile=%~dpn1.hdr.mp4"

echo.
echo Input:  %inputFile%
echo Output: %outputFile%
echo.

@REM ################################################################################
@REM # Run conversion
@REM ################################################################################

ffmpeg -y ^
  -i "%inputFile%" ^
  -vf "zscale=pin=bt709:tin=bt709:min=bt709:t=linear:npl=100,format=gbrpf32le,zscale=p=bt2020:t=smpte2084:m=bt2020nc:r=tv,format=yuv420p10le" ^
  -c:v libx265 ^
  -tag:v hvc1 ^
  -profile:v main10 ^
  -crf %defaultCrf% ^
  -pix_fmt yuv420p10le ^
  -color_primaries bt2020 ^
  -color_trc smpte2084 ^
  -colorspace bt2020nc ^
  -movflags +faststart ^
  -x265-params "colorprim=bt2020:transfer=smpte2084:colormatrix=bt2020nc:master-display=G(13250,34500)B(7500,3000)R(34000,16000)WP(15635,16450)L(10000000,1):max-cll=1000,400" ^
  -c:a aac -b:a 160k ^
  !extraArgs! ^
  "%outputFile%"

if %errorlevel% neq 0 (
    echo.
    echo Error: ffmpeg failed. Make sure your ffmpeg build supports zscale (libzimg) and libx265.
    exit /b %errorlevel%
)

echo.
echo Done: %outputFile%
