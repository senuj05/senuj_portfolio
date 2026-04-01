# Portfolio Website

A modern, responsive portfolio website built with typescript,Javascript , and CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Modern, clean design
- Fully responsive layout
- Smooth animations and transitions
- Mobile-friendly navigation
- Project showcase sections
- Services accordion
- Contact form integration ready

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React** - UI library

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── ProjectThumbnails.tsx  # Project grid
│   ├── UXProjects.tsx  # UX projects section
│   ├── FilmsArt.tsx    # Films & Art section
│   ├── Services.tsx    # Services section
│   └── Footer.tsx      # Footer component
└── public/             # Static assets
```

## Pages

### Home
The main landing page featuring a hero section, featured projects, and portfolio highlights.

### About
An about page with personal information and background details.

### Work
Showcase of completed projects and case studies, including:
- **Cards with Hearts** - Interactive project with sidebar navigation
- **Huddle** - Project with detailed layout
- **Illini Safe** - Safety-focused project
- **Master Chef** - Culinary design project
- **Refabric** - Sustainable fashion initiative
- **Smart Resume Matcher** - AI-powered resume matching tool

### Play (Playground)
An interactive, draggable canvas gallery featuring a collection of creative work, sketches, and visual experiments. The page includes:
- **Draggable card-based layout** - Users can click and drag image cards around the canvas
- **Grid-based initial positioning** - Cards are arranged in a responsive grid layout
- **Lightbox functionality** - Click images to view full-screen with captions
- **Smooth animations** - Interactive hover effects and transitions
- **Caption system** - Each image has a descriptive caption visible in the lightbox

### Gallery
A dedicated section for photography

## Customization

You can customize the content by editing the component files in the `components/` directory. Each component contains placeholder data that you can replace with your own content.

