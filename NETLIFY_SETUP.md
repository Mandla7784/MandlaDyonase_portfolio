# Netlify CD Setup Guide for Mandla Dyonase Portfolio

This guide will walk you through setting up Continuous Deployment (CD) with Netlify for your portfolio project.

## 🎯 **What You'll Learn:**
- How to deploy your portfolio to Netlify
- Set up automatic deployments from Git
- Configure custom domains
- Use Netlify's CDN and performance features
- Set up form handling
- Configure redirects and headers

## 📋 **Prerequisites:**
- GitHub account
- Netlify account (free)
- Your portfolio project in a Git repository

## 🚀 **Step-by-Step Setup:**

### **Step 1: Prepare Your Repository**

1. **Push your project to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio with Docker setup"
   git branch -M main
   git remote add origin https://github.com/yourusername/MandlaDyonase_portfolio.git
   git push -u origin main
   ```

2. **Ensure these files are in your repository:**
   - ✅ `index.html`
   - ✅ `assets/` folder
   - ✅ `netlify.toml` (configuration file)
   - ✅ `_redirects` (redirect rules)
   - ✅ `README.md`

### **Step 2: Create Netlify Account**

1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up" 
3. Choose "Sign up with GitHub" (recommended)
4. Authorize Netlify to access your GitHub account

### **Step 3: Deploy Your Site**

#### **Method 1: Drag & Drop (Quick Test)**
1. Zip your project folder (excluding `.git`, `node_modules`)
2. Go to Netlify dashboard
3. Drag and drop the zip file
4. Your site will be live in minutes!

#### **Method 2: Git Integration (Recommended)**
1. In Netlify dashboard, click "New site from Git"
2. Choose "GitHub" as your Git provider
3. Select your repository: `MandlaDyonase_portfolio`
4. Configure build settings:
   - **Build command:** `echo 'Static site - no build needed'`
   - **Publish directory:** `.` (root directory)
5. Click "Deploy site"

### **Step 4: Configure Your Site**

#### **Site Settings:**
1. Go to **Site settings** → **Site information**
2. Change your site name to something like: `mandla-dyonase-portfolio`
3. Your site URL will be: `https://mandla-dyonase-portfolio.netlify.app`

#### **Custom Domain (Optional):**
1. Go to **Domain management**
2. Click "Add custom domain"
3. Enter your domain (e.g., `mandladyonase.com`)
4. Follow DNS configuration instructions

### **Step 5: Set Up Continuous Deployment**

#### **Automatic Deployments:**
- ✅ Every push to `main` branch = automatic deployment
- ✅ Pull requests = preview deployments
- ✅ Branch deploys for testing

#### **Deploy Hooks (Advanced):**
1. Go to **Site settings** → **Build & deploy** → **Deploy hooks**
2. Create a deploy hook for external triggers
3. Use the webhook URL in external services

### **Step 6: Configure Environment Variables**

1. Go to **Site settings** → **Environment variables**
2. Add any sensitive data:
   ```
   CONTACT_FORM_ENDPOINT=https://formspree.io/f/your-form-id
   ANALYTICS_ID=your-analytics-id
   ```

### **Step 7: Set Up Form Handling**

1. Go to **Forms** in your Netlify dashboard
2. Your contact form will automatically work
3. View form submissions in the dashboard
4. Set up email notifications

### **Step 8: Performance Optimization**

#### **Enable Netlify Features:**
1. **Asset Optimization:**
   - Go to **Site settings** → **Build & deploy** → **Post processing**
   - Enable "Asset optimization"

2. **Image Optimization:**
   - Enable "Image optimization"
   - Automatic WebP conversion

3. **Minification:**
   - Enable CSS and JS minification

### **Step 9: Security & Headers**

Your `netlify.toml` already includes:
- ✅ Security headers
- ✅ Cache control
- ✅ XSS protection
- ✅ Content type protection

### **Step 10: Monitoring & Analytics**

1. **Netlify Analytics:**
   - Go to **Analytics** tab
   - View visitor statistics
   - Monitor performance

2. **External Analytics:**
   - Add Google Analytics
   - Add other tracking services

## 🔧 **Advanced Configuration:**

### **Branch Deploys:**
```toml
# In netlify.toml
[context.production]
  command = "echo 'Production build'"

[context.deploy-preview]
  command = "echo 'Preview build'"

[context.branch-deploy]
  command = "echo 'Branch build'"
```

### **Build Plugins:**
```toml
# Add to netlify.toml
[[plugins]]
  package = "@netlify/plugin-sitemap"

[[plugins]]
  package = "@netlify/plugin-robots-txt"
```

### **Edge Functions:**
```javascript
// netlify/edge-functions/hello.js
export default async (request, context) => {
  return new Response("Hello from the edge!", {
    headers: { "content-type": "text/html" },
  });
};
```

## 📊 **Monitoring Your Deployments:**

### **Deploy Status:**
- ✅ **Published:** Live on your domain
- 🟡 **Building:** Currently deploying
- ❌ **Failed:** Check build logs

### **Build Logs:**
1. Go to **Deploys** tab
2. Click on any deployment
3. View detailed build logs
4. Debug any issues

## 🚨 **Troubleshooting:**

### **Common Issues:**

1. **Build Fails:**
   - Check build command in settings
   - Verify file paths
   - Check build logs

2. **404 Errors:**
   - Ensure `_redirects` file is present
   - Check `netlify.toml` redirect rules

3. **Assets Not Loading:**
   - Verify asset paths are correct
   - Check `netlify.toml` headers

4. **Form Not Working:**
   - Ensure form has `netlify` attribute
   - Check form name attribute

## 🎉 **Success Checklist:**

- ✅ Site deployed and accessible
- ✅ Custom domain configured (if applicable)
- ✅ Forms working
- ✅ Analytics tracking
- ✅ Performance optimized
- ✅ Security headers active
- ✅ Automatic deployments working

## 📚 **Next Steps:**

1. **Set up monitoring** with Netlify Analytics
2. **Configure custom domain** if you have one
3. **Set up email notifications** for form submissions
4. **Add more advanced features** like A/B testing
5. **Learn about Netlify Functions** for serverless features

## 🔗 **Useful Links:**

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Community](https://community.netlify.com/)
- [Netlify Blog](https://www.netlify.com/blog/)
- [Netlify Status](https://www.netlifystatus.com/)

---

**Congratulations!** You now have a professional portfolio with automated deployments! 🎉
