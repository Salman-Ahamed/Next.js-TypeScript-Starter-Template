import Link from "next/link";

import { BookIcon, GitHubIcon, TerminalIcon } from "@/components/icons";

import { CopyButton } from "./copy-button";

const getLatestVersion = async () => {
  const res = await fetch("https://registry.npmjs.org/next-ts-app/latest", {
    next: { revalidate: 3600 }, // Revalidate every hour
  });
  const data = await res.json();
  return data.version;
};

export const HeroSection = async () => {
  const version = await getLatestVersion();

  return (
    <section className="relative z-10 container mx-auto max-w-3xl space-y-5 px-6 pt-16 text-center md:pt-36">
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400"></span>
          <span className="text-sm font-medium text-indigo-400 transition-all duration-500 ease-in-out">
            Latest Version{" "}
            <span className="inline-block animate-[fadeIn_0.5s_ease-out]">
              {version || "1.0.0"}
            </span>
          </span>
        </div>
        <span className="hidden text-sm text-gray-500 sm:inline">•</span>
        <span className="hidden text-sm text-gray-400 sm:inline">Production Ready</span>
      </div>
      <h1 className="bg-[linear-gradient(to_right,theme(colors.gray.100),theme(colors.gray.300))] bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
        The Ultimate{" "}
        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Next.js
        </span>{" "}
        Template
      </h1>
      <p className="mx-auto max-w-2xl text-xl text-gray-400">
        Everything you need to build modern, performant web applications with TypeScript and Bun.
      </p>

      <div className="flex flex-col items-center justify-center gap-5 pt-5">
        <div className="group relative flex w-fit items-center justify-center overflow-hidden rounded-lg border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:bg-gray-800/80">
          <code className="px-3 py-2 font-mono text-xs text-gray-100 md:px-6 md:py-3.5 md:text-base">
            npx next-ts-app my-awesome-app
          </code>
          <CopyButton />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://www.npmjs.com/package/next-ts-app"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-indigo-600 px-6 py-3.5 font-medium transition-all hover:bg-indigo-700"
          >
            <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] opacity-0 transition-opacity duration-300 group-hover:translate-x-full group-hover:opacity-100" />
            <TerminalIcon className="group-hover:animate-pulse" />
            Get Started
          </Link>
          <Link
            href="/developer-guide"
            className="group relative flex items-center gap-2 overflow-hidden rounded-lg border border-gray-700/50 bg-gray-800/50 px-6 py-3.5 font-medium backdrop-blur-sm transition-all hover:bg-gray-700/50"
          >
            <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] opacity-0 transition-opacity duration-300 group-hover:translate-x-full group-hover:opacity-100" />
            <BookIcon className="group-hover:animate-pulse" />
            Developer Guide
          </Link>
          <Link
            href="https://github.com/Salman-Ahamed/Next.js-TypeScript-Starter-Template"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 overflow-hidden rounded-lg border border-gray-700/50 bg-gray-800/50 px-6 py-3.5 font-medium backdrop-blur-sm transition-all hover:bg-gray-700/50"
          >
            <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] opacity-0 transition-opacity duration-300 group-hover:translate-x-full group-hover:opacity-100" />
            <GitHubIcon className="group-hover:animate-pulse" />
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};
