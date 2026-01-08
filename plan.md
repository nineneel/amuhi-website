# AMUHI Website - Program Pages Implementation Plan

**Date:** 2026-01-07
**Status:** Ready for Implementation

---

## Project Overview

### Tech Stack
- **Framework:** React 19.2.3 + TypeScript
- **Build Tool:** Vite 7.2.7
- **Styling:** Pure CSS with CSS Variables
- **Carousel:** Swiper 12.0.3
- **Routing:** None (need to add `react-router-dom`)

### Current Structure
```
src/
├── App.tsx                 # Main app (no routing)
├── main.tsx
├── index.css               # Global CSS variables
├── components/
│   └── common/
│       ├── Navbar/         # Hash-based navigation
│       ├── Footer/
│       └── TestimonialCarousel/
├── pages/
│   └── Home/
│       ├── Hero/           # Hero with form
│       ├── Programs/       # 6 program cards
│       ├── Events/
│       ├── Organization/
│       └── Testimonials/
└── assets/
    ├── programs/           # Program icons
    └── events/
```

---

## CSS Variables Reference (from `src/index.css`)

### Colors
```css
--primary-dark: #000000
--primary-navy: #203998       /* rgb: 32, 57, 152 */
--primary-blue: #1E55B1       /* rgb: 30, 85, 177 */
--primary-cyan: #8CE2F9       /* rgb: 140, 226, 249 */
--primary-light: #8CE2F9

--white: #ffffff
--black: #000000
--success: #22c55e

--gray-50 to --gray-900       /* Full grayscale */
```

### Gradients
```css
--gradient-primary: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-light) 100%)
--gradient-hero: linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(32,57,152,0.9) 50%, rgba(30,85,177,0.85) 100%)
--gradient-card: linear-gradient(180deg, var(--primary-cyan) 0%, var(--primary-cyan) 100%)
```

### Typography
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif
--font-heading: 'Outfit', var(--font-primary)
```

### Spacing
```css
--spacing-xs: 0.25rem    /* 4px */
--spacing-sm: 0.5rem     /* 8px */
--spacing-md: 1rem       /* 16px */
--spacing-lg: 1.5rem     /* 24px */
--spacing-xl: 2rem       /* 32px */
--spacing-2xl: 3rem      /* 48px */
--spacing-3xl: 4rem      /* 64px */
--spacing-4xl: 5rem      /* 80px */
--spacing-5xl: 7.5rem    /* 120px */
```

### Border Radius
```css
--radius-sm: 0.375rem    /* 6px */
--radius-md: 0.5rem      /* 8px */
--radius-lg: 0.75rem     /* 12px */
--radius-xl: 1rem        /* 16px */
--radius-2xl: 1.5rem     /* 24px */
--radius-full: 9999px    /* pill */
```

### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)
```

### Transitions
```css
--transition-fast: 150ms ease
--transition-normal: 250ms ease
--transition-slow: 350ms ease
```

### Container
```css
--container-max: 1280px
--container-padding: 1.5rem
--container-hero: 1400px
```

---

## Existing Programs (6 Total)

| # | Name | Slug | Icon | Description |
|---|------|------|------|-------------|
| 1 | **AMUHI Academy** | `academy` | `icon-academy.png` | Pusat pembelajaran komprehensif dan sertifikasi profesional |
| 2 | **AMUHI Check** | `check` | `icon-check.png` | Sistem verifikasi digital terintegrasi untuk legalitas |
| 3 | **AMUHI Protect** | `protect` | `icon-protect.png` | Platform perlindungan konsumen dan advokasi hukum |
| 4 | **AMUHI Care** | `care` | `icon-care.png` | Inisiatif dampak sosial dan program advokasi |
| 5 | **AMUHI Network** | `network` | `icon-network.png` | Pusat bisnis digital dan ruang kolaborasi eksklusif |
| 6 | **AMUHI Digital** | `digital` | `icon-digital.png` | Saluran komunikasi strategis dan platform media digital |

### Current Features per Program
- **Academy:** Certified Training, Industry Workshops, Expert Mentors
- **Check:** Verification Tool, Fraud Prevention, Official Database
- **Protect:** Scam Protection, Legal Aid, Crisis Support
- **Care:** Community Support, Social Projects, Advocacy
- **Network:** Business Matching, Member Events, Collaboration
- **Digital:** Media Exposure, Digital Assets, Communication

---

## Goal: Add Program Detail Pages

### Routes to Create
```
/                         # Home page
/programs/academy         # AMUHI Academy
/programs/check           # AMUHI Check
/programs/protect         # AMUHI Protect
/programs/care            # AMUHI Care
/programs/network         # AMUHI Network
/programs/digital         # AMUHI Digital
```

### Page Structure (Each Program)
1. **Hero Section** - Icon, name, tagline, description, CTA
2. **Overview Section** - About, vision, mission
3. **Features Section** - 3 main features with details
4. **Benefits Section** - Key advantages
5. **How It Works** - Step-by-step process
6. **Target Audience** - Who should use this
7. **FAQ Section** - Common questions (accordion)
8. **CTA Section** - Call to action
9. **Related Programs** - Links to other programs

---

## Implementation Phases

### Phase 1: Setup Infrastructure
**Tasks:**
1. Install `react-router-dom`
2. Create TypeScript interfaces (`src/types/program.ts`)
3. Create centralized data (`src/data/programs.ts`)
4. Update `App.tsx` with Router
5. Create `ScrollToTop` component

### Phase 2: Build Shared Components
**New Components:**
```
src/components/
├── common/
│   ├── Breadcrumb/
│   └── CallToAction/
└── programs/
    ├── ProgramHeader/
    ├── ProgramFeatures/
    ├── ProgramBenefits/
    ├── ProgramHowItWorks/
    └── ProgramFAQ/
```

### Phase 3: Create Program Pages
**New Pages:**
```
src/pages/
├── ProgramDetail/          # Base layout
└── programs/
    ├── Academy/
    ├── Check/
    ├── Protect/
    ├── Care/
    ├── Network/
    └── Digital/
```

### Phase 4: Integration
1. Update Navbar with `Link` components
2. Update program cards with router links
3. Add breadcrumb navigation
4. Test all routes

---

## TypeScript Interfaces

```typescript
// src/types/program.ts

export interface ProgramFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ProgramStep {
  step: number;
  title: string;
  description: string;
}

export interface ProgramFAQ {
  question: string;
  answer: string;
}

export interface ProgramData {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  heroImage?: string;

  overview: {
    about: string;
    vision: string;
    mission: string;
  };

  features: ProgramFeature[];
  benefits: string[];
  howItWorks: ProgramStep[];
  targetAudience: string[];
  faqs: ProgramFAQ[];

  cta: {
    primary: { text: string; action: string; };
    secondary?: { text: string; action: string; };
  };

  relatedPrograms?: string[];
}
```

---

## Styling Guidelines

### Section Styling Pattern
```css
.program-section {
  padding: var(--spacing-5xl) 0;
  background: var(--white);
}

.program-section .container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.program-section-title {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary-navy);
  text-transform: uppercase;
  margin-bottom: var(--spacing-2xl);
}
```

### Card Pattern
```css
.program-card {
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--gray-100);
  transition: all var(--transition-normal);
}

.program-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}
```

### Button Pattern
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-lg);
  background: var(--gradient-primary);
  color: var(--white);
  border-radius: var(--radius-full);
  font-weight: 600;
  transition: all var(--transition-normal);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--primary-navy);
  color: var(--primary-navy);
}

.btn-outline:hover {
  background: var(--primary-navy);
  color: var(--white);
}
```

### Responsive Breakpoints
```css
/* Tablet */
@media (max-width: 1024px) {
  /* 2-column grids */
}

/* Mobile */
@media (max-width: 768px) {
  /* 1-column grids */
  /* Smaller typography */
}

/* Small mobile */
@media (max-width: 640px) {
  /* Single column, reduced padding */
}
```

---

## Program Content Summary

### AMUHI Academy
- **Tagline:** Pusat Pembelajaran & Sertifikasi Profesional
- **Focus:** Education, training, certification
- **CTA:** "Daftar Sekarang"

### AMUHI Check
- **Tagline:** Sistem Verifikasi Digital Terintegrasi
- **Focus:** Travel verification, fraud prevention
- **CTA:** "Cek Travel Sekarang"

### AMUHI Protect
- **Tagline:** Platform Perlindungan & Advokasi Hukum
- **Focus:** Consumer protection, legal aid
- **CTA:** "Laporkan Masalah"

### AMUHI Care
- **Tagline:** Inisiatif Dampak Sosial & Advokasi
- **Focus:** Social impact, community welfare
- **CTA:** "Apply Beasiswa"

### AMUHI Network
- **Tagline:** Pusat Bisnis Digital & Kolaborasi
- **Focus:** Business networking, partnerships
- **CTA:** "Daftar Membership"

### AMUHI Digital
- **Tagline:** Saluran Komunikasi & Media Digital
- **Focus:** Media exposure, content platform
- **CTA:** "Submit Konten"

---

## Files to Modify

### Existing Files
- `src/App.tsx` - Add Router configuration
- `src/components/common/Navbar/index.tsx` - Update with Link components
- `src/pages/Home/Programs/index.tsx` - Update card links

### New Files to Create
```
src/
├── types/
│   └── program.ts
├── data/
│   └── programs.ts
├── components/
│   ├── common/
│   │   ├── Breadcrumb/
│   │   │   ├── index.tsx
│   │   │   └── Breadcrumb.css
│   │   ├── CallToAction/
│   │   │   ├── index.tsx
│   │   │   └── CallToAction.css
│   │   └── ScrollToTop/
│   │       └── index.tsx
│   └── programs/
│       ├── ProgramHeader/
│       ├── ProgramFeatures/
│       ├── ProgramBenefits/
│       ├── ProgramHowItWorks/
│       └── ProgramFAQ/
└── pages/
    ├── ProgramDetail/
    │   ├── index.tsx
    │   └── ProgramDetail.css
    └── programs/
        ├── Academy/
        ├── Check/
        ├── Protect/
        ├── Care/
        ├── Network/
        └── Digital/
```

---

## Quick Start for Next Session

### Step 1: Install Dependencies
```bash
npm install react-router-dom
```

### Step 2: Create Types
Create `src/types/program.ts` with TypeScript interfaces.

### Step 3: Create Data Layer
Create `src/data/programs.ts` with all 6 programs data.

### Step 4: Setup Router
Update `App.tsx`:
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs/:slug" element={<ProgramDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
```

### Step 5: Build Components & Pages
Follow Phase 2 and Phase 3 from Implementation Phases.

---

## Notes

- All styling should use CSS variables from `src/index.css`
- Follow existing component patterns (e.g., Programs.css)
- Maintain mobile-first responsive design
- Content is in Indonesian (Bahasa Indonesia)
- No backend API - all data is static
- Use existing program icons from `src/assets/programs/`

---

**Ready for implementation in next session.**
