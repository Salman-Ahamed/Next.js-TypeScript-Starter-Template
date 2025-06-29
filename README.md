# Next.js TypeScript Starter Template

A **production-ready**, **scalable**, and **actively maintained** starter template for building high-quality web apps with **Next.js**, **TypeScript**, and **Tailwind CSS**.

<br/>

<p align="center">
  <img
    src="https://img.shields.io/npm/v/next-ts-app?style=for-the-badge&label=next-ts-app&labelColor=black&logo=npm&color=success"
    alt="next-ts-app version"
  />
  <img
    src="https://img.shields.io/static/v1?label=License&message=MIT&labelColor=000000&color=007ACC&style=for-the-badge&logo=open-source-initiative&logoColor=white"
    alt="License MIT"
  />
</p>

<p align="center">
<img src="https://img.shields.io/badge/Next.js-15.3.1-black?logo=next.js" alt="Nextjs">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white" alt="ESLint">
  <img src="https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black" alt="Prettier">
</p>
<br/>

## 🚀 Why Use This Template?

This starter template is designed for **developers of all levels** — from beginners starting their journey to advanced engineers building scalable applications.

### Key Features

- ⚡️ **Next.js 15+** with App Router
- ✅ **TypeScript** – full type safety and custom config
- 🎨 **Tailwind CSS** – preconfigured and responsive
- 🧹 **ESLint + Prettier** – clean, consistent code
- 🌿 **Scalable folder structure** – production standard
- 📦 **Alias support** – easy path management
- 🧪 Ready for unit & integration testing
- ☁️ Vercel ready – just push and deploy

## How to Start

### Option 1: Create with CLI **`(Recommended)`**

Quickly set up your Next.js + TypeScript + TailwindCSS project using the CLI tool:

- **📦 using npm**
  ```bash
  npx next-ts-app my-awesome-app
  ```
- Replace my-awesome-app with your desired project name.
- The CLI will scaffold a fully configured Next.js + TypeScript + TailwindCSS starter for you.

### ✅ Fast | 🔧 Pre-configured | 🧪 Ready for development

---

#### CLI Options

During project creation, you'll be prompted to:

1. **Project Name**: Enter a name for your project (e.g., `my-awesome-app`)
2. **Package Manager**: Choose your preferred package manager:

   - `bun` (Recommended for speed)
   - `npm` (Most common)
   - `yarn` (Alternative to npm)
   - `pnpm` (Fast, disk-space efficient)

3. Follow the steps shown:
   For example, if you choose `bun`:

   ```bash
   cd my-awesome-project
   bun install
   bun run dev
   ```

   **Note**: If you pick `bun`, make sure Bun is installed (`npm install -g bun` or visit [bun.sh](https://bun.sh)). For `pnpm` or `yarn`, install them first if needed.

#### Available Scripts

The project includes several useful scripts:

```bash
# Development
bun run dev          # Start development server with Turbopack
bun run build        # Create production build
bun run start        # Start production server
bun run lint         # Run ESLint
bun run lint:fix     # Fix ESLint errors
bun run format       # Format code with Prettier
bun run format:check # Check code formatting
bun run clear-cache  # Clear Next.js cache, reinstall dependencies, and restart dev server
```

The `clear-cache` script is particularly useful when you encounter build issues or need to reset your development environment. It:

1. Removes the `.next` directory
2. Reinstalls dependencies without using cache
3. Restarts the development server

#### Prerequisites

- For **Bun**: Install via `npm install -g bun`
- For **pnpm**: Install via `npm install -g pnpm`
- For **Yarn**: Install via `npm install -g yarn`
- For **npm**: Comes with Node.js

#### What's Included

After installation, you'll get:

- ✅ Next.js 15 with App Router
- ✅ TypeScript configuration
- ✅ Tailwind CSS setup
- ✅ ESLint & Prettier
- ✅ Project structure ready to go

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
public/                      # Public static assets that are served directly
├── assets/                  # Static assets directory
│   ├── images/             # Image files (png, jpg, svg, etc.)
│   └── data/               # Static JSON data files
│
src/                        # Source code directory
├── app/                    # Next.js 13+ App Router directory
│   ├── (landing)/         # Landing page route group (optional)
│   │   ├── _components/    # Page-specific components
│   │   ├── error.tsx      # Error boundary for landing page
│   │   ├── loading.tsx    # Loading state for landing page
│   │   └── page.tsx       # Landing page entry point
│   │
│   ├── (dashboard)/       # Dashboard route group
│   │   ├── _components/    # Dashboard-specific components
│   │   ├── error.tsx      # Error boundary for dashboard
│   │   ├── loading.tsx    # Loading state for dashboard
│   │   └── page.tsx       # Dashboard page entry
│   │
│   ├── layout.tsx         # Root layout (shared across all pages)
│   ├── template.tsx       # Template for per-page layouts
│   └── providers.tsx      # Global context providers (Theme, Auth, etc.)
│
├── components/            # Reusable components directory
│   ├── ui/               # UI primitives (buttons, inputs, cards)
│   │   ├── button.tsx    # Button component
│   │   ├── input.tsx     # Input component
│   │   └── card.tsx      # Card component
│   │
│   ├── layout/           # Layout components
│   │   ├── header.tsx    # Header component
│   │   ├── footer.tsx    # Footer component
│   │   └── sidebar.tsx   # Sidebar component
│   │
│   ├── shared/           # Shared components across features
│   │   ├── ThemeToggle.tsx  # Theme toggle component
│   │   └── Analytics.tsx    # Analytics component
│   │
│   ├── forms/            # Form-related components
│   │   ├── FormInput.tsx    # Form input component
│   │   └── FormSelect.tsx   # Form select component
│   │
│   └── icons/            # SVG icon components
│       ├── index.tsx     # Icon exports
│       └── SocialIcons/  # Social media icons
│
├── config/               # Application configuration
│   ├── site.ts          # Site metadata and configuration
│   ├── routes.ts        # Route definitions and constants
│   └── theme.ts         # Theme configuration and tokens
│
├── hooks/               # Custom React hooks
│   ├── useAuth.ts       # Authentication hook
│   ├── useAnalytics.ts  # Analytics hook
│   ├── useDebounce.ts   # Debounce utility hook
│   └── useLocalStorage.ts # Local storage hook
│
├── lib/                 # Utility libraries and helpers
│   ├── api/            # API client configurations
│   │   ├── axios.ts    # Axios instance and interceptors
│   │   └── trpc/       # tRPC client setup
│   │
│   ├── utils/          # Utility functions
│   │   ├── formatter.ts # Data formatting utilities
│   │   └── validators.ts # Validation utilities
│   │
│   └── constants.ts    # Application constants
│
├── styles/             # Global styles and CSS
│   ├── globals.css     # Global CSS styles
│   ├── theme/          # Theme variables and tokens
│   └── components/     # Component-specific styles
│
├── types/              # TypeScript type definitions
│   ├── index.d.ts      # Global type declarations
│   ├── next.d.ts       # Next.js type extensions
│   └── custom-types.ts # Custom type definitions
│
├── services/           # Business logic and services
│   ├── auth.service.ts    # Authentication service
│   └── analytics.service.ts # Analytics service
│
├── contexts/           # React Context providers
│   ├── ThemeContext.tsx  # Theme context
│   └── AuthContext.tsx   # Authentication context
│
└── __tests__/         # Test files directory
    ├── components/     # Component tests
    ├── hooks/         # Hook tests
    ├── services/      # Service tests
    └── utils/         # Utility function tests
```

## Code Quality Tools

These tools keep your code neat:

- **ESLint**: Finds code mistakes.
- **Prettier**: Formats code nicely.
- **Tailwind CSS**: Organizes styles.

Example rule for imports:

```javascript
"import/order": [
  "error",
  {
    "groups": ["builtin", "external", "internal"],
    "alphabetize": { "order": "asc" }
  }
]
```

## Deployment

This template works with:

- Vercel
- Netlify
- AWS
- Docker

Copy `.env.example` to `.env` for production settings.

## Developer & Contributor

<div align="center"> <table> <tr> <td align="center">
<img src="https://github.com/Salman-Ahamed.png" width="80" height="80" alt="Salman Ahamed" /><br /> <b>Salman Ahamed</b><br/> <a href="https://github.com/Salman-Ahamed">GitHub</a> | <a href="https://www.linkedin.com/in/salman-ahamad-as/">LinkedIn</a> | <a href="mailto:shahriyar.hosen.dev@gmail.com">Email</a> </td> <td align="center">
<img src="https://github.com/eyachirarafat.png" width="80" height="80" alt="Eyachir Arafat" /><br /> <b>Eyachir Arafat</b><br/> <a href="https://github.com/eyachirarafat">GitHub</a> | <a href="https://www.linkedin.com/in/eyachirarafat/">LinkedIn</a> | <a href="https://eyachirarafat.vercel.app/">Portfolio</a> </td> <td align="center">
<img src="https://github.com/mdamzadhossainomor.png" width="80" height="80" alt="Md Amzad Hossain Omor" /><br /> <b>Md Amzad Hossain</b><br/> <a href="https://github.com/mdamzadhossainomor">GitHub</a> | <a href="https://www.linkedin.com/in/md-amzad-hossain-omor/">LinkedIn</a> | <a href="mailto:mdamzadhossainomor@gmail.com">Email</a> </td> <td align="center">
<img src="https://github.com/Hashibul-Alam.png" width="80" height="80" alt="Hasibul Alam" /><br /> <b>Hasibul Alam</b><br/> <a href="https://github.com/Hashibul-Alam">GitHub</a> | <a href="https://www.linkedin.com/in/hasibul231/">LinkedIn</a> | <a href="mailto:sha31417@gmail.com">Email</a> </td> </tr> </table> </div>

---

## Want to Help?

Check our [CONTRIBUTING GUIDE](CONTRIBUTING.md) to contribute.

## License

Free to use under [MIT License](LICENSE). See the LICENSE file for details.
