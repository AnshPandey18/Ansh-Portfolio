# Ansh Pandey - Portfolio Website

A modern, minimalist personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, minimalist interface with sophisticated animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between dark and light themes
- **Smooth Animations**: Powered by Framer Motion with reduced motion support
- **Accessible**: Semantic HTML, keyboard navigation, and ARIA labels
- **Performance**: Optimized with lazy loading and efficient animations

## Tech Stack

- React 18
- Tailwind CSS 3
- Framer Motion 10
- Vite

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx    # Sticky navigation with scroll detection
│   ├── Hero.jsx          # Fullscreen hero section with animated background
│   ├── About.jsx         # About section with portrait and bio
│   ├── Skills.jsx        # Skills showcase with radial bars and chips
│   ├── Projects.jsx      # Featured projects grid with modal
│   ├── Experience.jsx    # Experience and education timeline
│   ├── Contact.jsx       # Contact form and social links
│   └── Footer.jsx        # Footer with dark mode toggle
├── App.jsx               # Main app component
├── main.jsx             # React entry point
└── index.css            # Global styles and CSS variables
```

## Customization

### Colors

Edit the color tokens in `tailwind.config.js`:

```js
colors: {
  black: '#000000',
  white: '#FFFFFF',
  gray900: '#111214',
  gray800: '#1f2933',
  gray700: '#374151',
  gray500: '#6b7280',
  tealAccent: '#0d9488',
}
```

### Content

Update the content in each component file:
- Hero: Name, tagline, and CTAs
- About: Bio text and portrait image
- Skills: Skill levels and technologies
- Projects: Project data array
- Experience: Experience and education timeline
- Contact: Contact information and social links

## Notes

- Replace placeholder images with actual portfolio images
- Update project data in `Projects.jsx` with your actual projects
- Add your portrait image to the About section
- Configure form submission endpoint in `Contact.jsx` if needed

## License

All rights reserved. Copyright © 2024 Ansh Pandey

