"use client";

export default function DevelopmentProcess() {
  return (
    <div className="flex justify-end ml-60 pr-16 w-full max-w-[1000px]">
      <main className="w-full max-w-[1400px] bg-white text-gray-800 flex flex-col items-start justify-end py-20 px-6 md:px-16 space-y-20 ml-auto">
        {/* ===== LLM Development Process ===== */}
        <section className="w-full max-w-[1344px] ml-auto bg-[#3c1a88] text-white rounded-2xl p-10 md:p-16 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-left">
            AI as a Service
          </h2>

          <div>
            <h3 className="text-xl font-medium mb-4 text-left"> 
              Discovery and requirements gathering
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-200 text-left">
              <li>
                Consultation to understand your business nuances
              </li>
              <li>
                Identifying specific use cases and challenges
              </li>
              <li>
                Defining key performance indicators (KPIs)
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}