import { TerminalWindow } from "@/components/shared";

import { terminalCommands } from "@/lib/db";

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
