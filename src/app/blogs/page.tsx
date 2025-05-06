"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Blogs = () => {
  const { push } = useRouter();

  return (
    <main className="px-5">
      <h1 className="py-10 text-5xl font-black text-green-500 text-center">
        Blogs Page
      </h1>

      <div className="flex justify-between items-center gap-2.5">
        <div className="grid grid-cols-7 place-items-center gap-2.5">
          {Array.from(Array(100).keys()).map((el) => (
            <button
              onClick={() => push(`/blogs/${el + 1}`)}
              className="px-3.5 py-2 rounded-md border border-green-500/80 text-green-500 cursor-pointer"
              key={el}
            >
              Blog&nbsp;{el + 1}
            </button>
          ))}
        </div>
        <div className="bg-cyan-500 w-2.5 min-h-screen h-full rounded-md" />

        {/* Navigation with Link Tag */}
        <div className="grid grid-cols-7 place-items-center gap-2.5">
          {Array.from(Array(100).keys()).map((el) => (
            <Link
              href={`/blogs/${el + 1}`}
              className="px-3.5 py-2 rounded-md border border-green-500/80 text-green-500"
              key={el}
            >
              Blog&nbsp;{el + 1}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blogs;
