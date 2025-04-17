@echo off
echo ###################################################
echo # Description: Rename files replacing spaces with underscores
echo # Usage: fileRenameSpacesToUnderscores.cmd file|directory
echo # Param 1: File or directory to process
echo ###################################################
echo.

REM Check parameters
IF "%~1"=="" (
    echo Error: Specify a file or directory
    exit /b 1
)

REM Check if input is a directory
IF EXIST "%~1\" (
    echo Processing directory: %~1
    
    REM Loop through files in directory
    FOR %%i IN ("%~1\*.*") DO (
        CALL :ProcessFile "%%i"
    )
    
    echo Success: Renamed files in directory: %~1
) ELSE (
    CALL :ProcessFile "%~1"
)

exit /b 0

:ProcessFile
REM Process a single file
set "filepath=%~1"
set "filename=%~nx1"
set "directory=%~dp1"

REM Replace spaces with underscores in the filename
set "newname=%filename: =_%"

REM Only rename if there was a change
IF NOT "%filename%"=="%newname%" (
    echo Renaming: %filename% 
    echo      to: %newname%
    ren "%filepath%" "%newname%"
    echo File renamed successfully
)

exit /b 0