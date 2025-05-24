# Professional Profile Website

A modern, customizable professional profile website built with React and TypeScript. Features include print functionality, responsive design, and automated deployment.

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Data Management](#data-management)
- [Features](#features)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## Getting Started

1. Clone the repository

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure
```
profipage/
├── src/
│   ├── components/     # React components
│   ├── data/          # JSON data files
│   ├── types/         # TypeScript type definitions
│   ├── test/          # Test files
│   ├── assets/        # Static assets
│   └── App.tsx        # Root component
└── public/            # Static assets
```

## Data Management

All profile data is stored in JSON files in the `src/data/` directory. Update the corresponding JSON file to modify content.

For detailed information about the data structure and schemas, please refer to [data-schema.md](docs/data-schema.md).

## Features

### Print Functionality
The print functionality uses the browser's native print capabilities:
1. Click the "Print" button
2. The page will be formatted for printing
3. Use the browser's print dialog to print or save as PDF

### Core Features
- Single page application (SPA) layout
- Responsive design for all devices
- Accessibility features (ARIA labels, semantic HTML)
- SEO optimization (meta tags, Open Graph)
- Modern, clean, minimalist design
- Component-based architecture
- Comprehensive test coverage

### Available Sections
- Professional Summary
- Skills
- Experience
- Education
- Header/Contact Information

## Deployment

### Vercel Deployment

The project is configured for automatic deployment to Vercel:

1. Push changes to the main branch:
   ```bash
   git add .
   git commit -m "your commit message"
   git push origin main
   ```

2. Vercel will automatically:
   - Detect the push to main
   - Build the project
   - Deploy to production
   - Update the live site

### Manual Deployment

To deploy to other platforms:

1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. The `dist/` directory will contain the production-ready files
3. Deploy these files to your hosting provider

## Troubleshooting

### Common Issues

1. Build failures:
   - Ensure all dependencies are installed
   - Check for TypeScript errors
   - Verify JSON data follows the schema

2. Print formatting issues:
   - Check browser compatibility
   - Ensure styles are print-friendly
   - Verify media queries for print

3. Component rendering issues:
   - Check data format in JSON files
   - Verify component props
   - Check browser console for errors

For more issues, please check the project's GitHub issues or create a new one.
