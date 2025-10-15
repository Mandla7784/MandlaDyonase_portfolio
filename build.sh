#!/bin/bash

# Build and run Mandla Dyonase Portfolio with Docker

echo "🚀 Building Mandla Dyonase Portfolio..."

# Build the Docker image
echo "📦 Building Docker image..."
docker build -t mandla-portfolio .

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully!"
    
    # Stop any existing container
    echo "🛑 Stopping existing container..."
    docker stop mandla-portfolio 2>/dev/null || true
    docker rm mandla-portfolio 2>/dev/null || true
    
    # Run the container
    echo "🏃 Starting portfolio container..."
    docker run -d \
        --name mandla-portfolio \
        -p 3000:80 \
        --restart unless-stopped \
        mandla-portfolio
    
    if [ $? -eq 0 ]; then
        echo "🎉 Portfolio is now running!"
        echo "🌐 Open your browser and go to: http://localhost:3000"
        echo "📊 Container status:"
        docker ps | grep mandla-portfolio
    else
        echo "❌ Failed to start container"
        exit 1
    fi
else
    echo "❌ Docker build failed"
    exit 1
fi
