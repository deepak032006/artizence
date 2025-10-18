"use client";

export default function DevelopmentProcess() {
  return (
    <div className="flex justify-end pr-10">
      <main className="w-full max-w-[90%] bg-white text-gray-800 flex flex-col items-start justify-end py-20  px-6 md:px-16 space-y-20 ml-50">
        {/* ===== LLM Development Process ===== */}
        <section className="w-full max-w-5xl ml-auto bg-[#3c1a88] text-white rounded-2xl p-10 md:p-16 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-left">
            Large Language Model (LLM) development process
          </h2>

          <div>
            <h3 className="text-xl font-medium mb-4 text-left"> 
              Discovering client’s needs
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-200 text-left">
              <li>
                Our first step is to understand our clients and their requirements thoroughly.
              </li>
              <li>
                We analyze areas for improvement and explore cutting-edge solutions that would be most effective.
              </li>
              <li>
                We identify where AI can be strategically injected into processes to maximize business value.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
