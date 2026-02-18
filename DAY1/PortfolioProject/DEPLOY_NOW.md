# 🚀 Deploy Your Portfolio NOW - Step by Step

## ✅ What's Already Done:
- ✅ Git repository initialized
- ✅ All files committed
- ✅ CNAME file created for prajwalm.in
- ✅ Portfolio is mobile-responsive and professional

---

## 📋 NEXT STEPS - Follow Exactly:

### Step 1: Create GitHub Repository (2 minutes)

1. **Go to GitHub:**
   - Open: https://github.com/new
   - (If you don't have an account, create one first at https://github.com/signup)

2. **Create Repository:**
   - Repository name: `portfolio` (or any name you like)
   - Description: "My professional portfolio website"
   - Make it **Public** (important for free hosting)
   - **DO NOT** check "Add README" or any other files
   - Click "Create repository"

3. **You'll see a page with commands - IGNORE THEM for now**

---

### Step 2: Push Your Code to GitHub (1 minute)

**Open your terminal/command prompt in the PortfolioProject folder and run:**

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

Example: If your username is "PrajwalMudrabett":
```bash
git remote add origin https://github.com/PrajwalMudrabett/portfolio.git
git branch -M main
git push -u origin main
```

**Note:** You may be asked to login to GitHub - follow the prompts.

---

### Step 3: Enable GitHub Pages (1 minute)

1. **Go to your repository on GitHub:**
   - URL will be: `https://github.com/YOUR_USERNAME/portfolio`

2. **Click "Settings" tab** (top right of repository page)

3. **Scroll down and click "Pages"** (left sidebar)

4. **Configure Pages:**
   - Source: Select "Deploy from a branch"
   - Branch: Select "main" and folder "/ (root)"
   - Click "Save"

5. **Wait 2-3 minutes** - GitHub will build your site

6. **Your site will be live at:**
   - `https://YOUR_USERNAME.github.io/portfolio/`

---

### Step 4: Connect Your Custom Domain prajwalm.in (5 minutes)

#### A. In GitHub Pages Settings:

1. Still in Settings → Pages
2. Under "Custom domain", enter: `prajwalm.in`
3. Click "Save"
4. Check "Enforce HTTPS" (after DNS is configured)

#### B. Configure DNS at Your Domain Registrar:

**Go to where you bought prajwalm.in** (GoDaddy, Namecheap, Hostinger, etc.)

**Add these DNS records:**

```
Record Type: A
Name: @ (or leave blank)
Value: 185.199.108.153
TTL: 3600

Record Type: A
Name: @ (or leave blank)
Value: 185.199.109.153
TTL: 3600

Record Type: A
Name: @ (or leave blank)
Value: 185.199.110.153
TTL: 3600

Record Type: A
Name: @ (or leave blank)
Value: 185.199.111.153
TTL: 3600

Record Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
TTL: 3600
```

**Replace `YOUR_USERNAME` with your GitHub username!**

---

## ⏰ DNS Propagation Time

- DNS changes take **1-24 hours** to propagate worldwide
- Your site will work at `YOUR_USERNAME.github.io/portfolio` immediately
- `prajwalm.in` will work after DNS propagates

---

## 🧪 Test Your Site

**Immediately available:**
- https://YOUR_USERNAME.github.io/portfolio/

**After DNS propagation:**
- https://prajwalm.in
- https://www.prajwalm.in

**Test on mobile:**
1. Open on your phone
2. Test hamburger menu
3. Check all sections scroll smoothly
4. Verify all links work

---

## 🆘 Troubleshooting

**"Permission denied" when pushing to GitHub?**
- You need to authenticate with GitHub
- Use GitHub CLI or Personal Access Token
- Follow: https://docs.github.com/en/authentication

**Site not showing after 5 minutes?**
- Check Actions tab in GitHub repository
- Look for green checkmark (build successful)
- If red X, click to see error

**Domain not working after 24 hours?**
- Check DNS with: https://dnschecker.org
- Verify DNS records are correct
- Make sure CNAME file exists in repository

**Images not loading?**
- Check file names are correct (case-sensitive)
- Verify me.jpg is in the repository

---

## 🎉 Success Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Site loads at github.io URL
- [ ] Custom domain added in GitHub
- [ ] DNS records configured
- [ ] Site loads at prajwalm.in (after DNS propagation)
- [ ] Mobile version tested
- [ ] All links work (LinkedIn, GitHub, Email)
- [ ] HTTPS enabled

---

## 📞 Your Current Status:

✅ Portfolio files ready
✅ Git repository initialized
✅ Files committed
⏳ Need to create GitHub repository
⏳ Need to push code
⏳ Need to enable Pages
⏳ Need to configure DNS

**Start with Step 1 above!**

---

## Alternative: Quick Deploy with Netlify (No GitHub needed)

If you prefer not to use GitHub:

1. Go to: https://app.netlify.com/drop
2. Drag your entire `PortfolioProject` folder
3. Site goes live instantly
4. Add custom domain `prajwalm.in` in settings
5. Configure DNS as shown by Netlify

**Netlify DNS records:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

---

**Need help? Let me know which step you're on!**
