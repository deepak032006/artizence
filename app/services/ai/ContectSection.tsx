"use client";

import React from "react";

const ContactSection: React.FC = () => {
  return (
    <div
      className="relative w-full h-[867px] flex bg-[#F2F4FA] opacity-100"
      style={{
        backgroundImage: "url('/path/to/diamond-pattern.png')", // Replace with actual pattern image path
        backgroundSize: "cover",
      }}
    >
      {/* Left: Text Section */}
      <div
        className="w-full md:w-[618px] h-full bg-[#282241] flex flex-col items-start justify-center pl-4 md:pl-12 text-white opacity-100"
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FBB525] mb-2 sm:mb-4"
        >
          Let’s discuss a
          <br />
          <span className="text-white">solution for you</span>
        </h1>
        <p className="text-base sm:text-lg mb-1 sm:mb-2">Akshat Srivastava</p>
        <p className="text-base sm:text-lg">will help you estimate your project.</p>
        <p className="text-base sm:text-lg mt-2 sm:mt-4">hello@artizence.com</p>
      </div>

      {/* Right: Contact Form */}
      <div
        className="w-full md:w-[700px] h-[515px] flex flex-col items-center justify-center gap-10 opacity-100 ml-auto mr-0 md:mr-12"
      >
        <form
          className="w-full md:w-[700px] h-[416px] flex flex-col gap-4 mt-4 opacity-100"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-md p-2 sm:p-3 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#282241]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-md p-2 sm:p-3 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#282241]"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="tel"
              placeholder="Phone"
              className="border border-gray-300 rounded-md mt-2 sm:mt-4 p-2 sm:p-3 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#282241]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded-md p-2 sm:p-3 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#282241]"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Company name"
              className="border border-gray-300 rounded-md p-2 sm:p-3 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#282241]"
            />
            <input
              type="text"
              placeholder="How did you hear about us"
              className="border border-gray-300 rounded-md p-2 sm:p-3 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#282241]"
            />
          </div>
          <textarea
            placeholder="Write a Message..."
            className="border border-gray-300 rounded-md p-2 sm:p-3 w-full h-[100px] sm:h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-[#282241]"
          />
        </form>

        {/* Submit Button */}
        <button
  className="w-[200px] sm:w-[248px] h-[48px] sm:h-[56px] bg-[linear-gradient(90deg,#D930AA_0%,#3E5DFF_100%)] text-white font-semibold text-base sm:text-lg rounded-full flex items-center justify-center gap-2 cursor-pointer opacity-100 hover:opacity-90 transition mt-2 sm:mt-4"
>
  Send a Message →
</button>
      </div>
    </div>
  );
};

export default ContactSection;