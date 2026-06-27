@echo off
setlocal enabledelayedexpansion

echo ##################################################
echo ### Description: Convert an SDR video to HDR (simple robust version)
echo ### Usage: $ videoConvertToHDR.simple.cmd video.mp4
echo ###        $ videoConvertToHDR.simple.cmd video.mp4 -crf 16
echo ### Param 1: Input video file
echo ### Param 2+ [Optional]: Additional ffmpeg args
echo ### Requires: ffmpeg with libx265 support
echo ###################################################

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

set defaultCrf=16

set "extraArgs="
if not "%~2"=="" (
    set "allArgs=%*"
    for /f "tokens=1,* delims= " %%a in ("!allArgs!") do set "extraArgs=%%b"
)

set "outputFile=%~dpn1.hdr.mp4"

echo.
echo Input:  %inputFile%
echo Output: %outputFile%
echo.

ffmpeg -y ^
  -i "%inputFile%" ^
  -vf "scale=in_color_matrix=bt709:out_color_matrix=bt2020,format=yuv420p10le,eq=saturation=1.15" ^
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
    echo Error: ffmpeg conversion failed.
    exit /b %errorlevel%
)

echo.
echo Done: %outputFile%
echo This file should play on iPhone 14+ and display with HDR/vibrant colors on Instagram.
