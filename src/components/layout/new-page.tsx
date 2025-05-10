import { FC } from "react";

import { cn } from "@/lib/utils";

interface NewPageProps extends IClassName {
  /** The title to be displayed on the page */
  title: string;
  /** Optional subtitle for additional context */
  subtitle?: string;
}

/**
 * NewPage component - A professional page layout component
 * @param {NewPageProps} props - Component props
 * @returns {JSX.Element} Rendered component
 */
export const NewPage: FC<NewPageProps> = ({ title, subtitle, className = "" }) => (
  <div
    className={cn(
      "flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 p-8",
      className
    )}
  >
    <div className="w-full max-w-4xl space-y-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-slate-800 md:text-5xl">{title}</h1>
      {subtitle && <p className="text-xl text-slate-600">{subtitle}</p>}
    </div>
  </div>
);
