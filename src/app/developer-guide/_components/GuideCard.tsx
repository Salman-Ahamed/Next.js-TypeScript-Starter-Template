import React from "react";

interface GuideCardProps {
  title?: string;
  children: React.ReactNode;
}

export const GuideCard: React.FC<GuideCardProps> = ({ title, children }) => {
  return (
    <div className="rounded-lg bg-gray-900/50 p-6 backdrop-blur-sm">
      {title && <h3 className="mb-3 text-xl font-medium">{title}</h3>}
      {children}
    </div>
  );
};
