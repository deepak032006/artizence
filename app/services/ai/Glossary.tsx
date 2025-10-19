"use client";

export default function Glossary() {
  return (
    <div className="max-w-5xl bg-[#2E1158] text-white mt-10 p-4 md:p-6 rounded-2xl mb-32 shadow-md">
      <h3 className="text-3xl font-semibold mb-6">
        All you need to know about AI consulting
      </h3>
      <ul className="list-none space-y-4 text-gray-100">
        <li>What is artificial intelligence?</li>
        <li>How does artificial intelligence work?</li>
        <li>How to prepare for AI implementation?</li>
        <li>What are domain-specific LLMs?</li>
        <li>How will artificial intelligence change the future?</li>
        <li>Why Choose Addepto for Building Your LLM Applications?</li>
        <li>
          Which data is used by artificial intelligence and what databases I can
          connect?
        </li>
      </ul>
    </div>
  );
}