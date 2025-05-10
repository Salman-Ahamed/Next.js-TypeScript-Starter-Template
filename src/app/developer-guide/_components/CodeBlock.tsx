import React from "react";

import { TerminalWindow } from "@/components/shared";

interface CodeBlockProps {
  code: string;
  title?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, title }) => {
  return <TerminalWindow code={code} title={title} />;
};
