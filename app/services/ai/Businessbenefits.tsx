"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const CenterColumnsWithClients: React.FC = () => {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: "Hellen Jummy",
      title: "Financial Counselor",
      text: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      image: "/images/client-1.jpg",
    },
    {
      name: "Jason Bright",
      title: "Product Manager",
      text: "Nulla facilisi. Fusce facilisis, justo non sagittis luctus, sem purus fermentum lorem, sed imperdiet sem ex id sapien. Morbi vel libero nec odio finibus accumsan.",
      image: "/images/client-2.jpg",
    },
    {
      name: "Sofia Lin",
      title: "Marketing Director",
      text: "Aenean euismod, justo sit amet varius congue, libero leo tempus leo, et fringilla lorem justo vitae risus. Integer sed nibh ac ipsum consequat tristique.",
      image: "/images/client3.jpg",
    },
  ];

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div>
      {/* ===== CenterColumns Section ===== */}
      <div className="flex flex-col md:flex-row justify-center mt-8 sm:mt-12 md:mt-16 min-h-[400px] sm:min-h-[450px] md:min-h-[550px]">
        {/* Left column */}
        <div className="flex flex-col gap-2 w-full md:w-[390px] pt-16 sm:pt-20 md:pt-24">
          <h2 className="font-nunito font-bold text-xl sm:text-2xl text-[#2F327D] mb-4 sm:mb-6">
            Business Benefits
          </h2>
          <div className="relative w-fit">
            <h1 className="font-nunito font-bold text-xl sm:text-2xl md:text-3xl text-[#2F327D] mb-4 sm:mb-6 leading-tight block md:whitespace-nowrap">
              Artificial Intelligence &ndash;<span className="block md:inline"> consulting in the field of AI solutions</span>
            </h1>
          </div>
          <div className="flex flex-col gap-2 mt-4 sm:mt-6">
            <p className="font-nunito font-medium text-sm sm:text-base text-[#000000]">
              AI Consulting Services
            </p>
            <p className="font-nunito font-medium text-sm sm:text-base text-[#000000]">
              AI Strategy Consulting
            </p>
            <p className="font-nunito font-medium text-sm sm:text-base text-[#000000]">
              AI Technologies Consulting
            </p>
            <p className="font-nunito font-medium text-sm sm:text-base text-[#000000]">
              AI Benefits
            </p>
            <p className="font-nunito font-medium text-sm sm:text-base text-[#000000]">
              Our team
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-center items-center w-full md:w-[390px] mt-6 sm:mt-8 md:mt-0 md:ml-6">
          <div className="w-full p-4 sm:p-6 bg-white rounded-2xl shadow-lg flex flex-col gap-3">
            <h3 className="font-nunito font-bold text-base sm:text-lg text-[#000000] mb-2">
              What AI consulting services can you expect?
            </h3>
            <p className="font-nunito font-medium text-xs sm:text-sm text-[#000000] opacity-80 leading-relaxed mb-3 sm:mb-4">
              Addepto offers unique AI consulting services that will help you
              realize how many opportunities come from implementing AI solutions
              into your business.<br />
              <br />
              Artificial Intelligence influences most industries, among the most
              popular are: retail, eCommerce, manufacturing, finance,
              healthcare, marketing, and gaming sector.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between mt-3 sm:mt-4">
              <Link href="/contact">
                <button className="w-full sm:w-auto px-4 sm:px-6 py-2 rounded-full font-bold text-white text-sm bg-gradient-to-r from-[#B541FF] to-[#4F5FFF] shadow-md mb-2 sm:mb-0 sm:mr-2">
                  LET&apos;S TALK
                </button>
              </Link>
              <Link href="/more">
                <button className="font-nunito font-bold text-sm text-[#2F327D] w-full sm:w-auto text-center">
                  SHOW MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Clients Section ===== */}
      <div className="mt-12 sm:mt-16 md:mt-20">
        <main className="w-full bg-white text-gray-800 flex flex-col items-start justify-end py-10 sm:py-12 md:py-20 space-y-12 sm:space-y-16 md:space-y-20">
          {/* Client logos */}
          <section className="w-full space-y-6 sm:space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 text-left">
              Clients that trusted us
            </h2>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {[
                { src: "/images/google.png", alt: "Google", width: 100, height: 50 },
                { src: "/images/netflix.png", alt: "Netflix", width: 100, height: 50 },
                { src: "/images/Amazon.png", alt: "Amazon", width: 100, height: 50 },
                { src: "/images/grab.png", alt: "Grab", width: 120, height: 60 },
              ].map((logo, i) => (
                <div key={i} className="relative flex items-center flex-shrink-0">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain"
                  />
                  {logo.alt === "Grab" && (
                    <Image
                      src="/images/3dglossy.png"
                      alt="Decorative"
                      width={150}
                      height={160}
                      className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 opacity-50"
                    />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="w-full space-y-6 sm:space-y-8 md:space-y-10 relative">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 text-left">
              What our clients say
            </h2>
            <div className="flex items-center justify-between relative">
              <button
                onClick={handlePrev}
                className="absolute -left-2 sm:-left-4 md:-left-10 bg-white shadow-md rounded-full p-2 sm:p-3 hover:bg-gray-100 z-10 transition"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="text-blue-900 w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
                {testimonials.slice(index, index + 2).map((t, i) => (
                  <div
                    key={i}
                    className="w-full sm:w-[18rem] md:w-[22rem] bg-white rounded-2xl p-4 sm:p-6 text-left space-y-3 sm:space-y-4 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">{t.text}</p>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{t.name}</h4>
                        <p className="text-sm text-yellow-600 text-xs sm:text-sm">{t.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="absolute -right-2 sm:-right-4 md:-right-10 bg-white shadow-md rounded-full p-2 sm:p-3 hover:bg-gray-100 z-10 transition"
                aria-label="Next testimonial"
              >
                <ArrowRight className="text-blue-900 w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CenterColumnsWithClients;