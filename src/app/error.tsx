"use client";

import Head from "next/head";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>Error - Something Went Wrong</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900/50 to-gray-950/80 px-4">
        <h1 className="mb-4 text-4xl font-extrabold text-white">Oops! Something went wrong.</h1>
        <p className="mb-6 text-base text-white">
          We encountered a problem while loading this page. Try again or return to the homepage.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location.reload();
              }
            }}
            className="rounded-lg bg-indigo-600 px-6 py-3.5 font-medium transition-all hover:bg-indigo-700"
          >
            Reload Page
          </button>

          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location.href = "/";
              }
            }}
            className="rounded-lg border border-gray-700/50 bg-gray-800/50 px-6 py-3.5 font-medium backdrop-blur-sm transition-all hover:bg-gray-700/50"
          >
            Go Home
          </button>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
