# Next.js TypeScript Starter Template

[![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black?logo=next.js)](https://nextjs.org/)
[![Bun](https://img.shields.io/badge/Bun-1.0.0-ff69b4?logo=bun)](https://bun.sh/)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

A simple starter template for Next.js projects with useful tools:

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white" alt="ESLint">
  <img src="https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black" alt="Prettier">
  <img src="https://img.shields.io/badge/Husky-000000?logo=git&logoColor=white" alt="Husky">
</p>

## Main Features

- ✅ Next.js 15 (App Router)
- ✅ TypeScript for better coding
- ✅ Bun for fast package management
- ✅ ESLint to check code mistakes
- ✅ Prettier to format code automatically
- ✅ Husky for Git checks before commits
- ✅ Ready for production use
- ✅ Clean project structure

## How to Start

### Option 1: Use the CLI **`(Recommended)`**

1. Create a new project with any of these commands:

- **Recommended (Bun) 🌟**
  ```bash
  bunx next-ts-app
  ```
- **npm 📦**
  ```bash
  npx next-ts-app
  ```
- **yarn 🧶**
  ```bash
  yarn create next-ts-app
  ```
- **pnpm ⚡**
  ```bash
  pnpm dlx next-ts-app
  ```

2. Answer these questions:

   - Enter your project name (e.g., `my-project`).
   - Choose a package manager (`bun`, `pnpm`, `yarn`, or `npm`).

3. Follow the steps shown:
   For example, if you choose `bun`:

   ```bash
   cd my-project
   bun install
   bun run dev
   ```

   **Note**: If you pick `bun`, make sure Bun is installed (visit [bun.sh](https://bun.sh)). For `pnpm` or `yarn`, install them first if needed.

### Option 2: Use GitHub Template

1. Click **[Use this template](https://github.com/Salman-Ahamed/Next.js-TypeScript-Starter-Template)** on GitHub.
2. Name your new repository.
3. Click `Create repository`.

4. Set up locally:

   ```bash
   git clone https://github.com/[your-username]/[your-repo].git
   cd [your-repo]
   bun install
   bun run dev
   ```

## Project Structure

```
src/
├── app/
│   ├── (landing)/               # Landing Page Route Group (Optional)
│   │   ├── components/          # Page-specific Components
│   │   │   ├── HeroSection.tsx
│   │   │   └── CTASection.tsx
│   │   └── page.tsx             # Landing Page Entry
│   ├── (dashboard)/             # Other Route Groups (Auth, Dashboard etc)
│   ├── layout.tsx               # Root Layout
│   ├── template.tsx             # Optional Template (For per-page layouts)
│   └── providers.tsx            # Global Context Providers
│
├── components/
│   ├── ui/                      # Reusable UI Primitives (ShadCN/ui Style)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── layout/                  # Layout Components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── ...
│   └── shared/                  # Cross-Cutting Components
│       ├── ThemeToggle.tsx
│       └── Analytics.tsx
│
├── config/                      # App Configuration
│   ├── site.ts                  # Site Metadata
│   ├── routes.ts                # Route Configurations
│   └── theme.ts                 # Design System Config
│
├── hooks/                       # Custom React Hooks
│   ├── useDebounce.ts
│   └── useLocalStorage.ts
│
├── lib/
│   ├── api/                     # API Clients
│   │   ├── axios.ts
│   │   └── trpc/
│   ├── utils/                   # Utility Functions
│   │   ├── formatter.ts
│   │   └── validators.ts
│   └── constants.ts             # App Constants
│
├── styles/
│   ├── globals.css              # Global CSS
│   ├── theme/                   # CSS Variables & Design Tokens
│   └── tailwind.css             # Tailwind Directives
│
├── types/                       # Global Type Definitions
│   ├── index.d.ts
│   ├── next.d.ts                # Next.js Type Extensions
│   └── custom-types.ts
│
├── public/
│   └── assets/                  # Static Assets
│       ├── images/
│       └── fonts/
│
├── services/                    # Business Logic Layer
│   ├── auth.service.ts
│   └── analytics.service.ts
│
├── contexts/                    # React Contexts
│   ├── ThemeContext.tsx
│   └── AuthContext.tsx
│
├── hooks/                       # Custom Hooks
│   ├── useAuth.ts
│   └── useAnalytics.ts
│
├── icons/                       # SVG Icon Components
│   ├── BrandIcon.tsx
│   └── SocialIcons/
│
└── __tests__/                   # Test Directory
    ├── components/
    └── utils/
```

## Useful Commands

Run these commands in your project folder:

```bash
# Start the development server
bun run dev

# Build for production
bun run build

# Check code for errors
bun run lint

# Fix code errors automatically
bun run lint:fix

# Check code formatting
bun run format:check

# Format code automatically
bun run format
```

## Code Quality

### Automatic Checks

We use these tools to keep code clean:

- **ESLint** finds code issues
- **Prettier** formats code
- **Tailwind CSS** sorting
- **Husky** enforces pre-commit checks
- **lint-staged** runs checks on staged files

Example import rules:

```javascript
"import/order": [
  "error",
  {
    "groups": ["builtin", "external", "internal"],
    "alphabetize": { "order": "asc" }
  }
]
```

### Formatting Rules

Our formatting setup helps with:

- Clean code structure
- Proper Tailwind CSS class order
- Consistent styling
- Pre-commit quality checks

## Deployment Ready

Works with popular platforms:

- Vercel
- Netlify
- AWS
- Docker

Create `.env` file from `.env.example` for production settings.

## How to Contribute

Read our [CONTRIBUTING GUIDE](CONTRIBUTING.md) to help improve this project.

## License

Free to use under [MIT License](LICENSE). See LICENSE file for details.
