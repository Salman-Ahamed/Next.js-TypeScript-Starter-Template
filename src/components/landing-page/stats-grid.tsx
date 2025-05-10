import { CheckIcon, GlobeIcon, UserIcon, ZapIcon } from "@/components/icons";

export const StatsGrid = () => (
  <section className="relative z-10">
    <div className="container mx-auto px-8">
      <div className="grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-700/50 bg-gray-900/50 p-6 backdrop-blur-sm transition-colors duration-150 hover:bg-gray-950/50"
          >
            <div className="mb-4 text-indigo-400">{stat.icon}</div>
            <h3 className="mb-2 text-3xl font-bold">{stat.value}</h3>
            <p className="text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const stats = [
  { value: "100%", label: "Type Safety", icon: <CheckIcon /> },
  { value: "10x", label: "Faster Builds", icon: <ZapIcon /> },
  { value: "24/7", label: "Support", icon: <GlobeIcon /> },
  { value: "1k+", label: "Developers", icon: <UserIcon /> },
];
