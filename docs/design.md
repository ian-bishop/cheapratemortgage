# Design System

## Aesthetic Direction: "Editorial Finance"

**Concept:** Modern financial publication meets fintech - authoritative yet accessible. The site feels like a trusted source where smart homebuyers get informed.

**Tone:** Refined, confident, trustworthy - not stuffy bank, not flashy startup.

**Memorable Element:** Oversized rate displays that feel like financial dashboard meets magazine cover.

---

## Typography

### Font Families

| Role | Font | Fallback | Usage |
|------|------|----------|-------|
| Display | DM Serif Display | Georgia, serif | Headlines, rates, section titles |
| Body | Source Sans 3 | system-ui, sans-serif | Body text, UI elements, navigation |

### Why These Fonts?

- **DM Serif Display** - Elegant editorial feel with sharp serifs. Gives authority without being stuffy. Perfect for oversized rate numbers.
- **Source Sans 3** - Clean and highly readable. Professional without being generic (avoids Inter/Roboto trap).

### Type Scale

```css
h1 { font-size: clamp(2.75rem, 7vw, 4.5rem); }  /* Hero headlines */
h2 { font-size: clamp(1.75rem, 4vw, 2.5rem); }  /* Section titles */
h3 { font-size: clamp(1.25rem, 3vw, 1.5rem); }  /* Card headers */
```

### Usage Rules

- Headlines always use `--font-display`
- Body text uses `--font-body`
- Rate numbers use display font for impact
- Navigation uses body font at smaller weights

---

## Color Palette

### Primary Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-ink` | `#1a1f2e` | Primary text, dark backgrounds |
| `--color-ink-light` | `#4a5568` | Secondary text, muted content |
| `--color-paper` | `#faf9f7` | Primary background (warm off-white) |
| `--color-paper-dark` | `#f0eeeb` | Section backgrounds, cards |

### Accent Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-accent` | `#c9a227` | Gold - rates, CTAs, highlights |
| `--color-accent-dark` | `#a88a1f` | Gold hover states |

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-success` | `#2d6a4f` | Green - rate decreased |
| `--color-danger` | `#9b2c2c` | Red - rate increased |

### Color Rationale

- **Warm paper background** (`#faf9f7`) - Avoids harsh white, feels like quality print
- **Deep navy ink** (`#1a1f2e`) - More sophisticated than pure black
- **Gold accent** (`#c9a227`) - Suggests value/premium without being flashy, stands out against both light and dark

---

## Spacing System

### Base Unit: 4px

```
4px   - Tight spacing (icon gaps)
8px   - Small spacing (inline elements)
16px  - Default spacing (paragraphs, form fields)
24px  - Medium spacing (card padding mobile)
32px  - Large spacing (section padding mobile)
48px  - XL spacing (card padding desktop)
64px  - XXL spacing (section padding desktop)
```

### Section Padding

- **Mobile:** `py-10` to `py-12` (40-48px)
- **Desktop:** `py-14` to `py-16` (56-64px)
- **Hero reduced:** Less bottom padding to keep rates close to chart

---

## Component Patterns

### Cards

```css
.card {
  background: white;
  border-radius: 1rem;           /* 16px - soft but not bubble-y */
  border: 1px solid rgba(26, 31, 46, 0.05);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}
```

### Rate Cards (Hero)

- Dark background (`--color-ink`) for contrast
- Gold accent on current rate value
- Large display typography for impact
- Subtle change indicators with directional arrows

### Buttons

**Primary (Gold):**
```css
background: var(--color-accent);
color: white;
border-radius: 0.5rem;
padding: 0.75rem 1.5rem;
```

**Secondary (Outline):**
```css
border: 2px solid var(--color-ink);
color: var(--color-ink);
/* Hover: fill with ink, text goes paper */
```

### Accordion (FAQ)

- Clean borders, no heavy shadows
- Smooth height transitions
- Chevron rotation on expand
- Generous padding for readability

---

## Motion & Animation

### Principles

- **Purposeful** - Animation serves function, not decoration
- **Subtle** - Micro-interactions, not distracting effects
- **Fast** - 150-300ms for most transitions

### Transitions

```css
transition-colors: 150ms ease
transition-all: 200ms ease
```

### Hover States

- Links: Color shift to accent or darker shade
- Cards: Subtle shadow increase or border color change
- Buttons: Background color darken

### Page Load

- No heavy entrance animations
- Content appears immediately (SSG benefit)
- Chart renders progressively

---

## Layout Principles

### Max Width

- Content max-width: `1152px` (max-w-6xl)
- Centered with auto margins
- Horizontal padding: `16px` mobile, `24px` tablet, `32px` desktop

### Grid

- **Mobile:** Single column
- **Tablet (md):** 2 columns for cards/comparisons
- **Desktop (lg):** 3 columns where appropriate

### Visual Hierarchy

1. **Hero rates** - Largest, most prominent
2. **Section headlines** - Clear separation
3. **Card content** - Scannable, not dense
4. **Supporting text** - Smaller, muted colors

---

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| sm | 640px | Small tablets, large phones |
| md | 768px | Tablets |
| lg | 1024px | Small laptops |
| xl | 1280px | Desktops |

### Mobile-First Approach

- Base styles for mobile
- Progressive enhancement with breakpoints
- Touch-friendly tap targets (min 44px)

---

## Anti-Patterns (What to Avoid)

- **Generic fonts** - No Inter, Roboto, Arial
- **Purple gradients** - Overused AI aesthetic
- **Pure white backgrounds** - Too harsh
- **Pure black text** - Too stark
- **Excessive animations** - Distracting
- **Cluttered layouts** - Financial data needs breathing room
- **Tiny text** - Rates should be scannable at a glance

---

## File References

- **CSS Variables:** `src/app/globals.css`
- **Font Loading:** `src/app/layout.tsx`
- **Original Concept:** `docs/site-concept.md`
- **Design Skill Guide:** `docs/claude-frontend-design-skill.md`
