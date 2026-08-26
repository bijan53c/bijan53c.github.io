// ============================================
// Mobile nav toggle
// ============================================
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu after tapping a link
  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================
// Dotted world-map generator (decorative)
// Rough continent silhouettes plotted as a
// point grid inside a 300x170 viewBox.
// ============================================
const NS = 'http://www.w3.org/2000/svg';

// Each region: [xMin, xMax, yMin, yMax, density 0-1, dropoff]
const regions = [
  [18, 78, 18, 60, 0.55],   // North America
  [55, 95, 70, 145, 0.5],   // South America
  [138, 168, 18, 42, 0.6],  // Europe
  [132, 178, 48, 118, 0.55],// Africa
  [178, 265, 15, 95, 0.6],  // Asia
  [175, 210, 95, 118, 0.45],// SE Asia
  [228, 268, 108, 138, 0.5],// Australia
];

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function buildMap() {
  const svg = document.getElementById('map-svg');
  if (!svg) return;

  const rand = seededRandom(53);
  const step = 4.2;
  const frag = document.createDocumentFragment();

  regions.forEach(([xMin, xMax, yMin, yMax, density]) => {
    for (let x = xMin; x <= xMax; x += step) {
      for (let y = yMin; y <= yMax; y += step) {
        // pull dots toward an elliptical falloff so edges feel organic
        const cx = (xMin + xMax) / 2;
        const cy = (yMin + yMax) / 2;
        const rx = (xMax - xMin) / 2;
        const ry = (yMax - yMin) / 2;
        const nx = (x - cx) / rx;
        const ny = (y - cy) / ry;
        const dist = Math.sqrt(nx * nx + ny * ny);
        const edgeFade = Math.max(0, 1 - dist);
        if (rand() < density * edgeFade + 0.02) {
          const dot = document.createElementNS(NS, 'circle');
          dot.setAttribute('cx', (x + (rand() - 0.5) * 1.4).toFixed(1));
          dot.setAttribute('cy', (y + (rand() - 0.5) * 1.4).toFixed(1));
          dot.setAttribute('r', (0.9 + rand() * 0.5).toFixed(2));
          dot.setAttribute('fill', 'currentColor');
          dot.setAttribute('opacity', (0.35 + rand() * 0.5).toFixed(2));
          frag.appendChild(dot);
        }
      }
    }
  });

  svg.appendChild(frag);
}

buildMap();
