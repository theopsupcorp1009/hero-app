import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/hero.png";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-[#FCFAF7] pt-16 md:pt-20 pb-0 px-4 text-center overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8DF] border border-[#E8D8CC] text-[#9A5635] text-xs font-semibold tracking-wide mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C66A3D]" />
          BUILT FOR BETTER DIGITAL EXPERIENCES
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-[#24312B] tracking-tight leading-[1.05]">
          We Build
          <br />
          <span className="text-[#C66A3D]">Productive</span> Apps
        </h1>

        <p className="mt-5 text-[#70746F] text-sm md:text-base max-w-2xl leading-7">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
          <a
            href="https://play.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-5 rounded-xl bg-[#24312B] text-[#FCFAF7] border border-[#24312B] font-semibold flex items-center gap-2.5 shadow-[0_8px_24px_rgba(36,49,43,0.12)] transition-all duration-200 hover:bg-[#34443C] hover:-translate-y-0.5"
          >
            <FaGooglePlay className="text-xl" />
            <span>Google Play</span>
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-5 rounded-xl bg-white text-[#24312B] border border-[#E5DED6] font-semibold flex items-center gap-2.5 shadow-sm transition-all duration-200 hover:border-[#CFC5BB] hover:-translate-y-0.5 hover:shadow-md"
          >
            <FaAppStoreIos className="text-xl" />
            <span>App Store</span>
          </a>
        </div>

        <div className="relative mt-14 md:mt-16 w-full max-w-3xl mx-auto">
          <div className="absolute inset-x-12 bottom-8 h-32 bg-[#EAD8CB]/50 blur-3xl rounded-full" />

          <Image
            src={bannerImg}
            alt="Hero apps preview"
            className="relative w-full h-auto object-contain mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;