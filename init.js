let header = document.getElementsByTagName("header")[0];
if (header.innerHTML.trim().length === 0) {
  header.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center gap-2" href="index.html">
      <i class="bi bi-scissors"></i>
      <span>Salong Nilsson</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Visa meny">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto align-items-lg-center">
        <li class="nav-item">
          <a class="nav-link d-flex align-items-center" href="index.html"><i class="bi bi-house-door-fill me-1"></i> Hem</a>
        </li>
        <li class="nav-item">
          <a class="nav-link d-flex align-items-center" href="Omoss.html"><i class="bi bi-people-fill me-1"></i> Om oss</a>
        </li>
        <li class="nav-item">
          <a class="nav-link d-flex align-items-center" href="Produkter.html"><i class="bi bi-tags-fill me-1"></i> Priser</a>
        </li>
        <li class="nav-item">
          <a class="nav-link d-flex align-items-center" href="Kontakt.html"><i class="bi bi-envelope-fill me-1"></i> Kontakt</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;
}

let footer = document.getElementsByTagName("footer")[0].innerHTML = `<div class="footer-inner">
            <div>
                <div class="footer-brand">Salong Nilsson</div>
                <div>Storgatan 12 · 111 22 Stockholm</div>
                <div class="text-muted">Öppet: Mån–Fre 10:00–19:00 · Lör 10:00–15:00</div>
            </div>
            <div class="text-muted">&copy; 2026 Salong Nilsson</div>
        </div>`

