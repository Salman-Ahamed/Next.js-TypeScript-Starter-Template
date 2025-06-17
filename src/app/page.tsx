import Image from "next/image";

import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-lg">Welcome to my website.</p>
      <p className="text-lg">This is a simple example of using Tailwind CSS with React.</p>
      <Image
        src="/images/hero.jpg"
        alt="Hero Image"
        width={500}
        height={300}
        className="rounded-lg shadow-lg"
        priority
      />
    </div>
  );
};

export default HomePage;
