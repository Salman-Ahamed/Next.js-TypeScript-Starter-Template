import { features } from "@/lib";

import { GlowCard } from "./glow-card";

export const FeatureGrid = () => {
  return (
    <section className="border-y-2 border-gray-700 bg-gray-950 pt-24 pb-[110px]">
      <div className="container mx-auto pl-4">
        <div className="mx-auto mb-[66px] max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Everything You Need</h2>
          <p className="text-gray-400">
            Carefully curated tools and configurations for building production-grade applications
          </p>
        </div>

        <div
          className="my-2 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))" }}
        >
          {features.map((feature, index) => (
            <GlowCard key={index}>
              <div className="h-full px-6 pt-6 pr-5 pb-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800 text-indigo-400">
                  {<feature.icon />}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};
