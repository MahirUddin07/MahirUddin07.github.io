const header = document.getElementsByTagName("header")[0];
header.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
  <div class="container">
    <a class="navbar-brand fw-bold" href="#">
      <i class="bi bi-shop"></i> Salong Nilsson
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="home.html">Hem</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Omoss.html">Om oss</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
            Produkter
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Hårvård</a></li>
            <li><a class="dropdown-item" href="#">Hudvård</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Alla produkter</a></li>
          </ul>
        </li>
      </ul>
      <a href="kontakt.html" class="btn btn-outline-primary ms-lg-3">Kontakt</a>
    </div>
  </div>
</nav>`;