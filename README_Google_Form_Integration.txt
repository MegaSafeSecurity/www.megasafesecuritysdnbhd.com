MEGA SAFE SECURITY SERVICES WEBSITE — ENGLISH VERSION

FILES
- index.html: Updated English website with a quotation request form and Google Forms embed support.
- style.css: Website styles, including responsive styling for the embedded Google Form.
- Mega_Safe_Google_Form_Quotation_Template(1).xlsx: The question blueprint and response-tracking template supplied for this project.

GOOGLE FORM ALREADY CONNECTED
The website is configured with the Google Forms responder link supplied by the user. In the Contact section, the form is embedded on the page and the “Open Google Form” links open the same form in a new tab.

If you replace the Google Form in future, update the GOOGLE_FORM_URL constant in index.html with the new published responder URL, then upload index.html and style.css together to your website hosting.

QUOTATION FORM
The website also includes a matching nine-field enquiry form based on the XLSX question list. The WhatsApp and Email buttons prepare the enquiry for the user to send. They do not automatically save website-form responses to Google Sheets. To collect responses in Google Sheets, users must submit the actual Google Form or connect the website form to a secure backend/integration.

WEBSITE ASSETS
The HTML references existing image/PDF files in the `assets/` folder and a logo image. Keep those existing assets and their folder paths alongside index.html, or update the paths to match your hosting files. These assets were not included in the current upload set.
