@echo off
echo 🚀 Reliable Netlify Deployment Script...

echo 📋 Adding all changes to Git...
git add .

echo 💾 Committing changes...
git commit -m "Deploy: %date% %time%"

echo 🚀 Pushing to GitHub...
git push origin main

echo ⏳ Waiting 5 seconds for GitHub to process...
timeout /t 5 /nobreak >nul

echo 🔄 Triggering Netlify deploy via CLI...
netlify deploy --prod

if %errorlevel% equ 0 (
    echo ✅ Deployment successful!
    echo 🌐 Your site is now updated
) else (
    echo ❌ CLI deploy failed, trying manual trigger...
    echo 📝 Go to Netlify dashboard and click "Trigger deploy"
)

pause
