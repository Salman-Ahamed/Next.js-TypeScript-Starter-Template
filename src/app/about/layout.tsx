import { TChildren } from "@/types";
import { FC } from "react";

const AboutLayout: FC<TChildren> = ({ children }) => {
  return <div className="bg-green-500 p-5">{children}</div>;
};

export default AboutLayout;
