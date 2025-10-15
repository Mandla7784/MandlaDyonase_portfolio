# Docker Setup for Mandla Dyonase Portfolio

This document explains how to run your portfolio using Docker.

## Prerequisites

- Docker Desktop installed and running
- Docker Compose (included with Docker Desktop)

## Quick Start

### Option 1: Using Docker Compose (Recommended)

```bash
# Start the portfolio
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the portfolio
docker-compose down
```

### Option 2: Using Docker directly

```bash
# Build the image
docker build -t mandla-portfolio .

# Run the container
docker run -d --name mandla-portfolio -p 3000:80 mandla-portfolio
```

### Option 3: Using provided scripts

**Windows:**

```cmd
# Build and run
build.bat

# Or just run (if already built)
run.bat
```

**Linux/Mac:**

```bash
# Build and run
./build.sh

# Or just run (if already built)
./run.sh
```

## Accessing Your Portfolio

Once running, open your browser and navigate to:

- **Local:** http://localhost:3000
- **Network:** http://[your-ip]:3000

## Docker Configuration

### Files Created:

- `Dockerfile` - Container configuration
- `docker-compose.yml` - Multi-container setup
- `nginx.conf` - Nginx web server configuration
- `.dockerignore` - Files to exclude from build

### Features:

- ✅ **Nginx web server** for optimal performance
- ✅ **Gzip compression** for faster loading
- ✅ **Static asset caching** for better performance
- ✅ **Security headers** for protection
- ✅ **Client-side routing support**
- ✅ **Auto-restart** on container failure

## Useful Commands

```bash
# View running containers
docker ps

# View logs
docker-compose logs -f

# Stop and remove containers
docker-compose down

# Rebuild and restart
docker-compose up -d --build

# Remove all containers and images
docker-compose down --rmi all
```

## Production Deployment

For production deployment, consider:

1. **Environment variables** for configuration
2. **SSL/TLS certificates** for HTTPS
3. **Load balancing** for high traffic
4. **Monitoring** and logging
5. **Backup strategies**

## Troubleshooting

### Port already in use

```bash
# Check what's using port 3000
netstat -ano | findstr :3000

# Use a different port
docker run -d --name mandla-portfolio -p 8080:80 mandla-portfolio
```

### Container won't start

```bash
# Check logs
docker logs mandla-portfolio

# Check container status
docker ps -a
```

### Permission issues

```bash
# On Linux/Mac, ensure scripts are executable
chmod +x build.sh run.sh
```

## Development

For development with live reload, you can mount your local files:

```bash
docker run -d \
  --name mandla-portfolio-dev \
  -p 3000:80 \
  -v $(pwd):/usr/share/nginx/html \
  mandla-portfolio
```

This will automatically reflect changes in your local files.
