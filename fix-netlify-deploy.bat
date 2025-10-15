@echo off
echo 🔧 Fixing Netlify Auto-Deployment Issues...

echo 📋 Checking Git status...
git status

echo.
echo 📦 Adding all changes...
git add .

echo 💾 Committing changes...
git commit -m "Fix: Ensure Netlify auto-deployment works"

echo 🚀 Pushing to GitHub...
git push origin main

if %errorlevel% equ 0 (
    echo ✅ Successfully pushed to GitHub!
    echo.
    echo 🔍 Now check these in Netlify:
    echo 1. Go to your Netlify dashboard
    echo 2. Click on your site
    echo 3. Go to "Deploys" tab
    echo 4. Look for a new deployment starting
    echo.
    echo ⚠️  If no deployment starts, check:
    echo - Site settings → Build & deploy → Continuous Deployment
    echo - Make sure branch is set to "main"
    echo - Verify repository is connected
) else (
    echo ❌ Failed to push to GitHub
    echo Check your Git configuration
)

pause
