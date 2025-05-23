# Project Specification: Professional Profile Website

## Overview

A personal website presenting my professional journey, skills, and expertise. The site is downloadable as a PDF and implemented as a single-page application (SPA) with a clean, modern design.

## Technical Requirements

- **Frontend Only:** Pure client-side application with no backend services.
- **Framework:** React with TypeScript.
- **Build Tool:** Vite.
- **Deployment:** Vercel with continuous deployment from GitHub.

## Data Management

- **Data Skeleton:** The application structure supports all professional profile data types (personal info, professional journey, education, skills, etc.).
- **Data Storage:** Personal data, project details, and related content are stored in separate JSON files, fetched as external resources via HTTP requests.
- **Extensibility:** The data structure accommodates future additions (projects, publications, testimonials) through flexible schema design.

## Features

- **Single Page:** All content appears on a single, scrollable page.
- **PDF Export:** One-click export of the entire profile as a PDF, maintaining layout and design.
- **Responsive Design:** Full responsiveness across all devices and screen sizes.
- **Accessibility:** Implementation follows accessibility best practices:
  - Semantic HTML structure
  - ARIA labels
  - Keyboard navigation support
- **SEO:** Optimized for search engines with:
  - Meta tags
  - Page titles
  - Descriptions
  - Open Graph tags

## Design

- **Modern and Clean:** Professional, minimalist design optimized for presenting expertise and skills.
- **Customizable Theme:** Colors, fonts, and layout are configurable through a theming system.

## Development Workflow

- **Version Control:** GitHub repository manages all source code.
- **CI/CD:** Automated deployment pipeline to Vercel triggers on main branch updates.

## Profile Structure and Sections

The professional profile presents information in the following layout structure:

1. **Header (Personal Information)** - positioned at the top of the page:
   - Name
   - Personal site
   - Contact details (email, phone, location, links)
   - Professional title

The content below the header is organized in two columns:

Left Column:
2. **Professional Summary:**
   - Brief overview of experience, expertise, and career highlights

3. **Experience:**
   - List of professional roles, each with:
     - Job title
     - Company name and logo
     - Location
     - Dates (start/end)
     - Description of responsibilities and achievements

Right Column:
4. **Skills and Technologies:**
   - Primary Skills:
     - Enumerated list of core technical skills
   - Limited Experience:
     - Enumerated list of technologies and skills with basic familiarity or limited practical application

5. **Education:**
   - List of educational qualifications, each with:
     - Degree or qualification
     - Institution name and logo
     - Location
     - Dates (start/end)
     - Description (optional)

6. **Additional Sections (optional):**
   - Publications, certifications, projects, awards, or other relevant content
