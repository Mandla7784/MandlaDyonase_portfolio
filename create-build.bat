@echo off
echo 📦 Creating production build for Mandla Dyonase Portfolio...

REM Create build directory
if exist build rmdir /s /q build
mkdir build

REM Copy essential files
echo 📋 Copying project files...
copy index.html build\
copy README.md build\
copy DOCKER.md build\
copy Dockerfile build\
copy docker-compose.yml build\
copy nginx.conf build\
copy .dockerignore build\
copy run.bat build\
copy build.bat build\
copy CNAME build\
copy ads.txt build\

REM Copy assets directory
echo 🎨 Copying assets...
xcopy assets build\assets\ /E /I /Y

REM Create build info
echo 📝 Creating build info...
echo Build created on: %date% %time% > build\build-info.txt
echo Project: Mandla Dyonase Portfolio >> build\build-info.txt
echo Version: 1.0 >> build\build-info.txt

echo ✅ Build created successfully in 'build' folder!
echo 📁 You can now zip the 'build' folder and share it.
pause
