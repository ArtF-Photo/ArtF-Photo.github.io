// ── Build series cards on Projects page ──
const grid = document.getElementById('series-grid');
if (grid) {
  SERIES.forEach((s, si) => {
    const card = document.createElement('div');
    card.className = 'series-card';
    card.innerHTML = `
      <img src="${s.cover}" alt="${s.title}" loading="lazy">
      <div class="series-card-label">
        <div class="series-card-title">${s.title}</div>
        <div class="series-card-sub">${s.subtitle}</div>
      </div>`;
    card.addEventListener('click', () => openLightbox(si));
    grid.appendChild(card);
  });
}

// ── Lightbox ──
const lightbox = document.getElementById('lightbox');
const lbTitle  = document.getElementById('lb-title');
const track    = document.getElementById('carousel-track');
const dotsEl   = document.getElementById('dots');
let currentSlide = 0;

function openLightbox(si) {
  currentSlide = 0;
  buildCarousel(SERIES[si]);
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function buildCarousel(series) {
  lbTitle.textContent = series.title;
  track.innerHTML = '';
  dotsEl.innerHTML = '';
  series.images.forEach((img, i) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide' + (i === 0 ? ' active' : '');
    slide.innerHTML = `
      <img src="${img.src}" alt="${img.caption}">
      <span class="carousel-caption">${img.caption}</span>`;
    track.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(dot);
  });
}

function goTo(n) {
  const slides = track.querySelectorAll('.carousel-slide');
  const dots   = dotsEl.querySelectorAll('.dot');
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

if (lightbox) {
  document.getElementById('btn-prev').addEventListener('click', () => goTo(currentSlide - 1));
  document.getElementById('btn-next').addEventListener('click', () => goTo(currentSlide + 1));
  document.getElementById('lb-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   goTo(currentSlide - 1);
    if (e.key === 'ArrowRight')  goTo(currentSlide + 1);
  });
}
