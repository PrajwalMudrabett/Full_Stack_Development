# 🌐 DNS Configuration for prajwalm.in

## ✅ Current Status:
- ✅ Site deployed on Netlify
- ✅ Domain prajwalm.in added to Netlify
- ⏳ Waiting for DNS configuration

---

## 📋 What Netlify is Telling You:

Netlify has found your domain but needs you to update DNS records at your domain registrar (where you bought prajwalm.in).

---

## Step 1: Check Netlify's DNS Instructions

1. **In Netlify Dashboard:**
   - Click on "Pending DNS verification" or "Awaiting External DNS"
   - Netlify will show you EXACTLY what DNS records to add
   - Keep this page open - you'll need these values

2. **Netlify will show you ONE of these options:**

### Option A: Netlify DNS (Easiest - Recommended)
Netlify will show nameservers like:
```
dns1.p08.nsone.net
dns2.p08.nsone.net
dns3.p08.nsone.net
dns4.p08.nsone.net
```

### Option B: External DNS (Manual)
Netlify will show records like:
```
A Record: @ → 75.2.60.5
CNAME: www → your-site-name.netlify.app
```

---

## Step 2: Go to Your Domain Registrar

**Where did you buy prajwalm.in?** (Choose one below)

Common registrars in India:
- GoDaddy India
- Hostinger
- BigRock
- Namecheap
- Google Domains
- Cloudflare
- Others

---

## Step 3: Update DNS Records

### If Using Netlify DNS (Option A - Recommended):

1. **Login to your domain registrar**
2. **Find your domain:** prajwalm.in
3. **Look for:** "Nameservers", "DNS Settings", or "Domain Settings"
4. **Change nameservers to Custom/Custom DNS**
5. **Replace existing nameservers with Netlify's nameservers:**
   ```
   dns1.p08.nsone.net
   dns2.p08.nsone.net
   dns3.p08.nsone.net
   dns4.p08.nsone.net
   ```
   (Use the exact ones Netlify showed you!)
6. **Save changes**

### If Using External DNS (Option B):

1. **Login to your domain registrar**
2. **Find:** "DNS Management" or "DNS Records"
3. **Add/Edit these records:**

**Delete any existing A records for @ or root domain first!**

**Add New Records:**

```
Type: A
Host/Name: @ (or leave blank, or use "prajwalm.in")
Value/Points to: 75.2.60.5
TTL: 3600 (or Auto/Default)
```

```
Type: CNAME
Host/Name: www
Value/Points to: YOUR-SITE-NAME.netlify.app
TTL: 3600 (or Auto/Default)
```

**Important:** Replace `YOUR-SITE-NAME.netlify.app` with your actual Netlify URL!

4. **Save all changes**

---

## Step 4: Wait for DNS Propagation

- **Time needed:** 5 minutes to 24 hours (usually 1-2 hours)
- **What happens:** DNS servers worldwide update with your new settings

### Check Propagation Status:
1. Go to: https://dnschecker.org
2. Enter: `prajwalm.in`
3. Select: "A" record type
4. Click "Search"
5. You should see `75.2.60.5` appearing in different locations

---

## Step 5: Verify in Netlify

1. **Go back to Netlify dashboard**
2. **Check domain status:**
   - Should change from "Pending" to "Verified" (green checkmark)
   - This happens automatically once DNS propagates

3. **Enable HTTPS:**
   - Netlify will automatically provision SSL certificate
   - Takes 1-2 hours after DNS verification
   - You'll see "HTTPS" with green lock

---

## 🎯 Specific Instructions by Registrar

### GoDaddy:
1. Login → My Products
2. Click on prajwalm.in → DNS
3. Scroll to "Nameservers" → Change → Custom
4. Enter Netlify nameservers → Save

OR for manual DNS:
1. DNS → Records → Add
2. Add A and CNAME records as shown above

### Hostinger:
1. Login → Domains
2. Click Manage next to prajwalm.in
3. DNS/Nameservers → Change Nameservers
4. Enter Netlify nameservers → Save

### BigRock:
1. Login → Domain Management
2. Click Manage DNS
3. Nameservers → Use Custom Nameservers
4. Enter Netlify nameservers → Update

### Namecheap:
1. Login → Domain List
2. Click Manage next to prajwalm.in
3. Nameservers → Custom DNS
4. Enter Netlify nameservers → Save

### Cloudflare:
1. Login → Select prajwalm.in
2. DNS → Records
3. Add A and CNAME records
4. Make sure proxy is OFF (gray cloud)

---

## 🧪 Testing After DNS Configuration

### Immediate Test (5 minutes after DNS change):
```bash
# Open Command Prompt and run:
nslookup prajwalm.in
```
Should show: `75.2.60.5`

### Browser Test (after propagation):
1. Open: https://prajwalm.in
2. Should load your portfolio
3. Check for green lock (HTTPS)
4. Test: https://www.prajwalm.in
5. Should also work

### Mobile Test:
1. Open on your phone
2. Test all features
3. Verify hamburger menu works

---

## 🆘 Troubleshooting

### "DNS records not found" after 24 hours?

**Check these:**
1. Did you save the DNS changes?
2. Are the values exactly as Netlify showed?
3. Did you remove old A records?
4. Is there a typo in the records?

**Solution:**
- Login to domain registrar again
- Double-check all DNS records
- Make sure TTL is not too high (use 3600 or Auto)
- Contact your registrar support if stuck

### "Site not secure" warning?

**This is normal if:**
- DNS just propagated (wait 1-2 hours)
- HTTPS certificate is being issued

**Check in Netlify:**
- Domain settings → HTTPS
- Should say "Certificate provisioning" or "Certificate active"

### Site shows old content or error?

**Solution:**
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito mode
- Try different browser
- Check on mobile data (not WiFi)

---

## ✅ Success Indicators

You'll know it's working when:

- [ ] Netlify shows "Domain verified" with green checkmark
- [ ] https://prajwalm.in loads your portfolio
- [ ] Green lock icon appears (HTTPS)
- [ ] https://www.prajwalm.in also works
- [ ] Site works on mobile
- [ ] All links work (LinkedIn, GitHub, Email)
- [ ] No security warnings

---

## 📞 What to Do RIGHT NOW:

1. **Click "Pending DNS verification" in Netlify**
2. **Note down the DNS records Netlify shows you**
3. **Login to where you bought prajwalm.in**
4. **Update DNS records as shown above**
5. **Save changes**
6. **Wait 1-2 hours**
7. **Test: https://prajwalm.in**

---

## 💡 Pro Tips

- Take screenshots of DNS settings before and after
- Keep Netlify's DNS instructions open
- Don't panic if it takes a few hours
- Test with https://dnschecker.org
- Once working, share your portfolio link!

---

## 🎉 After It's Live

Once prajwalm.in is working:

1. **Share it:**
   - Update LinkedIn profile
   - Add to GitHub profile
   - Share with friends/recruiters

2. **Monitor:**
   - Check Netlify analytics
   - See visitor stats
   - Monitor uptime

3. **Update anytime:**
   - Just drag new files to Netlify
   - Changes go live instantly

---

**Need help with your specific domain registrar? Tell me where you bought prajwalm.in and I'll give you exact steps!**
