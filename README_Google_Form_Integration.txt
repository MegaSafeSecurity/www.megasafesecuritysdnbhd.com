MEGA SAFE SECURITY SERVICES WEBSITE — ENGLISH VERSION

FILES
- index.html: Updated English website with a quotation request form and Google Forms embed support.
- style.css: Website styles, including responsive styling for the embedded Google Form.
- Mega_Safe_Google_Form_Quotation_Template(1).xlsx: The question blueprint and response-tracking template supplied for this project.

IMPORTANT: THE XLSX IS NOT A LIVE GOOGLE FORM
Google Forms does not create a live form from this Excel file automatically. Create the form at https://forms.google.com using the “Google Form Questions” worksheet first.

CONNECT THE LIVE GOOGLE FORM
1. Open the published/respondent link for your Google Form. It usually starts with https://docs.google.com/forms/ and ends in /viewform.
2. Open index.html in a text editor.
3. Find: const GOOGLE_FORM_URL = "";
4. Paste your published Google Forms responder URL between the quotation marks.
   Example format only: const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";
5. Save index.html and upload index.html and style.css together to your website hosting.
6. Open the Contact section. The official form will appear embedded on the page and the “Open Google Form” link will open the same form in a new tab.

QUOTATION FORM
The website also includes a matching nine-field enquiry form based on the XLSX question list. The WhatsApp and Email buttons prepare the enquiry for the user to send. They do not automatically save website-form responses to Google Sheets. To collect responses in Google Sheets, users must submit the actual Google Form or connect the website form to a secure backend/integration.

WEBSITE ASSETS
The HTML references existing image/PDF files in the `assets/` folder and a logo image. Keep those existing assets and their folder paths alongside index.html, or update the paths to match your hosting files. These assets were not included in the current upload set.
