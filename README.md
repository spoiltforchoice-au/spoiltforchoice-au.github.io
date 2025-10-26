# SFC Band Website

A static, content-driven band website built with Astro and Tailwind CSS, hosted on GitHub Pages.

## 🚀 Quick Start

### Prerequisites

- Node.js 20 or higher
- npm

### Development

```bash
# Install dependencies
npm ci

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├── public/
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ShowCard.astro
│   │   └── SocialLinks.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── shows.astro
│   │   ├── gallery.astro
│   │   └── contact.astro
│   ├── data/
│   │   └── shows.json
│   └── styles/
│       └── globals.css
├── astro.config.mjs
└── package.json
```

## 🎨 Features

- ⚡️ Built with Astro for optimal performance
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive (mobile-first design)
- ♿️ Accessible (WCAG AA compliant)
- 🎭 SEO optimized with meta tags
- 🚀 Deployed via GitHub Actions to GitHub Pages

## 📝 Content Management

### Adding Shows

Edit `src/data/shows.json` to add upcoming or past shows:

```json
{
  "upcoming": [
    {
      "date": "2025-12-15",
      "venue": "The Corner Hotel",
      "city": "Melbourne",
      "state": "VIC",
      "ticketLink": "https://example.com/tickets"
    }
  ],
  "past": []
}
```

### Adding Gallery Images

Place images in `public/images/gallery/` and reference them in `src/pages/gallery.astro`.

## 🚢 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

To configure for your repository:

1. Update `astro.config.mjs` with your GitHub username and repo name
2. Enable GitHub Pages in repository settings
3. Set source to "GitHub Actions"

## 📄 License

All rights reserved.

