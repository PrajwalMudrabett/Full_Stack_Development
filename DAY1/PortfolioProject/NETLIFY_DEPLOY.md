# 🚀 Deploy to Netlify - Complete Guide

## 📁 Files Ready to Deploy
Your portfolio is 100% ready. All files in the `PortfolioProject` folder will be deployed.

---

## Step 1: Deploy to Netlify (2 minutes)

### Method A: Netlify Drop (Easiest - No Account Needed Initially)

1. **Open Netlify Drop:**
   - Go to: https://app.netlify.com/drop
   - You'll see a drag-and-drop zone

2. **Drag Your Folder:**
   - Open File Explorer
   - Navigate to: `D:\FULL_STACK_TRAINING\DAY1\PortfolioProject`
   - Drag the ENTIRE `PortfolioProject` folder onto the Netlify Drop page
   - Wait for upload (should take 10-30 seconds)

3. **Site is Live!**
   - You'll get a random URL like: `random-name-12345.netlify.app`
   - Click the URL to see your portfolio live!
   - Test it - everything should work

4. **Create Account (to manage your site):**
   - Click "Claim this site" or "Sign up"
   - Sign up with Email, GitHub, or Google
   - This lets you manage the site and add your custom domain

---

### Method B: Netlify with Account (Recommended for Full Control)

1. **Sign Up:**
   - Go to: https://app.netlify.com/signup
   - Sign up with Email, GitHub, or Google (free)

2. **Deploy Site:**
   - After login, you'll see "Add new site" button
   - Click "Deploy manually"
   - Drag your `PortfolioProject` folder
   - Wait for deployment (30 seconds)

3. **Site is Live!**
   - You'll get a URL like: `your-site-name.netlify.app`
   - Click to view your portfolio

---

## Step 2: Add Custom Domain prajwalm.in (5 minutes)

1. **Go to Site Settings:**
   - Click on your site in Netlify dashboard
   - Click "Domain settings" (or "Set up a custom domain")

2. **Add Domain:**
   - Click "Add custom domain" or "Add domain alias"
   - Enter: `prajwalm.in`
   - Click "Verify"
   - Netlify will show you DNS configuration instructions

3. **Netlify Will Show You:**
   - Your site's DNS records
   - Instructions specific to your domain

---

## Step 3: Configure DNS at Your Domain Registrar (5 minutes)

**Go to where you bought prajwalm.in** (GoDaddy, Namecheap, Hostinger, BigRock, etc.)

### Find DNS Settings:
- Look for: "DNS Management", "DNS Settings", "Nameservers", or "Domain Settings"
- Usually in domain dashboard or control panel

### Add These DNS Records:

**Option A: Using Netlify DNS (Recommended - Easiest)**

Netlify will show you nameservers like:
```
dns1.p01.nsone.net
dns2.p01.nsone.net
dns3.p01.nsone.net
dns4.p01.nsone.net
```

1. In your domain registrar, find "Nameservers" or "Custom DNS"
2. Replace existing nameservers with Netlify's nameservers
3. Save changes

**Option B: Using Your Current DNS (Manual)**

Add these records in your domain registrar:

```
Record Type: A
Name: @ (or leave blank for root domain)
Value: 75.2.60.5
TTL: 3600 (or Auto)

Record Type: CNAME
Name: www
Value: YOUR-SITE-NAME.netlify.app
TTL: 3600 (or Auto)
```

**Replace `YOUR-SITE-NAME` with your actual Netlify site name!**

Example: If your Netlify URL is `prajwal-portfolio.netlify.app`, use:
```
CNAME: www → prajwal-portfolio.netlify.app
```

---

## Step 4: Enable HTTPS (Automatic)

1. After DNS is configured, go back to Netlify
2. In Domain settings, scroll to "HTTPS"
3. Netlify will automatically provision SSL certificate
4. This takes 1-2 hours after DNS propagates
5. Your site will be accessible via `https://prajwalm.in`

---

## ⏰ Timeline

- **Immediate:** Site live at `*.netlify.app` URL
- **1-24 hours:** DNS propagation for prajwalm.in
- **1-2 hours after DNS:** HTTPS certificate issued

---

## 🧪 Testing Your Site

### Test Immediately:
1. Visit your `*.netlify.app` URL
2. Test on desktop browser
3. Test on mobile (or use browser dev tools F12 → device toolbar)
4. Check hamburger menu works on mobile
5. Verify all links work:
   - LinkedIn: https://www.linkedin.com/in/prajwal-mudrabett/
   - GitHub: https://github.com/PrajwalMudrabett
   - Email: prajwalmudrabett@gmail.com

### Test After DNS Propagation:
1. Visit https://prajwalm.in
2. Visit https://www.prajwalm.in
3. Both should redirect to HTTPS automatically
4. Test on multiple devices

### Check DNS Propagation:
- Go to: https://dnschecker.org
- Enter: `prajwalm.in`
- See if it resolves to Netlify's servers worldwide

---

## 🎨 Netlify Features You Get (Free)

✅ Automatic HTTPS/SSL
✅ Global CDN (fast worldwide)
✅ Automatic deployments
✅ Form handling (if you add forms later)
✅ 100GB bandwidth/month
✅ Continuous deployment
✅ Instant rollbacks
✅ Deploy previews

---

## 🆘 Troubleshooting

### Upload Failed?
- Check internet connection
- Try smaller folder (remove README.md temporarily)
- Use Chrome or Firefox browser
- Try Method B (with account)

### Domain Not Working After 24 Hours?
1. Check DNS records are correct
2. Use https://dnschecker.org to verify
3. Make sure you saved DNS changes
4. Contact your domain registrar support

### Site Shows "Page Not Found"?
- Make sure `index.html` is in the root of uploaded folder
- Check Netlify deploy log for errors
- Redeploy the site

### Images Not Loading?
- Verify `me.jpg` was uploaded
- Check browser console (F12) for errors
- File names are case-sensitive

### Mobile Menu Not Working?
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito mode
- Check JavaScript console for errors

---

## 📱 Mobile Testing Checklist

After deployment, test these on mobile:

- [ ] Site loads quickly
- [ ] Hamburger menu appears on mobile
- [ ] Menu opens when clicked
- [ ] Menu closes when link clicked
- [ ] All sections scroll smoothly
- [ ] Images load properly
- [ ] Contact buttons are clickable
- [ ] Links open correctly
- [ ] Text is readable (not too small)
- [ ] No horizontal scrolling

---

## 🎯 Quick Reference - Domain Registrar DNS Settings

### GoDaddy:
1. My Products → Domain → DNS
2. Add records as shown above

### Namecheap:
1. Domain List → Manage → Advanced DNS
2. Add records

### Hostinger:
1. Domains → Manage → DNS/Nameservers
2. Add records

### BigRock:
1. Domain Management → Manage DNS
2. Add records

---

## ✅ Success Checklist

- [ ] Folder uploaded to Netlify
- [ ] Site loads at *.netlify.app URL
- [ ] Mobile version tested and working
- [ ] All links tested (LinkedIn, GitHub, Email)
- [ ] Custom domain added in Netlify
- [ ] DNS records configured at domain registrar
- [ ] Waiting for DNS propagation (1-24 hours)
- [ ] Site loads at prajwalm.in
- [ ] HTTPS working (green lock icon)
- [ ] www.prajwalm.in redirects properly

---

## 🎉 You're Done When:

✅ You can visit https://prajwalm.in
✅ Site loads with green lock (HTTPS)
✅ Mobile version works perfectly
✅ All links work
✅ You can share the link with anyone

---

## 📞 Current Action Items:

1. **RIGHT NOW:** Go to https://app.netlify.com/drop
2. **Drag:** Your PortfolioProject folder
3. **Wait:** 30 seconds for deployment
4. **Test:** Click the URL you get
5. **Then:** Follow Step 2 to add your domain

---

## 💡 Pro Tips

- Bookmark your Netlify dashboard
- Save your site name/URL
- Keep DNS records documented
- Test on real mobile devices if possible
- Share your portfolio on LinkedIn once live!

---

**Ready? Open https://app.netlify.com/drop and drag your folder now!**

Need help with any step? Let me know!
