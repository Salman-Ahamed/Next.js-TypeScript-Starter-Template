"use client";

import { useState } from "react";

export const CopyButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx next-ts-app my-awesome-app");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="relative h-full cursor-pointer bg-gray-700/50 px-3 py-2 text-sm font-medium text-indigo-400 transition-all hover:bg-gray-600/50 md:px-6 md:py-4"
      title={copied ? "Copied to clipboard!" : "Copy to clipboard"}
    >
      {copied ? "Copied!" : "Copy"}
      <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] opacity-0 transition-opacity duration-300 group-hover:translate-x-full group-hover:opacity-100" />
    </button>
  );
};
