// ============================================================
// MARS INVESTMENTS CAPITAL — shared.js
// ============================================================

const NAV_HTML = `
<div>
  <div class="top-bar">
    <div class="contact-info gap-20 d-flex">
     <span>📍 India</span>
      <span>📞 +91-7200300672</span>
      <span>✉️ support@marsinvestmentscapital.co.in</span>
    </div>
  </div>
</div>
<div class="nav-container">
  <a class="nav-logo" href="index.html">
    <div class="logo-img-wrap">
      <img src="/images/logo1.jpeg" alt="Mars Investments Capital Logo">
    </div>
    <div class="logo-text">
      <span class="brand">MARS</span>
      <span class="sub">Investments Capital</span>
    </div>
  </a>
  <ul class="nav-links" id="navLinks">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <a href="contact.html" class="btn-primary">Open Account →</a>
  <button class="hamburger" id="hamburger" onclick="toggleMenu()">☰</button>
</div>
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="services.html">Services</a>
  <a href="contact.html">Contact</a>
  <a href="contact.html" class="btn-primary">Open Account →</a>
</div>
`;

const FOOTER_HTML = `
<div class="footer-grid">
  <div class="footer-brand">
    <div class="fbrand-logo">
      <div class="logo-img-wrap"><img src="/images/logo1.jpeg" alt="Mars Investments Capital"></div>
      <div class="logo-text">
        <span class="brand" style="color:#fff">MARS</span>
        <span class="sub">Investments Capital</span>
      </div>
    </div>
    <p>Your trusted partner for smarter investing. SEBI Registered. Transparent. Committed to your financial growth since 2009.</p>
    <div class="footer-social">
      <a class="social-btn" href="https://twitter.com/MarsInvestments" target="_blank" title="Twitter">𝕏</a>
      <a class="social-btn" href="https://www.linkedin.com/company/mars-investments" target="_blank" title="LinkedIn">in</a>
      <a class="social-btn" href="https://www.facebook.com/share/19NH35e4fU/" target="_blank" title="Facebook">f</a>
      <a class="social-btn" href="https://www.youtube.com/channel/UCsYLdJogtW-DSp2kdtG-TNw" target="_blank" title="YouTube">▶</a>
    </div>
  </div>
  <div class="footer-col">
    <h4>Company</h4>
    <ul>
      <li><a href="about.html">About Us</a></li>
      <li><a href="#">Our Team</a></li>
      <li><a href="#">Careers</a></li>
      <li><a href="#">Press & Media</a></li>
      <li><a href="contact.html">Contact Us</a></li>
    </ul>
  </div>
  <div class="footer-col">
    <h4>Products</h4>
    <ul>
      <li><a href="services.html">Stocks & Equity</a></li>
      <li><a href="services.html">Mutual Funds</a></li>
      <li><a href="services.html">IPO</a></li>
      <li><a href="services.html">Fixed Deposits</a></li>
      <li><a href="services.html">Bonds & F&O</a></li>
    </ul>
  </div>
  <div class="footer-col">
    <h4>Support</h4>
    <ul>
      <li><a href="#">Help Center</a></li>
      <li><a href="#">Calculators</a></li>
      <li><a href="#">Learning Hub</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Terms of Use</a></li>
    </ul>
  </div>
</div>
<div class="footer-bottom">
  <p>© 2025 Mars Investments Capital Pvt. Ltd. All Rights Reserved.</p>
  <p class="sebi">SEBI Reg. No: INZ000123456 | NSE | BSE | MCX</p>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject navbar
  const navEl = document.querySelector('nav');
  if (navEl) navEl.innerHTML = NAV_HTML;

  // Inject footer
  const footerEl = document.querySelector('footer');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;

  // Inject WhatsApp button
  const wa = document.createElement('a');
  wa.className = 'wa-btn'; wa.href = 'https://wa.me/917200300672'; wa.target = '_blank'; wa.title = 'Chat on WhatsApp'; wa.innerHTML = '💬';
  document.body.appendChild(wa);

  // Active nav link
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Sticky nav shadow
  window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 20);
  });

  // Scroll fade-up animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburger');
  menu.classList.toggle('open');
  btn.textContent = menu.classList.contains('open') ? '✕' : '☰';
}
