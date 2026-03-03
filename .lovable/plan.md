

# ZynexGroup — Industrial Apple Design System & Landing Page

## 1. Design System Setup
- Override CSS variables: pure white background, Deep Grey text (#494949), Zynex Blue accent (#2c5cc5)
- Import Google Fonts: **Montserrat** (SemiBold) for headings, **Open Sans** (Regular) for body
- Sharp corners: 4px border-radius globally, no rounded/pill elements
- Minimal shadows: only subtle hover shadows

## 2. Internationalization (i18n)
- Create a simple React context + JSON-based translation system (`en.json`, `da.json`)
- Language context provider with `useTranslation` hook
- Toggle between EN/DA stored in state

## 3. Global Layout Components

### Sticky Header
- Fixed/transparent navbar that turns solid white on scroll (scroll listener)
- **Left:** "ZYNEX GROUP" logo text in Montserrat
- **Center:** Nav links — Home, The Battery, The Market, About Us
- **Right:** EN/DA toggle + solid blue "Contact" button

### Hero Section
- Full-width, tall placeholder section with massive whitespace, ready for a 3D background

### Footer
- Multi-column grid layout:
  - Col 1: Brand name + tagline "Intelligent Grid Orchestration"
  - Col 2: Sitemap links
  - Col 3: HQ address (Aarhus, Denmark)
- Bottom bar: © 2026 ZynexGroup, Privacy Policy, Terms of Service

## 4. Pages & Routing
- Home page with the hero placeholder
- Stub routes for The Battery, The Market, About Us, Contact

