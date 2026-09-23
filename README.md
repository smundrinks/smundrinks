# SMUN DRINKS — GitHub Pages Website

A responsive, premium one-page website for **SMUN DRINKS**, built with plain HTML, CSS and JavaScript so it can be deployed directly on **GitHub Pages**.

## Included
- Responsive desktop / tablet / mobile layout
- Hero video using the supplied SMUN advertisement
- Supplied SMUN product visuals
- About / customization / business use cases / gallery / process / contact sections
- Direct Gmail contact: `smundrinks@gmail.com`
- Direct WhatsApp: `+92 311 2927605`
- Quote form that opens WhatsApp with the customer's details
- No database required for the GitHub Pages version
- `.nojekyll` included for reliable static deployment
- Optional backend demo folder showing where a future API can live

## Deploy on GitHub Pages

### Method 1 — easiest
1. Create a new GitHub repository, for example `smundrinks`.
2. Upload **all files and folders inside this project** to the repository.
3. Open the repository → **Settings** → **Pages**.
4. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**.
6. GitHub will provide your live website URL.

### Important
GitHub Pages hosts static files. It does **not** run Node/PHP server code. This website therefore uses direct email + WhatsApp contact and does not require localhost or a backend server.

If you later need orders, customer accounts, a database, admin panel or online payments, keep this frontend and connect it to a separate backend service such as Render, Railway, Vercel Functions, Supabase, Firebase, etc.

## Files
- `index.html` — website structure
- `style.css` — responsive design
- `script.js` — navigation, animations and WhatsApp form
- `assets/images/` — supplied SMUN images
- `assets/video/` — supplied SMUN video
- `backend-demo/` — optional future backend example

## Brand contact
Email: smundrinks@gmail.com
WhatsApp: +92 311 2927605
