"use client";

import Image from "next/image";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";

export default function Expertise() {
  // ✅ Memoize stats so it's stable between renders
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
    <div className="flex justify-end pr-10">
      <section className="w-full bg-white text-[#2F327D] py-20 px-6 md:px-20">
        <div ref={sectionRef} className="max-w-5xl ml-auto mb-32 shadow-md">
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

        <div className="max-w-5xl ml-auto mb-32 shadow-md">
          <h3 className="text-3xl font-semibold mb-10 text-[#2F327D]">
            LLM Industry expertise
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative w-full md:w-1/2 h-80 md:h-[420px] overflow-hidden rounded-2xl">
              <Image
                src="/images/building2.jpg"
                alt="AI Consulting"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h4 className="text-xl font-semibold mb-3 text-[#2E1158]">
                LLM in Healthcare
              </h4>
              <ul className="list-disc list-inside space-y-2 text-black text-left">
                <li>
                  Clinical Diagnosis and Treatment Suggestions – LLMs can rapidly analyze vast amounts of medical literature, offer potential diagnoses based on symptoms, and suggest treatment options.
                </li>
                <li>
                  Personalized Medicine and Health Plans - LLMs can create tailored health plans by understanding patients&apos; medical history, lifestyle, and genetic factors.
                </li>
                <li>
                  Medical Research and Drug Discovery – LLMs accelerate research by analyzing large datasets
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
