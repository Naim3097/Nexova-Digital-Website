# Nexova Digital — UI/UX Design Document (Version 2: Editorial)

## Design Philosophy

Version 2 embraces an **editorial / magazine-inspired** design language. Where V1 used rounded, pill-shaped elements and gradient fills to create warmth, V2 employs **sharp geometry, generous whitespace, and typographic contrast** to project sophistication and authority. The result is a brand experience that feels like a premium publication — clean, intentional, and confident.

### Core Principles

- **Sharp geometry** — No rounded corners. All containers, buttons, and cards use square/rectangular edges.
- **Typographic hierarchy** — Large serif headings (Playfair Display) paired with clean sans-serif body text (Open Sans) create editorial contrast.
- **Asymmetric layouts** — Split-screen hero sections, offset grids, and unequal column ratios add visual interest.
- **Border-based structure** — Thin borders and dividers replace background fills as the primary way to define visual zones.
- **Whitespace as a design element** — Generous spacing communicates premium quality and lets content breathe.
- **Numbered and labeled systems** — Uppercase tracking labels (e.g., "01 / SERVICES") and numbered rows create editorial rhythm.

---

## Color Palette

Same brand palette as V1 — applied differently.

| Token            | Value                          | Usage in V2                                    |
| ---------------- | ------------------------------ | ---------------------------------------------- |
| Light Blue       | `#7ad9fb`                      | Accent labels, icons, hover states, thin lines |
| Dark Blue        | `#2a5874`                      | Headlines, dark sections, primary buttons      |
| White Teal       | `#f1f7f7`                      | Page backgrounds, light sections               |
| Black            | `#000000`                      | Body text, borders                             |
| Gradient Start   | `#55e4ff`                      | Gradient text only (hero headings)             |
| Gradient End     | `#00516a`                      | Gradient text only (hero headings)             |

### V2 Color Application Differences

- **Gradient usage reduced** — Instead of gradient button fills, V2 uses gradients sparingly for heading text effects only.
- **Dark sections** — Full-bleed `#2a5874` backgrounds for stats, testimonials, and CTA blocks.
- **Border accents** — `border-t-2` with `#7ad9fb` replaces filled background cards.

---

## Typography

| Role     | Font Family       | Weight          | Style                              |
| -------- | ----------------- | --------------- | ---------------------------------- |
| Headings | Playfair Display  | 700 (Bold)      | Serif, italic for emphasis         |
| Body     | Open Sans         | 400 / 600       | Sans-serif, clean and neutral      |
| Labels   | Open Sans         | 600 (Semibold)  | Uppercase, letter-spacing: 0.3em   |

### Typographic Patterns

- **Hero headings**: 5xl–7xl, Playfair Display Bold, leading-[0.95] for tight line height.
- **Italic emphasis**: `<em>` tags in headings use Playfair Display italic with gradient text fill.
- **Section labels**: Tiny uppercase text (`text-xs tracking-[0.3em]`) in Light Blue, placed above section headings.
- **Numbered items**: Large faded numbers (`text-3xl opacity-10`) as editorial markers.

---

## UI Component Patterns

### Navigation

- **Desktop**: Centered italic logo ("*Nexova*") with navigation links split left and right. Last link is a bordered CTA.
- **Mobile**: Full-screen slide-over overlay with dark background (`#2a5874`), large serif navigation text, and smooth translate-x transition.
- **Active link**: Light Blue underline, 2px offset.

### Buttons

- **Primary**: Square, no border-radius. `bg-brand-darkBlue text-white` with hover to `bg-brand-lightBlue`.
- **Secondary**: Square, `border-2 border-brand-darkBlue` with hover fill.
- **CTA with arrow**: Inline-flex with `ArrowUpRight` icon, group-hover translate animation.

### Cards & Containers

- **No rounded corners** — All elements are sharp-edged.
- **Border containers**: Thin `border border-brand-darkBlue/10` replaces shadow-based cards.
- **Accent borders**: `border-t-2 border-brand-lightBlue/20` on top of feature items.
- **Dark cards**: `bg-brand-darkBlue text-brand-whiteTeal` for highlight cards.

### Sections

- **Full-bleed alternating**: Light (`bg-white` / `bg-brand-whiteTeal`) and dark (`bg-brand-darkBlue`) sections.
- **Split layouts**: Grid with unequal columns (e.g., `lg:grid-cols-3 gap-16` with one column for heading, two for content).
- **Dividers**: `border-t border-brand-darkBlue/10` between sections instead of padding alone.

### Tables

- **Clean editorial style**: No cell backgrounds. `border-b` row dividers. Uppercase tracking headers.
- **Check marks**: Light Blue `<Check>` icons for boolean values.

### Forms

- **Bottom-border inputs**: `border-b-2` only (no full border). Focus state changes border to Light Blue.
- **Labels**: Uppercase tracking, muted opacity.
- **Inline newsletter**: Input + button flush-joined, no gap.

---

## Page Layouts

### Home

1. **Full-bleed hero** — Split layout with floating stat card overlay
2. **Marquee brand strip** — Uppercase scrolling text with bullet separators
3. **Dark stats section** — Large numbers with thin grid dividers
4. **Horizontal accordion services** — Numbered rows (01, 02, 03) expanding on hover
5. **Timeline process** — Vertical left-border dots with step content
6. **Masonry portfolio grid** — Mixed aspect-ratio images with hover overlay revealing project details
7. **Dark testimonials** — Large italic serif quotes, minimal attribution
8. **Newsletter strip** — Inline email + subscribe button

### Services

1. **Split hero** — Left heading, right description
2. **Full-width alternating service rows** — Even/odd row reverse with number, title, description, features
3. **Minimal "Why Us" grid** — Border-top accent cards, icon + title, no backgrounds
4. **Vertical timeline process** — Step dots on left border
5. **Sidebar FAQ** — Questions on right, large heading on left
6. **Dark CTA section**

### Product (Pricing)

1. **Centered hero** — Gradient italic emphasis in heading
2. **Three-column pricing grid** — Flush border containers, no shadows. Hero plan has top gradient bar and dark background
3. **Comparison table** — Editorial table with uppercase headers, check icons, dashes for negatives
4. **Add-ons** — Split layout (heading left, 2×2 grid right) with top-border accents
5. **Guarantees** — Four-cell grid with icon + text, bordered container
6. **Dark CTA** — Custom quote invitation

### Blog

1. **Editorial masthead hero** — Split heading/description
2. **Featured article** — Full-width with image placeholder left, content right
3. **Category filter bar** — Square buttons, search input
4. **Article list** — Numbered rows (01, 02…) with category, title, excerpt, date, hover-reveal read link
5. **Topics** — Tag-style bordered items with icon
6. **Newsletter** — Centered with inline subscribe form

### Contact Us

1. **Split hero** — Left heading, right description
2. **Contact info bar** — Four-cell horizontal strip with icon + label + value
3. **Form + sidebar** — Three-column form with bottom-border inputs, two-column sidebar with FAQ items + dark CTA card
4. **Map placeholder** — Full-width gradient box with pin icon

---

## Motion & Interaction

- **Hover reveals**: Portfolio grid items show project info overlay on hover.
- **Arrow animations**: `group-hover:translate-x-0.5 -translate-y-0.5` on ArrowUpRight icons.
- **Opacity transitions**: Read links in article list fade in on row hover.
- **Mobile menu**: `translate-x-full` → `translate-x-0` slide-in transition, 300ms.
- **No scroll animations** — Clean, immediate rendering. No entrance animations to maintain editorial simplicity.

---

## Responsive Behavior

- **Mobile-first grid collapse**: Multi-column grids stack to single column on mobile.
- **Full-screen mobile nav**: Overlay menu replaces hamburger dropdown.
- **Touch-friendly targets**: All buttons/links have minimum `py-3 px-5` for tap targets.
- **Typography scaling**: Hero text scales from `text-5xl` (mobile) to `text-7xl` (desktop).
- **Table horizontal scroll**: Comparison table uses `overflow-x-auto` on small screens.

---

## Key Differences from V1

| Aspect           | V1 (Rounded / Gradient)              | V2 (Editorial / Sharp)                   |
| ---------------- | ------------------------------------ | ----------------------------------------- |
| Corners          | `rounded-2xl`, `rounded-full`        | No border-radius (sharp/square)           |
| Buttons          | Gradient pill buttons                | Square solid/outlined buttons             |
| Typography       | Montserrat + Inter                   | Playfair Display (serif) + Open Sans      |
| Cards            | Shadow cards with rounded corners    | Border containers, no shadows             |
| Sections         | Gradient overlays, padded cards      | Full-bleed, border-divided sections       |
| Nav mobile       | Hamburger dropdown                   | Full-screen slide-over overlay            |
| Visual accents   | Gradient fills                       | Thin borders, uppercase labels, numbers   |
| Overall feel     | Friendly, approachable               | Sophisticated, editorial, premium         |
