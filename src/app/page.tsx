// app/components/HeroSection.tsx
"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import DealComponent from "@/components/deal";
import Header from "@/components/navbar";

const HeroSection = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="grid grid-cols-1 gap-6 bg-white px-6 md:grid-cols-2">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex h-full flex-col items-start justify-center rounded-2xl bg-[#c8c7c5] bg-[url('/bg-r.png')] bg-cover bg-no-repeat p-10 shadow-xl"
        >
          <p className="text-sm text-[#243f2f] underline">Welcome To market</p>
          <h1 className="mb-4 w-1/2 text-2xl leading-tight font-bold text-[#243f2f] md:text-[38px]">
            We Deliver on Next Day from
            <br />
            10:00 AM to 08:00 PM
          </h1>
          <p className="mb-5 text-[#243f2f]">*For free shipping orders start from $100</p>
          <button className="mb-28 rounded bg-white px-6 py-2 text-[#243f2f] transition hover:bg-green-700">
            Shop Now →
          </button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex h-full flex-col items-start justify-center overflow-hidden rounded-2xl bg-[#00aa63] p-8 text-white shadow-xl"
        >
          {/* Content */}
          <div className="z-10">
            <p className="mb-2 text-sm underline">Limited Time Deals</p>
            <h2 className="mb-4 text-2xl leading-tight font-bold md:text-3xl">
              Save 15% on
              <br />
              Vegetable, Seafood
              <br />
              and Beverages
              <br />
              Products Now!
            </h2>
            <p className="mb-6">Join our newsletter and get $20 discount!</p>
            <button className="rounded bg-white px-6 py-2 font-semibold text-green-600 transition hover:bg-gray-100">
              Shop Now →
            </button>
          </div>

          {/* Image */}
          <Image
            src="/vegbasket.webp"
            alt="Vegetable Basket"
            width={300}
            height={300}
            className="absolute -right-40 bottom-6 w-1/2 object-contain md:w-[450px]"
          />
        </motion.div>
        <div>
          <div>
            <h2>Free Delivery Across the US!</h2>
            <p>Free delivery for all orders above $100</p>
          </div>
        </div>
      </div>
      <DealComponent />
    </>
  );
};

export default HeroSection;
