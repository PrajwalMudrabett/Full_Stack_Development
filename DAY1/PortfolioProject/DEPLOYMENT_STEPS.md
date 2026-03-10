# 🚀 Quick Deployment Steps

## Method 1: Netlify Drop (FASTEST - 2 minutes)

### Step 1: Deploy
1. Open https://app.netlify.com/drop in your browser
2. Drag the entire `PortfolioProject` folder onto the page
3. Wait for upload to complete
4. Your site is now live with a URL like: `random-name-123.netlify.app`

### Step 2: Add Custom Domain
1. Click "Domain settings" on your site dashboard
2. Click "Add custom domain"
3. Enter: `prajwalm.in`
4. Click "Verify"

### Step 3: Configure DNS (at your domain registrar)
Go to where you bought prajwalm.in and add these DNS records:

**For Netlify:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME  
Name: www
Value: [your-site-name].netlify.app
```

**DNS propagation takes 1-24 hours**

---

## Method 2: Vercel (Alternative - 3 minutes)

### Step 1: Deploy
1. Go to https://vercel.com/new
2. Sign up with GitHub/Google
3. Click "Deploy" and drag your folder
4. Site goes live instantly

### Step 2: Add Domain
1. Go to Project Settings → Domains
2. Add `prajwalm.in`
3. Follow DNS instructions provided

---

## Method 3: GitHub Pages (Free Forever)

### Step 1: Create Repository
```bash
cd DAY1/PortfolioProject
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Enable Pages
1. Go to repository Settings → Pages
2. Source: Deploy from branch `main` / `root`
3. Save

### Step 3: Add Custom Domain
1. In Pages settings, add `prajwalm.in`
2. Create CNAME file with content: `prajwalm.in`
3. Configure DNS:
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

---

## ✅ After Deployment Checklist

1. Test your site: https://prajwalm.in
2. Test mobile version (use phone or browser dev tools)
3. Verify all links work:
   - LinkedIn: https://www.linkedin.com/in/prajwal-mudrabett/
   - GitHub: https://github.com/PrajwalMudrabett
   - Email: prajwalmudrabett@gmail.com
4. Check HTTPS is working (🔒 icon in browser)
5. Test on different browsers (Chrome, Firefox, Safari)

---

## 🆘 Troubleshooting

**Site not loading?**
- Wait 24 hours for DNS propagation
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito mode
- Check DNS with: https://dnschecker.org

**Images not showing?**
- Verify `me.jpg` is uploaded
- Check file name matches exactly (case-sensitive)

**Mobile menu not working?**
- Clear cache and reload
- Check JavaScript console (F12)

---

## 📱 Test Your Mobile Version

1. Open Chrome DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Test different devices:
   - iPhone 12/13/14
   - Samsung Galaxy
   - iPad
4. Verify hamburger menu works
5. Check all sections are readable

---

**Need help?** The site is ready to deploy - just follow Method 1 (Netlify Drop) for the fastest results!
