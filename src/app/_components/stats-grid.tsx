"use client";
import { useEffect, useState } from "react";

import { CheckIcon, UserIcon, ZapIcon } from "@/components/icons";

export const StatsGrid = () => {
  const [counters, setCounters] = useState({
    typeSafety: 0,
    fasterBuilds: 0,
    developers: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        typeSafety: Math.min(prev.typeSafety + 1, 100),
        fasterBuilds: Math.min(prev.fasterBuilds + 1, 10),
        developers: Math.min(prev.developers + 10, 1000),
      }));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 container mx-auto grid max-w-7xl grid-cols-1 place-items-center gap-6 px-8 py-20 md:grid-cols-3">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="group relative w-full max-w-sm transform overflow-hidden rounded-xl border border-gray-700/50 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-gray-950/50"
        >
          <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] opacity-0 transition-opacity duration-300 group-hover:translate-x-full group-hover:opacity-100" />
          <div className="relative">
            <div className="mb-4 text-indigo-400">{stat.icon}</div>
            <h3 className="mb-2 text-3xl font-bold text-gray-100">
              {stat.value === "100%" && `${counters.typeSafety}%`}
              {stat.value === "10x" && `${counters.fasterBuilds}x`}
              {stat.value === "1k+" && `${counters.developers}+`}
            </h3>
            <p className="text-gray-400">{stat.label}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

const stats = [
  { value: "100%", label: "Type Safety", icon: <CheckIcon /> },
  { value: "10x", label: "Faster Builds", icon: <ZapIcon /> },
  { value: "1k+", label: "Developers", icon: <UserIcon /> },
];
