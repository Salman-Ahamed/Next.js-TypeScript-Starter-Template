"use client";

import { FC, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface LoadingProps {
  className?: string;
  message?: string;
  duration?: number;
}

const Loading: FC<LoadingProps> = (props) => {
  const [show, setShow] = useState(true);
  const { className, message, duration } = props;

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!show) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-gray-950/90 backdrop-blur-md transition-all duration-500",
        className
      )}
      role="status"
      aria-label="Loading"
    >
      {/* Animated Grid Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-50" />
      </div>

      {/* Gradient Line */}
      <div className="absolute top-0 right-0 left-0 h-1">
        <div className="animate-gradient-x h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-sm" />
      </div>

      {/* Loading Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Animated Logo/Spinner */}
        <div className="relative h-24 w-24">
          {/* Outer Ring */}
          <div className="absolute inset-0 animate-[spin_3s_linear_infinite] rounded-full border-4 border-dashed border-indigo-500/30" />
          <div className="absolute inset-0 animate-[spin_3s_linear_infinite_reverse] rounded-full border-4 border-dashed border-purple-500/30" />

          {/* Middle Ring */}
          <div className="absolute inset-2 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dashed border-indigo-500/50" />
          <div className="absolute inset-2 animate-[spin_2s_linear_infinite_reverse] rounded-full border-4 border-dashed border-purple-500/50" />

          {/* Inner Ring */}
          <div className="absolute inset-4 animate-[spin_1s_linear_infinite] rounded-full border-4 border-dashed border-pink-500/70" />

          {/* Center Dot */}
          <div className="absolute inset-[42%] animate-pulse rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="mb-3 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-2xl font-bold text-transparent">
            {message || "Loading, please wait..."}
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              <span className="h-2 w-2 animate-[bounce_1s_infinite] rounded-full bg-indigo-400" />
              <span className="h-2 w-2 animate-[bounce_1s_infinite_0.2s] rounded-full bg-purple-400" />
              <span className="h-2 w-2 animate-[bounce_1s_infinite_0.4s] rounded-full bg-pink-400" />
            </div>
            <span className="text-sm font-medium text-gray-400">Preparing your experience</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1 w-48 overflow-hidden rounded-full bg-gray-800/50">
          <div className="h-full w-full animate-[progress_2s_ease-in-out_infinite] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
