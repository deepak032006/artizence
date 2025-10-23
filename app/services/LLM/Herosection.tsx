"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CustomDiv = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full bg-[#2E1158] min-h-[400px] sm:min-h-[450px] md:min-h-[534px] flex flex-col overflow-hidden">
        <div className="relative z-10 flex-1 flex flex-col items-center justify-end text-center px-4 py-6 sm:py-8 md:py-12">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-12 sm:mt-16 md:mt-24 mb-4 sm:mb-6 md:mb-8">
            LLM Development Services
          </h2>
          <p className="text-[#E2E2E2] text-sm sm:text-base md:text-lg lg:text-xl max-w-[95%] sm:max-w-[85%] md:max-w-[75%] mx-auto leading-relaxed mb-6 sm:mb-8 md:mb-10">
            Improve your products and enhance your processes with the cutting-edge capabilities of large language models (LLMs). We  integrate, fine-tune, and customize general-purpose LLMs to meet your  unique business requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
            <Link href="/blog">
              <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#FBB525] via-[#B657B8] via-[#943AE5] via-[#6B67F6] to-[#49AFF5] hover:opacity-90 transition duration-300 text-sm sm:text-base">
                Read our blog
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-white border border-white hover:bg-white hover:text-[#2E1158] transition-all duration-300 text-sm sm:text-base">
                Let’s Talk
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Wave and Decorative Shape */}
      <div className="relative w-full z-20 -mt-1">
        <Image
          src="/images/wave.png"
          alt="Decorative bottom shape"
          width={1440}
          height={150}
          className="w-full h-auto object-cover"
          priority
        />

        {/* Responsive decorative shape */}
        <div className="absolute top-2 sm:top-4 md:top-5 left-2 sm:left-4 md:left-8 w-[15%] sm:w-[18%] md:w-[15%] aspect-square">
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
