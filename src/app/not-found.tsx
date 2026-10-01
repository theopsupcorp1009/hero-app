import Link from "next/link";
import React from "react";
import { FiArrowRight, FiAlertCircle } from "react-icons/fi";

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] bg-[#f8f9fc] flex items-center justify-center px-6 py-16">
      <div className="text-center max-w-xl flex flex-col items-center">
        
        {/* Large Animated 404 Header */}
        <h1 className="text-[100px] sm:text-[140px] md:text-[180px] leading-none font-extrabold tracking-tighter text-[#0f172a] select-none">
          4<span className="text-[#7c4dff] inline-block animate-bounce">0</span>4
        </h1>

        {/* Purple Accent Divider */}
        <div className="w-16 h-1.5 bg-[#7c4dff] mx-auto -mt-2 mb-8 rounded-full" />

        {/* Warning Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-50 text-[#7c4dff] border border-purple-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          <FiAlertCircle className="text-base" />
          <span>OPPS! PAGE NOT FOUND</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
          Lost in the Digital World?
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-3 text-sm md:text-base leading-relaxed max-w-md">
          The page you are looking for doesn’t exist or has been moved. Let's get you back to exploring our apps!
        </p>

        {/* Back to Home Button (Matching HERO.IO Theme) */}
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 mt-8 px-8 py-3.5
                     bg-[#7c4dff] hover:bg-[#651fff]
                     text-white font-semibold rounded-xl
                     transition-all duration-300
                     shadow-md hover:shadow-purple-200
                     hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Back to Home</span>
          <FiArrowRight className="text-lg" />
        </Link>

      </div>
    </div>
  );
};

export default NotFoundPage;