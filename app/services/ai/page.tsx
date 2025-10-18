"use client";

import HeroSection from "./Herosection";
import BusinessBenefits from "./Businessbenefits";
import DevelopmentProcess from "./DevelopmentProcess"; 
import ContactSection from "./ContectSection";
import IndustryExpertise from "./IndustryExpertise";
import KeyBenefits from "./KeyBenefits";
import Glossary from "./Glossary";
import TechnologyStack from "./Technologystack";
// import Sidebar from "@/app/components/Sidebar";

export default function AIContent() {
  return (
    <main className="flex flex-col items-center w-full">
      {/* ===== Hero Section ===== */}
      <section className="w-full">
        <HeroSection />
      </section>

      {/* ===== Business Benefits ===== */}
      <section className="">
        <BusinessBenefits />
      </section>
      <section className="w-full mt-20 mb-20 flex justify-center">
        <DevelopmentProcess />
      </section>
      <section className="w-full">
        <IndustryExpertise />
      </section>
      <section className="w-full">
        <TechnologyStack/>
      </section>
      {/* <section className="w-full">
        <Sidebar/>
      </section> */}

     
      

      {/* ===== Expertise Section ===== */}
      
      <section className="w-full">
        <KeyBenefits />
      </section>
      <section className="w-full">
        <Glossary />
      </section>
      <section className="w-full">
        <ContactSection />
      </section>
    </main>
  );
}
