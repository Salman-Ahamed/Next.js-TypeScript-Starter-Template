import {
  CheckIcon,
  CodeIcon,
  CPUIcon,
  GlobeIcon,
  LayerIcon,
  LinkedInIcon,
  LockIcon,
  MailIcon,
  ZapIcon,
} from "@/components/icons";

import { FooterLinks } from "@/types/data";

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
  { command: "bun run clear-cache", description: "Clear cache and reset dev environment" },
];

export const author = {
  name: "Salman Ahamed",
  img: "https://avatars.githubusercontent.com/u/96829173?v=4",
  role: "Full-Stack Developer",
  bio: "Full-Stack Developer with 3+ years of experience in building modern web apps using Next.js, TypeScript, and Node.js. Passionate about clean code, performance, and developer experience.",
  social: [
    { id: "1", name: "GitHub", link: "https://github.com/Salman-Ahamed" },
    { id: "2", name: "LinkedIn", link: "https://www.linkedin.com/in/salman-ahamad-as/" },
    { id: "3", name: "Email", link: "mailto:shahriyar.hosen.dev@gmail.com" },
  ],
};

export const teamMembers = [
  {
    name: "Eyachir Arafat",
    img: "https://avatars.githubusercontent.com/u/177961704?v=4",
    role: "Front-End Developer",
    bio: "Crafting beautiful web experiences with React and Next.js. Dedicated to building intuitive interfaces that users love.",
    social: [
      { id: "1", name: "GitHub", link: "https://github.com/EyachirArafat" },
      { id: "2", name: "LinkedIn", link: "https://linkedin.com/in/eyachirarafat" },
      { id: "3", name: "Email", link: "mailto:me.eyachirarafat@gmail.com" },
    ],
  },
  {
    name: "Sheikh Hasibul Alam",
    img: "https://avatars.githubusercontent.com/u/145800508?v=4",
    role: "Front-End Developer",
    bio: "Building modern web applications with React and Next.js. Focused on performance, accessibility, and clean code.",
    social: [
      { id: "1", name: "GitHub", link: "https://github.com/Hashibul-Alam" },
      { id: "2", name: "LinkedIn", link: "https://www.linkedin.com/in/hasibul231/" },
      { id: "3", name: "Email", link: "mailto:sha31417@gmail.com" },
    ],
  },
  {
    name: "Md Amzad Hossain Omor",
    img: "https://avatars.githubusercontent.com/u/139708044?v=4",
    role: "Front-End Developer",
    bio: "Creating responsive web applications with React and Tailwind CSS. Passionate about modern UI/UX design.",
    social: [
      { id: "1", name: "GitHub", link: "https://github.com/mdamzadhossainomor" },
      { id: "2", name: "LinkedIn", link: "https://www.linkedin.com/in/md-amzad-hossain-omor" },
      { id: "3", name: "Email", link: "mailto:mdamzadhossainomor@gmail.com" },
    ],
  },
];

export const footerLinks: FooterLinks = {
  quickLinks: [
    { id: 1, name: "NPM Package", path: "https://www.npmjs.com/package/next-ts-app" },
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
    { id: 1, name: "Next.js Docs", path: "https://nextjs.org/docs" },
    { id: 2, name: "TypeScript Docs", path: "https://www.typescriptlang.org/docs" },
    { id: 3, name: "Tailwind CSS Docs", path: "https://tailwindcss.com/docs" },
    { id: 4, name: "Bun Docs", path: "https://bun.sh/" },
  ],
  contact: [
    {
      id: 1,
      name: "LinkedIn",
      Icon: LinkedInIcon,
      path: "https://www.linkedin.com/in/salman-ahamad-as/",
    },
    { id: 2, name: "Portfolio", Icon: GlobeIcon, path: "https://eyachirarafat.vercel.app/" },
    { id: 3, name: "Email", Icon: MailIcon, path: "mailto:shahriyar.hosen.dev@gmail.com" },
  ],
  privacy: [
    {
      id: 1,
      name: "For more information",
      path: "https://www.npmjs.com/package/next-ts-app?activeTab=readme",
    },
    {
      id: 2,
      name: "MIT License",
      path: "https://github.com/Salman-Ahamed/Next.js-TypeScript-Starter-Template/blob/main/LICENSE",
    },
  ],
};
