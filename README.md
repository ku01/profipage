# Professional Profile Website

A modern, customizable professional profile website built with React and TypeScript. Features include PDF export, responsive design, and automated deployment.

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Data Management](#data-management)
- [Theme Customization](#theme-customization)
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
│   ├── themes/        # Theme configurations
│   ├── utils/         # Utility functions
│   └── App.tsx        # Root component
└── public/            # Static assets
```

## Data Management

All profile data is stored in JSON files in the `src/data/` directory. Update the corresponding JSON file to modify content.

For detailed information about the data structure and schemas, please refer to [data-schema.md](docs/data-schema.md).

## Theme Customization

The application uses a customizable theming system built with CSS variables. For detailed information about the theming system and available options, please refer to [data-schema.md](docs/data-schema.md#theming-system).

### Applying Themes

1. Create a new theme file in `src/themes/`
2. Import and apply the theme using the `ThemeProvider` component:

```typescript
import { ThemeProvider } from './components/ThemeProvider';
import myTheme from './themes/myTheme';

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

## Features

### PDF Export
The PDF export feature uses the browser's print functionality:
1. Click the "Download PDF" button
2. The page will be formatted for PDF
3. Save using the browser's print dialog

### Other Features
- Single page application (SPA) layout
- Responsive design for all devices
- Accessibility features (ARIA labels, semantic HTML)
- SEO optimization (meta tags, Open Graph)
- Modern, clean, minimalist design

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

2. PDF export issues:
   - Check browser compatibility
   - Ensure styles are print-friendly
   - Verify media queries for print

3. Theme not applying:
   - Check theme file structure
   - Verify ThemeProvider is properly configured
   - Clear browser cache

For more issues, please check the project's GitHub issues or create a new one.
