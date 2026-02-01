# Google Search Console Setup Guide for AMUHI

## Why This Is Critical

Currently, when people search "amuhi" on Google:
- ❌ Google suggests "Did you mean: muhi"
- ❌ amuhi.id doesn't appear in top results
- ❌ News articles about AMUHI rank higher than the official website

**After setup:**
- ✅ AMUHI recognized as official brand
- ✅ amuhi.id appears first for brand searches
- ✅ No more "did you mean" suggestions
- ✅ Control how your site appears in Google Search

---

## Step 1: Verify Your Website Ownership

### Option A: HTML File Upload (Recommended - Easiest)

1. **Go to Google Search Console**
   - Visit: https://search.google.com/search-console/
   - Click "Start now"
   - Sign in with your Google account

2. **Add Property**
   - Click "Add Property" (top left)
   - Select **"URL prefix"**
   - Enter: `https://amuhi.id`
   - Click "Continue"

3. **Choose Verification Method**
   - Select **"HTML file"** tab
   - Download the verification file (e.g., `google1234567890abcdef.html`)

4. **Upload to Your Website**
   - Place the downloaded file in `/public/` folder
   - Build and deploy your site: `npm run build`
   - The file will be accessible at: `https://amuhi.id/google1234567890abcdef.html`

5. **Verify**
   - Go back to Search Console
   - Click "Verify"
   - Should show: "Ownership verified ✓"

### Option B: HTML Tag (Alternative)

1. In Search Console, select **"HTML tag"** method
2. Copy the meta tag (looks like: `<meta name="google-site-verification" content="..." />`)
3. Add it to `/public/index.html` in the `<head>` section:
   ```html
   <head>
     <!-- Existing meta tags -->
     <meta name="google-site-verification" content="YOUR_CODE_HERE" />
     <!-- Rest of head -->
   </head>
   ```
4. Deploy and click "Verify" in Search Console

---

## Step 2: Submit Your Sitemap

Your sitemap is already created at `/public/sitemap.xml`

1. **In Search Console Dashboard**
   - Click on "Sitemaps" (left sidebar)

2. **Add New Sitemap**
   - Enter: `sitemap.xml`
   - Click "Submit"

3. **Verify Status**
   - Should show "Success" status
   - May take a few hours to process

---

## Step 3: Request Indexing for Key Pages

Google crawls sites automatically, but you can speed up the process:

1. **Use URL Inspection Tool**
   - Click "URL Inspection" (top of Search Console)

2. **Request Indexing for These Priority Pages:**
   ```
   https://amuhi.id/
   https://amuhi.id/about
   https://amuhi.id/programs/academy
   https://amuhi.id/programs/check
   https://amuhi.id/news
   ```

3. **For Each URL:**
   - Paste URL in the search box
   - Wait for inspection to complete
   - Click "Request Indexing"
   - Confirm

**Note:** You can request ~10 URLs per day. Prioritize homepage and main program pages.

---

## Step 4: Set Up Bing Webmaster Tools (Bonus)

Bing is the 2nd largest search engine and easier to rank on:

1. Visit: https://www.bing.com/webmasters
2. Sign in with Microsoft account
3. Click "Add a site"
4. Enter: `https://amuhi.id`
5. **Import from Google Search Console** (saves time!)
   - Select "Import from Google Search Console"
   - Sign in and authorize
   - Bing will automatically import your sitemap and verification

---

## Step 5: Monitor Your Progress

### Week 1-2: Initial Indexing
- Google starts crawling your pages
- Check "Coverage" report in Search Console
- Should see pages being indexed

### Week 2-4: Search Appearance
- Search "AMUHI" on Google
- Your site should start appearing
- "Did you mean" suggestion may disappear

### Week 4-8: Improved Rankings
- Monitor "Performance" report
- Track impressions, clicks, CTR
- See which queries bring traffic

---

## Key Metrics to Track

In Google Search Console, monitor:

1. **Coverage Report**
   - How many pages are indexed
   - Any crawl errors to fix

2. **Performance Report**
   - **Queries**: What people search
   - **Impressions**: How often you appear
   - **Clicks**: How many people click
   - **Position**: Your average ranking

3. **Search Appearance**
   - Rich results (your structured data)
   - Mobile usability
   - Core Web Vitals

---

## Expected Timeline

| Time | Expected Result |
|------|----------------|
| **Day 1** | Verification complete, sitemap submitted |
| **Week 1** | Google starts crawling, 20-50% pages indexed |
| **Week 2** | "AMUHI" search shows your site (may be position 5-10) |
| **Week 3-4** | "Did you mean muhi" suggestion disappears |
| **Week 4-8** | Position improves to #1 for "AMUHI" |
| **Month 2-3** | Rank for "asosiasi umroh", "travel umroh indonesia", etc. |

---

## Troubleshooting

### "Verification Failed"
- Check the verification file is accessible at the URL
- Try clearing cache and rebuilding: `npm run build`
- Make sure you deployed to production

### "Sitemap Could Not Be Read"
- Verify `/public/sitemap.xml` exists
- Check it's accessible at `https://amuhi.id/sitemap.xml`
- Ensure proper XML format

### "Pages Not Indexed"
- Check `robots.txt` isn't blocking Google
- Ensure `.htaccess` allows crawlers
- Wait 1-2 weeks (Google is slow)

---

## Additional SEO Actions

### 1. Create Google Business Profile
- https://business.google.com/
- Claim your business listing
- Add address, phone, hours
- Boosts local SEO

### 2. Get More Backlinks
You already have news coverage (Republika, Inilah.com). Request:
- Update articles to link to `https://amuhi.id` directly
- Ask to change "AMUHI" mentions to hyperlinks
- Each backlink from news sites boosts authority

### 3. Social Media Linking
Update your social profiles to link to `https://amuhi.id`:
- Instagram bio
- Facebook page
- LinkedIn company page

This signals to Google that AMUHI is an official brand.

---

## Quick Checklist

Before submitting to Search Console:

- [x] Website deployed at https://amuhi.id
- [x] Sitemap.xml accessible
- [x] Meta tags and structured data added (done in this session)
- [x] OG images in public folder (done in this session)
- [ ] Google Search Console verification file uploaded
- [ ] Sitemap submitted to Search Console
- [ ] Priority pages requested for indexing
- [ ] Monitor coverage and performance reports

---

## Need Help?

Common issues:
1. **"Can't access verification file"** → Make sure it's in `/public/` folder and deployed
2. **"Sitemap not found"** → Check `https://amuhi.id/sitemap.xml` is accessible
3. **"Pages not appearing"** → Be patient, can take 2-4 weeks for new sites

---

## Summary

Your SEO improvements (done today):
- ✅ Structured data (Organization + WebSite schema)
- ✅ Better meta titles and descriptions
- ✅ Keywords optimization
- ✅ Language tags for international SEO
- ✅ Canonical URLs (no www)
- ✅ OG images in public folder

**Next critical step:** Verify ownership in Google Search Console (follow Step 1 above)

This is the single most important action to make amuhi.id appear first for "AMUHI" searches!
