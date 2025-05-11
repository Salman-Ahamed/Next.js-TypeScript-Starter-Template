"use client";

import Head from "next/head";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Errorboundary = ({ error, reset }: ErrorPageProps) => {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Head>
        <title>Error - Something Went Wrong</title>
        <meta name="description" content="An error occurred" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 px-4">
        <div className="mx-auto flex h-screen max-w-2xl flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Oops! Something went wrong.
          </h1>

          <div className="mb-8 rounded-lg bg-gray-800/50 p-4 text-left">
            <p className="mb-2 text-sm font-medium text-gray-400">Error details:</p>
            <code className="text-sm text-red-400">
              {error.message || "Unknown error occurred"}
            </code>
          </div>

          <p className="mb-8 text-lg text-gray-300">
            We encountered a problem while loading this page.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => reset()}
              className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-all hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-950 focus:outline-none"
              aria-label="Try again"
            >
              Try Again
            </button>

            <button
              onClick={() => router.push("/")}
              className="rounded-lg border border-gray-700 bg-gray-800 px-6 py-3 font-medium text-white transition-all hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-950 focus:outline-none"
              aria-label="Go to homepage"
            >
              Go Home
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Errorboundary;
