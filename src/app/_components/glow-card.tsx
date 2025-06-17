import { FC } from "react";

export const GlowCard: FC<IClassNameWithChildren> = ({ children, className }) => (
  <div
    className={`relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 transition-transform duration-300 hover:-translate-y-1 ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
    {children}
  </div>
);
