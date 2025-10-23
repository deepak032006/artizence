"use client";

import { useState, useEffect } from "react";
import HeroSection from "./Herosection";
import BusinessBenefits from "./Businessbenefits";
import DevelopmentProcess from "./DevelopmentProcess";
import ContactSection from "./ContectSection";
import IndustryExpertise from "./IndustryExpertise";
import KeyBenefits from "./KeyBenefits";
import Glossary from "./Glossary";
import TechnologyStack from "./Technologystack";
import Sidebar from "../../components/Sidebar";

export default function AIContent() {
  // Always show sidebar on desktop
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero-section");
      const contact = document.getElementById("contact-section");

      const heroBottom = hero?.getBoundingClientRect().bottom || 0;
      const contactTop = contact?.getBoundingClientRect().top || 0;

      // Show sidebar after scrolling past hero section and before contact
      if (heroBottom < 100 && contactTop > window.innerHeight) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative flex">
      {/* Sidebar */}
      {showSidebar && <Sidebar />}

      {/* Main content */}
      <div className={`transition-all duration-300 flex-1 ${showSidebar ? "md:ml-64" : "md:ml-0"}`}>
        <section id="hero-section">
          <HeroSection />
        </section>

        <section id="business-benefits">
          <BusinessBenefits />
        </section>

        <section id="development-process">
          <DevelopmentProcess />
        </section>

        <section id="industry-expertise">
          <IndustryExpertise />
        </section>

        <section id="technology-stack">
          <TechnologyStack />
        </section>

        <section id="key-benefits">
          <KeyBenefits />
        </section>

        <section id="glossary">
          <Glossary />
        </section>

        <section id="contact-section">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}
