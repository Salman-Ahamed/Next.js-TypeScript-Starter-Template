"use client";
import Link from "next/link";

import { useEffect, useState } from "react";

import { GitHubIcon, TerminalIcon } from "@/icons";

export const HeroSection = () => {
  const [version, setVersion] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("https://registry.npmjs.org/next-ts-app/latest")
      .then((res) => res.json())
      .then((data) => setVersion(data.version));
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx next-ts-app my-awesome-app");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative z-10 pt-36 pb-[93.4px]">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          {version && (
            <span className="mb-6 inline-block rounded-full border border-gray-700/50 bg-gray-800/50 px-4 py-2 text-sm font-medium text-indigo-400 backdrop-blur-sm">
              VERSION {version} RELEASED
            </span>
          )}
          <h1 className="mb-6 bg-[linear-gradient(to_right,theme(colors.gray.100),theme(colors.gray.300))] bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            The Ultimate <span className="text-indigo-400">Next.js</span> Template
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-400">
            Everything you need to build modern, performant web applications with TypeScript and
            Bun.
          </p>

          <div className="mb-10 flex items-center justify-center">
            <div className="group relative flex items-center overflow-hidden rounded-lg border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm">
              <code className="px-6 py-3.5 font-mono text-gray-100">
                npx next-ts-app my-awesome-app
              </code>
              <button
                onClick={handleCopy}
                className="h-full cursor-pointer bg-gray-700/50 px-4 py-4 text-sm font-medium text-indigo-400 transition-all hover:bg-gray-600/50"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://www.npmjs.com/package/next-ts-app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-indigo-600 px-6 py-3.5 font-medium transition-all hover:bg-indigo-700"
            >
              <TerminalIcon className="group-hover:animate-pulse" />
              Get Started
            </Link>
            <Link
              href="https://github.com/Salman-Ahamed/Next.js-TypeScript-Starter-Template"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-gray-700/50 bg-gray-800/50 px-6 py-3.5 font-medium backdrop-blur-sm transition-all hover:bg-gray-700/50"
            >
              <GitHubIcon />
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
