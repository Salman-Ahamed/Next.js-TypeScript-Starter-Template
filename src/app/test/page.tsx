import { FC } from "react";

import { Demo } from "@/components";

import { IconSvgProps } from "@/types/common";

export const Home: FC = () => {
  const _name = "ab";
  return (
    <div>
      <h1>Home</h1>
      <Demo />
    </div>
  );
};

const OldFunction: FC<IconSvgProps> = () => {
  console.log("Normal function");
  return <div>Home</div>;
};

const Div = () => {
  return <div>Home</div>;
};
