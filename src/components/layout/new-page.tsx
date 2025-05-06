import { FC } from "react";

type Props = { title: string };
export const NewPage: FC<Props> = ({ title }) => (
  <div className="w-full h-full bg-slate-300 min-h-screen flex justify-center items-center">
    <h1 className="text-5xl font-bold text-green-500">{title}</h1>
  </div>
);
