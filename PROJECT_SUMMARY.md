# Project Summary: Johnny Faris Portfolio Website

## Overview
A personal portfolio website for Johnny Faris, a Full-Stack Software Engineer transitioning from a career in personal training and professional MMA fighting. The site is built as a Next.js 16 application (migrated from a static HTML template) and is designed for static export to GitHub Pages.

## Technical Stack
- **Framework:** Next.js 16.0.7 with React 19.2.0
- **Styling:** SCSS/Sass (ported from original HTML5 UP Dimension template)
- **Deployment:** Static site generation for GitHub Pages
- **Language:** JavaScript (JSX)

## Project Structure
- **Main Page:** `src/app/page.jsx` - Client-side component managing article/section navigation
- **Layout:** `src/app/layout.jsx` - Root layout with metadata
- **Components:**
  - `Header.jsx` - Navigation header
  - `Main.jsx` - Main content container
  - `Footer.jsx` - Site footer
  - **Sections:** `Intro.jsx`, `About.jsx`, `Work.jsx`, `Contact.jsx`

## Current Content Sections

### 1. Intro Section
- Professional summary: Full-Stack Software Engineer specializing in React ecosystem
- Technical toolkit list:
  - Front-End: React, Next.js, JavaScript (ES6+), HTML5, CSS3/Sass
  - Back-End: Node.js, Express, PostgreSQL, Knex, Supabase, Firebase
  - Tools: Git, RESTful APIs, Jest, CI/CD Deployment
- Currently learning: Tailwind CSS and Framer Motion
- CTA buttons: "View My Work" and "More About Me"

### 2. About Section
- Unique value proposition: Career transition from Personal Trainer (10+ years) → Software Engineer
- Key narrative points:
  - Parallels between "debugging" human body and software
  - Translating training methodology (breaking down goals, testing, iterating) to software development
  - Professional MMA fighter background (discipline, strategic thinking, resilience)
  - Goal: Build tools that enhance human health and performance
- Personal photo: Victory celebration image

### 3. Work Section
Features 5 portfolio projects with detailed cards and modal carousels:

1. **Champion Lifestyle** (In Development)
   - Personal training website with client portal
   - Tech: Tailwind, React, PostgreSQL, Supabase, Firebase, Google Calendar API
   - Features: Session inventory, transaction tracking, automated analytics
   - Links: Not yet available

2. **Operations Holdings Inc**
   - Professional portfolio site for multimillion-dollar company
   - Tech: React, Tailwind CSS, Framer Motion
   - Live site: https://operationsholdings.com

3. **Bakery Inventory Manager**
   - Full-stack inventory management app
   - Tech: React, Node.js, Express, PostgreSQL
   - Features: Dynamic baking logic, server-side logging
   - Live site & GitHub repo available

4. **WeLoveMovies**
   - RESTful API for movie database
   - Tech: Node.js, Express, Knex, PostgreSQL
   - GitHub repo available

5. **Flashcard-O-Matic**
   - React flashcard study app
   - Tech: React, Bootstrap, HTML/CSS
   - GitHub repo available

### 4. Contact Section
- Email: jkfaris@gmail.com
- Phone: (253)906-5208
- Social links: LinkedIn, GitHub

## Design & UX Features
- **Navigation:** Article-based navigation system with smooth transitions
- **Animations:** Preload states, article visibility transitions
- **Work Portfolio:**
  - Grid layout with project cards
  - Image carousels on cards (hover navigation)
  - Full-screen modal carousels with project navigation
  - Responsive design with mobile-optimized controls
- **Visual Style:** Dark theme with translucent overlays, modern glassmorphism aesthetic
- **Images:** Professional headshots, project screenshots, victory celebration photo

## Key Persona/Brand Elements
1. **Career Transition Story:** Personal trainer → Software engineer (unique differentiator)
2. **Cross-Domain Expertise:** Health/fitness knowledge + technical skills
3. **Discipline & Strategy:** MMA background as proof of resilience and systematic thinking
4. **Full-Stack Capability:** Comfortable across front-end, back-end, and databases
5. **Real-World Application Focus:** Building tools for health/performance enhancement

## Content Tone & Style
- Professional yet personal
- Emphasizes unique background and transferable skills
- Technical but accessible
- Forward-looking (mentions current learning)

## Current Content Gaps/Potential Areas for Enhancement
- More specific technical achievements or metrics
- Case studies or detailed project explanations
- Testimonials or professional recommendations
- Blog/thought leadership content (if desired)
- More detailed project impact/results
- Additional soft skills or collaboration examples

## Target Audience
- Potential employers (tech companies)
- Recruiters
- Potential clients (for freelance/consulting)
- Peers in the tech community

## Deployment
- Configured for static export (GitHub Pages)
- Uses Next.js static site generation
- Images stored in `/public/images/`
