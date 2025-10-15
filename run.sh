#!/bin/bash

# Quick run script for Mandla Dyonase Portfolio

echo "🚀 Starting Mandla Dyonase Portfolio..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

# Use docker-compose for easy management
echo "📦 Starting portfolio with docker-compose..."
docker-compose up -d

if [ $? -eq 0 ]; then
    echo "🎉 Portfolio is now running!"
    echo "🌐 Open your browser and go to: http://localhost:3000"
    echo ""
    echo "📊 Container status:"
    docker-compose ps
    echo ""
    echo "📝 Useful commands:"
    echo "  - View logs: docker-compose logs -f"
    echo "  - Stop: docker-compose down"
    echo "  - Restart: docker-compose restart"
else
    echo "❌ Failed to start portfolio"
    exit 1
fi
