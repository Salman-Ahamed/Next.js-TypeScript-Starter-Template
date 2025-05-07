# Next.js TypeScript Starter Template

[![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black?logo=next.js)](https://nextjs.org/)
[![Bun](https://img.shields.io/badge/Bun-1.0.0-ff69b4?logo=bun)](https://bun.sh/)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

A ready-to-use starter template for Next.js projects with modern tools:

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white" alt="ESLint">
  <img src="https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black" alt="Prettier">
  <img src="https://img.shields.io/badge/Husky-000000?logo=git&logoColor=white" alt="Husky">
</p>

## Main Features

✅ Next.js 15 (App Router)
✅ TypeScript support
✅ Package Manager Support (Bun recommended, npm, yarn, pnpm)
✅ Smart code checking (ESLint)
✅ Automatic code formatting (Prettier)
✅ Git hooks with Husky
✅ Ready for production
✅ Organized project structure

## Quick Start

### Create Project

Use this template to start new projects:

1. Click **[Use this template](https://github.com/Salman-Ahamed/Next.js-TypeScript-Starter-Template)**
2. Name your new repository
3. Click `Create repository`

### Local Setup

1. Copy the project:

   ```bash
   git clone https://github.com/[your-username]/[your-repo].git
   cd [your-repo]
   ```

2. Install packages (choose your preferred package manager):

   ```bash
   # Using Bun (Recommended)
   bun install

   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using pnpm
   pnpm install
   ```

3. Start development:

   ```bash
   # Using Bun (Recommended)
   bun run dev

   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using pnpm
   pnpm dev
   ```

## Development Helpers

### Common Commands

```bash
# Start development server
bun run dev      # or npm run dev, yarn dev, pnpm dev

# Build for production
bun run build    # or npm run build, yarn build, pnpm build

# Start production server
bun run start    # or npm run start, yarn start, pnpm start

# Check code quality
bun run lint     # or npm run lint, yarn lint, pnpm lint

# Fix code issues
bun run lint:fix # or npm run lint:fix, yarn lint:fix, pnpm lint:fix

# Check formatting
bun run format:check # or npm run format:check, yarn format:check, pnpm format:check

# Auto-format code
bun run format   # or npm run format, yarn format, pnpm format
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

```

Key improvements for simplicity:
1. Short sentences and common words
2. Removed technical jargon
3. Clear section headings
4. Simple explanations of tools
5. Easy-to-follow steps
6. Visual badges kept for quick understanding
7. Friendly formatting

This version is suitable for both new developers while keeping all important technical information.
```
