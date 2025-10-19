"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) setServicesOpen(false); // Close services when closing main menu
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <nav className="fixed top-4 sm:top-6 md:top-8 left-0 right-0 mx-auto w-[90%] max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12 h-16 sm:h-18 md:h-20 flex items-center justify-between bg-[#FBFBFB] rounded-full z-50 shadow-lg transition-all duration-300">
      {/* Logo */}
      <div className="w-28 sm:w-36 md:w-40 lg:w-[162px] h-10 sm:h-12 md:h-14 flex-shrink-0">
        <Link href="/">
          <Image
            src={logo}
            alt="Company Logo"
            width={162}
            height={55}
            className="object-contain"
            priority
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 font-medium text-black">
        <Link href="/" className="hover:text-[#F3A540] transition-colors">
          Home
        </Link>
        <Link href="/about" className="hover:text-[#F3A540] transition-colors">
          About Us
        </Link>

        {/* Services Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button
            className="hover:text-[#F3A540] transition-colors focus:outline-none"
            aria-expanded={servicesOpen}
            aria-haspopup="true"
          >
            Services
          </button>
          {servicesOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white w-[320px] sm:w-[400px] md:w-[440px] p-4 rounded-lg shadow-lg z-50 animate-slideDown">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Discover */}
                <div className="flex flex-col gap-2 min-w-[140px]">
                  <span className="font-semibold text-gray-800">Discover</span>
                  <div className="flex flex-col gap-1 pl-2">
                    <Link
                      href="/services/ai"
                      className="hover:text-[#F3A540] transition-colors"
                    >
                      AI Consulting
                    </Link>
                    <Link
                      href="/services/bigdata"
                      className="hover:text-[#F3A540] transition-colors"
                    >
                      Big Data Consulting
                    </Link>
                  </div>
                </div>
                {/* Development */}
                <div className="flex flex-col gap-2 min-w-[140px]">
                  <span className="font-semibold text-blue-500">Development</span>
                  <div className="flex flex-col gap-1 pl-2">
                    <Link
                      href="/services/LLM"
                      className="hover:text-[#F3A540] transition-colors"
                    >
                      LLMs Development
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <Link href="/portfolio" className="hover:text-[#F3A540] transition-colors">
          Portfolio
        </Link>
        <Link href="/case-studies" className="hover:text-[#F3A540] transition-colors">
          Case Studies
        </Link>
        <Link href="/faq" className="hover:text-[#F3A540] transition-colors">
          FAQ
        </Link>
        <Link href="/more" className="hover:text-[#F3A540] transition-colors">
          More ▼
        </Link>
      </div>

      {/* Desktop Button */}
      <Link href="/contact">
        <button className="hidden md:flex w-[120px] md:w-[140px] lg:w-[160px] h-10 md:h-11 lg:h-12 rounded-full text-white font-semibold text-sm md:text-base bg-gradient-to-r from-[#FBB525] via-[#B657B8] to-[#49AFF5] items-center justify-center px-4 hover:opacity-90 transition-all">
          Let’s Talk
        </button>
      </Link>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-black text-2xl sm:text-3xl focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 sm:top-18 md:top-20 left-0 w-full bg-[#FBFBFB] flex flex-col items-center gap-3 py-6 shadow-lg rounded-b-2xl z-40 animate-slideDown max-h-[calc(100vh-4rem)] overflow-y-auto">
          <Link
            href="/"
            className="font-medium text-base hover:text-[#F3A540] transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="font-medium text-base hover:text-[#F3A540] transition-colors"
            onClick={toggleMenu}
          >
            About Us
          </Link>

          {/* Mobile Services */}
          <div className="flex flex-col items-center w-full">
            <button
              onClick={toggleServices}
              className="font-medium text-base hover:text-[#F3A540] transition-colors flex items-center gap-1"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services {servicesOpen ? "▲" : "▼"}
            </button>
            {servicesOpen && (
              <div className="flex flex-col bg-white shadow rounded-md mt-2 w-11/12 max-w-[300px] mx-auto">
                <Link
                  href="/services/ai"
                  className="px-4 py-2 text-sm hover:bg-[#F3A540] hover:text-white transition-colors"
                  onClick={toggleMenu}
                >
                  AI Consulting
                </Link>
                <Link
                  href="/services/bigdata"
                  className="px-4 py-2 text-sm hover:bg-[#F3A540] hover:text-white transition-colors"
                  onClick={toggleMenu}
                >
                  Big Data Consulting
                </Link>
                <Link
                  href="/services/LLM"
                  className="px-4 py-2 text-sm hover:bg-blue-500 hover:text-white transition-colors"
                  onClick={toggleMenu}
                >
                  LLMs Development
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/portfolio"
            className="font-medium text-base hover:text-[#F3A540] transition-colors"
            onClick={toggleMenu}
          >
            Portfolio
          </Link>
          <Link
            href="/case-studies"
            className="font-medium text-base hover:text-[#F3A540] transition-colors"
            onClick={toggleMenu}
          >
            Case Studies
          </Link>
          <Link
            href="/faq"
            className="font-medium text-base hover:text-[#F3A540] transition-colors"
            onClick={toggleMenu}
          >
            FAQ
          </Link>
          <Link
            href="/more"
            className="font-medium text-base hover:text-[#F3A540] transition-colors"
            onClick={toggleMenu}
          >
            More ▼
          </Link>

          <Link href="/contact">
            <button
              className="w-36 h-12 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-[#FBB525] via-[#B657B8] to-[#49AFF5] mt-3 hover:opacity-90 transition-all"
              onClick={toggleMenu}
            >
              Let’s Talk
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;