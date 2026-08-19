# Bhavya Annabattula — Portfolio Website

> A terminal-aesthetic personal portfolio showcasing cybersecurity projects, security research, and full-stack development work.

**Live Site:** [bhavya-annabattula.github.io/Portfolio](https://bhavya-annabattula.github.io/Portfolio/)

---

## 📋 Overview

This is a fully responsive, hand-built portfolio website designed with a **dark terminal aesthetic** to reflect my focus on cybersecurity and systems thinking. The site uses no frameworks — just semantic HTML, vanilla CSS with smooth animations, and lightweight JavaScript for interactivity.

**Profile:**
- 3rd-year B.Tech Computer Science student at Andhra University College of Engineering, Visakhapatnam
- Focus: Cybersecurity (SOC analysis, VAPT, threat intelligence), Software Development, Data Analytics
- Actively pursuing SOC Analyst and cybersecurity analyst entry-level roles

---

## ✨ Features

### Design & UX
- **Terminal-Boot Aesthetic** — Mimics a Linux terminal boot sequence with monospace typography and a hacker-inspired color palette
- **Scroll-Reveal Animations** — Sections fade and slide in as the user scrolls, creating an engaging narrative flow
- **Fully Responsive** — Optimized for mobile (375px), tablet, and desktop viewports
- **Smooth Navigation** — Sticky sidebar navigation with active section highlighting
- **Security-Report Grid** — Project cards styled as incident reports with real badges (Featured, ML, Security Tool, Cloud, Data, Web)

### Content Sections
1. **Home** — Personal tagline and CTA buttons (View Projects, Get In Touch)
2. **About** — Professional background, current focus, and learning approach
3. **Skills** — Organized by category (Languages, Web & Cloud, Security Tools, Data & ML, Fundamentals)
4. **Projects** — 8 portfolio projects with live demos and GitHub source links:
   - SentinelAI (SOC Copilot) — Live Flask + Groq LLM demo
   - Phishing URL Detector — ML classifier + REST API
   - USB Physical Security Tool — Python/Tkinter GUI with PBKDF2-HMAC auth
   - AWS VPC Networking — Cloud infrastructure design
   - Retail Sales Analysis — SQL + Data analysis
   - COVID-19 Data Pipeline — Python + Pandas ETL
   - Cybersecurity Learning Tracker — Gamified learning roadmap
   - This Portfolio — Open-source site itself
5. **Security** — Hands-on offensive & defensive work, home lab write-ups, internship VAPT reports, certifications
6. **Experience** — Internships (Supraja Technologies VAPT, APSSDC AWS), community involvement, independent learning
7. **Contact** — Email, LinkedIn, GitHub with open availability messaging

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **HTML** | Semantic HTML5, accessibility-focused markup |
| **CSS** | Vanilla CSS3, CSS variables, Flexbox, Grid, animations |
| **JavaScript** | Vanilla JS (no jQuery), scroll event listeners, smooth reveal effects |
| **Hosting** | GitHub Pages (static site deployment) |
| **Version Control** | Git & GitHub |

---

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main site structure & semantic HTML
├── css/
│   └── styles.css      # All styling, animations, responsive design
├── js/
│   └── script.js       # Scroll reveals, navigation, smooth scroll
├── assets/
│   ├── images/         # Project screenshots, badges, icons
│   └── fonts/          # Monospace fonts (if custom fonts used)
├── README.md           # This file
└── .gitignore          # Git ignore rules

```

---

## 🚀 Setup & Development

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for cloning and version control)
- A text editor (VS Code recommended)
- Optional: Local HTTP server (e.g., `python -m http.server` or Live Server extension)

### Clone & Run Locally

```bash
# Clone the repository
git clone https://github.com/Bhavya-Annabattula/Portfolio.git
cd Portfolio

# Option 1: Open directly in browser (simplest)
open index.html

# Option 2: Use Python's built-in HTTP server
python3 -m http.server 8000
# Then visit: http://localhost:8000

# Option 3: Use VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

### File Modifications

**To edit content:**
- `index.html` — Update text, links, project descriptions, contact info
- `css/styles.css` — Modify colors, fonts, layout, animations
- `js/script.js` — Add new interactivity or refine scroll behaviors

**To update project links:**
1. Open `index.html`
2. Find the `<section id="projects">` section
3. Update `href` attributes in project cards to point to your live demos or GitHub repos
4. Update project descriptions as needed

---

## 🎨 Customization

### Color Scheme
The site uses CSS variables for easy theming. Update in `css/styles.css`:

```css
:root {
  --bg-dark: #0a0e27;        /* Background */
  --text-primary: #00ff88;   /* Primary text (terminal green) */
  --text-secondary: #64748b; /* Secondary text */
  --accent: #0ea5e9;         /* Accent color */
  --border: #1e293b;         /* Borders */
}
```

### Fonts & Typography
- **Primary Font:** Monospace (default: system monospace, or override with Google Fonts)
- To change: Update `font-family` in `css/styles.css`

### Animations
- Scroll reveals are handled by JavaScript event listeners
- Adjust timing in `js/script.js` (look for `IntersectionObserver` or `scroll` event handlers)
- CSS transitions can be tweaked in `css/styles.css` (search for `transition` or `animation`)

---

## 📱 Responsive Design

The site is mobile-first and tested on:
- **Mobile:** 375px (iPhone SE) to 480px
- **Tablet:** 768px to 1024px
- **Desktop:** 1025px and above

Breakpoints are defined in `css/styles.css`. To add a new breakpoint:

```css
@media (max-width: 768px) {
  /* Tablet & mobile styles */
}
```

---

## 🔗 Integration & External Links

### Live Project Demos
- **SentinelAI:** https://bhavya0602-sentinelai.hf.space
- **Phishing URL Detector:** Deployed on Render (update link in HTML)

### Social & Professional Links
- **GitHub:** github.com/Bhavya-Annabattula
- **LinkedIn:** linkedin.com/in/bhavya-annabattula-692112320
- **Email:** bhavya.annabattula@gmail.com

**To update:** Edit the footer and contact section in `index.html`

---

## 🚢 Deployment

### GitHub Pages (Current)

Your site is already deployed on GitHub Pages. To redeploy after making changes:

```bash
# Commit your changes
git add .
git commit -m "Update portfolio: [description of changes]"

# Push to GitHub (main branch)
git push origin main
```

GitHub Pages will automatically rebuild and deploy within 1–2 minutes. Visit your live site to verify.

### Deploy to Other Platforms

**Netlify:**
```bash
# Drag-and-drop the entire Portfolio folder to Netlify
# Or connect your GitHub repo for auto-deployment
```

**Vercel:**
```bash
npm install -g vercel
vercel
```

---

## 🔒 Security & Best Practices

- **No Sensitive Data:** No API keys, credentials, or personal information in source code
- **HTTPS Enforced:** GitHub Pages serves over HTTPS by default
- **Static Site:** No server-side code means no backend vulnerabilities
- **Regular Updates:** Keep project links and descriptions current

---

## 📊 Performance

- **Lighthouse Score:** Optimized for fast load times (no heavy frameworks)
- **Bundle Size:** ~50KB total (HTML + CSS + JS combined)
- **SEO:** Semantic HTML, meta tags for social sharing
- **Accessibility:** ARIA labels, semantic markup, keyboard-navigable

To audit locally, use Chrome DevTools Lighthouse or PageSpeed Insights.

---

## 🛠️ Maintenance Checklist

- [ ] Update project descriptions quarterly
- [ ] Add new projects as they're completed
- [ ] Test on mobile devices after each change
- [ ] Update social links if they change
- [ ] Review and fix any broken external links
- [ ] Keep certifications & experience section current
- [ ] Refresh the "latest" project badge as needed

---

## 📝 Contributing

This is a personal portfolio, but if you're forking or using this as a template:

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/your-feature`
3. **Make your changes** and test locally
4. **Commit and push:**
   ```bash
   git commit -m "Add: [feature description]"
   git push origin feature/your-feature
   ```
5. **Submit a pull request**

---

## 📄 License

This portfolio is open source under the **MIT License**. You're free to fork, modify, and deploy your own version — just give credit in the footer.

---

## 📞 Contact & Support

**Found an issue?**
- Open a GitHub Issue in this repository
- Email: bhavya.annabattula@gmail.com

**Want to collaborate?**
- Reach out on LinkedIn: [Bhavya Annabattula](https://www.linkedin.com/in/bhavya-annabattula-692112320)
- Check out active projects on GitHub: [Bhavya-Annabattula](https://github.com/Bhavya-Annabattula)

---

## 🎓 What's Next?

This portfolio is a living document. Upcoming additions:
- [ ] Add more home lab VAPT reports (EternalBlue, DC-1 Drupalgeddon)
- [ ] Deploy additional security-focused side projects
- [ ] Expand blog/writeups section for deeper technical deep-dives
- [ ] Add testimonials or recommendations section
- [ ] Optimize for more advanced animations (WebGL, 3D effects)

---

**Last Updated:** August 2026  
**Version:** 1.0  
**Status:** ✅ Active & Maintained

---

> *"I build things — and then I try to break them."*
