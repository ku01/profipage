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

## Data Loading Configuration

The application supports loading data from both remote and local sources. By default, it will use local JSON files stored in the `public/data` directory. To configure remote data loading:

1. Create a `.env` file in the project root
2. Add the following environment variable:
   ```
   REMOTE_DATA_URL=https://your-api.example.com/data
   ```

### Data Loading Behavior

- If `REMOTE_DATA_URL` is set and not empty:
  - The app will first try to load data from the remote URL
  - If remote loading fails, it will fall back to local files
- If `REMOTE_DATA_URL` is not set or empty:
  - The app will load data from local files in `public/data/`

### Required JSON Files

The following JSON files must be present either remotely or locally:
1. `personal-info.json` - Personal information and contact details
2. `education.json` - Educational background and qualifications
3. `experience.json` - Work experience and professional history
4. `skills.json` - Technical and professional skills
5. `summary.json` - Professional summary and overview

### Local Data Directory Structure

```
public/
  └── data/         # For JSON data files
      ├── personal-info.json
      ├── education.json
      ├── experience.json
      ├── skills.json
      └── summary.json
```

## Development

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

## License

MIT
