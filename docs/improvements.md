# Portfolio Website — Improvements & Updates Roadmap

This document tracks completed refinements, upcoming enhancements, content additions, and technical polish for [asandeialexandru.github.io](https://asandeialexandru.github.io).

---

## 📌 Priority 1: Visual Assets & Profile Media

- [x] **Professional Avatar / Cutout Portrait**:
  - Added transparent cutout portrait of Alexandru on the right side of the Hero section.
  - Styled with glowing tech orbit rings and floating badges (`C++`, `Java 21`, `FastAPI`, `Win32 & Sockets`) inspired by `templete_model_website.jpg`.
  - Excluded raw original photos (`me background.jpeg`, `me_white_background.jpeg`, `me_nobackground.png`, `templete_model_website.jpg`) from the GitHub repository via `.gitignore`.
- [ ] **Project Screenshots & GIFs**:
  - **PhoneAsPeri**: Add a 5–10 second GIF or high-resolution screenshot of the Flutter mobile studio (virtual keyboard, joystick, air mouse) and Windows daemon console showing sub-10ms packet timings.
  - **LDD_FRS**: Add a screenshot of the football player analytics dashboard UI and PPI charts.
  - **Rentz Multiplayer**: Add a screenshot of the Java Swing game table during active tournament gameplay.
- [ ] **Social Share Card (Open Graph Image)**:
  - Create a 1200x630 `og-image.png` so when the link `https://asandeialexandru.github.io` is shared on LinkedIn, WhatsApp, or Discord, a rich preview card appears.

---

## ⚡ Priority 2: Technical & Interactive Features

- [x] **Desktop Left Sidebar Navigation**:
  - Moved top navigation to a permanent fixed left sidebar on desktop (`lg:w-64 fixed left-0 top-0 bottom-0`) with vertical icons, active ScrollSpy indicators, and quick-action PDF resume and social links.
  - Responsive mobile header with sliding drawer menu for small screens.
- [x] **Portrait & Glowing Tech Orbit (Clean Look)**:
  - Removed floating tech badges (`C++`, `Java`, etc.) overlaid on top of the portrait photo for a cleaner, high-end aesthetic.
  - Portrait is positioned cleanly within the glowing orange orbital rings and ambient backdrop.
- [x] **Core Competencies & Toolchain Breakdown**:
  - Added official technology SVG icons in front of every skill item (Languages, Frameworks, Systems & Networking, Cloud & Tools).
- [x] **Education Section Refinement**:
  - Removed "B.S." in front of "Computer Science".
  - Removed "Core Coursework" listing from both the website and resume.
- [ ] **Light / Dark Mode Switcher**:
  - The site defaults to a sleek dark glassmorphic theme. Add a toggle button in the navbar allowing visitors to switch to a clean light theme.
- [ ] **Project Deep-Dive Modals**:
  - Add a "View Architecture" button on project cards that opens a modal window with:
    - Packet structure diagram for PhoneAsPeri UDP protocol.
    - Microservice sequence diagram for LDD_FRS (Spring Boot $\leftrightarrow$ FastAPI $\leftrightarrow$ Neon Postgres).
- [ ] **Interactive Terminal Widget**:
  - Add a mini-terminal widget displaying quick interactive commands (e.g. `alexandru.skills`, `alexandru.contact`).

---

## 🌐 Priority 3: Custom Domain & Analytics

- [ ] **Custom Domain (Optional)**:
  - Register a personalized domain (e.g. `alexandruasandei.dev` or `alexandruasandei.ro`).
  - Configure `CNAME` in GitHub Pages settings and DNS records.
- [ ] **Privacy-Friendly Analytics**:
  - Add lightweight, zero-cookie analytics (such as Cloudflare Web Analytics or Plausible) to track visitor traffic and resume downloads.

---

## 🔄 Routine Sync Checklist (After CV Updates)

Whenever you update your resume or add new achievements:

1. Re-generate your resume via `CV_Files\build_cv.bat`.
2. Copy the updated `Alexandru_Asandei_CV.pdf` from `CV_Files\` into `PersonalSite\`.
3. Update project details or skills in `PersonalSite\index.html` if new milestones or courses are completed.
4. Commit and push:
   ```bash
   git add .
   git commit -m "docs: sync updated resume PDF and metrics"
   git push origin main
   ```

---

## ✅ Completed Milestones

- [x] **Hero Section with Tech Orbit & Cutout Portrait**:
  - Side-by-side grid layout matching `templete_model_website.jpg`.
  - Portrait of Alexandru with floating animated skill badges.
  - Clean bio: *"Computer Science student at the Technical University of Cluj-Napoca (UTCN)"*.
  - Renamed resume button to clean *"Download Resume"*.
  - Official GitHub & LinkedIn logo images before names.
- [x] **Left-Aligned Navigation**:
  - Aligned menu links to the left beside the brand name, removed duplicate contact link.
- [x] **Privacy & Clean Git Tracking**:
  - Excluded raw original photos and reference screenshots from the GitHub repository.
- [x] **Live GitHub Pages Deployment**:
  - Deployed directly to [https://asandeialexandru.github.io](https://asandeialexandru.github.io).
