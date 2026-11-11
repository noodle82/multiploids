@echo off
set "MULTIPLOIDS_ROOT=%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Please install Node.js 22 or newer, then open this file again.
  pause
  exit /b 1
)
powershell -NoProfile -WindowStyle Hidden -Command "Start-Process -FilePath node -ArgumentList server.js -WorkingDirectory $env:MULTIPLOIDS_ROOT -WindowStyle Hidden; Start-Sleep -Milliseconds 1200; Start-Process http://localhost:4190/"
