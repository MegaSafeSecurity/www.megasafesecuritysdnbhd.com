# Mega Safe Security Services Sdn Bhd — Website

Static website built with HTML, CSS and plain JavaScript. No npm, build step or framework required.

## Run locally in VS Code
1. Open this folder in Visual Studio Code.
2. Install the **Live Server** extension if you do not already have it.
3. Right-click `index.html` → **Open with Live Server**.

You can also open `index.html` directly in a browser.

## Publish with GitHub Pages
1. Create a GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, and all image/PDF assets used by the site.
3. In the repository, open **Settings → Pages**.
4. Select the branch (usually `main`) and root folder `/`, then save.
5. Wait for GitHub Pages to publish the site.

## Publish with InfinityFree
1. Create/choose your hosting account in InfinityFree.
2. Open **File Manager** (or connect with FTP).
3. Open the website's document root, commonly `htdocs`.
4. Upload `index.html`, `style.css`, `script.js`, and the complete `assets` folder plus the logo image.
5. Keep filenames and folder paths unchanged; filenames with spaces and capitalization must match exactly.
6. Open the temporary hosting URL to test the website.

## Important asset paths
The HTML currently references these files from the original project:
- `6196995981560189308-removebg-preview.png`
- `assets/director-datuk-kevin.jpg`
- `assets/ORGANISATION CHARTS MEGA SAFE.jpg`
- `assets/buletin-01-anugerah.jpeg`
- `assets/Footage Bulitin/WhatsApp Image 2026-10-06 at 10.24.13 AM.jpeg`
- `assets/Footage Bulitin/WhatsApp Image 2026-10-06 at 10.16.17 AM.jpeg`
- `assets/buletin-02-aktiviti.jpeg`
- `assets/White Blue Modern Technology Company Profile.pdf`

These assets were not included in the two uploaded source files, so copy them from your existing website folder. GitHub and InfinityFree filenames are case-sensitive.

## Before going live
- Verify that the Google Form URL is the correct public responder link.
- Confirm licence/accreditation claims and all displayed staff details are approved for publication.
- The quotation form prepares a WhatsApp message or opens an email draft; it does not save enquiries to a database.
- The AI assistant is a simple FAQ script, not a live AI service.
- Never put secret API keys in `script.js`.
