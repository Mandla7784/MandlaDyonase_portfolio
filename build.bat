@echo off
echo 🚀 Building Mandla Dyonase Portfolio...

echo 📦 Building Docker image...
docker build -t mandla-portfolio .

if %errorlevel% equ 0 (
    echo ✅ Docker image built successfully!
    
    echo 🛑 Stopping existing container...
    docker stop mandla-portfolio 2>nul
    docker rm mandla-portfolio 2>nul
    
    echo 🏃 Starting portfolio container...
    docker run -d --name mandla-portfolio -p 3000:80 --restart unless-stopped mandla-portfolio
    
    if %errorlevel% equ 0 (
        echo 🎉 Portfolio is now running!
        echo 🌐 Open your browser and go to: http://localhost:3000
        echo 📊 Container status:
        docker ps | findstr mandla-portfolio
    ) else (
        echo ❌ Failed to start container
        exit /b 1
    )
) else (
    echo ❌ Docker build failed
    exit /b 1
)
