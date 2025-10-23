"use client";

export default function KeyBenefits() {
  return (
    <div className="max-w-5xl mx-auto text-center shadow-md mb-20 px-0">
      <h3 className="text-3xl font-semibold mb-4 text-[#2F327D]">
        Artificial intelligence can improve your business in many ways
      </h3>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">Key benefits</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          {
            title: "Reducing human labor",
            desc: "Domain-specific LLMs are trained on industry-relevant data, enabling them to understand specialized terminology and context better.",
          },
          {
            title: "Cost savings",
            desc: "Leads to more accurate and contextually aware outputs, especially in fields with unique jargon or complex concepts.",
          },
          {
            title: "Minimizing the risk",
            desc: "Helps to avoid errors and improve business decisions using intelligent AI-driven insights.",
          },
          {
            title: "Real-time decision making",
            desc: "Enables fast and informed decisions with predictive analytics and AI recommendations.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <h4 className="text-lg font-semibold text-[#2E1158] mb-2">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}