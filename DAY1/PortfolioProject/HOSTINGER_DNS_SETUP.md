# 🌐 Hostinger DNS Setup for prajwalm.in → Netlify

## 📋 Step-by-Step Instructions for Hostinger

---

## Step 1: Get DNS Records from Netlify

1. **In your Netlify dashboard:**
   - Click "Pending DNS verification" or "Awaiting External DNS"
   - Netlify will show you DNS records
   - **Keep this tab open** - you'll need to copy these values

2. **Netlify will show you either:**

### Option A: Nameservers (Recommended - Easiest)
```
dns1.p08.nsone.net
dns2.p08.nsone.net
dns3.p08.nsone.net
dns4.p08.nsone.net
```
(Your actual nameservers might be slightly different - use what Netlify shows!)

### Option B: DNS Records
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

---

## Step 2: Login to Hostinger

1. Go to: https://hpanel.hostinger.com
2. Login with your Hostinger account
3. You'll see the Hostinger control panel (hPanel)

---

## Step 3: Navigate to DNS Settings

1. **In hPanel, look for "Domains"** (left sidebar or top menu)
2. **Find prajwalm.in** in your domain list
3. **Click "Manage"** next to prajwalm.in
4. **Click "DNS / Name Servers"** or "DNS Zone Editor"

---

## Step 4: Choose Your Method

### METHOD A: Using Netlify Nameservers (RECOMMENDED - EASIEST)

This is the easiest and most reliable method.

#### Steps:

1. **In Hostinger DNS settings, look for "Nameservers" section**
   - Usually at the top of the page

2. **Click "Change Nameservers"** or "Use Custom Nameservers"

3. **Select "Custom nameservers"** or "I'll use my own nameservers"

4. **Enter Netlify's nameservers:**
   ```
   Nameserver 1: dns1.p08.nsone.net
   Nameserver 2: dns2.p08.nsone.net
   Nameserver 3: dns3.p08.nsone.net
   Nameserver 4: dns4.p08.nsone.net
   ```
   (Use the exact ones Netlify showed you!)

5. **Click "Save" or "Change Nameservers"**

6. **Confirm the change** if prompted

7. **Done!** Hostinger will show a message like:
   - "Nameservers updated successfully"
   - "Changes may take up to 24 hours to propagate"

---

### METHOD B: Using DNS Records (Alternative)

If you prefer to keep Hostinger's nameservers and just add records:

#### Steps:

1. **In Hostinger DNS Zone Editor:**
   - You'll see existing DNS records

2. **Delete existing A records for root domain:**
   - Look for records with Name: `@` or `prajwalm.in` and Type: `A`
   - Click the trash/delete icon next to them
   - Confirm deletion

3. **Add New A Record:**
   - Click "Add Record" or "Add New Record"
   - **Type:** A
   - **Name:** @ (or leave blank, or type "prajwalm.in")
   - **Points to / Value:** 75.2.60.5
   - **TTL:** 3600 (or 14400, or leave default)
   - Click "Add Record" or "Save"

4. **Add CNAME Record for www:**
   - Click "Add Record" again
   - **Type:** CNAME
   - **Name:** www
   - **Points to / Value:** your-site-name.netlify.app
     (Replace with your actual Netlify URL!)
   - **TTL:** 3600 (or leave default)
   - Click "Add Record" or "Save"

5. **Verify your records look like this:**
   ```
   Type    Name    Value                           TTL
   A       @       75.2.60.5                       3600
   CNAME   www     your-site-name.netlify.app      3600
   ```

6. **Click "Save Changes"** if there's a final save button

---

## Step 5: Wait for DNS Propagation

### Timeline:
- **Hostinger processing:** 5-15 minutes
- **Global DNS propagation:** 1-24 hours (usually 1-2 hours)

### What to expect:
- Hostinger will show "Changes saved successfully"
- You might see a warning about propagation time - this is normal

---

## Step 6: Check DNS Propagation

### Method 1: Online Checker
1. Go to: https://dnschecker.org
2. Enter: `prajwalm.in`
3. Select: "A" record
4. Click "Search"
5. **You should see:** `75.2.60.5` appearing in different locations
6. Green checkmarks mean DNS has propagated in that region

### Method 2: Command Line
Open Command Prompt and run:
```bash
nslookup prajwalm.in
```
Should show: `75.2.60.5`

---

## Step 7: Verify in Netlify

1. **Go back to Netlify dashboard**
2. **Check domain status:**
   - Should change from "Pending DNS verification" to "Verified" ✓
   - This happens automatically once DNS propagates
   - Refresh the page if needed

3. **HTTPS Certificate:**
   - Netlify will automatically provision SSL certificate
   - Takes 1-2 hours after DNS verification
   - You'll see "HTTPS" with a green lock icon

---

## Step 8: Test Your Site

### After DNS Propagates (1-2 hours):

1. **Open browser and visit:**
   - https://prajwalm.in
   - https://www.prajwalm.in

2. **Both should:**
   - Load your portfolio
   - Show green lock icon (HTTPS)
   - Work on mobile and desktop

3. **Test all features:**
   - Navigation menu
   - Mobile hamburger menu
   - All links (LinkedIn, GitHub, Email)
   - Smooth scrolling
   - Images loading

---

## 🆘 Troubleshooting Hostinger

### Issue: Can't find DNS settings

**Solution:**
1. In hPanel, click "Domains" in left sidebar
2. Find prajwalm.in
3. Click "Manage" button
4. Look for "DNS / Name Servers" tab
5. If still can't find, use Hostinger chat support (bottom right)

### Issue: "Domain is locked" or "Transfer lock"

**Solution:**
1. This doesn't affect DNS changes
2. You can still update nameservers/DNS records
3. If blocked, contact Hostinger support

### Issue: Changes not saving

**Solution:**
1. Make sure you clicked "Save" or "Change Nameservers"
2. Check for error messages
3. Try different browser (Chrome/Firefox)
4. Clear browser cache
5. Try incognito mode

### Issue: DNS not propagating after 24 hours

**Solution:**
1. Login to Hostinger again
2. Verify DNS records are still there
3. Check for typos in values
4. Make sure you saved changes
5. Contact Hostinger support via chat

### Issue: "This site can't be reached"

**Solution:**
1. DNS hasn't propagated yet - wait longer
2. Clear browser cache (Ctrl+Shift+Delete)
3. Try incognito mode
4. Try on mobile data (not WiFi)
5. Check https://dnschecker.org

---

## ✅ Success Checklist

- [ ] Logged into Hostinger hPanel
- [ ] Found prajwalm.in domain
- [ ] Opened DNS / Nameservers settings
- [ ] Updated nameservers OR added DNS records
- [ ] Saved changes in Hostinger
- [ ] Saw success message
- [ ] Waited 1-2 hours
- [ ] Checked dnschecker.org - shows 75.2.60.5
- [ ] Netlify shows "Domain verified" ✓
- [ ] https://prajwalm.in loads portfolio
- [ ] Green lock icon appears (HTTPS)
- [ ] Mobile version works
- [ ] All links work

---

## 📸 Visual Guide - What to Look For

### In Hostinger hPanel:
```
Domains → prajwalm.in → Manage → DNS / Name Servers
```

### Nameservers Section:
```
○ Use Hostinger nameservers
● Use custom nameservers

Nameserver 1: [dns1.p08.nsone.net]
Nameserver 2: [dns2.p08.nsone.net]
Nameserver 3: [dns3.p08.nsone.net]
Nameserver 4: [dns4.p08.nsone.net]

[Change Nameservers]
```

### DNS Records Section:
```
Type    Name    Value               TTL     Actions
A       @       75.2.60.5          3600    [Delete]
CNAME   www     site.netlify.app   3600    [Delete]

[+ Add Record]
```

---

## 🎯 Quick Summary - Do This Now:

1. **Open:** https://hpanel.hostinger.com
2. **Login** with your Hostinger account
3. **Go to:** Domains → prajwalm.in → Manage
4. **Click:** DNS / Name Servers
5. **Choose:** Custom nameservers
6. **Enter:** Netlify's nameservers (from Netlify dashboard)
7. **Save** changes
8. **Wait:** 1-2 hours
9. **Test:** https://prajwalm.in

---

## 💡 Pro Tips for Hostinger

- Hostinger's DNS usually propagates faster than other registrars (30 min - 2 hours)
- Use Hostinger's live chat if stuck (bottom right corner in hPanel)
- Take screenshots before and after making changes
- Hostinger sends email confirmation when DNS changes are saved
- You can change back to Hostinger nameservers anytime if needed

---

## 🎉 After It's Live

Once prajwalm.in is working:

1. **Bookmark your Netlify dashboard**
2. **Save your Hostinger login details**
3. **Share your portfolio:**
   - LinkedIn profile
   - GitHub profile
   - Resume/CV
   - Job applications

4. **Monitor:**
   - Netlify analytics (free)
   - Site performance
   - Visitor stats

---

**Ready? Go to https://hpanel.hostinger.com and follow the steps above!**

Let me know once you've updated the DNS settings and I'll help you verify!
