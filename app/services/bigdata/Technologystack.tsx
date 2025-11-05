"use client";

import React, { useState } from "react";

// Define the structure of each tech item
interface TechItem {
  title: string;
  description: string;
}

// Define the techData object and freeze keys with `as const`
const techData = {
  "Open Source LLM": [
    {
      title: "LLAMA",
      description:
        "A family of large language models released by Meta AI, ranging from 7B to 65B parameters, aimed at advancing research in areas like instruction following and multi-task learning.",
    },
    {
      title: "BLOOM",
      description:
        "Model trained on a large multilingual dataset, developed by the BigScience workshop and Hugging Face.",
    },
  ],
  "Commercial LLM": [
    {
      title: "Falcon",
      description:
        "Large Language Model released by Anthropic, focused on being safe and truthful.",
    },
  ],
  "ML Development Tools": [
    {
      title: "TensorFlow & PyTorch",
      description:
        "Popular frameworks for developing machine learning and AI models.",
    },
  ],
  "Data Engineering": [
    {
      title: "Airflow & Spark",
      description:
        "Tools for data processing, ETL pipelines, and workflow management.",
    },
  ],
  Database: [
    {
      title: "PostgreSQL & MongoDB",
      description:
        "Databases for structured and unstructured data storage.",
    },
  ],
  "AI & Machine Learning": [
    {
      title: "Scikit-learn",
      description: "Python library for classical machine learning algorithms.",
    },
  ],
  Frameworks: [
    {
      title: "Hugging Face Transformers",
      description: "Framework for NLP and transformer-based models.",
    },
  ],
} as const;

// Create a type representing all valid category keys
type Category = keyof typeof techData;

const TechnologyStack: React.FC = () => {
  // Type the categories array properly
  const categories = Object.keys(techData) as Category[];

  // Restrict selectedCategory to only valid keys
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 md:px-8">
      <div className="w-full md:w-4/5 lg:w-3/4 bg-[#FBFBFD] border border-gray-200 rounded-2xl shadow-md p-4 md:p-6 mb-32">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#2E1158] mb-6">
          Tools and frameworks for AI solutions
        </h3>

        {/* ===== Category Buttons ===== */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-[#2E1158] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-[#2E1158] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ===== Display Content ===== */}
        <div className="space-y-4">
          {(techData as Record<Category, readonly TechItem[]>)[selectedCategory].map(
            (item, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                <strong>{item.title} –</strong> {item.description}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
