import Link from "next/link";

import { HomeIcon } from "@/components/icons";
import { TerminalWindow } from "@/components/shared";

import { BackgroundGrid, GuideCard, GuideList, GuideSection } from "./_components";

const DeveloperGuide = () => (
  <div className="min-h-screen overflow-hidden bg-gray-950 text-gray-100">
    <BackgroundGrid />

    <div className="relative container mx-auto max-w-4xl px-4 py-12">
      {/* Header Section */}
      <div className="mb-8 flex flex-col items-center">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-gray-800/40 px-4 py-2 text-sm font-medium text-indigo-400 transition-all hover:bg-gray-800/60 hover:text-indigo-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          style={{ boxShadow: "0 1px 4px 0 rgba(80,80,180,0.04)" }}
        >
          <HomeIcon className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-center text-5xl font-bold tracking-tight text-white">
          Developer Guide
        </h1>
        <p className="mt-4 text-center text-lg text-gray-400">
          A comprehensive guide to building professional Next.js applications
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        <GuideSection title="Project Architecture">
          <GuideCard title="Directory Structure">
            <GuideList
              items={[
                "src/app - Contains all pages and layouts using Next.js 13+ app directory features",
                "src/components - Houses reusable UI components like buttons, cards, forms, etc.",
                "src/lib - Contains utility functions, API calls, database connections, etc.",
                "src/types - TypeScript type definitions and interfaces",
                "src/styles - Global styles and Tailwind CSS configuration",
                "public - Static assets like images, fonts, and icons",
              ]}
            />
          </GuideCard>
          <GuideCard title="Coding Patterns">
            <GuideList
              items={[
                "Atomic Design - Building components from small to large (atoms → molecules → organisms)",
                "Container/Presenter - Separating logic (Container) from presentation (Presenter)",
                "Custom Hooks - Reusable business logic in custom hooks (e.g., useAuth, useForm)",
                "Context API - Global state management for user info, themes, etc.",
                "Server Components - Performance optimization through server-side rendering",
              ]}
            />
          </GuideCard>
        </GuideSection>

        <GuideSection title="Project Setup">
          <GuideCard title="Initial Setup">
            <TerminalWindow
              title="Setup Commands"
              code={`# Clone the repository
git clone https://github.com/Salman-Ahamed/Next.js-TypeScript-Starter-Template.git

# Navigate to project directory
cd Next.js-TypeScript-Starter-Template

# Install dependencies (Bun recommended)
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Clear cache and reset development environment
bun run clear-cache`}
            />
          </GuideCard>
          <GuideCard title="Environment Setup">
            <TerminalWindow
              title="Environment Variables"
              code={`# Required environment variables in .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database Configuration
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# External Services
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...`}
            />
          </GuideCard>
          <GuideCard title="Development Tools">
            <TerminalWindow
              title="VS Code Extensions"
              code={`# Essential Extensions for Development
- ESLint - Code quality and style checking
- Prettier - Code formatting and consistency
- Tailwind CSS IntelliSense - Tailwind CSS suggestions
- TypeScript and JavaScript Language Features - TypeScript support
- GitLens - Git history and blame information
- Error Lens - Inline error highlighting
- Import Cost - Import size information
- Auto Import - Automatic import suggestions
- Path Intellisense - Path autocompletion
- Code Spell Checker - Spelling verification`}
            />
          </GuideCard>
        </GuideSection>

        <GuideSection title="Development Workflow">
          <GuideCard title="Coding Process">
            <GuideList
              items={[
                "Create feature branch from main (feat/, fix/, docs/)",
                "Write code with TypeScript and proper type definitions",
                "Write unit tests for new features",
                "Run linting and formatting checks",
                "Create pull request with detailed description",
                "Address code review feedback",
                "Merge to main after approval",
              ]}
            />
          </GuideCard>
          <GuideCard title="Code Quality">
            <GuideList
              items={[
                "Maintain clean and readable code",
                "Add comments where necessary",
                "Implement proper error handling",
                "Optimize for performance",
                "Follow security best practices",
                "Increase test coverage",
              ]}
            />
          </GuideCard>
        </GuideSection>

        <GuideSection title="Testing Strategy">
          <GuideCard title="Testing Levels">
            <GuideList
              items={[
                "Unit Tests - Testing individual functions and components",
                "Integration Tests - Testing component interactions",
                "E2E Tests - Testing complete user flows",
                "Performance Tests - Speed and optimization checks",
                "Accessibility Tests - WCAG compliance",
              ]}
            />
          </GuideCard>
          <GuideCard title="Testing Tools">
            <TerminalWindow
              title="Testing Commands"
              code={`# Run unit tests
bun test

# Run E2E tests
bun run test:e2e

# Check test coverage
bun run test:coverage

# Run specific test file
bun test src/components/Button.test.tsx`}
            />
          </GuideCard>
        </GuideSection>

        <GuideSection title="Performance Optimization">
          <GuideCard title="Key Optimizations">
            <GuideList
              items={[
                "Code Splitting - Load code as needed",
                "Image Optimization - WebP format, lazy loading",
                "Caching - API requests, static content",
                "Lazy Loading - Components, images, videos",
                "Bundle Size - Remove unnecessary imports",
                "Memory Leaks - Clean up unused resources",
              ]}
            />
          </GuideCard>
          <GuideCard title="Monitoring">
            <GuideList
              items={[
                "Error Tracking - Log errors with Sentry",
                "Analytics - Track user behavior",
                "Core Web Vitals - LCP, FID, CLS metrics",
                "API Performance - Response time, error rates",
                "Logging - System logs, user actions",
              ]}
            />
          </GuideCard>
        </GuideSection>

        <GuideSection title="Security Best Practices">
          <GuideCard title="Implementation Guidelines">
            <GuideList
              items={[
                "Authentication - JWT, OAuth, session management",
                "Environment Variables - Secure secret keys",
                "CORS Policy - API access control",
                "Content Security Policy - XSS prevention",
                "Security Audits - Regular vulnerability checks",
                "Dependency Updates - Security patches",
              ]}
            />
          </GuideCard>
          <GuideCard title="Security Tools">
            <TerminalWindow
              title="Security Commands"
              code={`# Check for vulnerabilities
bun run security:check

# Update dependencies
bun run update:deps

# Run security audit
bun run audit

# Scan dependencies
bun run scan:deps`}
            />
          </GuideCard>
        </GuideSection>

        <GuideSection title="Deployment Strategy">
          <GuideCard title="Deployment Process">
            <GuideList
              items={[
                "CI/CD Pipeline - Automated deployment",
                "Staging Environment - Testing before production",
                "Feature Flags - Gradual rollout",
                "Backup Strategy - Data protection",
                "Deployment Metrics - Performance tracking",
                "Rollback Plan - Emergency situations",
              ]}
            />
          </GuideCard>
          <GuideCard title="Environment Management">
            <TerminalWindow
              title="Environment Setup"
              code={`# Development Environment
NEXT_PUBLIC_API_URL=http://localhost:3000
NODE_ENV=development

# Staging Environment
NEXT_PUBLIC_API_URL=https://staging-api.example.com
NODE_ENV=staging

# Production Environment
NEXT_PUBLIC_API_URL=https://api.example.com
NODE_ENV=production`}
            />
          </GuideCard>
        </GuideSection>

        <GuideSection title="Documentation">
          <GuideCard title="Documentation Requirements">
            <GuideList
              items={[
                "README Updates - Project setup, usage",
                "API Documentation - Endpoints, parameters",
                "Component Documentation - Props, usage",
                "Deployment Procedures - Step-by-step guide",
                "Changelog - Version history",
                "Troubleshooting Guide - Common issues, solutions",
              ]}
            />
          </GuideCard>
        </GuideSection>
      </div>
    </div>
  </div>
);

export default DeveloperGuide;
