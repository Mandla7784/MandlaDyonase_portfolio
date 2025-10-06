#!/bin/bash


echo "Installing dependencies..."
npm init -y      
npm install --save-dev jest

echo  "Runing  tests..."
npm test

# Navigate to your project folder
cd ~/OneDrive/Desktop/MandlaDyonase_portfolio

Start a simple static web server using Node.js
http-server -p 5500

echo "Portfolio running on http://localhost:5500"
