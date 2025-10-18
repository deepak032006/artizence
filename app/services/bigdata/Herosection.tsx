"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CustomDiv = () => {
  return (
    <>

      <div className="relative w-full bg-[#2E1158] min-h-[534px] flex flex-col overflow-hidden">
        <div className="relative z-10 flex-1 flex flex-col items-center justify-end text-center px-4 pb-24 sm:pb-32 lg:pb-40">


          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mt-48 mb-8">
            Big Data Consulting
          </h2>


          <p className="text-[#E2E2E2] text-lg sm:text-xl md:text-2xl max-w-[90%] sm:max-w-[75%] mx-auto leading-relaxed mb-10 px-4">
            Analyze Large Datasets and Boost Your Operational Efficiency with Big Data Consulting services
          </p>


          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
            <Link href="/blog">
              <button className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#FBB525] via-[#B657B8] via-[#943AE5] via-[#6B67F6] to-[#49AFF5] hover:opacity-90 transition duration-300">
                Read our blog
              </button>
            </Link>

            <Link href="/contact">
              <button className="px-8 py-3 rounded-full font-semibold text-white border border-white hover:bg-white hover:text-[#2E1158] transition-all duration-300">
                Let’s Talk
              </button>
            </Link>
          </div>
        </div>
      </div>


      <div className="relative w-full z-20 -mt-1">
        <Image
          src="/images/wave.png"
          alt="Decorative bottom shape"
          width={1440}
          height={300}
          className="w-full h-auto object-cover"
          priority
        />


        <div className="absolute top-[20px] left-[30px] w-[245px] h-[254px] opacity-100 rotate-0">
          <Image
            src="/images/decor-shape.png"
            alt="Decorative shape"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default CustomDiv;
