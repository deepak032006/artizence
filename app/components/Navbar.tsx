"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed top-6 sm:top-10 left-0 right-0 mx-auto w-[92%] sm:w-[95%] max-w-[1280px] px-4 sm:px-8 md:px-10 lg:px-16 h-16 sm:h-20 flex items-center justify-between bg-[#FBFBFB] rounded-full z-50 shadow-md transition-all duration-300">
      
      {/* Logo */}
      <div className="w-32 sm:w-40 lg:w-[162px] h-10 sm:h-14 flex-shrink-0">
        <Image src={logo} alt="Logo" width={162} height={55} className="object-contain" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8 font-medium text-black relative">
        <Link href="/" className="hover:text-[#F3A540] transition-colors">Home</Link>
        <Link href="/about" className="hover:text-[#F3A540] transition-colors">About Us</Link>

        {/* Services Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button className="hover:text-[#F3A540] cursor-pointer">
            Services
          </button>

          {servicesOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white w-[440px] sm:w-[500px] flex flex-wrap gap-8 px-6 py-4 rounded-md shadow-lg z-50">
              {/* Discover */}
              <div className="flex flex-col gap-2 w-1/2 min-w-[180px]">
                <span className="font-semibold">Discover</span>
                <div className="flex flex-col gap-1 pl-2">
                  <Link href="/services/ai" className="hover:text-[#F3A540]">AI Consulting</Link>
                  <Link href="/services/bigdata" className="hover:text-[#F3A540]">Big Data Consulting</Link>
                </div>
              </div>

              {/* Development */}
              <div className="flex flex-col gap-2 w-1/2 min-w-[180px]">
                <span className="font-semibold text-blue-500">Development</span>
                <div className="flex flex-col gap-1 pl-2">
                  <Link href="/services/LLM" className="hover:text-[#F3A540]">LLMs Development</Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <Link href="/portfolio" className="hover:text-[#F3A540]">Portfolio</Link>
        <Link href="/case-studies" className="hover:text-[#F3A540]">Case Studies</Link>
        <Link href="/faq" className="hover:text-[#F3A540]">FAQ</Link>
        <Link href="/more" className="hover:text-[#F3A540]">More ▼</Link>
      </div>

      {/* Desktop Button */}
      <Link href="/contact">
        <button className="hidden md:flex w-[140px] lg:w-[161px] h-[44px] lg:h-[51px] rounded-full text-white font-semibold text-sm lg:text-[16px] bg-gradient-to-r from-[#FBB525] via-[#B657B8] to-[#49AFF5] items-center justify-center px-4 lg:px-6 hover:opacity-90 transition">
          Let’s Talk
        </button>
      </Link>

      {/* Mobile Hamburger */}
      <div className="flex md:hidden items-center ml-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 sm:top-20 left-0 w-full bg-[#FBFBFB] flex flex-col items-center gap-4 py-6 shadow-lg rounded-b-2xl z-40 animate-slideDown">
          <Link href="/" className="font-medium hover:text-[#F3A540]">Home</Link>
          <Link href="/about" className="font-medium hover:text-[#F3A540]">About Us</Link>

          {/* Mobile Services */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="font-medium hover:text-[#F3A540] flex items-center gap-1"
            >
              Services ▼
            </button>
            {servicesOpen && (
              <div className="flex flex-col bg-white shadow rounded-md mt-2 w-48">
                <Link href="/services/ai" className="px-4 py-2 hover:bg-[#F3A540] hover:text-white text-center">AI Consulting</Link>
                <Link href="/services/bigdata" className="px-4 py-2 hover:bg-[#F3A540] hover:text-white text-center">Big Data Consulting</Link>
                <Link href="/services/LLM" className="px-4 py-2 hover:bg-blue-500 hover:text-white text-center">LLMs Development</Link>
              </div>
            )}
          </div>

          <Link href="/portfolio" className="font-medium hover:text-[#F3A540]">Portfolio</Link>
          <Link href="/case-studies" className="font-medium hover:text-[#F3A540]">Case Studies</Link>
          <Link href="/faq" className="font-medium hover:text-[#F3A540]">FAQ</Link>
          <Link href="/more" className="font-medium hover:text-[#F3A540]">More ▼</Link>

          <Link href="/contact">
            <button className="w-36 h-12 rounded-full text-white font-semibold bg-gradient-to-r from-[#FBB525] via-[#B657B8] to-[#49AFF5] mt-2 hover:opacity-90 transition">
              Let’s Talk
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
