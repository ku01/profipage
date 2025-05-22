# Data Schema and Theming Documentation

## Data Schema

The application uses JSON files to store all profile data. Below are the schemas for each data type:

### Personal Information (`personal.json`)
```typescript
{
  name: string;
  photo: string;  // URL to photo
  title: string;
  contact: {
    email: string;
    phone?: string;
    location: string;
    links: {
      label: string;
      url: string;
      icon?: string;
    }[];
  };
}
```

### Professional Experience (`experience.json`)
```typescript
{
  experiences: {
    title: string;
    company: string;
    companyLogo?: string;  // URL to logo
    location: string;
    startDate: string;     // YYYY-MM format
    endDate?: string;      // YYYY-MM format or "Present"
    description: string[];
    achievements?: string[];
    technologies?: string[];
  }[];
}
```

### Education (`education.json`)
```typescript
{
  education: {
    degree: string;
    institution: string;
    institutionLogo?: string;  // URL to logo
    location: string;
    startDate: string;         // YYYY-MM format
    endDate: string;           // YYYY-MM format
    description?: string;
    achievements?: string[];
  }[];
}
```

### Skills (`skills.json`)
```typescript
{
  categories: {
    name: string;
    skills: {
      name: string;
      level?: number;      // 1-5 scale
      yearsOfExperience?: number;
    }[];
  }[];
}
```

### Languages (`languages.json`)
```typescript
{
  languages: {
    name: string;
    level: string;        // e.g., "Native", "Fluent", "Intermediate", "Basic"
    certification?: string;
  }[];
}
```

### Additional Sections (`additional.json`)
```typescript
{
  sections: {
    title: string;
    items: {
      title: string;
      date?: string;
      description?: string;
      url?: string;
      image?: string;
    }[];
  }[];
}
```

## Theming System

The application uses a customizable theming system built with CSS variables.

### Theme Structure
```typescript
{
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
    // Add more color variables as needed
  };
  typography: {
    fontFamily: {
      primary: string;
      secondary: string;
    };
    fontSize: {
      base: string;
      h1: string;
      h2: string;
      h3: string;
      small: string;
    };
  };
  spacing: {
    unit: string;      // Base spacing unit (e.g., "1rem")
    small: string;     // 0.5 * unit
    medium: string;    // 1 * unit
    large: string;     // 2 * unit
    xlarge: string;    // 3 * unit
  };
  breakpoints: {
    mobile: string;    // e.g., "480px"
    tablet: string;    // e.g., "768px"
    desktop: string;   // e.g., "1024px"
    wide: string;      // e.g., "1200px"
  };
}
```

### Usage

To customize the theme:

1. Create a new theme file in `src/themes/`
2. Import and apply the theme using the `ThemeProvider` component
3. The theme will be automatically applied to all styled components and CSS variables 