"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const CenterColumnsWithClients: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "LLM Development Services. What you can expect?",
      heading:
        "ContextClue: Advanced knowledge managing and data analysis through Generative AI solutions",
      text: `ContextClue, developed by Addepto, transforms enterprise knowledge management by going beyond traditional data analysis.

Going beyond traditional text analysis, this versatile tool seamlessly handles multiple data formats – from PDF documents and images to SQL databases, BI dashboards, and spreadsheets.

What sets ContextClue apart is its ability to serve as a comprehensive knowledge base assistant, understanding context and relationships across all your data sources. Through advanced Generative AI solutions, it doesn’t just analyze data – it becomes your organization’s memory, capable of answering complex queries, identifying patterns, and delivering insights from your entire information landscape.

Organizations can maintain complete control over their data by deploying ContextClue on their private infrastructure. This secure large language model deployment model ensures sensitive information remains protected while delivering powerful analytical capabilities.

The platform’s extensive customization features make it an ideal foundation for building specialized enterprise applications. By utilizing ContextClue as a development accelerator, organizations can rapidly deploy tailored Generative AI solutions, significantly reducing both development time and resource investment compared to building from scratch.

Ready to transform your data analysis capabilities? Contact Addepto to explore how ContextClue can drive innovation in your organization.`,
    },
    {
      title: "Common Use Cases for LLM Applications",
      heading: "Common Use Cases for LLM Applications",
      text: `Discover how enterprises apply LLMs for chatbots, knowledge assistants, document summarization, and more.`,
    },
    {
      title: "What are general-purpose LLMs?",
      heading: "Understanding General-purpose LLMs",
      text: `General-purpose LLMs are broad models trained on massive datasets and can handle diverse language tasks effectively.`,
    },
    {
      title: "What are domain-specific LLMs?",
      heading: "Domain-specific LLMs",
      text: `Domain-specific LLMs are fine-tuned to understand industry language—legal, healthcare, or finance—to ensure precise and contextual performance.`,
    },
    {
      title: "What are the techniques of customization LLMs?",
      heading: "Customization Techniques for LLMs",
      text: `Explore methods like fine-tuning, parameter-efficient training, and retrieval-augmented generation for LLM personalization.`,
    },
    {
      title: "Why Choose Addepto for Building Your LLM Applications?",
      heading: "Why Choose Addepto?",
      text: `Addepto’s AI experts bring years of experience integrating LLMs into complex enterprise environments, ensuring performance, scalability, and security.`,
    },
    {
      title: "Addepto's LLM-powered Knowledge Assistant: ContextClue",
      heading: "Meet ContextClue",
      text: `Our proprietary solution ContextClue redefines enterprise knowledge management with generative AI.`,
    },
  ];

  const testimonials = [
    {
      name: "Hellen Jummy",
      title: "Financial Counselor",
      text: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur.",
      image: "/images/client-1.jpg",
    },
    {
      name: "Jason Bright",
      title: "Product Manager",
      text: "Nulla facilisi. Fusce facilisis, justo non sagittis luctus, sem purus fermentum lorem, sed imperdiet sem ex id sapien.",
      image: "/images/client-2.jpg",
    },
    {
      name: "Sofia Lin",
      title: "Marketing Director",
      text: "Aenean euismod, justo sit amet varius congue, libero leo tempus leo, et fringilla lorem justo vitae risus.",
      image: "/images/client-3.jpg",
    },
  ];

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="w-full overflow-hidden py-8 sm:py-12 md:py-16">
      {/* ===== Center Columns Section ===== */}
      <div className="flex flex-col md:flex-row justify-center items-start max-w-6xl mx-auto px-4 sm:px-6 md:px-8 gap-6 sm:gap-8 md:gap-12">
        {/* Left column */}
        <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-5 sm:gap-6 md:ml-6 lg:ml-8">
          <h2 className="font-nunito font-bold text-2xl sm:text-3xl text-[#2F327D] mb-3 sm:mb-5">
            Business Benefits
          </h2>
          <h1 className="font-nunito font-bold text-2xl sm:text-3xl md:text-4xl text-[#2F327D] mb-5 sm:mb-6 leading-tight block md:whitespace-nowrap">
            Artificial Intelligence –{" "}
            <span className="block md:inline">
              consulting in the field of AI solutions
            </span>
          </h1>

          <div className="flex flex-col gap-3 sm:gap-4">
            {sections.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveSection(i)}
                className={`font-nunito font-bold text-lg sm:text-xl text-left transition-colors duration-300 ${
                  activeSection === i
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#B541FF] to-[#4F5FFF]"
                    : "text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#B541FF] hover:to-[#4F5FFF]"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="w-full md:w-2/3 lg:w-3/4 flex justify-center mt-40 md:mt-40">

          <div className="w-full max-w-3xl sm:max-w-4xl p-6 sm:p-8 bg-white rounded-2xl shadow-lg flex flex-col gap-4 sm:gap-6">
            <h3 className="font-nunito font-bold text-base sm:text-lg text-black mb-2 sm:mb-4">
              {sections[activeSection].heading}
            </h3>
            <p className="font-nunito font-medium text-xs sm:text-sm text-black opacity-80 leading-relaxed mb-3 sm:mb-4 whitespace-pre-line">
              {sections[activeSection].text}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <Link href="/contact">
                <button className="w-full sm:w-auto px-4 sm:px-6 py-2 rounded-full font-bold text-white text-sm bg-gradient-to-r from-[#B541FF] to-[#4F5FFF] shadow-md hover:opacity-90 transition">
                  LET&apos;S TALK
                </button>
              </Link>
              <Link href="/more">
                <button className="font-nunito font-bold text-sm text-[#2F327D] w-full sm:w-auto text-center hover:underline">
                  SHOW MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Clients Section ===== */}
      <div className="mt-12 sm:mt-16 md:mt-20">
        <main className="w-full bg-white text-gray-800 flex flex-col items-start justify-end py-10 sm:py-12 md:py-20 px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-16 md:space-y-20 overflow-hidden">
          <section className="w-full space-y-6 sm:space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 text-center">
              Our Clients
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-35">
              {[
                { src: "/images/google.png", alt: "Google" },
                { src: "/images/netflix.png", alt: "Netflix" },
                { src: "/images/Amazon.png", alt: "Amazon" },
                { src: "/images/grab.png", alt: "Grab" },
              ].map((logo, i) => (
                <div
                  key={i}
                  className="relative flex items-center justify-center w-24 sm:w-32 md:w-40 lg:w-48 h-12 sm:h-16 md:h-20 flex-shrink-0"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                  {logo.alt === "Grab" && (
                    <Image
                      src="/images/3dglossy.png"
                      alt="Decorative"
                      width={180}
                      height={190}
                      className="absolute ml-20 top-1/2 left-full -translate-y-38 -translate-x-1/2"
                    />
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="w-full space-y-6 sm:space-y-8 md:space-y-10 relative overflow-hidden">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 text-center">
              What our clients say
            </h2>

            <div className="relative flex items-center justify-center w-full">
              <button
                onClick={handlePrev}
                className="absolute left-0 sm:left-2 bg-white shadow-md rounded-full p-2 sm:p-3 hover:bg-gray-100 z-10 transition"
              >
                <ArrowLeft className="text-blue-900 w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-full overflow-x-auto scrollbar-hide justify-center px-2 sm:px-4">
                {testimonials.slice(index, index + 2).map((t, i) => (
                  <div
                    key={i}
                    className="w-full sm:w-[20rem] md:w-[24rem] bg-white rounded-2xl p-4 sm:p-6 text-left space-y-3 sm:space-y-4 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out flex-shrink-0"
                  >
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                      {t.text}
                    </p>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                          {t.name}
                        </h4>
                        <p className="text-sm text-yellow-600 text-xs sm:text-sm">
                          {t.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="absolute right-0 sm:right-2 md:-right-6 bg-white shadow-md rounded-full p-2 sm:p-3 hover:bg-gray-100 z-10 transition"
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
