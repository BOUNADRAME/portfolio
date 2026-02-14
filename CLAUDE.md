# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional portfolio website built with **Next.js 14** (App Router) showcasing Bouna Dramé's work as a Full Stack Architect specializing in statistical systems. The site is deployed as a **static export** to GitHub Pages at `bounafode.github.io/portfolio`.

## Development Commands

```bash
# Install dependencies
npm install

# Development server (localhost:3000)
npm run dev

# Production build (generates static files in out/)
npm run build

# Export static site (same as build, configured in next.config.js)
npm run export
```

## Deployment

The site is automatically deployed via GitHub Actions on every push to `main`:
- Workflow: `.github/workflows/deploy.yml`
- Build command: `npm run build`
- Output directory: `out/`
- GitHub Pages source: GitHub Actions

### Important Configuration

**next.config.js** is configured for GitHub Pages:
```javascript
{
  output: "export",           // Static export mode
  basePath: "/portfolio",      // Repository name
  assetPrefix: "/portfolio",   // Asset path prefix
  images: { unoptimized: true } // Required for static export
}
```

⚠️ **Critical**: If the repository name changes or moves to `username.github.io`, update `basePath` and `assetPrefix` in `next.config.js`.

## Architecture

### Component Structure

All components are defined in a **single file**: `src/app/page.js`. This is a client component (`'use client'`) containing:
- `Navbar` - Fixed navigation with mobile menu
- `Hero` - Landing section with profile photo and stats
- `Projects` - Expandable project cards with detailed impact metrics
- `Expertise` - Technology skills grid
- `Timeline` - Professional experience timeline
- `Contact` - Contact information and social links
- `Footer` - Footer with branding

Each component is self-contained and uses inline SVG icons (defined in `icons` object) to avoid external dependencies.

### Data Management

All portfolio content lives in `src/data/portfolio.js`:
- `personalInfo` - Contact details, bio, social links
- `stats` - Key metrics (years experience, impact numbers)
- `projects` - Detailed project information with challenge/solution/impact
- `expertise` - Technology skills grouped by category
- `experience` - Professional timeline entries

**To update portfolio content**: Edit `src/data/portfolio.js` only. Do not modify component code in `page.js` for content changes.

### Asset Path Handling

The app uses a dynamic base path system for GitHub Pages compatibility:

```javascript
// In page.js
const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
```

- **Development**: Assets load from root `/` (empty basePath)
- **Production**: Assets load from `/portfolio/` prefix
- **Image references**: Use full path like `/portfolio/images/photo.jpeg` directly in production

### Styling System

- **Framework**: Tailwind CSS
- **Custom colors**: `primary` (blue) and `dark` variants defined in `tailwind.config.js`
- **Typography**: Custom font families (Cabinet, Satoshi, JetBrains Mono) defined via CSS variables
- **Global styles**: `src/app/globals.css` includes custom animations, gradient backgrounds, and effects
- **Design system**: Heavy use of gradients, backdrop blur, glow effects, and smooth animations

### State Management

Minimal local state using React hooks:
- `Navbar`: Mobile menu open/closed state
- `Projects`: Expanded project detail state (accordion)

No global state management needed for this static site.

## Key Technical Patterns

### Expandable Project Cards
Projects use accordion pattern - clicking toggles detailed view (challenge, solution, impact). Active state tracked by project ID.

### Gradient Mesh Backgrounds
Sections use animated gradient blobs with `mesh-gradient` class and absolute positioned blur elements for depth.

### Responsive Design
Mobile-first approach with `md:` and `lg:` breakpoints. Navigation collapses to hamburger menu on mobile.

### Animation Strategy
Staggered fade-in animations using custom CSS classes (`animate-fade-in`, `animate-slide-up`) with inline `style={{ animationDelay }}` for sequential reveals.

## Content Guidelines

### Adding New Projects
1. Add entry to `projects` array in `src/data/portfolio.js`
2. Required fields: `id`, `title`, `subtitle`, `client`, `year`, `category`, `description`, `challenge`, `solution`, `impact`, `technologies`, `color`
3. Optional: `isConfidential`, `hasScreenshots`

### Adding Screenshots
1. Place images in `public/images/`
2. Reference with `/portfolio/images/filename.ext` in production
3. Set `hasScreenshots: true` in project data (currently not implemented in UI)

### Updating Contact Info
Modify `personalInfo` object in `src/data/portfolio.js`. Changes reflect across entire site (Hero, Contact section, Footer).

## Troubleshooting

### Assets Not Loading in Production
- Verify `basePath` in `next.config.js` matches repository name
- Check that image paths use `/portfolio/` prefix
- Ensure `images: { unoptimized: true }` is set for static export

### GitHub Actions Build Failing
- Check that `npm ci` can install dependencies (package-lock.json must be committed)
- Verify Node.js version compatibility (workflow uses Node 20)
- Review build logs for missing assets or configuration errors

### Styling Not Applied
- Run `npm run dev` to ensure Tailwind is processing
- Check that file paths are included in `content` array in `tailwind.config.js`
- Verify custom CSS variables are defined in `globals.css`
