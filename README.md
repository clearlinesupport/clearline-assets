````markdown
# Clearline Field Systems Website

A standalone, responsive, “brand-smart” static website for Clearline Field Systems LLC. This repository contains everything needed to deploy a modern, accessible site—no Carrd or external dependencies required.

---

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Folder Structure](#folder-structure)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
   - [Local Development](#local-development)  
   - [Deployment](#deployment)  
5. [Customization](#customization)  
   - [Brand Colors & Fonts](#brand-colors--fonts)  
   - [Header & Navigation](#header--navigation)  
   - [Sections & Content](#sections--content)  
6. [Accessibility & SEO](#accessibility--seo)  
7. [Contributing](#contributing)  
8. [License](#license)  
9. [Contact](#contact)

---

## Project Overview

Clearline Field Systems LLC provides fast, on-site IT support, PC deployments, and tech-refresh services to government offices and small businesses in the Albany, NY area. This repository is a complete, static, self-hosted version of their marketing site. It replaces any Carrd-based implementation and is built to be:

- **Responsive:** Adapts to desktop, tablet, and mobile screens.  
- **Accessible:** Semantic HTML, keyboard-friendly navigation, and appropriate ARIA attributes.  
- **Brand-Driven:** Uses the official brand blue (`#0056b3`), accent blue (`#3399ff`), and the Inter font.  
- **Easy to Deploy:** Push to GitHub Pages, Netlify, or any static-site hosting service.

---

## Features

- **Sticky, Full-Width Header**  
  - Logo on the left, navigation links center/right, and a “Call / SMS” button on the far right.  
  - Hamburger menu for screens ≤ 768px.  

- **Hero Section**  
  - Prominent headline, subheadline, call-to-action button, and a short footer line.  

- **About Section**  
  - Company overview, mission-aligned bullet points, and a stylized “capabilities” panel.  

- **Services Section**  
  - Grid layout of service cards (Low-Voltage Cleanup, Cabinet Cleanup, Site Surveys, Camera Installation, Wi-Fi Rework, Entrance Tech Readiness, ADA Compliance, Wiring Trace & Map, Post-Tenant Sweep, Compliance Disposal).  

- **Resources Section**  
  - Links to vendor-ready documents (Certificate of Insurance, W9, EIN Assignment, NYS Business Registration & COF) and a “Call / Text” button.  

- **Contact Section**  
  - Simple name/email/phone/message form placeholder (client may replace with backend integration).  

- **Footer**  
  - Company address, UEI, email link, and phone link styled to match the brand.

---

## Folder Structure

```plaintext
clearlinesupport-site/
├── assets/
│   ├── clearline_logo.svg       # Primary logo (SVG or PNG)
│   ├── favicon.png              # Favicon image
│   ├── apple-touch-icon.png     # Apple Touch icon
│   └── Social.png               # Social preview image (1200×630)
├── index.html                   # Main HTML file
├── main.css                     # All site CSS (variables, reset, layout, components)
├── main.js                      # JavaScript for hamburger menu & form handler
└── README.md                    # This README file
````

---

## Getting Started

### Prerequisites

To view or modify this site locally, you need:

* A modern web browser (Chrome, Firefox, Safari, Edge).
* A code editor of your choice (VS Code, Sublime Text, etc.).
* (Optional) A local HTTP server (e.g., live-server npm package) to test relative paths and smooth file serving.

### Installation

1. **Clone or download** this repository:

   ```bash
   git clone https://github.com/<your-username>/clearline-assets.git
   cd clearline-assets
   ```

2. **Verify file structure**. You should see `index.html`, `main.css`, `main.js`, and an `assets/` folder containing your logo, favicon, and social image.

### Local Development

You can open `index.html` directly in your browser, but for correct relative-path handling (especially if you add more assets in subfolders), it’s recommended to run a simple HTTP server:

* **Using Node.js “live-server”**:

  ```bash
  npm install -g live-server
  live-server
  ```

  This opens `index.html` at `http://127.0.0.1:8080` (or similar). Any edits to `index.html`, `main.css`, or `main.js` will auto-reload the page.

* **Using Python 3’s built-in server** (no installation needed if Python 3 is installed):

  ```bash
  python3 -m http.server 8000
  ```

  Then visit `http://localhost:8000/`.

### Deployment

You can deploy to any static-site hosting service. The simplest is GitHub Pages:

1. **Push** your code to a GitHub repository named `<your-username>.github.io` (or any repo and set a custom domain).
2. In **GitHub Settings → Pages**, select the branch (`main` or `master`) and folder (`/ (root)`).
3. After a minute, your site will be live at `https://<your-username>.github.io/` (or your custom domain, if configured).

Alternatively, you can drag-and-drop this folder into Netlify, Vercel, or any other static-host provider and follow their instructions.

---

## Customization

This project is designed to be easy to tweak. Below are key areas you might want to update.

### Brand Colors & Fonts

* All colors are defined in `main.css` under the `:root` selector:

  ```css
  :root {
    --clr-primary: #0056b3;    /* Brand blue */
    --clr-accent:  #3399ff;    /* Lighter accent */
    --clr-bg:      #0f1115;    /* Site background */
    --clr-text:    #ffffff;    /* Main text color */
    --clr-subtle:  #a5abb5;    /* Paragraph/secondary text */
    /* …other variables… */
  }
  ```

  To change your primary brand color, update `--clr-primary: #0056b3;` in `main.css`.

* The font family loads **Inter** from Google Fonts:

  ```html
  <link
    rel="preload"
    href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;1,300;1,400&display=swap"
    as="style"
    onload="this.onload=null;this.rel='stylesheet'"
  />
  ```

  If you want a different font, replace this link and update `body { font-family: var(--font-base); }` accordingly.

### Header & Navigation

* **Header Height**: Controlled via CSS variable `--header-height` (80px on desktop, 60px on mobile). Change this if you want a taller/shrinker header.

  ```css
  :root {
    --header-height: 80px;
  }
  @media (max-width: 768px) {
    :root {
      --header-height: 60px;
    }
  }
  ```
* **Logo**: Replace `assets/clearline_logo.svg` with your own SVG/PNG. The `<img>` tag in `index.html` points to `assets/clearline_logo.svg`.
* **Navigation Links**: In `index.html`, the `<nav id="main-nav">` contains:

  ```html
  <a href="#hero-section">Home</a>
  <a href="#about-section">About</a>
  <a href="#services-section">Services</a>
  <a href="#resources-section">Resources</a>
  <a href="#contact-section">Contact</a>
  <a class="call-btn" href="tel:+15185063288">Call / SMS</a>
  ```

  Adjust link text or href targets as needed (e.g., if you rename a section ID).

### Sections & Content

Each major part of the site resides in its own `<section>` with a unique ID:

* **Hero Section**

  ```html
  <section id="hero-section" class="hero"> … </section>
  ```

  Contains the main headline, subheadline, CTA, and footer line.
  Styles: `.hero`, `.hero-content`, `.hero h1`, `.hero-subtitle`, `.hero-cta`, `.hero-footer` in `main.css`.

* **About Section**

  ```html
  <section id="about-section" class="about"> … </section>
  ```

  Contains company intro paragraphs and a capabilities panel with a styled list.
  Styles: `.about`, `.about-capabilities`, `.about-capabilities ul`, etc.

* **Services Section**

  ```html
  <section id="services-section" class="services"> … </section>
  ```

  Presents a grid (`.services-grid`) of service cards (`.service-card`). Each card includes an `<h3>`, a `<p>`, and a link.

* **Resources Section**

  ```html
  <section id="resources-section" class="resources"> … </section>
  ```

  Contains a `.docs-grid` of document buttons (`.doc-btn`, plus modifiers `.yellow` and `.green`). Each button links out to vendor documents.

* **Contact Section**

  ```html
  <section id="contact-section" class="contact"> … </section>
  ```

  Contains a simple form (`#contact-form`) with Name, Email, Phone, and Message fields. By default, submission shows an alert (in `main.js`). Replace that with your own integration (e.g., Formspree, Netlify Forms, custom backend).

* **Footer**

  ```html
  <footer class="site-footer"> … </footer>
  ```

  Provides company name, UEI, address, and links to email and phone. Styled under `.site-footer`, `.footer-inner`, and `.footer-links` in `main.css`.

---

## Accessibility & SEO

* **Semantic HTML5**: Uses `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`.
* **ARIA Attributes**:

  * `aria-controls="main-nav"` and `aria-expanded` on the hamburger `<input>` for screen-reader awareness.
  * `aria-label="Toggle navigation menu"` on the checkbox.
* **Focus Management**: Styled focus outlines for form fields (`border-color: var(--clr-accent)` and subtle box shadow).
* **Anchor Scrolling**: `html { scroll-behavior: smooth; }` and `body { scroll-padding-top: var(--header-height); }` ensure in-page links never get hidden behind the fixed header.
* **Social Meta Tags**: Proper `<meta property="og:…">` and Twitter Card tags for optimal sharing previews.
* **Responsive Design**: Breakpoints at 768px (navigation collapse) and 600px (typography scaling).

---

## Contributing

Contributions are welcome! If you’d like to:

1. **Report a bug**: Open an issue detailing the problem, including browser and device information.
2. **Suggest an enhancement**: Open an issue or create a pull request with your proposed change.
3. **Submit a pull request**: Fork this repository, create a feature branch, and submit a pull request. Please adhere to the existing code style and run `index.html` locally to confirm no visual regressions.

---

## License

This project is distributed under the [MIT License](https://opensource.org/licenses/MIT). See the full text in [LICENSE](LICENSE) (if included) or below:

```
MIT License

© 2025 Clearline Field Systems LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
```

---

## Contact

For questions or support, reach out to:

* **Email:** [admin@clearlinesupport.com](mailto:admin@clearlinesupport.com)

Feel free to open an issue in this repository or DM on LinkedIn if you want to suggest improvements or request new features.

---

Thank you for checking out the Clearline Field Systems static site! Any feedback or issues are appreciated.
