# How to Contribute 🤝

Welcome to the Next.js TypeScript Starter Template! We’re happy you want to help. Follow these steps to contribute easily.

## Set Up Your Environment

### What You Need

- Node.js (version 18 or higher)
- Bun (version 1.0 or higher)
- Git

### Steps to Set Up

1. Clone the project:

   ```bash
   git clone https://github.com/Salman-Ahamed/Next.js-TypeScript-Starter-Template.git
   cd Next.js-TypeScript-Starter-Template
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Start the development server:

   ```bash
   bun run dev
   ```

## Code Quality Rules

### Git Checks (Husky)

We use Husky to check code before you commit:

- It runs automatically before commits.
- It checks for code mistakes and formatting.
- It stops commits if there are errors (warnings are okay).

### Code Checks (ESLint)

We use ESLint to keep code consistent. Here’s what it does:

- Follows Next.js and TypeScript best practices.
- Organizes imports in a specific order.
- Ensures React components are written properly.
- No `console.log` (use `console.warn` or `console.error` instead).

#### Examples of Good Code

1. **Components**:

   ```typescript
   // Recommended
   interface UserProfileProps {
     name: string;
     age: number;
   }

   const UserProfile: React.FC<UserProfileProps> = ({ name, age }) => (
     <div>{name} ({age})</div>
   );

   // Avoid
   function UserProfile(props) {
     return <div>{props.name}</div>;
   }
   ```

2. **Functions**:

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

3. **TypeScript**:

   ```typescript
   // Recommended
   type UserRole = "admin" | "user";
   interface User {
     id: string;
     role: UserRole;
   }

   // Handle unused variables
   const [_ignored, setState] = useState(null);
   ```

4. **Comments**:

   ```typescript
   // Explain tricky code
   const verifiedUsers = users.filter((user) => user.emailVerified); // Keep only users with verified emails
   ```

### Code Formatting (Prettier)

Prettier keeps your code neat:

- It formats code automatically.
- It organizes Tailwind CSS classes.
- Commands to use:

  ```bash
  # Check formatting
  bun run format:check

  # Fix formatting
  bun run format
  ```

## How to Make Changes

1. Create a new branch:

   ```bash
   git checkout -b feat/your-feature-name
   ```

2. Make your changes and commit them:

   ```bash
   git commit -m "feat: add user profile component"
   git commit -m "fix: fix mobile layout issue"
   ```

3. Check your code:

   ```bash
   bun run lint      # Find errors
   bun run lint:fix  # Fix errors
   bun run format    # Format code
   ```

4. Push your changes and create a Pull Request (PR):

   ```bash
   git push origin feat/your-feature-name
   ```

   Go to GitHub and create a PR from your branch.

## Before You Submit

### Code Review Checklist

- Use TypeScript for all new code.
- Break down (destructure) component props.
- Add comments for tricky code.
- ESLint should show 0 errors (warnings are okay).
- Code must be formatted with Prettier.

### Testing Checklist

- Test new components.
- Add Storybook stories for UI components (if applicable).
- Check accessibility (a11y).
- Update the `README.md` if needed.

## Good Practices

### Tools We Recommend

- Use VS Code with ESLint and Prettier extensions.
- Use TypeScript (version 5 or higher).
- Use the Import Cost extension to check bundle size.

### Branch Names

Use this format: `[type]/[short-description]`

- Types: `feat` (new feature), `fix` (bug fix), `docs` (docs update), `chore` (small tasks), `refactor` (code cleanup).
- Examples: `feat/add-login`, `fix/bug-mobile-view`.

### Commit Messages

Follow this format: `<type>: <description>`

- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
- Examples:
  - `feat: add login page`
  - `fix: fix button alignment`
  - `docs: update setup guide`

### Pull Request Tips

Before submitting your PR:

- [ ] Code runs without errors.
- [ ] All tests pass.
- [ ] Code is linted and formatted.
- [ ] Commits have clear messages.
- [ ] PR description explains what you did and why.
- [ ] No extra files (like `.env` or `node_modules`).

## Need Help?

If you get stuck:

1. Check GitHub Discussions.
2. Open an Issue on GitHub.
3. Join our Discord community (if available).

Feel free to open an [Issue](https://github.com/Salman-Ahamed/Next.js-TypeScript-Starter-Template/issues) if you need help.

---

Thanks for contributing! 🚀 We appreciate your help! 💙
