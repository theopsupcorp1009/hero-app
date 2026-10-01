"use client";

import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#FCFAF7] border-b border-[#EDE7DF]">
      <nav className="container mx-auto relative flex items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2.5"
        >
          <Image
            src={logo}
            className="h-9 w-9 object-contain"
            alt="Hero App Logo"
          />

          <span className="text-xl font-extrabold tracking-wide text-[#24312B]">
            HERO<span className="text-[#C66A3D]">.IO</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-9 text-sm font-medium">
          <li>
            <Link
              href="/"
              className="text-[#5F625E] transition-colors duration-200 hover:text-[#C66A3D]"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/apps"
              className="text-[#5F625E] transition-colors duration-200 hover:text-[#C66A3D]"
            >
              Apps
            </Link>
          </li>

          <li>
            <Link
              href="/installation"
              className="text-[#5F625E] transition-colors duration-200 hover:text-[#C66A3D]"
            >
              Installation
            </Link>
          </li>
        </ul>

        <Link
          href="https://github.com/theopsupcorp1009/hero-app"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex h-10 px-5 rounded-xl bg-[#24312B] text-[#FCFAF7] items-center gap-2 font-medium normal-case shadow-[0_4px_14px_rgba(36,49,43,0.12)] transition-all duration-200 hover:bg-[#34443C] hover:-translate-y-0.5"
        >
          <FaGithub className="text-lg" />
          <span>Contribute</span>
        </Link>

        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-xl bg-[#24312B] text-[#FCFAF7] transition-colors hover:bg-[#34443C]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="absolute left-0 right-0 top-full z-50 border-t border-[#EDE7DF] bg-[#FCFAF7] shadow-[0_10px_30px_rgba(36,49,43,0.08)] lg:hidden">
            <ul className="container mx-auto flex flex-col px-4 py-4 sm:px-6">
              <li>
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full rounded-lg px-3 py-3 text-[#5F625E] transition-colors hover:bg-[#F3EEE8] hover:text-[#C66A3D]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/apps"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full rounded-lg px-3 py-3 text-[#5F625E] transition-colors hover:bg-[#F3EEE8] hover:text-[#C66A3D]"
                >
                  Apps
                </Link>
              </li>

              <li>
                <Link
                  href="/installation"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full rounded-lg px-3 py-3 text-[#5F625E] transition-colors hover:bg-[#F3EEE8] hover:text-[#C66A3D]"
                >
                  Installation
                </Link>
              </li>

              <li className="mt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#24312B] text-[#FCFAF7] font-medium"
                >
                  <FaGithub className="text-lg" />
                  <span>Contribute</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;