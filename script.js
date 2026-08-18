// ===== TERMINAL BOOT SEQUENCE =====
const terminalLines = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: '<strong>Bhavya Annabattula</strong> — B.Tech CSE, Andhra University' },
  { type: 'cmd', text: 'cat focus.txt' },
  { type: 'out', text: 'Software Development + Cybersecurity | SOC Analyst track' },
  { type: 'cmd', text: 'ls current_status/' },
  { type: 'out', text: '3rd year · CGPA 8.38 · Graduating 2028' },
  { type: 'cmd', text: './run_internship_report.sh --target=supraja' },
  { type: 'out', text: '[OK] VAPT assignments complete — LFI, XSS, IDOR, SQLi, OSINT' },
  { type: 'cmd', text: 'echo $STATUS' },
  { type: 'out', text: '<strong>Open to opportunities</strong> — SOC Analyst / Software Eng' },
];

const termBody = document.getElementById('terminalBody');
let lineIndex = 0;

function typeLine() {
  if (!termBody || lineIndex >= terminalLines.length) {
    const caret = document.createElement('span');
    caret.className = 'term-caret';
    termBody?.appendChild(caret);
    return;
  }

  const item = terminalLines[lineIndex];
  const lineEl = document.createElement('div');
  lineEl.className = 'line';

  if (item.type === 'cmd') {
    const promptSpan = document.createElement('span');
    promptSpan.className = 'prompt';
    promptSpan.textContent = '$ ';
    lineEl.appendChild(promptSpan);
    const textSpan = document.createElement('span');
    lineEl.appendChild(textSpan);
    termBody.appendChild(lineEl);

    let i = 0;
    const speed = 32;
    const typer = setInterval(() => {
      textSpan.textContent += item.text[i];
      i++;
      if (i >= item.text.length) {
        clearInterval(typer);
        lineIndex++;
        setTimeout(typeLine, 220);
      }
    }, speed);
  } else {
    lineEl.className = 'line out';
    lineEl.innerHTML = item.text;
    lineEl.style.opacity = '0';
    termBody.appendChild(lineEl);
    requestAnimationFrame(() => {
      lineEl.style.transition = 'opacity 0.3s';
      lineEl.style.opacity = '1';
    });
    lineIndex++;
    setTimeout(typeLine, 320);
  }
}

// Start after a short delay so the terminal card has faded in
setTimeout(typeLine, 500);

// ===== NAV TOGGLE (mobile) =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== SCROLL REVEAL =====
const revealTargets = document.querySelectorAll(
  '.about-grid, .skills-grid, .badges-row, .project-card, .security-grid, .timeline-item, .contact-grid'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

revealTargets.forEach(el => revealObserver.observe(el));

// Stagger project cards slightly
document.querySelectorAll('.project-card').forEach((card, i) => {
  card.style.transitionDelay = `${(i % 2) * 0.08}s`;
});

// ===== ANIMATED STAT COUNTERS =====
const statEls = document.querySelectorAll('.stat-num');

function animateCount(el) {
  const target = parseFloat(el.dataset.target);
  const isDecimal = el.dataset.decimal === 'true';
  const duration = 1400;
  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    el.textContent = isDecimal ? value.toFixed(2) : Math.floor(value).toString();
    if (progress < 1) {
      requestAnimationFrame(frame);
    } else {
      el.textContent = isDecimal ? target.toFixed(2) : target.toString();
    }
  }
  requestAnimationFrame(frame);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statEls.forEach(el => statObserver.observe(el));

// ===== NAVBAR ACTIVE LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id], header[id]');
const navAnchors = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--cyan)' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
