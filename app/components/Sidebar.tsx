"use client";

import { useState, useEffect } from "react";

export default function Sidebar() {
  const sections = [
    { id: "business-benefits", label: "Business Benefits" },
    { id: "development-process", label: "Development Process" },
    { id: "industry-expertise", label: "Industry Expertise" },
    { id: "technology-stack", label: "Technology Stack" },
    { id: "key-benefits", label: "Key Benefits" },
    { id: "glossary", label: "Glossary" },
  ];

  const [activeId, setActiveId] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentActiveId: string | null = null;
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentActiveId = section.id;
          }
        }
      });
      setActiveId(currentActiveId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize activeId on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="hidden md:block md:fixed md:top-30 md:left-0 md:h-[calc(100%-5rem)] md:w-64 md:bg-transparent md:text-black md:p-6 md:overflow-y-auto md:z-40">
      <div className="space-y-4 ml-4">
        {sections.map((btn) => (
          <button
            key={btn.id}
            onClick={() => scrollToSection(btn.id)}
            className={`block text-left w-full py-2 px-4 rounded transition-all duration-200
              ${
                activeId === btn.id
                  ? "bg-[#2E1158] text-white scale-105"
                  : "hover:bg-[#2E1158] hover:text-white"
              }`}
          >
            {btn.label}
          </button>
        ))}

        {/* Schedule Call Button */}
        <button
          onClick={() => alert("Schedule a Call clicked!")}
          className="w-full bg-gradient-to-r from-[#D930AA] to-[#3E5DFF] text-white py-2 rounded hover:opacity-90 transition-opacity mt-4"
        >
          Schedule a Call
        </button>
      </div>
    </aside>
  );
}
