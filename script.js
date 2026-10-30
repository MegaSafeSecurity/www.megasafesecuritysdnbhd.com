/* Mega Safe website interactions — plain JavaScript, no build tools required. */
// Paste the published Google Forms responder URL here (usually ending in /viewform).
// The uploaded XLSX is a question template, not a live Google Form URL.
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdU0kOfK6Ei37davUNTnPIyMTD1TE1q_Mn7QYds8PnDGVcQQw/viewform?usp=dialog";
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation menu');
}));

const modal=document.getElementById('personModal');
let activePerson = null;
let personFlipTimer;
const openPersonModal = person => {
  modal.classList.add('show');
  modal.querySelector('#modalNama').textContent = person.dataset.name;
  modal.querySelector('#modalRole').textContent = person.dataset.role;
  modal.querySelector('#modalInfo').textContent = person.dataset.info;
  modal.querySelector('#modalAvatar').textContent = person.querySelector('.avatar').textContent;
};
document.querySelectorAll('.person').forEach(person => person.addEventListener('click', () => {
  window.clearTimeout(personFlipTimer);
  if (activePerson && activePerson !== person) activePerson.classList.remove('is-flipped');
  activePerson = person;
  person.classList.add('is-flipped');
  if (reduceMotion) openPersonModal(person);
  else personFlipTimer = window.setTimeout(() => openPersonModal(person), 720);
}));
const closePersonModal = () => {
  modal.classList.remove('show');
  if (activePerson) activePerson.classList.remove('is-flipped');
  activePerson = null;
};
document.querySelector('.modal-close').addEventListener('click', closePersonModal);
modal.addEventListener('click', e => { if (e.target === modal) closePersonModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePersonModal(); });

const googleFormLink=document.getElementById('googleFormLink');
if (googleFormLink && GOOGLE_FORM_URL && /^https:\/\/docs\.google\.com\/forms\//i.test(GOOGLE_FORM_URL)) {
  googleFormLink.href = GOOGLE_FORM_URL;
  googleFormLink.target = "_blank";
  googleFormLink.rel = "noopener noreferrer";
}

const aiFab=document.getElementById('aiFab'),aiPanel=document.getElementById('aiPanel'),aiClose=document.getElementById('aiClose'),aiBody=document.getElementById('aiBody'),aiForm=document.getElementById('aiForm'),aiInput=document.getElementById('aiInput');
aiFab.onclick=()=>{aiPanel.classList.add('show');aiPanel.setAttribute('aria-hidden','false');aiInput.focus()};
aiClose.onclick=()=>{aiPanel.classList.remove('show');aiPanel.setAttribute('aria-hidden','true')};
document.addEventListener('keydown', e => { if (e.key === 'Escape') { aiPanel.classList.remove('show'); aiPanel.setAttribute('aria-hidden','true'); } });
function reply(q){let s=q.toLowerCase();if(s.includes('service')||s.includes('guard')||s.includes('security'))return 'Mega Safe provides professional security guards, patrols and monitoring, access and visitor control, site security, event security, government facility security, industrial and construction security, and security supervision.';if(s.includes('government'))return 'For government requirements, we can provide professional guarding support, access control, patrols, reporting, and facility security. Please use the Request a Quotation section to share your requirements.';if(s.includes('quotation')||s.includes('quote')||s.includes('price'))return 'Please complete the Quotation Request form. You can send it via WhatsApp or email, or use the official Google Form embedded on our website.';if(s.includes('portfolio')||s.includes('profile'))return 'The Company Portfolio is available in the Media section. You can view the company profile in PDF format.';return 'Thank you for your enquiry. For an accurate security proposal, please provide the location, premises type, estimated number of guards, and preferred service start date.'}
function addMsg(t,who){let d=document.createElement('div');d.className='ai-msg '+who;d.textContent=t;aiBody.appendChild(d);aiBody.scrollTop=aiBody.scrollHeight}
function ask(q){addMsg(q,'user');setTimeout(()=>addMsg(reply(q),'bot'),250)}
aiForm.onsubmit=e=>{e.preventDefault();let q=aiInput.value.trim();if(q){ask(q);aiInput.value=''}};
document.querySelectorAll('.quick-actions button').forEach(b=>b.onclick=()=>ask(b.dataset.q));

const form=document.getElementById('quoteForm');
function quoteData(){const f=new FormData(form);return {name:f.get('name'),company:f.get('company'),phone:f.get('phone'),email:f.get('email'),location:f.get('location'),premises:f.get('premises'),guards:f.get('guards')||'Not provided',startDate:f.get('startDate')||'Not provided',message:f.get('message')||'No additional details'};}
function quoteText(d){return `QUOTATION REQUEST - MEGA SAFE SECURITY SERVICES SDN BHD

Name: ${d.name}
Company/Organisation: ${d.company}
Phone: ${d.phone}
Email: ${d.email||'Not provided'}
Location: ${d.location}
Premises Type: ${d.premises}
Estimated Guards: ${d.guards}
Start Date: ${d.startDate}
Security Requirements: ${d.message}`}

document.getElementById('waQuote').onclick=()=>{if(!form.reportValidity())return;const d=quoteData();window.open('https://wa.me/60109142789?text='+encodeURIComponent(quoteText(d)),'_blank','noopener,noreferrer')};
document.getElementById('emailQuote').onclick=()=>{if(!form.reportValidity())return;const d=quoteData();window.location.href='mailto:mymegasafe.security@gmail.com?subject='+encodeURIComponent('Quotation Request - '+d.company)+'&body='+encodeURIComponent(quoteText(d))};

/* Motion, 3D tilt, reveal-on-scroll and back-to-top enhancements */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll(
  '.section .container > .eyebrow, .info-tile, .card, .person, .industry-grid > div, .project-grid article, .media-card, .credential-grid > div, .vm-card, .branch-card, .contact-card, .bulletin-gallery figure, .org-image-wrap'
);
revealTargets.forEach((el, index) => {
  el.classList.add('reveal');
  el.style.setProperty('--reveal-delay', `${(index % 5) * 70}ms`);
});
if ('IntersectionObserver' in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
  revealTargets.forEach(el => revealObserver.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('is-visible'));
}
if (!reduceMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.querySelectorAll('.info-tile, .card, .person, .industry-grid > div, .project-grid article, .vm-card, .credential-grid > div').forEach(card => {
    card.classList.add('tilt-card');
    card.addEventListener('pointermove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      card.style.setProperty('--tilt-x', `${(0.5 - y) * 7}deg`);
      card.style.setProperty('--tilt-y', `${(x - 0.5) * 9}deg`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    });
  });
}
const header = document.querySelector('.site-header');
const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
