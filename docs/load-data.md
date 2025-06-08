# Data Loading Requirements

## Required JSON Data Files
The application requires the following JSON data files:
1. `personal-info.json` - Personal information and contact details
2. `education.json` - Educational background and qualifications
3. `experience.json` - Work experience and professional history
4. `skills.json` - Technical and professional skills
5. `summary.json` - Professional summary and overview

## Remote JSON Data Source
- The application MUST support loading all JSON files from a remote resource
- The remote resource URL MUST be configurable through environment variables
- Each JSON file should be accessible via a predictable URL pattern

## Fallback Mechanism
- If the environment variable for the remote resource URL is empty or not set:
  - The application MUST fall back to using local JSON files
  - Local JSON files MUST be included in the project under a designated data directory
  - All five JSON files MUST be present in the local fallback directory

## Implementation Requirements
1. Define environment variable(s) for the remote JSON URL pattern
2. Implement error handling for remote data fetching
3. Ensure seamless fallback to local JSON when needed
4. Create a consistent directory structure for local JSON files
5. Document the environment variable name(s) and format in the project setup

## Data Directory Structure
```
public/
  └── data/         # For JSON data files
      ├── personal-info.json
      ├── education.json
      ├── experience.json
      ├── skills.json
      └── summary.json
```