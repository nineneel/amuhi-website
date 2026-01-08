# AMUHI Website - Program Pages Implementation Plan

**Project:** AMUHI Website Enhancement
**Feature:** Individual Program Detail Pages
**Date Created:** 2026-01-07
**Status:** Planning Phase

---

## 📋 Table of Contents

1. [Project Analysis](#project-analysis)
2. [Goals & Objectives](#goals--objectives)
3. [Technical Approach](#technical-approach)
4. [Implementation Plan](#implementation-plan)
5. [Program Pages Detail](#program-pages-detail)
6. [File Structure](#file-structure)
7. [Routing Strategy](#routing-strategy)
8. [Data Architecture](#data-architecture)
9. [Component Design](#component-design)
10. [Styling Guidelines](#styling-guidelines)
11. [Implementation Phases](#implementation-phases)

---

## 🔍 Project Analysis

### Current State

**Tech Stack:**
- React 19.2.3 + TypeScript
- Vite 7.2.7
- Pure CSS (no framework)
- Swiper 12.0.3 (carousel)
- No routing library (hash-based navigation)

**Existing Programs (6 Total):**

1. **AMUHI Academy**
   - Pusat pembelajaran komprehensif dan sertifikasi profesional
   - Features: Certified Training, Industry Workshops, Expert Mentors
   - Icon: `src/assets/programs/icon-academy.png`

2. **AMUHI Check**
   - Sistem verifikasi digital terintegrasi untuk legalitas dan kredibilitas
   - Features: Verification Tool, Fraud Prevention, Official Database
   - Icon: `src/assets/programs/icon-check.png`

3. **AMUHI Protect**
   - Platform perlindungan konsumen dan advokasi hukum
   - Features: Scam Protection, Legal Aid, Crisis Support
   - Icon: `src/assets/programs/icon-protect.png`

4. **AMUHI Care**
   - Inisiatif dampak sosial dan program advokasi
   - Features: Community Support, Social Projects, Advocacy
   - Icon: `src/assets/programs/icon-care.png`

5. **AMUHI Network**
   - Pusat bisnis digital dan ruang kolaborasi eksklusif
   - Features: Business Matching, Member Events, Collaboration
   - Icon: `src/assets/programs/icon-network.png`

6. **AMUHI Digital**
   - Saluran komunikasi strategis dan platform media digital
   - Features: Media Exposure, Digital Assets, Communication
   - Icon: `src/assets/programs/icon-digital.png`

**Current Navigation:**
- Hash-based (#home, #programs, #organization, etc.)
- Single Page Application (SPA)
- No React Router

**Current Data Management:**
- Static/hardcoded data in components
- No API integration
- No centralized data layer

---

## 🎯 Goals & Objectives

### Primary Goals

1. **Add Individual Program Pages**
   - Create dedicated detail pages for all 6 programs
   - Provide comprehensive information about each program
   - Enhance user engagement and understanding

2. **Implement Routing**
   - Add React Router for multi-page navigation
   - Maintain smooth UX with proper transitions
   - Support both hash and browser history modes

3. **Maintain Design Consistency**
   - Use existing CSS variables from `src/index.css`
   - Follow established color palette and typography
   - Ensure responsive design across all devices

4. **Improve Data Architecture**
   - Centralize program data
   - Make data reusable across components
   - Prepare for future API integration

### Success Criteria

- ✅ Each program has a dedicated detail page
- ✅ Seamless navigation between home and program pages
- ✅ Consistent design language throughout
- ✅ Fully responsive on mobile, tablet, and desktop
- ✅ TypeScript types for all components and data
- ✅ Clean, maintainable code structure

---

## 🛠 Technical Approach

### 1. Add React Router

**Package to Install:**
```bash
npm install react-router-dom
npm install --save-dev @types/react-router-dom
```

**Routing Strategy:**
- Use `BrowserRouter` for clean URLs
- Route structure:
  - `/` - Home page
  - `/programs/academy` - AMUHI Academy
  - `/programs/check` - AMUHI Check
  - `/programs/protect` - AMUHI Protect
  - `/programs/care` - AMUHI Care
  - `/programs/network` - AMUHI Network
  - `/programs/digital` - AMUHI Digital

### 2. Data Centralization

**Create Data Layer:**
- `src/data/programs.ts` - Centralized program data
- `src/types/program.ts` - TypeScript interfaces
- Make data reusable across home page and detail pages

### 3. Component Architecture

**New Components:**
- `src/pages/ProgramDetail/` - Individual program page layout
- `src/components/common/Breadcrumb/` - Navigation breadcrumb
- `src/components/common/CallToAction/` - CTA sections
- `src/components/programs/ProgramHeader/` - Program hero section
- `src/components/programs/ProgramFeatures/` - Feature showcase
- `src/components/programs/ProgramBenefits/` - Benefits section
- `src/components/programs/ProgramFAQ/` - FAQ accordion

### 4. Styling Approach

**Use Existing CSS Variables:**
```css
/* From src/index.css */
--primary-dark: #000000
--primary-navy: #203998
--primary-blue: #1E55B1
--primary-cyan: #8CE2F9
--gradient-primary: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-light) 100%)
--font-primary: 'Inter'
--font-heading: 'Outfit'
--spacing-* (xs through 5xl)
--radius-* (sm through full)
```

**Design Principles:**
- Maintain existing color palette
- Use established spacing system
- Follow typography hierarchy
- Ensure accessibility (WCAG AA)

---

## 📝 Implementation Plan

### Phase 1: Setup & Infrastructure
**Estimated Effort:** Initial setup

**Tasks:**
1. Install React Router and types
2. Create data layer structure
3. Define TypeScript interfaces
4. Update App.tsx with router configuration
5. Update Navbar for router navigation

**Deliverables:**
- Working router setup
- Centralized program data
- Updated navigation

---

### Phase 2: Shared Components
**Estimated Effort:** Reusable components

**Tasks:**
1. Create Breadcrumb component
2. Create CallToAction component
3. Create ProgramHeader component
4. Create ProgramFeatures component
5. Add proper TypeScript types

**Deliverables:**
- Reusable components library
- Component documentation
- CSS modules for each component

---

### Phase 3: Program Detail Pages
**Estimated Effort:** Core feature implementation

**Tasks:**
1. Create ProgramDetail page layout
2. Build Academy detail page
3. Build Check detail page
4. Build Protect detail page
5. Build Care detail page
6. Build Network detail page
7. Build Digital detail page
8. Add smooth transitions

**Deliverables:**
- 6 fully functional program pages
- Consistent design across all pages
- Mobile-responsive layouts

---

### Phase 4: Integration & Polish
**Estimated Effort:** Final touches

**Tasks:**
1. Update home page program links
2. Add meta tags for SEO
3. Test all navigation flows
4. Responsive testing (mobile/tablet/desktop)
5. Cross-browser testing
6. Performance optimization

**Deliverables:**
- Fully integrated feature
- Tested on all devices
- SEO-optimized pages

---

## 📄 Program Pages Detail

### Universal Page Structure

Each program detail page will follow this structure:

```
1. Program Header (Hero Section)
   - Program icon/logo
   - Program name and tagline
   - Brief description
   - Primary CTA button

2. Program Overview
   - What is this program?
   - Mission and vision
   - Key objectives

3. Features & Services
   - Core features (from existing 3 points)
   - Expanded feature descriptions
   - Visual icons/illustrations

4. Benefits Section
   - Who benefits from this program?
   - Key advantages
   - Success metrics/impact

5. How It Works
   - Step-by-step process
   - User journey
   - Clear instructions

6. Target Audience
   - Who should use this program?
   - Use cases
   - Real-world applications

7. Success Stories (Optional)
   - Testimonials
   - Case studies
   - Statistics

8. FAQ Section
   - Common questions
   - Accordion component
   - Helpful answers

9. Call to Action
   - Join/Register button
   - Contact information
   - Next steps

10. Related Programs
    - Cross-linking to other programs
    - Ecosystem view
```

---

### 1. AMUHI Academy - Detail Page Content

**Route:** `/programs/academy`

**Hero Section:**
- **Headline:** "Tingkatkan Profesionalisme Anda dengan AMUHI Academy"
- **Tagline:** "Pusat Pembelajaran & Sertifikasi Profesional"
- **Description:** Platform edukasi komprehensif yang dirancang untuk meningkatkan standar kualitas dan kompetensi pelaku industri Umrah dan Haji melalui pelatihan tersertifikasi, workshop industri, dan bimbingan dari para ahli.

**Program Overview:**
- Tentang AMUHI Academy
- Visi: Menjadi pusat excellence dalam pendidikan dan pelatihan industri Umrah dan Haji
- Misi: Menciptakan pelaku industri yang profesional, berintegritas, dan berkualitas tinggi

**Features:**
1. **Certified Training Programs**
   - Pelatihan tersertifikasi sesuai standar industri
   - Kurikulum yang disesuaikan dengan kebutuhan pasar
   - Sertifikat yang diakui secara nasional

2. **Industry Workshops**
   - Workshop praktis dengan studi kasus nyata
   - Update regulasi dan best practices terkini
   - Networking dengan praktisi industri

3. **Expert Mentors**
   - Bimbingan langsung dari profesional berpengalaman
   - One-on-one mentoring sessions
   - Konsultasi karir dan bisnis

**Benefits:**
- Peningkatan kompetensi profesional
- Sertifikasi yang diakui industri
- Akses ke jaringan profesional
- Update knowledge terkini
- Peluang karir yang lebih baik

**How It Works:**
1. Daftar program pelatihan yang sesuai
2. Ikuti kelas online/offline
3. Selesaikan assessment dan ujian
4. Dapatkan sertifikasi resmi
5. Join alumni network

**Target Audience:**
- Travel agent owners & managers
- Tour leaders dan pembimbing Umrah
- Staff travel yang ingin upgrade skill
- Fresh graduate yang ingin masuk industri
- Entrepreneur di bidang Umrah & Haji

**FAQ:**
- Bagaimana cara mendaftar?
- Berapa biaya pelatihan?
- Apakah sertifikat diakui secara nasional?
- Berapa lama durasi pelatihan?
- Apakah ada pelatihan online?

**CTA:**
- "Daftar Sekarang"
- "Lihat Jadwal Pelatihan"
- "Hubungi Kami"

---

### 2. AMUHI Check - Detail Page Content

**Route:** `/programs/check`

**Hero Section:**
- **Headline:** "Verifikasi Travel Umrah & Haji dengan AMUHI Check"
- **Tagline:** "Sistem Verifikasi Digital Terintegrasi"
- **Description:** Platform verifikasi digital yang memastikan legalitas dan kredibilitas travel Umrah dan Haji, melindungi jamaah dari penipuan dan travel ilegal.

**Program Overview:**
- Tentang AMUHI Check
- Visi: Menciptakan ekosistem industri Umrah dan Haji yang aman dan terpercaya
- Misi: Memberikan kemudahan akses informasi legalitas dan kredibilitas travel agent

**Features:**
1. **Verification Tool**
   - Cek legalitas travel secara real-time
   - Database terintegrasi dengan Kemenag
   - Informasi lengkap dan akurat

2. **Fraud Prevention**
   - Sistem deteksi travel ilegal
   - Warning system untuk travel bermasalah
   - Panduan identifikasi penipuan

3. **Official Database**
   - Database travel resmi dan terverifikasi
   - Update data berkala
   - Riwayat track record travel

**Benefits:**
- Keamanan dalam memilih travel
- Transparansi informasi
- Pencegahan penipuan
- Kepercayaan konsumen meningkat
- Perlindungan hak konsumen

**How It Works:**
1. Akses AMUHI Check website/app
2. Masukkan nama atau nomor izin travel
3. Lihat hasil verifikasi real-time
4. Baca detail informasi travel
5. Lakukan booking dengan aman

**Target Audience:**
- Calon jamaah Umrah dan Haji
- Keluarga yang mencari travel terpercaya
- Komunitas masjid/pengajian
- Corporate untuk program Umrah karyawan
- Agent yang ingin bergabung dengan travel resmi

**FAQ:**
- Bagaimana cara mengecek legalitas travel?
- Apakah AMUHI Check gratis?
- Data dari mana saja yang digunakan?
- Seberapa sering database di-update?
- Apa yang harus dilakukan jika travel tidak terdaftar?

**CTA:**
- "Cek Travel Sekarang"
- "Download Panduan"
- "Laporkan Travel Ilegal"

---

### 3. AMUHI Protect - Detail Page Content

**Route:** `/programs/protect`

**Hero Section:**
- **Headline:** "Perlindungan Konsumen Industri Umrah & Haji"
- **Tagline:** "Platform Perlindungan & Advokasi Hukum"
- **Description:** Sistem perlindungan konsumen komprehensif yang memberikan advokasi hukum, pencegahan scam, dan bantuan crisis management untuk melindungi hak-hak jamaah.

**Program Overview:**
- Tentang AMUHI Protect
- Visi: Industri Umrah dan Haji yang bebas dari praktik penipuan
- Misi: Melindungi hak-hak konsumen dan memberikan akses bantuan hukum

**Features:**
1. **Scam Protection**
   - Sistem pelaporan penipuan
   - Database modus operandi penipuan
   - Edukasi konsumen tentang red flags

2. **Legal Aid**
   - Konsultasi hukum gratis
   - Mediasi sengketa konsumen-travel
   - Pendampingan hukum kasus penipuan

3. **Crisis Support**
   - Tim respons cepat 24/7
   - Bantuan darurat untuk jamaah
   - Koordinasi dengan pihak berwenang

**Benefits:**
- Perlindungan hak konsumen
- Akses bantuan hukum gratis
- Resolusi cepat sengketa
- Edukasi dan awareness
- Support system yang reliable

**How It Works:**
1. Laporkan masalah melalui hotline/website
2. Tim AMUHI Protect melakukan assessment
3. Konsultasi dan solusi ditawarkan
4. Mediasi atau tindakan hukum
5. Follow-up hingga masalah selesai

**Target Audience:**
- Jamaah yang mengalami penipuan
- Konsumen dengan sengketa travel
- Keluarga korban travel ilegal
- Komunitas yang ingin preventif action
- Travel agent yang ingin compliance support

**FAQ:**
- Bagaimana cara melaporkan penipuan?
- Apakah layanan konsultasi hukum gratis?
- Berapa lama proses penanganan kasus?
- Apa saja yang ditangani AMUHI Protect?
- Apakah ada biaya untuk mediasi?

**CTA:**
- "Laporkan Masalah"
- "Konsultasi Gratis"
- "Hotline 24/7"

---

### 4. AMUHI Care - Detail Page Content

**Route:** `/programs/care`

**Hero Section:**
- **Headline:** "Dampak Sosial untuk Kesejahteraan Umat"
- **Tagline:** "Inisiatif Dampak Sosial & Advokasi"
- **Description:** Program tanggung jawab sosial yang berfokus pada kesejahteraan komunitas, bantuan sosial, dan advokasi untuk menciptakan dampak positif berkelanjutan.

**Program Overview:**
- Tentang AMUHI Care
- Visi: Industri Umrah dan Haji yang peduli dan berdampak sosial
- Misi: Menciptakan ekosistem industri yang tidak hanya profit-oriented tapi juga people-oriented

**Features:**
1. **Community Support**
   - Program bantuan untuk jamaah kurang mampu
   - Scholarship untuk umrah
   - Support untuk komunitas marginal

2. **Social Projects**
   - CSR programs untuk industri
   - Charity initiatives
   - Pemberdayaan masyarakat

3. **Advocacy**
   - Advokasi kebijakan pro-konsumen
   - Campaign kesadaran sosial
   - Partnership dengan NGO

**Benefits:**
- Akses umrah untuk yang kurang mampu
- Dampak sosial berkelanjutan
- Reputasi industri meningkat
- Komunitas yang lebih kuat
- Nilai spiritual dalam bisnis

**How It Works:**
1. Identifikasi program sosial yang relevan
2. Apply untuk bantuan/scholarship
3. Proses seleksi dan verifikasi
4. Penerima mendapat support
5. Impact measurement dan reporting

**Target Audience:**
- Calon jamaah kurang mampu
- Yayasan dan NGO sosial
- Travel agent yang ingin CSR programs
- Corporate untuk program charity
- Donatur yang ingin berkontribusi

**FAQ:**
- Bagaimana cara apply beasiswa Umrah?
- Siapa yang bisa mendapat bantuan?
- Bagaimana cara donasi untuk program ini?
- Apakah ada program untuk corporate CSR?
- Bagaimana transparansi penggunaan dana?

**CTA:**
- "Apply Beasiswa"
- "Donasi Sekarang"
- "Join as Partner"

---

### 5. AMUHI Network - Detail Page Content

**Route:** `/programs/network`

**Hero Section:**
- **Headline:** "Bangun Bisnis dengan Kolaborasi Strategis"
- **Tagline:** "Pusat Bisnis Digital & Kolaborasi"
- **Description:** Platform eksklusif yang menghubungkan stakeholder industri Umrah dan Haji untuk kolaborasi bisnis, networking, dan pertumbuhan bersama.

**Program Overview:**
- Tentang AMUHI Network
- Visi: Ekosistem bisnis yang kolaboratif dan saling menguntungkan
- Misi: Memfasilitasi pertumbuhan bisnis melalui networking dan partnership strategis

**Features:**
1. **Business Matching**
   - Platform B2B marketplace
   - Matchmaking travel dengan vendor
   - Partnership opportunities

2. **Member Events**
   - Exclusive networking events
   - Business forums dan seminars
   - Trade shows dan exhibitions

3. **Collaboration**
   - Joint venture opportunities
   - Resource sharing
   - Collaborative projects

**Benefits:**
- Akses ke network eksklusif
- Peluang bisnis baru
- Kolaborasi strategis
- Knowledge sharing
- Growth opportunities

**How It Works:**
1. Daftar sebagai member AMUHI Network
2. Lengkapi business profile
3. Browse opportunities dan members
4. Connect dan initiate collaboration
5. Grow together dengan community

**Target Audience:**
- Travel agent owners
- Vendor dan supplier (hotel, transport, catering)
- Technology providers
- Financial institutions
- Investors dan business developers

**FAQ:**
- Bagaimana cara join AMUHI Network?
- Apakah ada membership fee?
- Apa benefit exclusive untuk members?
- Bagaimana cara find business partners?
- Apakah ada events rutin?

**CTA:**
- "Daftar Membership"
- "Lihat Event Mendatang"
- "Browse Members"

---

### 6. AMUHI Digital - Detail Page Content

**Route:** `/programs/digital`

**Hero Section:**
- **Headline:** "Amplifikasi Brand dengan Media Digital"
- **Tagline:** "Saluran Komunikasi & Media Digital"
- **Description:** Platform media digital strategis yang memperluas jangkauan informasi, edukasi pasar, dan meningkatkan brand awareness dalam industri Umrah dan Haji.

**Program Overview:**
- Tentang AMUHI Digital
- Visi: Menjadi media digital terdepan untuk industri Umrah dan Haji
- Misi: Menyebarkan informasi berkualitas dan edukasi kepada masyarakat luas

**Features:**
1. **Media Exposure**
   - Featured articles dan press releases
   - Podcast dan video content
   - Social media amplification

2. **Digital Assets**
   - Konten edukasi berkualitas tinggi
   - Infografis dan visual content
   - E-books dan whitepapers

3. **Communication**
   - Multi-channel communication platform
   - Newsletter dan email marketing
   - Community engagement

**Benefits:**
- Brand awareness meningkat
- Kredibilitas dan trust building
- Lead generation
- Educational resources
- Market intelligence

**How It Works:**
1. Submit konten atau news
2. Tim editorial review dan curate
3. Publish di platform AMUHI Digital
4. Distribution ke multiple channels
5. Analytics dan performance tracking

**Target Audience:**
- Travel agent yang ingin brand exposure
- Content creators di industri Umrah
- Marketing teams
- Influencers dan thought leaders
- Media partners

**FAQ:**
- Bagaimana cara submit artikel?
- Apakah ada biaya untuk publikasi?
- Berapa lama proses review konten?
- Channel apa saja yang digunakan?
- Bagaimana cara track performance?

**CTA:**
- "Submit Konten"
- "Subscribe Newsletter"
- "Partnership Inquiries"

---

## 📁 File Structure

```
amuhi-website/
├── src/
│   ├── App.tsx                          # Updated with Router
│   ├── main.tsx
│   ├── index.css                        # Global CSS variables
│   │
│   ├── types/
│   │   └── program.ts                   # TypeScript interfaces
│   │
│   ├── data/
│   │   └── programs.ts                  # Centralized program data
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar/                  # Updated for routing
│   │   │   │   ├── index.tsx
│   │   │   │   └── Navbar.css
│   │   │   ├── Footer/
│   │   │   │   ├── index.tsx
│   │   │   │   └── Footer.css
│   │   │   ├── Breadcrumb/              # NEW
│   │   │   │   ├── index.tsx
│   │   │   │   └── Breadcrumb.css
│   │   │   └── CallToAction/            # NEW
│   │   │       ├── index.tsx
│   │   │       └── CallToAction.css
│   │   │
│   │   └── programs/
│   │       ├── ProgramHeader/           # NEW
│   │       │   ├── index.tsx
│   │       │   └── ProgramHeader.css
│   │       ├── ProgramFeatures/         # NEW
│   │       │   ├── index.tsx
│   │       │   └── ProgramFeatures.css
│   │       ├── ProgramBenefits/         # NEW
│   │       │   ├── index.tsx
│   │       │   └── ProgramBenefits.css
│   │       ├── ProgramHowItWorks/       # NEW
│   │       │   ├── index.tsx
│   │       │   └── ProgramHowItWorks.css
│   │       └── ProgramFAQ/              # NEW
│   │           ├── index.tsx
│   │           └── ProgramFAQ.css
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── index.tsx
│   │   │   ├── Hero/
│   │   │   ├── Programs/                # Updated with routing links
│   │   │   ├── Events/
│   │   │   ├── Organization/
│   │   │   └── Testimonials/
│   │   │
│   │   ├── ProgramDetail/               # NEW - Base template
│   │   │   ├── index.tsx
│   │   │   └── ProgramDetail.css
│   │   │
│   │   └── programs/                    # NEW - Individual program pages
│   │       ├── Academy/
│   │       │   ├── index.tsx
│   │       │   └── Academy.css
│   │       ├── Check/
│   │       │   ├── index.tsx
│   │       │   └── Check.css
│   │       ├── Protect/
│   │       │   ├── index.tsx
│   │       │   └── Protect.css
│   │       ├── Care/
│   │       │   ├── index.tsx
│   │       │   └── Care.css
│   │       ├── Network/
│   │       │   ├── index.tsx
│   │       │   └── Network.css
│   │       └── Digital/
│   │           ├── index.tsx
│   │           └── Digital.css
│   │
│   └── assets/
│       ├── programs/                    # Existing icons
│       │   ├── icon-academy.png
│       │   ├── icon-check.png
│       │   ├── icon-protect.png
│       │   ├── icon-care.png
│       │   ├── icon-network.png
│       │   └── icon-digital.png
│       └── programs-detail/             # NEW - Detail page images
│           ├── academy-hero.jpg
│           ├── check-hero.jpg
│           ├── protect-hero.jpg
│           ├── care-hero.jpg
│           ├── network-hero.jpg
│           └── digital-hero.jpg
│
├── public/
├── package.json                         # Updated with react-router-dom
└── plan.md                              # This file
```

---

## 🚦 Routing Strategy

### Router Configuration

**App.tsx Structure:**
```typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs/academy" element={<AcademyPage />} />
        <Route path="/programs/check" element={<CheckPage />} />
        <Route path="/programs/protect" element={<ProtectPage />} />
        <Route path="/programs/care" element={<CarePage />} />
        <Route path="/programs/network" element={<NetworkPage />} />
        <Route path="/programs/digital" element={<DigitalPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
```

### Navigation Updates

**Navbar.tsx:**
- Replace hash links with React Router `Link` components
- Add active state detection with `useLocation()`
- Maintain existing hover/active styles

**Program Cards:**
- Update "LEARN MORE" links to route to detail pages
- Use `Link` component from react-router-dom
- Add hover effects and transitions

### Scroll Behavior

**Scroll to Top:**
- Implement `ScrollToTop` component
- Auto-scroll on route change
- Preserve smooth scroll for hash navigation on home page

---

## 💾 Data Architecture

### TypeScript Interfaces

**src/types/program.ts:**
```typescript
export interface ProgramFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ProgramBenefit {
  title: string;
  description: string;
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

export interface ProgramCTA {
  primary: {
    text: string;
    action: string;
  };
  secondary?: {
    text: string;
    action: string;
  };
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

  // Overview
  overview: {
    about: string;
    vision: string;
    mission: string;
  };

  // Features
  features: ProgramFeature[];

  // Benefits
  benefits: ProgramBenefit[];

  // How It Works
  howItWorks: ProgramStep[];

  // Target Audience
  targetAudience: {
    title: string;
    segments: string[];
  };

  // FAQ
  faqs: ProgramFAQ[];

  // CTA
  cta: ProgramCTA;

  // Related Programs
  relatedPrograms?: string[];
}
```

### Centralized Data

**src/data/programs.ts:**
- Export array of all 6 programs
- Each program follows `ProgramData` interface
- Reusable across home page and detail pages
- Easy to maintain and update

**Example Structure:**
```typescript
export const programs: ProgramData[] = [
  {
    id: 'academy',
    name: 'AMUHI Academy',
    slug: 'academy',
    tagline: 'Pusat Pembelajaran & Sertifikasi Profesional',
    // ... complete data
  },
  // ... other 5 programs
];
```

---

## 🎨 Component Design

### 1. Breadcrumb Component

**Purpose:** Navigation aid and location indicator

**Props:**
```typescript
interface BreadcrumbProps {
  items: {
    label: string;
    path?: string;
  }[];
}
```

**Design:**
- Home > Programs > Academy
- Use CSS variables: `--primary-blue`, `--gray-400`
- Responsive: Hide intermediate items on mobile

---

### 2. ProgramHeader Component

**Purpose:** Hero section for each program detail page

**Props:**
```typescript
interface ProgramHeaderProps {
  name: string;
  tagline: string;
  description: string;
  icon: string;
  heroImage?: string;
}
```

**Design:**
- Large icon/logo display
- Gradient background using `--gradient-hero`
- CTA button using `--gradient-primary`
- Responsive typography
- Full-width hero with container for content

---

### 3. ProgramFeatures Component

**Purpose:** Showcase program features with icons

**Props:**
```typescript
interface ProgramFeaturesProps {
  features: ProgramFeature[];
}
```

**Design:**
- Grid layout (3 columns desktop, 1 column mobile)
- Icon + Title + Description cards
- Hover effects with `--shadow-lg`
- Use `--radius-xl` for card borders

---

### 4. ProgramBenefits Component

**Purpose:** Highlight key benefits

**Props:**
```typescript
interface ProgramBenefitsProps {
  benefits: ProgramBenefit[];
}
```

**Design:**
- Two-column layout
- Check icon with gradient color
- Emphasize value propositions
- Use `--success` color for check icons

---

### 5. ProgramHowItWorks Component

**Purpose:** Step-by-step process visualization

**Props:**
```typescript
interface ProgramHowItWorksProps {
  steps: ProgramStep[];
}
```

**Design:**
- Vertical timeline on desktop
- Numbered steps
- Connecting lines between steps
- Icons for each step
- Use `--primary-cyan` for active step

---

### 6. ProgramFAQ Component

**Purpose:** Accordion for frequently asked questions

**Props:**
```typescript
interface ProgramFAQProps {
  faqs: ProgramFAQ[];
}
```

**Design:**
- Accordion with expand/collapse
- Smooth transitions using `--transition-normal`
- Plus/minus icon toggle
- Answer text with proper spacing

---

### 7. CallToAction Component

**Purpose:** Reusable CTA section

**Props:**
```typescript
interface CallToActionProps {
  title: string;
  description?: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  variant?: 'primary' | 'secondary' | 'dark';
}
```

**Design:**
- Centered layout
- Gradient backgrounds
- Button group (primary + secondary)
- Responsive padding using `--spacing-*`

---

## 🎨 Styling Guidelines

### Color Usage

**Primary Colors:**
```css
/* Dark backgrounds */
background: var(--primary-dark);      /* #000000 */

/* Navy accents */
color: var(--primary-navy);           /* #203998 */

/* Blue primary */
background: var(--primary-blue);      /* #1E55B1 */

/* Cyan highlights */
color: var(--primary-cyan);           /* #8CE2F9 */

/* Gradients */
background: var(--gradient-primary);
background: var(--gradient-hero);
```

**Neutral Colors:**
```css
/* White text on dark backgrounds */
color: var(--white);

/* Gray scale for secondary text */
color: var(--gray-100);  /* Light text */
color: var(--gray-400);  /* Muted text */
color: var(--gray-600);  /* Subtle text */
```

### Typography

**Headings:**
```css
/* Use Outfit for headings */
font-family: var(--font-heading);
font-weight: 700-800;
text-transform: uppercase;
letter-spacing: 0.05em;
```

**Body Text:**
```css
/* Use Inter for body */
font-family: var(--font-primary);
font-weight: 400;
line-height: 1.6;
```

### Spacing

**Section Padding:**
```css
/* Desktop */
padding: var(--spacing-5xl) 0;  /* 120px */

/* Tablet */
padding: var(--spacing-4xl) 0;  /* 80px */

/* Mobile */
padding: var(--spacing-2xl) 0;  /* 48px */
```

**Component Gaps:**
```css
/* Large gaps */
gap: var(--spacing-xl);  /* 32px */

/* Medium gaps */
gap: var(--spacing-lg);  /* 24px */

/* Small gaps */
gap: var(--spacing-md);  /* 16px */
```

### Borders & Shadows

**Border Radius:**
```css
/* Cards */
border-radius: var(--radius-xl);    /* 16px */

/* Buttons */
border-radius: var(--radius-full);  /* 9999px */

/* Images */
border-radius: var(--radius-lg);    /* 12px */
```

**Shadows:**
```css
/* Elevated cards */
box-shadow: var(--shadow-lg);

/* Hover states */
box-shadow: var(--shadow-xl);

/* Subtle elevation */
box-shadow: var(--shadow-md);
```

### Transitions

```css
/* Fast interactions (hover) */
transition: all var(--transition-fast);  /* 150ms */

/* Normal transitions */
transition: all var(--transition-normal);  /* 250ms */

/* Slow transitions (complex animations) */
transition: all var(--transition-slow);  /* 350ms */
```

### Responsive Breakpoints

```css
/* Desktop First Approach */

/* Tablet */
@media (max-width: 1024px) {
  /* 2-column grids */
}

/* Mobile */
@media (max-width: 768px) {
  /* 1-column grids */
  /* Reduced padding */
  /* Smaller typography */
}
```

---

## 📅 Implementation Phases

### Phase 1: Foundation Setup

**Duration:** Initial setup session

**Tasks:**
1. ✅ Install `react-router-dom` and types
2. ✅ Create `src/types/program.ts`
3. ✅ Create `src/data/programs.ts` with all program data
4. ✅ Update `App.tsx` with Router configuration
5. ✅ Create `ScrollToTop` utility component
6. ✅ Test basic routing

**Success Criteria:**
- Routing works between home and placeholder program pages
- TypeScript types are properly defined
- No compilation errors

---

### Phase 2: Shared Components

**Duration:** Component development session

**Tasks:**
1. ✅ Build `Breadcrumb` component
2. ✅ Build `CallToAction` component
3. ✅ Build `ProgramHeader` component
4. ✅ Build `ProgramFeatures` component
5. ✅ Build `ProgramBenefits` component
6. ✅ Build `ProgramHowItWorks` component
7. ✅ Build `ProgramFAQ` component
8. ✅ Style all components with CSS variables

**Success Criteria:**
- All components are reusable and typed
- Consistent design language
- Responsive on all devices
- Accessible (keyboard navigation, ARIA labels)

---

### Phase 3: Program Pages - Batch 1

**Duration:** First batch implementation

**Tasks:**
1. ✅ Build AMUHI Academy detail page
2. ✅ Build AMUHI Check detail page
3. ✅ Build AMUHI Protect detail page
4. ✅ Test navigation and responsiveness
5. ✅ Gather feedback

**Success Criteria:**
- 3 program pages fully functional
- Content is complete and accurate
- Design is consistent
- Mobile-responsive

---

### Phase 4: Program Pages - Batch 2

**Duration:** Second batch implementation

**Tasks:**
1. ✅ Build AMUHI Care detail page
2. ✅ Build AMUHI Network detail page
3. ✅ Build AMUHI Digital detail page
4. ✅ Test navigation and responsiveness
5. ✅ Cross-browser testing

**Success Criteria:**
- All 6 program pages complete
- Consistent user experience across all pages
- No broken links or routes

---

### Phase 5: Integration & Updates

**Duration:** Integration session

**Tasks:**
1. ✅ Update `Navbar` component for routing
2. ✅ Update Home page `Programs` section links
3. ✅ Add "Related Programs" section to detail pages
4. ✅ Implement proper breadcrumb navigation
5. ✅ Add meta tags for SEO
6. ✅ Test all navigation flows

**Success Criteria:**
- Seamless navigation throughout site
- All links work correctly
- SEO meta tags in place
- Breadcrumbs on all pages

---

### Phase 6: Polish & Optimization

**Duration:** Final polish session

**Tasks:**
1. ✅ Performance audit (Lighthouse)
2. ✅ Accessibility audit (WCAG AA)
3. ✅ Responsive testing (mobile/tablet/desktop)
4. ✅ Cross-browser testing (Chrome, Firefox, Safari, Edge)
5. ✅ Fix any bugs or issues
6. ✅ Code review and cleanup
7. ✅ Update documentation

**Success Criteria:**
- Lighthouse score > 90 (Performance, Accessibility)
- WCAG AA compliance
- Works on all major browsers
- Clean, maintainable code

---

## 📊 Success Metrics

### Technical Metrics
- ✅ Lighthouse Performance Score: > 90
- ✅ Lighthouse Accessibility Score: > 95
- ✅ Lighthouse Best Practices Score: > 90
- ✅ Lighthouse SEO Score: > 90
- ✅ TypeScript compilation: 0 errors
- ✅ Code coverage: > 80% (if tests added)

### User Experience Metrics
- ✅ Page load time: < 2 seconds
- ✅ Time to Interactive (TTI): < 3 seconds
- ✅ First Contentful Paint (FCP): < 1.5 seconds
- ✅ Cumulative Layout Shift (CLS): < 0.1
- ✅ Mobile responsiveness: 100% on all devices

### Design Metrics
- ✅ Design consistency across all 6 pages
- ✅ Brand alignment with existing homepage
- ✅ Proper use of CSS variables
- ✅ Accessible color contrast ratios (WCAG AA)

---

## 🔧 Development Guidelines

### Code Standards

**TypeScript:**
- Use strict mode
- Define interfaces for all props
- Avoid `any` types
- Use type inference where possible

**React:**
- Functional components with hooks
- Use React.memo for optimization
- Proper key props in lists
- Clean up useEffect dependencies

**CSS:**
- Use CSS variables from `index.css`
- Follow BEM-like naming convention
- Mobile-first responsive design
- Avoid inline styles

**File Organization:**
- Co-locate components with styles
- One component per file
- Use index.tsx for exports
- Keep components small and focused

### Git Workflow

**Branch Naming:**
- `feature/program-pages-setup`
- `feature/shared-components`
- `feature/academy-page`
- `feature/navigation-updates`

**Commit Messages:**
- Use conventional commits
- Examples:
  - `feat: add react-router-dom and routing setup`
  - `feat: create ProgramHeader component`
  - `feat: implement Academy detail page`
  - `fix: resolve navigation active state issue`
  - `style: improve mobile responsiveness`

---

## 📚 Resources & References

### Design Resources
- Color Palette: From `src/index.css` CSS variables
- Typography: Google Fonts (Inter, Outfit)
- Icons: Existing program icons in `src/assets/programs/`
- Images: To be added in `src/assets/programs-detail/`

### Technical Documentation
- React Router: https://reactrouter.com/
- React TypeScript: https://react-typescript-cheatsheet.netlify.app/
- Vite: https://vite.dev/
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/

### Existing Components to Reference
- `src/pages/Home/Programs/` - Current program cards
- `src/components/common/Navbar/` - Navigation pattern
- `src/pages/Home/Hero/` - Hero section pattern
- `src/components/common/TestimonialCarousel/` - Carousel pattern

---

## ✅ Checklist

### Pre-Implementation
- [ ] Review plan with stakeholders
- [ ] Gather all content for program pages
- [ ] Collect high-quality images for hero sections
- [ ] Approve design mockups (if needed)

### Implementation
- [ ] Phase 1: Foundation Setup
- [ ] Phase 2: Shared Components
- [ ] Phase 3: Program Pages Batch 1
- [ ] Phase 4: Program Pages Batch 2
- [ ] Phase 5: Integration & Updates
- [ ] Phase 6: Polish & Optimization

### Testing
- [ ] Unit tests for components
- [ ] Integration tests for routing
- [ ] Manual testing on all devices
- [ ] Cross-browser testing
- [ ] Accessibility testing
- [ ] Performance testing

### Deployment
- [ ] Build production bundle
- [ ] Test production build locally
- [ ] Deploy to staging environment
- [ ] QA on staging
- [ ] Deploy to production
- [ ] Post-deployment verification

---

## 🚀 Next Steps

1. **Review this plan** with the team
2. **Gather content** for all 6 program detail pages
3. **Collect images** for hero sections and features
4. **Start Phase 1** - Foundation Setup
5. **Iterative development** through all phases

---

## 📝 Notes & Assumptions

### Assumptions
- All program content will be provided in Indonesian language
- Images will be provided or sourced from stock photos
- No backend API integration in this phase (static data)
- Target browsers: Chrome, Firefox, Safari, Edge (latest 2 versions)
- Mobile-first responsive design approach

### Future Enhancements (Out of Scope for Now)
- Admin CMS for content management
- Backend API integration
- User authentication and profiles
- Application/registration forms
- Payment integration
- Analytics dashboard
- Multi-language support (English/Arabic)
- Blog/news section for each program
- Search functionality

### Dependencies
- No external dependencies beyond React Router
- Leverage existing Swiper library if carousel needed
- Use existing image assets where possible
- Maintain current build process with Vite

---

## 👥 Team & Responsibilities

### Roles
- **Developer**: Implementation of all components and pages
- **Designer** (if applicable): Provide hero images and visual assets
- **Content Writer** (if applicable): Provide detailed content for each program
- **QA Tester** (if applicable): Test on all devices and browsers
- **Project Manager** (if applicable): Track progress and timelines

### Contact
- For questions or clarifications: [Your contact information]
- Repository: [GitHub link if applicable]
- Documentation: This plan.md file

---

## 📄 Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2026-01-07 | Initial plan created | Claude (AI Assistant) |

---

**End of Plan Document**

*This plan serves as a comprehensive guide for implementing program detail pages for the AMUHI website. Follow the phases sequentially and update this document as needed throughout the development process.*
