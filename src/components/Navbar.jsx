"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950 shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          SW Technologies
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-white">
          <li>
            <Link href="/" className="hover:text-sky-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-sky-400 transition">
              About
            </Link>
          </li>

          <li>
            <Link href="/services" className="hover:text-sky-400 transition">
              Services
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-sky-400 transition">
              Contact
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-slate-900 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 text-white">
          <li>
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>

          <li>
            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
          </li>

          <li>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
