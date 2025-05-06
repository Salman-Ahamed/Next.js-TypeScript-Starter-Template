import { FC, ReactNode } from "react";

type Props = { children: ReactNode };
export const Tittle: FC<Props> = ({ children }) => (
  <h1 className="text-5xl font-bold text-green-500">{children}</h1>
);
