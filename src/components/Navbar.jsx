"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

import { FaArrowRight, FaCode } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#020617]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-width flex items-center justify-between py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center shadow-[0_10px_30px_rgba(14,165,233,0.35)]">
            <FaCode className="text-white text-lg" />
          </div>

          <h1 className="text-2xl font-black text-white">
            SW{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className="relative text-slate-300 hover:text-white transition font-medium group"
              >
                {item.name}

                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-gradient-to-r from-sky-400 to-cyan-300 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-sky-500 to-cyan-400 hover:scale-105 transition-all duration-300 px-7 py-3 rounded-2xl font-semibold text-white flex items-center gap-3 shadow-[0_10px_40px_rgba(14,165,233,0.35)]"
          >
            Get Started
            <FaArrowRight className="group-hover:translate-x-1 transition" />
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-11 h-11 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center text-white text-3xl"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#020617]/95 backdrop-blur-2xl border-t border-white/10"
          >
            <ul className="container-width flex flex-col gap-6 py-8">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className="text-slate-300 hover:text-sky-400 transition text-lg font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              {/* Mobile Button */}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-4 rounded-2xl font-semibold text-white shadow-[0_10px_40px_rgba(14,165,233,0.35)]"
              >
                Get Started
                <FaArrowRight />
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
