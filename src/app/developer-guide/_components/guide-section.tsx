import { FC, ReactNode } from "react";

interface GuideSectionProps {
  title: string;
  children: ReactNode;
}

export const GuideSection: FC<GuideSectionProps> = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
    <div className="space-y-6">{children}</div>
  </section>
);
