import { features } from "@/lib/db";

import { GlowCard } from "./glow-card";

export const FeatureGrid = () => (
  <section className="border-y-2 border-gray-700 bg-gray-950 pt-24 pb-[110px]">
    <div className="container mx-auto px-6">
      <div className="mx-auto mb-[66px] max-w-2xl text-center">
        <h2 className="mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-3xl font-bold text-transparent">
          Everything You Need
        </h2>
        <p className="text-lg text-gray-400">
          Carefully curated tools and configurations for building production-grade applications
        </p>
      </div>

      <div className="my-2 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <GlowCard
            key={index}
            className="group transform transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-full px-6 pt-6 pr-5 pb-7">
              <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800 text-indigo-400 transition-all duration-300 group-hover:bg-gray-700">
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 blur-md transition-all duration-500 group-hover:opacity-50 group-hover:blur-sm" />
                <feature.icon className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
              </div>

              <h3 className="mb-2 text-xl font-semibold text-gray-100">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  </section>
);
