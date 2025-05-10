import React from "react";

interface GuideListProps {
  items: string[];
}

export const GuideList: React.FC<GuideListProps> = ({ items }) => {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
