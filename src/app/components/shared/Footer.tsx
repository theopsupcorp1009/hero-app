import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

  const date = new Date();
  const year = date.getUTCFullYear();

  return (
    <footer className="bg-[#24312B] text-[#FCFAF7] pt-14 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-8 pb-9 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src={logo}
              className="h-9 w-9 object-contain"
              alt="Hero App Logo"
            />
            <span className="text-xl font-extrabold tracking-wide">
              HERO<span className="text-[#D8875C]">.IO</span>
            </span>
          </Link>

          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-sm font-semibold tracking-wide text-[#E8E1D8]">
              Social Links
            </span>

            <div className="flex items-center gap-3">
              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 text-[#FCFAF7] border border-white/10 flex items-center justify-center transition-all duration-200 hover:bg-[#D8875C] hover:border-[#D8875C] hover:-translate-y-0.5"
                aria-label="Twitter X"
              >
                <FaXTwitter className="text-sm" />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 text-[#FCFAF7] border border-white/10 flex items-center justify-center transition-all duration-200 hover:bg-[#D8875C] hover:border-[#D8875C] hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-sm" />
              </Link>

              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 text-[#FCFAF7] border border-white/10 flex items-center justify-center transition-all duration-200 hover:bg-[#D8875C] hover:border-[#D8875C] hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-sm" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 text-sm text-[#AEB6B0]">
          <p>Copyright © {year} - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;