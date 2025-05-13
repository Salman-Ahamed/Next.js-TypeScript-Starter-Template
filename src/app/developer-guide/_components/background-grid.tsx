import { FC } from "react";

export const BackgroundGrid: FC = () => (
  <div className="pointer-events-none fixed inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
  </div>
);
