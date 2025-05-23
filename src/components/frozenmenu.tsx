"use client";
import Image from "next/image";

import { motion } from "framer-motion";

const categories = [
  "Frozen Hilsa Fish",
  "Frozen Shrimp",
  "Frozen Pomfret ",
  "Deep-freezed for freshness",
  "Cleaned and gutted",
  "Ready to cook or fry",
  "Individually Packed or in bulk",
  "Frozen Small Shrimp (Deveined)",
  "Frozen Crabs (Cleaned)",
  " Cut Pieces",
  "Whole Fish",
];

const products = [
  {
    name: "Frozen Shrimp",
    price: "$115.00",
    rating: 5,
    image: "/shrimp.jpg",
  },
  {
    name: "Frozen Crabs",
    price: "$5.49",
    rating: 5,
    image: "/crabs.jpg",
  },
  {
    name: "Whole Fish",
    price: "$5.00",
    originalPrice: "$8.00",
    rating: 5,
    image: "/mix.jpg",
  },
];

const FrozenMenu = () => {
  return (
    <main className="flex max-h-[520px] gap-3 overflow-hidden rounded-md bg-[#f5faf5] px-4 py-3 shadow">
      {/* Sidebar */}
      <div className="w-full max-w-[230px] rounded-md bg-[#f7faf7] p-3 shadow-sm">
        <h2 className="mb-3 border-b pb-2 text-sm font-semibold">All categories</h2>
        <ul className="max-h-[440px] space-y-1 overflow-y-auto pr-1 text-xs text-gray-700">
          {categories.map((cat, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.02, x: 5 }}
              className="cursor-pointer transition hover:text-green-600"
            >
              {cat}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Trending Products */}
      <div className="max-h-[500px] flex-1 space-y-3 overflow-y-auto rounded-md bg-[#f7faf7] p-3 shadow-sm">
        <h2 className="mb-3 border-b pb-2 text-sm font-semibold">Trending products</h2>
        {products.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 rounded-md bg-white p-2 shadow"
          >
            <Image
              src={item.image}
              width={300}
              height={300}
              alt={item.name}
              className="h-12 w-12 object-contain"
            />
            <div>
              <h4 className="text-xs font-semibold">{item.name}</h4>
              <div className="mb-0.5 text-xs text-yellow-500">★★★★★</div>
              <div className="text-xs text-gray-600">
                {item.originalPrice && (
                  <span className="mr-1 text-red-500 line-through">{item.originalPrice}</span>
                )}
                <span className="text-green-600">{item.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hero Image */}
      <div className="relative max-h-[520px] flex-[2] overflow-hidden rounded-md shadow-md">
        <Image
          src="/frozen.jpg"
          alt="hero"
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
        <motion.button
          whileHover={{ scale: 1.2 }}
          className="absolute top-16 left-16 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow"
        >
          +
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          className="absolute bottom-20 left-16 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow"
        >
          +
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          className="absolute top-20 right-20 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow"
        >
          +
        </motion.button>
      </div>
    </main>
  );
};
export default FrozenMenu;
