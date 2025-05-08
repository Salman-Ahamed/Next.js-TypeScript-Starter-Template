import { terminalCommands } from "@/lib";

type TProps = {
  commands: { command: string; description: string }[];
};
export const TerminalWindow = ({ commands }: TProps) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900">
      <div className="flex items-center gap-2 border-b border-gray-700 bg-gray-800 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
        <div className="ml-2 text-sm text-gray-400">terminal</div>
      </div>
      <div className="p-6 font-mono">
        {commands.map((cmd, i) => (
          <div key={i} className="mb-4 last:mb-0">
            <div className="flex items-start">
              <span className="mr-2 text-green-400">$</span>
              <span className="text-gray-300">{cmd.command}</span>
            </div>
            <div className="mt-1 ml-5 text-sm text-gray-500">{cmd.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TerminalSection = () => {
  return (
    <section className="relative z-10 py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Get Started in Seconds</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Everything you need to start building production-ready applications
            </p>
          </div>
          <TerminalWindow commands={terminalCommands} />
        </div>
      </div>
    </section>
  );
};
