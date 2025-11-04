"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CustomDiv = () => {
  return (
    <section className="relative w-full bg-[#2E1158] text-center text-white overflow-visible -mt-28 md:-mt-32 pt-24 md:pt-32 z-0">
      {/* ===== Text & Buttons ===== */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[480px] px-4 pb-28 md:pb-36 lg:pb-40 mt-24 md:mt-32">
  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3">
    Big Data Consulting
  </h2>

  <p className="text-[#E2E2E2] text-[10px] sm:text-xs md:text-sm lg:text-base max-w-[80%] sm:max-w-[70%] md:max-w-[60%] leading-relaxed mb-5">
    Analyze Large Datasets and Boost Your Operational Efficiency with Big Data Consulting services
  </p>

  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
    <Link href="/blog">
      <button className="px-5 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-[#FBB525] via-[#B657B8] via-[#943AE5] via-[#6B67F6] to-[#49AFF5] hover:opacity-90 transition duration-300 text-xs">
        Read our blog
      </button>
    </Link>
    <Link href="/contact">
      <button className="px-5 py-2 rounded-full font-semibold text-white border border-white hover:bg-white hover:text-[#2E1158] transition-all duration-300 text-xs">
        Let’s Talk
      </button>
    </Link>
  </div>
</div>


      {/* ===== Decorative Shape (Above Wave & Lowered) ===== */}
       <div className="absolute bottom-[6%] left-4 sm:left-6 md:left-10 w-[90px] sm:w-[110px] md:w-[140px] z-30">
              <Image
                src="/images/decor-shape.png"
                alt="Decorative shape"
                width={140}
                height={140}
                className="object-contain"
                priority
              />
            </div>
      
            {/* ===== Wave (Curved & Visible) ===== */}
           <div className="absolute bottom-[120px] sm:bottom-[-22px] left-0 w-full z-10 overflow-visible">
        <Image
          src="/images/wave.png"
          alt="Wave shape"
          width={1920}
          height={250}
          className="w-full h-auto object-cover translate-y-[10px] sm:translate-y-[30px]"
          priority
        />
      </div>

      {/* ===== White Section Below ===== */}
      <div className="absolute bottom-[-1px] left-0 w-full h-[150px] bg-white z-0" />
    </section>
  );
};

export default CustomDiv;
