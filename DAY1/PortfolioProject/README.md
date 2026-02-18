# Portfolio Website - Deployment Guide

## 🚀 Hosting Your Portfolio on prajwalm.in

### Prerequisites
- Domain name: prajwalm.in (already purchased)
- Hosting service account (choose one below)

### Recommended Hosting Options

#### Option 1: GitHub Pages (Free & Easy)
1. Create a GitHub repository named `portfolio`
2. Upload all files (Portfolio.html, style.css, me.jpg)
3. Rename `Portfolio.html` to `index.html`
4. Go to repository Settings → Pages
5. Select branch `main` and folder `/root`
6. Configure custom domain:
   - Add `prajwalm.in` in custom domain field
   - Create CNAME record in your domain registrar pointing to `<username>.github.io`

#### Option 2: Netlify (Free with CI/CD)
1. Sign up at netlify.com
2. Drag and drop your portfolio folder
3. Configure custom domain:
   - Go to Domain Settings
   - Add custom domain: `prajwalm.in`
   - Follow DNS configuration instructions
   - Add these DNS records at your domain registrar:
     - Type: A, Name: @, Value: 75.2.60.5
     - Type: CNAME, Name: www, Value: <your-site>.netlify.app

#### Option 3: Vercel (Free with Auto-Deploy)
1. Sign up at vercel.com
2. Import your project from GitHub or upload directly
3. Configure custom domain:
   - Go to Project Settings → Domains
   - Add `prajwalm.in`
   - Configure DNS records as instructed

#### Option 4: Traditional Hosting (Hostinger, GoDaddy, etc.)
1. Purchase hosting plan (if not already done)
2. Access cPanel or File Manager
3. Upload files to `public_html` or `www` directory
4. Rename `Portfolio.html` to `index.html`
5. Ensure domain points to hosting server

### DNS Configuration (General)
Add these records at your domain registrar (where you bought prajwalm.in):

For GitHub Pages:
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

Type: CNAME
Name: www
Value: <username>.github.io
```

### Important Files
- `index.html` (rename Portfolio.html)
- `style.css`
- `me.jpg`

### Post-Deployment Checklist
✅ Test website on desktop browsers (Chrome, Firefox, Safari)
✅ Test on mobile devices (iOS and Android)
✅ Verify all links work (LinkedIn, GitHub, Email)
✅ Check image loading
✅ Test responsive design at different screen sizes
✅ Verify SSL certificate (HTTPS)
✅ Test page load speed

### Mobile Optimization Features
✅ Responsive navigation with hamburger menu
✅ Touch-friendly buttons and links
✅ Optimized images for mobile
✅ Smooth scrolling
✅ Mobile-first breakpoints (768px, 480px)

### Performance Tips
- Images are optimized
- CSS is minified (optional)
- Smooth animations
- Fast loading times

### Support
If you face any issues:
1. Check browser console for errors (F12)
2. Verify DNS propagation (can take 24-48 hours)
3. Clear browser cache
4. Test in incognito mode

---
Built with ❤️ by Prajwal Mudrabett
