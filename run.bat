@echo off
echo 🚀 Starting Mandla Dyonase Portfolio...

echo 📦 Starting portfolio with docker-compose...
docker-compose up -d

if %errorlevel% equ 0 (
    echo 🎉 Portfolio is now running!
    echo 🌐 Open your browser and go to: http://localhost:3000
    echo.
    echo 📊 Container status:
    docker-compose ps
    echo.
    echo 📝 Useful commands:
    echo   - View logs: docker-compose logs -f
    echo   - Stop: docker-compose down
    echo   - Restart: docker-compose restart
) else (
    echo ❌ Failed to start portfolio
    exit /b 1
)
