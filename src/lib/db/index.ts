import { CheckIcon, CodeIcon, CPUIcon, LayerIcon, LockIcon, ZapIcon } from "@/icons";
import { IFooterLinks } from "@/types";

export const features = [
  {
    icon: CodeIcon,
    title: "Next.js 15 (App Router)",
    description:
      "Cutting-edge Next.js with App Router, Server Components, and optimized RSC patterns.",
  },
  {
    icon: ZapIcon,
    title: "Bun Runtime",
    description:
      "Lightning-fast JavaScript runtime with built-in TypeScript support and package management.",
  },
  {
    icon: LockIcon,
    title: "TypeScript First",
    description: "Strict TypeScript configuration with path aliases and type-checked CI pipeline.",
  },
  {
    icon: CPUIcon,
    title: "Performance Optimized",
    description: "Pre-configured for maximum performance with PPR, caching, and bundle analysis.",
  },
  {
    icon: LayerIcon,
    title: "Modular Architecture",
    description: "Clean, scalable structure with domain-driven design patterns.",
  },
  {
    icon: CheckIcon,
    title: "Production Ready",
    description: "All the tooling you need for CI/CD, monitoring, and error tracking.",
  },
];

export const terminalCommands = [
  { command: "npx next-ts-app my-awesome-app", description: "Scaffold new project" },
  { command: "bun install", description: "Install dependencies" },
  { command: "bun run dev", description: "Start dev server" },
  { command: "bun run build", description: "Production build" },
  { command: "bun run lint", description: "Run linter" },
];

export const teamMembers = [
  {
    name: "Salman Ahamed",
    img: "https://avatars.githubusercontent.com/u/96829173?v=4",
    role: "Author & Developer",
    bio: "5+ years of experience building scalable web applications",
    social: [
      { id: "1", name: "Github", link: "https://github.com/Salman-Ahamed" },
      { id: "2", name: "Linkedin", link: "https://www.linkedin.com/in/salman-ahamad-as/" },
      { id: "3", name: "Email", link: "mailto:shahriyar.hosen.dev@gmail.com" },
    ],
  },
  {
    name: "Eyachir Arafat",
    img: "https://avatars.githubusercontent.com/u/177961704?v=4",
    role: "Developer",
    bio: "Specializes in creating intuitive developer experiences",
    social: [
      { id: "1", name: "Github", link: "https://github.com/EyachirArafat" },
      { id: "2", name: "Linkedin", link: "https://linkedin.com/in/eyachirarafat" },
      { id: "3", name: "Email", link: "mailto:me.eyachirarafat@gmail.com" },
    ],
  },
  {
    name: "Sheikh Hasibul Alam",
    img: "https://avatars.githubusercontent.com/u/145800508?v=4",
    role: "Developer",
    bio: "Specializes in creating intuitive developer experiences",
    social: [
      { id: "1", name: "Github", link: "https://github.com/Hashibul-Alam" },
      { id: "2", name: "Linkedin", link: "https://www.linkedin.com/in/hasibul231/" },
      { id: "3", name: "Email", link: "mailto:sha31417@gmail.com" },
    ],
  },
  {
    name: "Md Amzad Hossain Omor",
    img: "https://avatars.githubusercontent.com/u/139708044?v=4",
    role: "Developer",
    bio: "Specializes in creating intuitive developer experiences",
    social: [
      { id: "1", name: "Github", link: "https://github.com/mdamzadhossainomor" },
      {
        id: "2",
        name: "Linkedin",
        link: "https://www.linkedin.com/in/md-amzad-hossain-omor",
      },
      { id: "3", name: "Email", link: "mailto:mdamzadhossainomor@gmail.com" },
    ],
  },
];

export const footerLinks: IFooterLinks = {
  quickLinks: [
    {
      id: 1,
      name: "NPM Package",
      path: "https://www.npmjs.com/package/next-ts-app",
    },
    {
      id: 2,
      name: "Template Repository",
      path: "https://github.com/Salman-Ahamed/Next.js-TypeScript-Starter-Template",
    },
    {
      id: 3,
      name: "Become a Contributor",
      path: "https://github.com/Salman-Ahamed/Next.js-TypeScript-Starter-Template/blob/main/CONTRIBUTING.md",
    },
  ],
  resources: [
    {
      id: 1,
      name: "Next.js Docs",
      path: "https://nextjs.org/docs",
    },
    {
      id: 2,
      name: "TypeScript Docs",
      path: "https://www.typescriptlang.org/docs",
    },
    {
      id: 3,
      name: "Tailwind CSS Docs",
      path: "https://tailwindcss.com/docs",
    },
    {
      id: 4,
      name: "Bun",
      path: "https://bun.sh/",
    },
  ],
  contact: [
    {
      id: 1,
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/salman-ahamad-as/",
    },
    {
      id: 2,
      name: "Portfolio",
      path: "https://eyachirarafat.vercel.app/",
    },
    {
      id: 3,
      name: "Email",
      path: "mailto:shahriyar.hosen.dev@gmail.com",
    },
  ],
  privacy: [
    {
      id: 1,
      name: "Privacy Policy",
      path: "/",
    },
    {
      id: 2,
      name: "Terms of Service",
      path: "/",
    },
    {
      id: 3,
      name: "MIT License",
      path: "https://github.com/Salman-Ahamed/Next.js-TypeScript-Starter-Template/blob/main/LICENSE",
    },
  ],
};
