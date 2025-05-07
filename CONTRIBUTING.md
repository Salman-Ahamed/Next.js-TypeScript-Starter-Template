# Contribution Guidelines 🤝

Welcome to our project! We appreciate your interest in contributing. Please follow these guidelines to ensure a smooth collaboration.

## Development Setup

### Prerequisites

- Node.js v18+
- Bun v1.0+
- Git

### Initial Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Baitul-Hikmah/Get-Ilmi.git
   cd Get-Ilmi
   ```

2. Install dependencies using Bun:

   ```bash
   bun install
   ```

3. Start development server:
   ```bash
   bun run dev
   ```

## Code Quality Standards

### Git Hooks (Husky)

We use Husky to enforce code quality before commits:

- Pre-commit hooks run automatically
- Linting and formatting checks
- Prevents commits with errors
- Allows commits with warnings

### Linting Configuration (ESLint)

Our ESLint configuration enforces code consistency and best practices. Key features include:

- Next.js Core Web Vitals optimization
- TypeScript best practices
- Strict import ordering
- React component conventions
- No console.log statements (use console.warn/error instead)

#### Key Rules:

1. **Component Architecture**

   ```typescript
   // Recommended
   interface UserProfileProps {
     name: string;
     age: number;
   }

   const UserProfile: FC<UserProfileProps> = ({ name, age }) => (
     <div>{name} ({age})</div>
   );

   // Avoid
   function UserProfile(props) {
     return <div>{props.name}</div>;
   }
   ```

2. **Function Style**

   ```typescript
   // Recommended
   const getTotal = (items: Item[]): number => {
     return items.reduce((sum, item) => sum + item.price, 0);
   };

   // Avoid
   function getTotal(items) {
     let sum = 0;
     for (let i = 0; i < items.length; i++) {
       sum += items[i].price;
     }
     return sum;
   }
   ```

3. **TypeScript Conventions**

   ```typescript
   // Use explicit types
   type UserRole = "admin" | "user";
   interface User {
     id: string;
     role: UserRole;
   }

   // Handle unused variables properly
   const [_ignored, setState] = useState(null);
   ```

4. **Import Ordering**

   - Built-in modules → External dependencies → Internal aliases
   - Aliased paths (`@/app`, `@/components`, etc.) grouped logically
   - Automatic alphabetical sorting within groups

5. **Unused Parameters**

   Prefix with `_` if not used.

   ```typescript
   // Recommended
   const handler = (_req: Request): void => {};
   ```

6. **Tailwind CSS Class Order**

   Use [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss).

   ```typescript
   // Recommended
   <div className='flex items-center justify-center p-4'>
   <h1 className='text-lg font-semibold text-gray-800'>Welcome</h1>
   </div>
   ```

7. **Comments**

   Add meaningful comments for complex logic or edge cases.

   ```ts
   // Filter users with verified emails only
   const verifiedUsers = users.filter((user) => user.emailVerified);
   ```

### Formatting (Prettier)

Our code formatting rules ensure consistent styling across the project:

```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": false,
  "jsxSingleQuote": false,
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "always",
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindAttributes": ["class", "className", "cn"],
  "tailwindFunctions": ["clsx", "cva"]
}
```

#### Formatting Commands:

```bash
# Check formatting
bun run lint:format

# Auto-format files
bun run format
```

## Contribution Workflow

1. Create a feature branch:

   ```bash
   bun run create-branch feat/your-feature-name
   ```

2. Implement your changes with atomic commits:

   ```bash
   git commit -m "feat: add user profile component"
   git commit -m "fix: resolve mobile layout issue"
   ```

3. Validate your changes:

   ```bash
   bun run lint  # Check for errors
   bun run lint:fix  # Auto-fix lint issues
   bun run format  # Apply formatting
   ```

4. Push changes and create a Pull Request:
   ```bash
   git push origin feat/your-feature-name
   ```

## Quality Assurance

### Code Review Requirements

- All new features must include TypeScript type definitions
- Component props must be properly destructured
- Complex logic requires JSDoc comments
- ESLint must report 0 errors (warnings are allowed)
- 100% Prettier formatting compliance

### Testing Guidelines

1. Create unit tests for new components
2. Add Storybook stories for UI components
3. Verify accessibility standards (a11y)
4. Update relevant documentation

## Development Practices

### Recommended Tooling

- VS Code with ESLint/Prettier extensions
- Bun workspace configuration
- TypeScript v5+
- Import Cost extension for bundle monitoring

### Branch Naming Convention

```
[type]/[short-description]
```

Types: `feat`, `fix`, `docs`, `chore`, `refactor`

### Commit Message Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org):

Format:

```
<type>(optional scope): <description>
```

**Types**:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Formatting only (no code change)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `test`: Adding or updating tests
- `chore`: Maintenance tasks (e.g., update deps)

**Examples**:

- `feat(auth): add login API`
- `fix(dashboard): fix user loading error`
- `docs: update README with setup steps`

### Pull Request Checklist

Before submitting a PR:

- [ ] Code compiles without errors.
- [ ] All tests pass.
- [ ] Linting & formatting complete.
- [ ] Meaningful commit messages.
- [ ] PR description includes what and why.
- [ ] No unnecessary files (e.g. `.env`, `node_modules`, etc).

## Support

For assistance with contribution setup or technical issues:

1. Check our GitHub Discussions
2. Open a Support ticket in Issues
3. Join our Discord development channel

Feel free to open an [Issue](https://github.com/Salman-Ahamed/Next.js-TypeScript-Starter-Template/issues) or reach out in our discussion board if you get stuck.

---

We appreciate your contributions! 🚀 Thanks again for contributing! 💙
