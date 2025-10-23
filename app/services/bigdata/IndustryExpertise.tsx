"use client";

import Image from "next/image";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";

export default function Expertise() {
  const stats = useMemo(
    () => [
      { label: "AI Experts", value: 100 },
      { label: "Software Products Delivered", value: 160 },
      { label: "AI Solutions", value: 50 },
      { label: "Total Years of Experience", value: 15 },
    ],
    []
  );

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  const startCounting = useCallback(() => {
    const duration = 2000;
    const frameRate = 30;
    const totalFrames = Math.round(duration / (1000 / frameRate));

    stats.forEach((stat, i) => {
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = Math.floor(stat.value * progress);
          return newCounts;
        });
        if (frame === totalFrames) clearInterval(counter);
      }, 1000 / frameRate);
    });
  }, [stats]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (sectionRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startCounting();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(sectionRef.current);
    }
    return () => observer && observer.disconnect();
  }, [startCounting]);

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 md:px-8">
      <section className="w-full md:w-4/5 lg:w-3/4 bg-white text-[#2F327D] py-20 px-0">
        {/* Why Work With Us */}
        <div ref={sectionRef} className="w-full mb-32 shadow-md">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-[#2F327D] text-center">
            Why work with us
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="shadow-md py-4">
                <h3 className="text-4xl font-bold text-[#6A0DAD] transition-all duration-500">
                  {counts[i]}+
                </h3>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Expertise */}
        <div className="w-full mb-32 shadow-md">
          <h3 className="text-3xl font-semibold mb-10 text-[#2F327D]">
            Industry expertise
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative w-full md:w-1/2 h-80 md:h-[420px] overflow-hidden rounded-2xl">
              <Image
                src="/images/building.jpg"
                alt="AI Consulting"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h4 className="text-xl font-semibold mb-3 text-[#2E1158]">
                AI Consulting for Private Investments
              </h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Addepto, we possess deep expertise in the Private Investment
                (PE/VC) sector, enabling us to effectively navigate its
                complexities and address unique challenges faced by investment
                professionals. Our AI technologies are specifically tailored for
                this industry, offering significant business benefits through
                targeted use cases.
              </p>
              <div className="flex gap-3">
                <button className="bg-[#6A0DAD] text-white px-6 py-2.5 rounded-lg hover:bg-[#57108F] transition">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-4 mt-6 flex-wrap">
            <span className="bg-[#6A0DAD] text-white text-sm px-3 py-1 rounded-full">
              Private Investments
            </span>
            <span className="text-gray-600 text-sm">Aviation</span>
            <span className="text-gray-600 text-sm">Legal</span>
            <span className="text-gray-600 text-sm">Automation</span>
          </div>
        </div>
      </section>
    </div>
  );
}
