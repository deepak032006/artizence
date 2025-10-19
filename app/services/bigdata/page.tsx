"use client";

import HeroSection from "./Herosection";
import BusinessBenefits from "./Businessbenefits";
import DevelopmentProcess from "./DevelopmentProcess"; 
import ContactSection from "./ContectSection";
import IndustryExpertise from "./IndustryExpertise";
import KeyBenefits from "./KeyBenefits";
import Glossary from "./Glossary";
import TechnologyStack from "./Technologystack";


export default function AIContent() {
  return (
    <main >
        <HeroSection />
        <BusinessBenefits />
        <DevelopmentProcess />  
        <IndustryExpertise />
        <TechnologyStack/>
        <KeyBenefits />
        <Glossary />
        <ContactSection />
      
    </main>
  );
}
