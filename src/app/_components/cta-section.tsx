"use client";

import Link from "next/link";

import { RocketIcon } from "@/components/icons";

export const CTASection = () => (
  <section className="relative overflow-hidden border-t border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-950/80 py-32">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
    <div className="relative z-10 container mx-auto px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-6 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-4xl font-bold text-transparent">
          Ready to Build the Future?
        </h2>
        <p className="mb-10 text-xl text-gray-400">
          Start your project with enterprise-grade tooling and architecture.
        </p>
        <Link
          target="_blank"
          href="https://www.npmjs.com/package/next-ts-app"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-indigo-600 px-8 py-4 font-medium transition-all hover:bg-indigo-700"
        >
          <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] opacity-0 transition-opacity duration-300 group-hover:translate-x-full group-hover:opacity-100" />
          <RocketIcon className="group-hover:animate-bounce" />
          Get Started Now
        </Link>
      </div>
    </div>
  </section>
);
