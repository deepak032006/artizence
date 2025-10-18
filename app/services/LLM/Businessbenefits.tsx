"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
  const handlePrev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div>
      {/* CenterColumns Section */}
      <div className="flex justify-center max-w-[1000px] mx-auto mt-25 px-2 min-h-[550px]">
        <div className="flex flex-col gap-2 w-[390px] pt-6">
          <h2 className="font-nunito font-bold text-2xl text-[#2F327D] mb-2">
            Business Benefits
          </h2>
          <div className="relative w-fit">
            <h1 className="font-nunito font-bold text-3xl text-[#2F327D] mt-2 mb-3 leading-tight whitespace-nowrap">
              LLM Development Services with Addepto
            </h1>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <p className="font-nunito font-medium text-base text-[#000000]">LLM Development Services. What you can expect?</p>
            <p className="font-nunito font-medium text-base text-[#000000]">Common Use Cases for LLM Applications</p>
            <p className="font-nunito font-medium text-base text-[#000000]">What are general-purpose LLMs?</p>
            <p className="font-nunito font-medium text-base text-[#000000]">What are domain-specific LLMs?</p>
            <p className="font-nunito font-medium text-base text-[#000000]">What are the techniques of customization LLMs?</p>
            <p className="font-nunito font-medium text-base text-[#000000]">Why Choose Addepto for Building Your LLM Applications?</p>
            <p className="font-nunito font-medium text-base text-[#000000]">Addepto&apos;s LLM-powered Knowledge Assistant: ContextClue</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-[390px] mt-25 ml-8">
          <div className="w-full p-6 bg-white rounded-2xl shadow-lg flex flex-col gap-3">
            <h3 className="font-nunito font-bold text-lg text-[#000000] mb-2">
              ContextClue: Advanced knowledge managing and data analysis through Generative AI solutions
            </h3>
            <p className="font-nunito font-medium text-sm text-[#000000] opacity-80 leading-relaxed mb-4">
              ContextClue, developed by Addepto, transforms enterprise knowledge management by going beyond traditional data analysis. Going beyond traditional text analysis, this versatile tool seamlessly handles multiple data formats – from PDF documents and images to SQL databases, BI dashboards, and spreadsheets. What sets ContextClue apart is its ability to serve as a comprehensive knowledge base assistant, understanding context and relationships across all your data sources. Through advanced Generative AI solutions, it doesn&apos;t just analyze data – it becomes your organization&apos;s memory, capable of answering complex queries, identifying patterns, and delivering insights from your entire information landscape. Organizations can maintain complete control over their data by deploying ContextClue on their private infrastructure. This secure large language model deployment model ensures sensitive information remains protected while delivering powerful analytical capabilities. The platform&apos;s extensive customization features make it an ideal foundation for building specialized enterprise applications. By utilizing ContextClue as a development accelerator, organizations can rapidly deploy tailored Generative AI solutions, significantly reducing both development time and resource investment compared to building from scratch. Ready to transform your data analysis capabilities? Contact Addepto to explore how ContextClue can drive innovation in your organization.
            </p>
            <div className="flex items-center justify-between mt-3">
              <button className="px-6 py-2 rounded-full font-bold text-white text-sm bg-gradient-to-r from-[#B541FF] to-[#4F5FFF] shadow-md mr-4">
                LET&apos;S TALK
              </button>
              <button className="font-nunito font-bold text-sm text-[#2F327D]">SHOW MORE</button>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="flex justify-end pr-10 mt-20">
        <main className="w-full max-w-[80%] bg-white text-gray-800 flex flex-col items-start justify-end py-20 px-6 md:px-16 space-y-20 ml-auto">
          <section className="w-full max-w-5xl ml-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 text-left">
              Clients that trusted us
            </h2>
            <div
              className="flex items-center"
              style={{
                width: "994px",
                height: "80px",
                justifyContent: "space-between",
                opacity: 1,
              }}
            >
              {[
                { src: "/images/google.png", alt: "Google", width: 120, height: 60 },
                { src: "/images/netflix.png", alt: "Netflix", width: 120, height: 60 },
                { src: "/images/Amazon.png", alt: "Amazon", width: 120, height: 60 },
                { src: "/images/grab.png", alt: "Grab", width: 140, height: 70 },
              ].map((logo, i) => (
                <div key={i} className="relative flex items-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                  />
                  {logo.alt === "Grab" && (
                    <Image
                      src="/images/3dglossy.png"
                      alt="Decorative"
                      width={180}
                      height={200}
                      className="absolute top-1/2 left-full -translate-y-39 -translate-x-18"
                    />
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="w-full max-w-5xl ml-auto space-y-10 relative">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 text-left">
              What our clients say
            </h2>
            <div className="flex items-center justify-between relative">
              <button
                onClick={handlePrev}
                className="absolute -left-5 md:-left-10 bg-white shadow-md rounded-full p-3 hover:bg-gray-100 z-10 transition"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="text-blue-900" />
              </button>
              <div className="flex gap-10 overflow-visible w-full justify-start px-12 transition-all duration-500 ease-in-out">
                {[testimonials[index], testimonials[(index + 1) % testimonials.length]].map(
                  (t, i) => (
                    <div
                      key={i}
                      className="min-w-[22rem] md:min-w-[24rem] bg-white rounded-2xl p-6 text-left space-y-4 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                      <p className="text-gray-600 text-sm md:text-base">{t.text}</p>
                      <div className="flex items-center gap-3">
                        <Image
                          src={t.image}
                          alt={t.name}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-800">{t.name}</h4>
                          <p className="text-sm text-yellow-600">{t.title}</p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
              <button
                onClick={handleNext}
                className="absolute -right-5 md:-right-10 bg-white shadow-md rounded-full p-3 hover:bg-gray-100 z-10 transition"
                aria-label="Next testimonial"
              >
                <ArrowRight className="text-blue-900" />
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CenterColumnsWithClients;