# ALRB Virtual Assistant — GitHub Pages Portfolio Website

Portfolio website for **Adrian Louise Bernardo** (**ALRB Virtual Assistant** — *Organized Data. Simplified Business.*), built in pure static HTML, CSS, and JavaScript so it can be hosted **100% free on GitHub Pages** with zero build tools or servers required.

## Included Files
- `index.html` — Complete single-page portfolio aligned with your ALRB Brand Kit
- `styles.css` — Exact ALRB color palette (`#0D1B2A`, `#3D5A80`, `#A7C0E0`, `#C8A165`, `#F2F4F7`), responsive layout, and print-to-PDF styling
- `script.js` — Mobile drawer, sample tabs, interactive mock spreadsheet previews, copy-email button, and PDF print button
- `assets/alrb-logo-dark.svg` — Horizontal ALRB logo for light backgrounds
- `assets/alrb-logo-light.svg` — Horizontal ALRB logo for deep navy backgrounds
- `assets/alrb-favicon.svg` — Circular ALRB submark & browser favicon
- `PORTFOLIO-COPY.md` — Copy-and-paste text for Canva, Google Slides, PDFs, or job applications
- `.nojekyll` — Ensures GitHub Pages serves static files cleanly

---

## How to Host This Free on GitHub Pages (5 Minutes)

### Option A: Upload Directly in Your Browser (No Git Required)
1. Sign in to [GitHub](https://github.com) and click **New repository** (`+` icon at top right).
2. Name the repository `alrb-va-portfolio` (or `<your-username>.github.io` if you want a root URL), set it to **Public**, and click **Create repository**.
3. Click **uploading an existing file** on the repository page.
4. Drag and drop **all files and the `assets` folder** from `c:\Users\Adrian Bernardo\Downloads\VA Portfolio` into the upload box, then click **Commit changes**.
5. Go to **Settings -> Pages**:
   - Under **Build and deployment -> Source**, select **Deploy from a branch**.
   - Select branch **`main`** and folder **`/ (root)`**, then click **Save**.
6. Wait 1–2 minutes and refresh the **Settings -> Pages** screen to see your live URL (e.g., `https://<your-username>.github.io/alrb-va-portfolio/`).

### Option B: Push via Git CLI
```bash
git init
git add .
git commit -m "Initial ALRB Virtual Assistant portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/alrb-va-portfolio.git
git push -u origin main
```
Then enable **Settings -> Pages -> Deploy from a branch (`main` / `/root`)**.

---

## How to Customize Later
- **Add Your Headshot:** Save your photo as `assets/headshot.jpg`. In `index.html`, search for `SWAP HEADSHOT LATER`, replace the `<div class="hero-submark-wrap">...</div>` block with the commented `<img>` tag, and commit the change.
- **Swap in Original Brand Kit Logo Files:** Replace `assets/alrb-logo-dark.svg`, `assets/alrb-logo-light.svg`, or `assets/alrb-favicon.svg` (or update the `<img src="...">` paths in `index.html` if using `.png`).
- **Add Trainings, Certifications, or Testimonials:** Open `index.html`, search for `READY TO UNCOMMENT`, remove the `<!--` and `-->` comment markers around those sections, fill in your real details, and push to GitHub.
