# Project Structure

> **Note:** This project is in its initial setup phase. Update this file as the folder structure takes shape.

## Current Layout

```
IzziPortfolio/
├── .kiro/
│   └── steering/       # AI steering rules and project context
└── (project files TBD)
```

## Recommended Structure (once initialized)

```
IzziPortfolio/
├── .kiro/
│   └── steering/
├── public/             # Static assets (images, favicon, etc.)
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page-level components or routes
│   ├── assets/         # Images, fonts, icons used in code
│   └── styles/         # Global styles or theme config
├── package.json
└── README.md
```

## Conventions

- Keep components small and focused on a single responsibility
- Co-locate component styles with their component files when possible
- Use descriptive file names in kebab-case or PascalCase (match chosen framework convention)
- Static assets that don't need processing go in `public/`
