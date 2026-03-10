# ILM HUB — Marketing Website

Production-ready marketing website for [ilmhub.kz](https://ilmhub.kz).
Built as a pure static site (HTML + CSS + vanilla JS) — no build tools required.

---

## File Structure

```
website/
├── index.html       # Main landing page
├── privacy.html     # Privacy Policy
├── terms.html       # Terms of Service
└── README.md        # This file
```

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Full landing page: Hero, Features, Content, How It Works, About, Download CTA, Contact, Footer |
| `privacy.html` | Privacy Policy — required for App Store / Google Play listing |
| `terms.html` | Terms of Service — required for App Store / Google Play listing |

---

## Deployment Options

### Option 1 — Nginx (Recommended for VPS)

1. Copy the `website/` folder to your server:
   ```bash
   scp -r website/ user@your-server:/var/www/ilmhub/
   ```

2. Nginx config (`/etc/nginx/sites-available/ilmhub.kz`):
   ```nginx
   server {
       listen 80;
       listen [::]:80;
       server_name ilmhub.kz www.ilmhub.kz;

       root /var/www/ilmhub;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Security headers
       add_header X-Frame-Options "SAMEORIGIN";
       add_header X-Content-Type-Options "nosniff";
       add_header Referrer-Policy "strict-origin-when-cross-origin";

       # Gzip
       gzip on;
       gzip_types text/html text/css application/javascript;
   }
   ```

3. Enable site and reload Nginx:
   ```bash
   ln -s /etc/nginx/sites-available/ilmhub.kz /etc/nginx/sites-enabled/
   nginx -t && systemctl reload nginx
   ```

4. Add SSL with Certbot:
   ```bash
   certbot --nginx -d ilmhub.kz -d www.ilmhub.kz
   ```

---

### Option 2 — Docker (included in docker-compose)

Add to the root `docker-compose.yml`:

```yaml
website:
  image: nginx:alpine
  volumes:
    - ./website:/usr/share/nginx/html:ro
  ports:
    - "80:80"
  restart: unless-stopped
```

Run:
```bash
docker-compose up -d website
```

---

### Option 3 — Vercel / Netlify (Fastest)

**Vercel:**
```bash
cd website
npx vercel --prod
# Set custom domain to ilmhub.kz in Vercel dashboard
```

**Netlify:**
- Drag and drop the `website/` folder at [app.netlify.com/drop](https://app.netlify.com/drop)
- Set the custom domain to `ilmhub.kz` in Site Settings → Domain Management

---

### Option 4 — GitHub Pages

```bash
# From repo root
git subtree push --prefix website origin gh-pages
# Then set custom domain in repo Settings → Pages → Custom domain → ilmhub.kz
```

---

## DNS Configuration

Point your domain to the server hosting the site:

| Type | Name | Value |
|------|------|-------|
| `A` | `@` | `YOUR_SERVER_IP` |
| `A` | `www` | `YOUR_SERVER_IP` |
| `CNAME` | `www` | `ilmhub.kz.` |

---

## After Deployment — Checklist

- [ ] Site loads at `https://ilmhub.kz`
- [ ] Site loads at `https://www.ilmhub.kz` (www redirect)
- [ ] SSL certificate is valid (green padlock)
- [ ] `https://ilmhub.kz/privacy.html` is accessible
- [ ] `https://ilmhub.kz/terms.html` is accessible
- [ ] Mobile responsive (test on iPhone/Android)
- [ ] Contact form shows success message on submit
- [ ] Update email addresses in `index.html` and legal pages if needed

---

## Customization

### Update Contact Email
Search for `info@ilmhub.kz` and `support@ilmhub.kz` in all HTML files and replace with your actual email addresses.

### Update Company Information
In `index.html`, find the About section and update:
- Company name
- City/country
- Social media links (Telegram, Instagram, YouTube)

### App Store Links
In `index.html`, search for `href="#"` on the store buttons and replace with actual App Store / Google Play URLs once published.

### Add a Favicon
Place a `favicon.ico` or `favicon.png` in the `website/` folder and add to `<head>` in each HTML file:
```html
<link rel="icon" href="/favicon.ico" type="image/x-icon" />
```

---

## Apple Developer Verification

This website satisfies Apple's domain verification requirements:
- ✅ Public HTTPS website at `ilmhub.kz`
- ✅ Professional company landing page
- ✅ Clear product description and purpose
- ✅ Contact information (email + location)
- ✅ Privacy Policy at `/privacy.html`
- ✅ Terms of Service at `/terms.html`
- ✅ Looks like a legitimate tech startup

After deployment, submit `https://ilmhub.kz` as the company URL in Apple Developer enrollment.
