@echo off
echo ###################################################
echo # Description: Extract a poster frame from a video or videos in a directory
echo # Usage: videoToImagePoster.cmd /path/to/video.mov [2.0]
echo #        videoToImagePoster.cmd /path/to/videos/directory [2.0]
echo # Param 1: Video file or directory containing video files
echo # Param 2 [Optional]: Time in seconds
echo # Requires: ffmpeg
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: 1st arg must be a video file or directory
    exit /b 1
)

REM Set defaults
set "extractTime=0"
IF NOT "%~2"=="" set "extractTime=%~2"

REM Check if path is a directory or a file
IF EXIST "%~1\" (
    echo Processing all video files in directory: %~1
    
    REM Process all video files in the directory
    FOR %%F IN ("%~1\*.mp4" "%~1\*.mov" "%~1\*.avi" "%~1\*.mkv" "%~1\*.wmv") DO (
        echo.
        echo Processing: %%F
        set "outputFile=%%~nF.%extractTime%.jpg"
        
        echo Saving thumbnail for movie: %%F at %extractTime% seconds
        
        REM Do conversion
        ffmpeg -ss %extractTime% -i "%%F" -t 1 -q:v 0 -f image2 "%%~dpnF.%extractTime%.jpg"
        
        echo Extracted poster frame at %extractTime% seconds:
        echo # %%~dpnF.%extractTime%.jpg
    )
    
    echo.
    echo Finished processing all videos in directory: %~1
) ELSE (
    REM Process single file
    set "filename=%~1"
    set "outputFile=%~n1.%extractTime%.jpg"
    
    echo Saving thumbnail for movie: %filename% at %extractTime% seconds
    
    REM Do conversion
    ffmpeg -ss %extractTime% -i "%filename%" -t 1 -q:v 0 -f image2 "%outputFile%"
    
    REM Complete
    echo Extracted poster frame at %extractTime% seconds:
    echo # %outputFile%
)