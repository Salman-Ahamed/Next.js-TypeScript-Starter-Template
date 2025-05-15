"use client";

import { FC, useEffect } from "react";

import { ArrowIcon, CautionIcon } from "@/components/icons";
import { Button } from "@/components/ui";

type ErrorProps = { error: Error; reset: () => void };
const Error: FC<ErrorProps> = ({ error, reset }) => {
  // Log the error to an error reporting service
  useEffect(() => console.error("Application error:", error), [error]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-gray-950 text-gray-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <div className="animate-gradient-x h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      <main className="relative z-10 flex h-[calc(100vh-4px)] w-full items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-6">
          <h1 className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Oops! Something went wrong
          </h1>

          <p className="max-w-md text-base text-gray-400 sm:text-lg">
            We apologize for the inconvenience. Please try again or contact our support team if the
            problem persists.
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:mt-4 sm:flex-row sm:gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => reset()}
              className="min-w-[160px] bg-indigo-600 hover:bg-indigo-700 sm:min-w-[200px]"
            >
              Try again
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = "/")}
              className="min-w-[160px] border-gray-700/50 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 sm:min-w-[200px]"
            >
              Go to homepage
            </Button>
          </div>
          {process.env.NODE_ENV === "development" && (
            <div className="scrollbar-custom mt-4 max-h-[40vh] w-full overflow-auto rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 text-left shadow-lg shadow-amber-500/5 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <CautionIcon className="h-5 w-5 flex-shrink-0 text-amber-400" />
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-amber-300">Development Warning</h4>
                  <div className="mt-2 space-y-3">
                    <pre className="mb-3 w-full overflow-x-auto rounded bg-amber-900/10 px-3 py-2 font-mono text-sm text-amber-200">
                      {error.message}
                    </pre>
                    {error.stack && (
                      <details className="group">
                        <summary className="flex cursor-pointer items-center text-xs text-amber-400 hover:text-amber-300">
                          <span>Stack trace</span>

                          <ArrowIcon className="ml-1 h-3 w-3 transition-transform group-open:rotate-180" />
                        </summary>
                        <pre className="mt-1 overflow-x-auto rounded bg-amber-900/20 px-3 py-2 font-mono text-xs text-amber-300/80">
                          {error.stack}
                        </pre>
                      </details>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Error;
