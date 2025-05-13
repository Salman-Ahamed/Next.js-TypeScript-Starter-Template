"use client";
import { useEffect, useState } from "react";

const Loading = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-white transition-opacity duration-500">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-dashed border-blue-500"></div>
        <p className="text-lg font-semibold text-blue-600">Loding...</p>
      </div>
    </div>
  );
};
export default Loading;
