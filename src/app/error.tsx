"use client";

import { FC, useEffect } from "react";

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
            <div className="mt-4 max-h-[30vh] overflow-y-auto rounded-lg border border-gray-800/30 bg-gray-900/50 p-3 text-left backdrop-blur-sm sm:mt-6 sm:p-4">
              <p className="text-sm font-medium text-gray-400">Error details:</p>
              <pre className="mt-2 text-sm text-gray-400">{error.message}</pre>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Error;
