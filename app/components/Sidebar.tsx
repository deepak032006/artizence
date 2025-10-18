
"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/services/ai');
  };

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-transparent text-black p-6 overflow-y-auto z-40">
    
      <div className="space-y-4 mt-30 ml-10 ">
        <Link href="/services/ai/business-benefits" className="block text-black hover:text-purple-600">
          Business Benefits
        </Link>
        <Link href="/services/ai/development-process" className="block text-black hover:text-purple-600">
          Development Process
        </Link>
        <Link href="/services/ai/industry-expertise" className="block text-black hover:text-purple-600">
          Industry Expertise
        </Link>
        <Link href="/services/ai/technology-stack" className="block text-black hover:text-purple-600">
          Technology Stack
        </Link>
        <Link href="/services/ai/glossary" className="block text-black hover:text-purple-600">
          Glossary
        </Link>
        
        <button
          onClick={handleButtonClick}
          className="w-full bg-gradient-to-r from-[#D930AA] to-[#3E5DFF] text-white py-2 rounded hover:opacity-90 transition-opacity"
        >
          Schedule a Call
        </button>
      </div>
    </aside>
  );
}
