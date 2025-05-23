"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Mushrooms",
    price: 115,
    oldPrice: null,
    discount: null,
    stock: 104,
    sold: 50,
    img: "/mushroom.png",
  },
  {
    id: 2,
    name: "Raw Natural",
    price: 5.49,
    oldPrice: null,
    discount: null,
    stock: 14,
    sold: 50,
    img: "/spinach.png",
  },
  {
    id: 3,
    name: "Organic Carrot",
    price: 5.0,
    oldPrice: 8.0,
    discount: "38%",
    stock: 20,
    sold: 30,
    img: "/cauliflower.png",
  },
  {
    id: 4,
    name: "Essentials Box",
    price: 1.49,
    oldPrice: 2.99,
    discount: "50%",
    stock: 1,
    sold: 33,
    img: "/cabbage.png",
  },
  {
    id: 5,
    name: "Cheese Potatoes",
    price: 1.59,
    oldPrice: 3.99,
    discount: "60%",
    stock: 4,
    sold: 30,
    img: "/cucumber.png",
  },
];

const DealComponent = () => {
  return (
    <section className="bg-green-50 px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row">
        {/* Left Side Banner */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex w-full flex-col justify-between rounded-lg bg-black bg-[url('/deal-bg.jpg')] bg-cover bg-center p-6 text-white md:w-[30%]"
        >
          <h3 className="text-sm font-semibold uppercase">Hot This Month</h3>
          <h2 className="mt-2 text-2xl font-bold">
            Save an extra <br />
            <span className="text-yellow-400">$15 per order</span>
          </h2>
          <div className="mt-4 grid grid-cols-4 rounded-lg bg-white p-2 text-center text-black">
            <div>
              <p className="text-lg font-bold">30</p>
              <p className="text-xs">Days</p>
            </div>
            <div>
              <p className="text-lg font-bold">23</p>
              <p className="text-xs">Hours</p>
            </div>
            <div>
              <p className="text-lg font-bold">58</p>
              <p className="text-xs">Min</p>
            </div>
            <div>
              <p className="text-lg font-bold">42</p>
              <p className="text-xs">Sec</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side Products */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[70%]"
        >
          <h2 className="mb-4 text-xl font-bold">Deal Of The Month</h2>
          <div className="flex gap-4 overflow-x-auto">
            {products.map((item) => (
              <div
                key={item.id}
                className="min-w-[150px] rounded-lg bg-white p-4 text-center shadow"
              >
                {item.discount && (
                  <span className="absolute mt-[-10px] ml-[-10px] rounded-full bg-red-500 px-2 py-1 text-xs text-white">{`- ${item.discount}`}</span>
                )}
                <Image
                  src={item.img}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <p className="mt-2 text-sm">{item.name}</p>
                <p className="mt-1 font-bold text-yellow-500">
                  ${item.price.toFixed(2)}{" "}
                  {item.oldPrice && (
                    <span className="ml-1 text-sm text-gray-400 line-through">
                      ${item.oldPrice.toFixed(2)}
                    </span>
                  )}
                </p>
                <div className="mt-1 text-xs text-gray-500">
                  Available: {item.stock} | Sold: {item.sold}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default DealComponent;
