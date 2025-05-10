import React from "react";

interface GuideSectionProps {
  title: string;
  children: React.ReactNode;
}

export const GuideSection: React.FC<GuideSectionProps> = ({ title, children }) => {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
};
