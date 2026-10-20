# Portfolio Website — Improvements & Updates Roadmap

This document tracks completed refinements, upcoming enhancements, content additions, and technical polish for [asandeialexandru.github.io](https://asandeialexandru.github.io).

---

## 📌 Priority 1: Visual Assets & Profile Media

- [ ] **Professional Avatar / Headshot**:
  - Add a high-quality portrait/photo of Alexandru in the Hero section next to the introduction.
  - Option to sync the same photo into the CV header if desired.
- [ ] **Project Screenshots & GIFs**:
  - **PhoneAsPeri**: Add a 5–10 second GIF or high-resolution screenshot of the Flutter mobile studio (virtual keyboard, joystick, air mouse) and Windows daemon console showing sub-10ms packet timings.
  - **LDD_FRS**: Add a screenshot of the football player analytics dashboard UI and PPI charts.
  - **Rentz Multiplayer**: Add a screenshot of the Java Swing game table during active tournament gameplay.
- [ ] **Social Share Card (Open Graph Image)**:
  - Create a 1200x630 `og-image.png` so when the link `https://asandeialexandru.github.io` is shared on LinkedIn, WhatsApp, or Discord, a rich preview card appears.

---

## ⚡ Priority 2: Technical & Interactive Features

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

- [x] **Streamlined Hero Section**:
  - Kept only: *"Computer Science student at the Technical University of Cluj-Napoca (UTCN)"*.
  - Removed status pill (*"Open for Software Engineering Internships & Opportunities"*).
  - Renamed resume buttons to clean *"Download Resume"* (removed "ATS" prefix).
  - Displayed *"GitHub"* cleanly with icon before name (instead of raw URL).
  - Placed logos before names for all social links (GitHub, LinkedIn, Email).
- [x] **Removed Redundant Metric Cards**:
  - Cleaned up the 4 stat boxes from the hero section for a more focused layout.
- [x] **Removed Duplicate Bottom Contact Card**:
  - Streamlined all contact details into a clean, minimal footer with icons before names and no duplicate cards.
- [x] **Initial Responsive Architecture**:
  - Glassmorphic dark design with Tailwind CSS and Vanilla JS.
  - Category project filtering (*All*, *Systems & C++*, *Cloud & Full-Stack*, *Mobile & Desktop*).
  - Direct PDF resume download integrated.
  - Interactive "Copy Email" button with toast notification.
- [x] **Live GitHub Pages Deployment**:
  - Deployed directly to [https://asandeialexandru.github.io](https://asandeialexandru.github.io).
