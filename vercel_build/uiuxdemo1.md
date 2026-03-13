# Nexova Digital - UI/UX Design System & Project Flow

## 1. Design Philosophy
As a digital marketing agency specializing in social media design and branding content, the Nexova Digital website must embody creativity, human connection, and professional authority. 

**Core Constraint:** Strictly **NO AI-oriented visual tropes**. We must avoid glowing circuit patterns, vertical data lines in cards, isometric tech grids, or overly synthetic aesthetics. The design must feel organic, human-crafted, and highly brand-focused.

## 2. Color Palette
The color system is designed to build trust (blues) while maintaining a fresh, approachable, and clean aesthetic.

* **Light Blue:** `#7ad9fb` - Use for interactive elements, highlights, and secondary buttons.
* **Dark Blue:** `#2a5874` - Use for primary typography, headers, and footer backgrounds. Builds authority.
* **Black:** `#000000` - Use sparingly for high-contrast text or deep shadows.
* **White Teal:** `#f1f7f7` - Use as the primary background color to provide a soft, breathable canvas that is easier on the eyes than pure white.
* **Brand Gradient:** `#55e4ff` to `#00516a` - Use for primary Call-to-Action (CTA) buttons, hero section overlays, and key brand accents.

## 3. Typography — Satoshi
The entire website uses **Satoshi**, a modern geometric sans-serif that is both technical and warm. A single superfamily brings visual cohesion; hierarchy is created purely through weight and size.

### Font Weights & Roles
| Weight | File | Role | Usage |
|--------|------|------|-------|
| **900 (Black)** | Satoshi-Black | Display / Hero | Giant hero stats, primary headline numbers, marquee text |
| **700 (Bold)** | Satoshi-Bold | Headings | H1–H2, section titles, CTA button labels, nav logo |
| **500 (Medium)** | Satoshi-Medium | Subheadings | H3–H4, nav links, card titles, labels, form field names |
| **400 (Regular)** | Satoshi-Regular | Body | Paragraphs, descriptions, list items, form inputs |
| **300 (Light)** | Satoshi-Light | Fine print | Captions, disclaimers, footer secondary text, timestamps |

All weights include matching *italic* variants for emphasis.

### Typographic Scale
* **Hero headline:** `text-7xl` / `text-8xl`, weight 900 (Black), tight `leading-[1.05]`
* **Page section title:** `text-4xl` / `text-5xl`, weight 700 (Bold)
* **Card / subsection title:** `text-xl` / `text-2xl`, weight 500 (Medium)
* **Body copy:** `text-base` / `text-lg`, weight 400 (Regular), `leading-relaxed`
* **Small labels / captions:** `text-xs` / `text-sm`, weight 300 (Light) or 500 (Medium) uppercase tracking

### Implementation
Font files are self-hosted at `/public/fonts/` via `@font-face` declarations in `index.css`. No external Google Fonts dependency. `font-display: swap` ensures fast initial render.

## 4. UI Component Guidelines
* **Cards & Containers:** Soft, rounded corners (e.g., 12px or 16px radius). Ample inner padding. **No tech-style vertical accent lines or glowing borders.** Use soft drop shadows to lift elements off the `#f1f7f7` background.
* **Buttons:** 
  * *Primary:* The Nexova Brand Gradient with white text, pill-shaped or softly rounded.
  * *Secondary:* Outlined with `#2a5874` or solid `#7ad9fb`.
* **Imagery:** High-quality authentic photography, human faces, energetic marketing campaign shots, and vibrant social media mockups. Avoid abstract 3D renders.

## 5. User Experience (UX) Flow
The website will follow a conversion-optimized flow, guiding visitors from brand discovery to lead generation.

### Phase 1: The Hook (Home Page)
1. **Hero Section:** High-impact headline, subheadline explaining the value proposition, and a clear CTA button (Gradient). Background should be clean or feature authentic agency imagery.
2. **Social Proof:** Client logos or "Trusted By" banner immediately below the fold.
3. **Core Services Overview:** 3-column layout highlighting Social Media Design, Branding Content, and Digital Marketing.
4. **Featured Work:** A visual grid of our best social media/branding case studies.
5. **Final CTA:** "Ready to elevate your brand?" lead generation section.

### Phase 2: Deep Dive (Modular Pages)
* **Services Page:** Detailed breakdowns of deliverables, processes, and ROI for clients.
* **Portfolio/Case Studies:** Visually rich pages. Heavy focus on before/after metrics and design galleries.
* **About Us:** The human element. Team photos, agency culture, and core values.
* **Contact:** Streamlined form collecting project type, budget, and contact info.

## 6. Next Steps: Modular Folder Structure
As we transition from design to development, the architecture will be modularized into reusable components based on this document (e.g., `components/Buttons`, `components/Cards`, `components/Hero`).
