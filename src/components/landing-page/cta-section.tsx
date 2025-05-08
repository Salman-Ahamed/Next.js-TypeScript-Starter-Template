import Link from "next/link";

import { RocketIcon } from "@/icons";

export const CTASection = () => {
  return (
    <section className="relative overflow-hidden border-t border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-950/80 py-32">
      <div className="relative z-10 container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold">Ready to Build the Future?</h2>
          <p className="mb-10 text-xl text-gray-400">
            Start your project with enterprise-grade tooling and architecture.
          </p>
          <Link
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
};
