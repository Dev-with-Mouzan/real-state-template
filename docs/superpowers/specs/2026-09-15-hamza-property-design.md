# Hamza Property Real Estate Template - Design Spec

## Overview

A premium, minimalist luxury real estate website template built with React + Vite. Designed for selling on platforms like Etsy, with easy customization via CSS variables and data files.

## Brand

- **Name:** Hamza Property
- **Tagline:** "Better Homes, Brighter Futures"
- **Design Direction:** Minimalist Luxury - clean lines, generous whitespace, elegant feel

## Technology Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Vanilla CSS with CSS custom properties
- **Icons:** lucide-react
- **Fonts:** Google Fonts (Outfit for headings, Inter for body)
- **Images:** Unsplash placeholders for demo

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#0D3A33` | Deep dark green - buttons, headings |
| `--color-primary-light` | `#16564C` | Hover state for primary |
| `--color-accent` | `#19A78E` | Teal - icons, highlights, CTAs |
| `--color-accent-hover` | `#148f7a` | Hover state for accent |
| `--color-bg-main` | `#F6F8F7` | Page background |
| `--color-bg-card` | `#FFFFFF` | Card backgrounds |
| `--color-bg-dark` | `#122B28` | Footer, dark sections |
| `--color-text-main` | `#182422` | Primary text |
| `--color-text-muted` | `#647472` | Secondary text |
| `--color-text-light` | `#FFFFFF` | Text on dark backgrounds |
| `--color-border` | `#E2E8E6` | Borders, dividers |

## Typography

- **Headings:** Outfit (400, 500, 600, 700)
- **Body:** Inter (300, 400, 500, 600)

## Component Architecture

```
src/
├── components/
│   ├── NavBar/
│   │   ├── NavBar.jsx
│   │   └── NavBar.css
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   ├── Features/
│   │   ├── Features.jsx
│   │   └── Features.css
│   ├── PropertyListings/
│   │   ├── PropertyListings.jsx
│   │   ├── PropertyListings.css
│   │   └── PropertyCard.jsx
│   ├── About/
│   │   ├── About.jsx
│   │   └── About.css
│   ├── Services/
│   │   ├── Services.jsx
│   │   └── Services.css
│   ├── Process/
│   │   ├── Process.jsx
│   │   └── Process.css
│   ├── PropertyTypes/
│   │   ├── PropertyTypes.jsx
│   │   └── PropertyTypes.css
│   ├── Testimonials/
│   │   ├── Testimonials.jsx
│   │   └── Testimonials.css
│   ├── Blog/
│   │   ├── Blog.jsx
│   │   └── Blog.css
│   ├── CTA/
│   │   ├── CTA.jsx
│   │   └── CTA.css
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.css
├── data/
│   ├── properties.js
│   ├── testimonials.js
│   └── blog.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Section Specifications

### 1. NavBar

- **Type:** Sticky, glassmorphism effect
- **Position:** Fixed top with 24px margin, rounded corners
- **Content:** Logo (Building2 icon + "Hamza Property"), navigation links, search icon, Sign In button
- **Links:** Home, Properties, About Us, Services, Blog, Contact
- **Mobile:** Hamburger menu replaces links below 992px
- **Effect:** `backdrop-filter: blur(12px)`, semi-transparent white background

### 2. Hero

- **Type:** Full-width section with background image
- **Background:** Unsplash property image with gradient overlay (left-to-right fade)
- **Content:**
  - Subtitle: "Better Homes, Brighter Futures"
  - Title: "Find Your Dream Property With Hamza Property" (accent color on "Dream Property")
  - Description paragraph
- **Search Bar:** Absolute positioned at bottom, overlapping into next section
  - Three fields: Location, Property Type, Price Range
  - Each with icon in circular teal background
  - Glass effect container
  - Search button with primary color
- **Responsive:** Search bar becomes vertical stack on mobile

### 3. Features

- **Type:** 4-column grid of trust signal cards
- **Data:** 4 items with icon, title, description
  1. Trusted & Verified (ShieldCheck)
  2. Best Price Guarantee (BadgeDollarSign)
  3. Expert Support (Headphones)
  4. Secure Transactions (Lock)
- **Card Style:** White background, rounded corners, subtle border, hover lift effect
- **Icon:** Circular container with teal background, inverts on hover
- **Padding:** 120px top (space for search bar overlap)
- **Responsive:** 2 columns on tablet, 1 on mobile

### 4. PropertyListings

- **Type:** Tabbed property showcase
- **Tabs:** All, Villa, Apartment, House, Office
- **Property Card:**
  - Image with "For Sale" badge
  - Price (large, bold)
  - Title
  - Location with MapPin icon
  - Stats: beds, baths, sqft with icons
  - "View Details" button
- **Grid:** 3 columns on desktop, 2 on tablet, 1 on mobile
- **Hover:** Card lifts with shadow enhancement

### 5. About

- **Type:** Split layout (image left, content right)
- **Left:** Property image with rounded corners
- **Right:**
  - Subtitle: "About Us"
  - Title: "We Help You Find Your Dream Home"
  - Description paragraph
  - Stats row: 15+ Years Experience, 500+ Properties Sold, 98% Happy Clients
  - "Learn More" button (outline style)
- **Responsive:** Stacks vertically on mobile, image on top

### 6. Services

- **Type:** 3-column grid
- **Data:** 3 services with icon, title, description
  1. Property Management (Home icon)
  2. Mortgages Loan (DollarSign icon)
  3. Property Valuation (TrendingUp icon)
- **Card Style:** White background, icon in teal circle, hover lift
- **Responsive:** 1 column on mobile

### 7. Process

- **Type:** 3-step horizontal timeline
- **Steps:**
  1. "Find Properties" - Search and browse
  2. "Schedule Visit" - Book appointments
  3. "Get Keys" - Complete purchase
- **Visual:** Circular numbered icons connected by horizontal line
- **Layout:** Centered text below each icon
- **Responsive:** Vertical timeline on mobile

### 8. PropertyTypes

- **Type:** Category grid
- **Categories:** Villa, Apartment, House, Office
- **Card Style:** Background image with dark overlay, white text, count badge
- **Hover:** Overlay lightens, slight scale
- **Responsive:** 2x2 grid on tablet, single column on mobile

### 9. Testimonials

- **Type:** 3-card grid
- **Card Style:** White background, quote icon, text, avatar, name, star rating
- **Data:** 3 testimonials with name, role, quote, rating (1-5)
- **Visual:** Large quote icon in teal at top
- **Responsive:** Single column on mobile

### 10. Blog

- **Type:** 3-column card grid
- **Card Style:** Image top, content bottom
  - Image with hover zoom
  - Date label
  - Title (h3)
  - Excerpt text
  - "Read More" link
- **Responsive:** Single column on mobile

### 11. CTA

- **Type:** Full-width dark section
- **Background:** `--color-bg-dark`
- **Content:**
  - Title: "Ready to Find Your Dream Property?"
  - Description paragraph
  - Two buttons: "Browse Properties" (accent), "Contact Us" (outline white)
- **Text Color:** White

### 12. Footer

- **Type:** Multi-column dark footer
- **Background:** `--color-bg-dark`
- **Columns:**
  1. Logo + description + social icons
  2. Quick Links (About, Properties, Services, Blog)
  3. Support (FAQ, Contact, Privacy Policy, Terms)
  4. Newsletter (email input + subscribe button)
- **Bottom Bar:** Copyright text
- **Responsive:** Stacks to 2 columns, then single column

## Data Files Structure

### properties.js
```javascript
export const properties = [
  {
    id: 1,
    title: "Modern Family Home",
    type: "house",        // for tab filtering
    price: 450000,
    location: "Beverly Hills, CA",
    beds: 4,
    baths: 3,
    sqft: 2500,
    image: "url",
    badge: "For Sale"
  },
  // ... more properties
];
```

### testimonials.js
```javascript
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    quote: "Excellent service...",
    rating: 5,
    avatar: "url"
  },
  // ... more testimonials
];
```

### blog.js
```javascript
export const blogPosts = [
  {
    id: 1,
    title: "10 Tips for First-Time Buyers",
    date: "Sep 10, 2026",
    excerpt: "Buying your first home...",
    image: "url"
  },
  // ... more posts
];
```

## Responsive Breakpoints

| Breakpoint | Width | Changes |
|------------|-------|---------|
| Desktop | > 992px | Full layout |
| Tablet | 576px - 992px | 2-column grids, stacked search |
| Mobile | < 576px | Single column, hamburger menu |

## Interactions & Animations

- **Card hover:** `transform: translateY(-5px)` + shadow enhancement
- **Button hover:** `transform: translateY(-2px)` + shadow
- **Icon hover:** Background color inversion (teal bg -> white)
- **Link hover:** Color change to accent
- **Search bar:** Glass effect with smooth transitions
- **NavBar:** Sticky with glass effect

## File Dependencies

- `index.css` - Global styles, CSS variables, resets, utility classes
- `App.jsx` - Section composition (imports all components)
- `App.css` - App-level styles if needed
- Component CSS files - Scoped styles per component

## SEO Considerations

- Semantic HTML (`<nav>`, `<section>`, `<article>`, `<footer>`)
- Proper heading hierarchy (h1 > h2 > h3)
- Alt text on all images
- Meta tags in index.html (title, description, og tags)
- Clean URL structure

## Customization Guide (for buyers)

1. **Colors:** Edit CSS variables in `index.css`
2. **Fonts:** Change Google Fonts import URL
3. **Content:** Edit data files in `src/data/`
4. **Images:** Replace Unsplash URLs with own images
5. **Sections:** Remove/comment component imports in `App.jsx`
6. **Branding:** Change logo text and icon in NavBar component
