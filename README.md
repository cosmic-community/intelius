# Intelius SEO Content Platform

![App Preview](https://imgix.cosmicjs.com/dbca2600-530b-11f1-8cae-3ba0530d6aa4-autopilot-photo-1507525428034-b723cf961d3e-1779144582183.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, SEO-optimized Next.js application for Intelius that displays programmatic SEO content with categories and locations.

## Features

- 📄 Dynamic SEO pages with rich metadata
- 🏷️ Category-based content organization
- 📍 Location-specific pages with demographic info
- 🔍 SEO-optimized with meta tags and structured data
- ⚡ Server-side rendering for fast performance
- 📱 Fully responsive design

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a0b9721c9307e7d2c5af4fa&clone_repository=6a0b9831c9307e7d2c5af52f)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Intelius SEO content"

### Code Generation Prompt

> Build a Next.js application for a website called "Intelius". The content is managed in Cosmic CMS with the following object types: seo-pages, categories, locations. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: Intelius SEO content

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Cosmic CMS SDK

## Getting Started

### Prerequisites

- Bun (or Node.js 18+)
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies: `bun install`
3. Set environment variables (see `.env.example`)
4. Run dev server: `bun run dev`

## Cosmic SDK Examples

```typescript
// Fetch all SEO pages with depth for connected content
const response = await cosmic.objects
  .find({ type: 'seo-pages' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app integrates with three content types:
- **SEO Pages**: Main landing pages with rich content
- **Categories**: Organize SEO pages by topic
- **Locations**: Location-specific content with demographics

## Deployment Options

Deploy easily to Vercel or Netlify. Set environment variables in your hosting platform.

<!-- README_END -->