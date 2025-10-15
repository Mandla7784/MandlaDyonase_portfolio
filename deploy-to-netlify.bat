@echo off
echo 🚀 Preparing Mandla Dyonase Portfolio for Netlify Deployment...

REM Check if git is initialized
if not exist .git (
    echo 📦 Initializing Git repository...
    git init
    git branch -M main
)

REM Add all files to git
echo 📋 Adding files to Git...
git add .

REM Commit changes
echo 💾 Committing changes...
git commit -m "Deploy: Portfolio ready for Netlify CD"

REM Check if remote exists
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo ⚠️  No remote repository found!
    echo 📝 Please add your GitHub repository:
    echo    git remote add origin https://github.com/yourusername/MandlaDyonase_portfolio.git
    echo.
    echo 🔗 Then push with: git push -u origin main
    pause
    exit /b 1
)

REM Push to GitHub
echo 🚀 Pushing to GitHub...
git push origin main

if %errorlevel% equ 0 (
    echo ✅ Successfully pushed to GitHub!
    echo.
    echo 🎯 Next steps for Netlify:
    echo 1. Go to https://netlify.com
    echo 2. Sign up with GitHub
    echo 3. Click "New site from Git"
    echo 4. Select your repository
    echo 5. Deploy!
    echo.
    echo 🌐 Your site will be live at: https://your-site-name.netlify.app
) else (
    echo ❌ Failed to push to GitHub
    echo Check your internet connection and GitHub credentials
)

pause
