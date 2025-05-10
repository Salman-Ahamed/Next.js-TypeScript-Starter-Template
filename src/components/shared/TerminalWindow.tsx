import React from "react";

interface Command {
  command: string;
  description?: string;
}

interface TerminalWindowProps {
  commands?: Command[];
  code?: string;
  title?: string;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({
  commands,
  code,
  title = "terminal",
}) => {
  const displayCommands = commands || (code ? [{ command: code }] : []);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900">
      <div className="flex items-center gap-2 border-b border-gray-700 bg-gray-800 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
        <div className="ml-2 text-sm text-gray-400">{title}</div>
      </div>
      <div className="p-6 font-mono">
        {displayCommands.map((cmd, i) => (
          <div key={i} className="mb-4 last:mb-0">
            {cmd.command.split("\n").map((line, lineIndex) => (
              <div key={lineIndex} className="flex items-start">
                {line.trim().startsWith("#") ? (
                  // Comment line
                  <span className="text-gray-500">{line}</span>
                ) : line.trim() === "" ? (
                  // Empty line
                  <br />
                ) : (
                  // Command line
                  <>
                    <span className="mr-2 text-green-400">$</span>
                    <span className="text-gray-300">{line}</span>
                  </>
                )}
              </div>
            ))}
            {cmd.description && (
              <div className="mt-1 ml-5 text-sm text-gray-500">{cmd.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
