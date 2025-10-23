"use client";

export default function DevelopmentProcess() {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 md:px-8">
      <main className="w-full md:w-4/5 lg:w-3/4 bg-[#3c1a88] text-white mt-10 p-6 md:p-10 rounded-2xl mb-32 shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold text-left mb-6">
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
      </main>
    </div>
  );
}
