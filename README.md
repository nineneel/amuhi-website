# Amuhi Website

Official landing page website for Amuhi.

## Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **Styling:** CSS
- **UI Components:** Swiper (carousel)
- **SEO:** React Helmet Async

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/amuhi-website.git

# Navigate to project directory
cd amuhi-website

# Install dependencies
npm install
```

### Development

```bash
# Start development server (runs on port 3000)
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Build for staging
npm run build:staging

# Preview production build
npm run serve
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   └── common/       # Shared components (Navbar, Footer, etc.)
├── pages/            # Page components
│   ├── Home/         # Homepage sections
│   ├── About/        # About page
│   ├── News/         # News listing
│   ├── NewsDetail/   # Individual news article
│   ├── DetailProgram/# Program details
│   ├── OurActivity/  # Activity page
│   └── NotFound/     # 404 page
├── data/             # Static data files
├── types/            # TypeScript type definitions
├── assets/           # Static assets (images, icons)
├── App.tsx           # Main app component with routing
├── main.tsx          # Application entry point
└── index.css         # Global styles
```

## Available Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/about` | About page |
| `/activity` | Our Activity page |
| `/news` | News listing |
| `/news/:slug` | News detail |
| `/programs/:slug` | Program detail |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:staging` | Build for staging environment |
| `npm run serve` | Preview production build |
| `npm run test` | Run tests |

## Deployment

### Staging

Staging is deployed automatically when pushing to the `staging` branch.

```bash
git push origin staging
```

### Production

Production is deployed automatically when a version tag is pushed.

```bash
# Create a tag
git tag v1.0.0

# Push the tag to trigger deployment
git push origin v1.0.0
```

Both workflows can also be triggered manually from the **Actions** tab on GitHub.

## License

All rights reserved.
