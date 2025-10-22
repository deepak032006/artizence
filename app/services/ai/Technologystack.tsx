import React from "react";

const TechnologyStack = () => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 md:px-8">
      <div className="w-full md:w-4/5 lg:w-3/4 bg-[#FBFBFD] border border-gray-200 rounded-2xl shadow-md p-4 md:p-6 mb-32">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#2E1158] mb-8">
          Tools and frameworks for AI solutions
        </h3>
        <div className="flex flex-wrap justify-between text-sm font-medium text-gray-700 mb-6">
          <span>Open Source LLM</span>
          <span>Commercial LLM</span>
          <span>ML Development Tools</span>
          <span>Data Engineering</span>
          <span>Database</span>
          <span>AI & Machine Learning</span>
          <span>Frameworks</span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>LLAMA –</strong> A family of large language models released by Meta AI, ranging from 7B to 65B parameters, aimed at advancing research in areas like instruction following and multi-task learning.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>BLOOM (Hugging Face/BigScience) –</strong> Model trained on a large multilingual dataset, developed by the BigScience workshop and Hugging Face.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Falcon (Anthropic) –</strong> Large Language Model released by Anthropic, focused on being safe and truthful.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Stable Diffusion –</strong> An open-source text-to-image generative AI model capable of creating highly detailed images from text prompts, developed by Stability AI.
        </p>
      </div>
    </div>
  );
};

export default TechnologyStack;
