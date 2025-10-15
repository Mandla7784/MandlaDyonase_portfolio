@echo off
echo 🚀 Setting up Netlify CLI for consistent deployments...

echo 📦 Installing Netlify CLI globally...
npm install -g netlify-cli

echo 🔐 Logging into Netlify...
netlify login

echo 🔗 Linking to your site...
netlify link

echo 🚀 Deploying with CLI...
netlify deploy --prod

echo ✅ Setup complete! Now you can use:
echo   netlify deploy --prod
echo   netlify deploy --dir=. --prod
echo.
echo This will ALWAYS work regardless of Git integration issues.

pause
