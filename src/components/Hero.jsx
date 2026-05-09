"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center text-white">
      <div className="container-width grid lg:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sky-400 font-semibold mb-4 tracking-wider uppercase">
            Modern Web Solutions
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            We Build Websites That Grow Your Business
          </h1>

          <p className="text-slate-300 text-lg mt-6 leading-8">
            SW Technologies helps startups and businesses establish a strong
            digital presence through fast, modern, and responsive websites.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/contact"
              className="bg-sky-500 hover:bg-sky-600 transition px-7 py-4 rounded-xl font-semibold"
            >
              Get a Free Quote
            </Link>

            <Link
              href="/services"
              className="border border-white hover:bg-white hover:text-slate-900 transition px-7 py-4 rounded-xl font-semibold"
            >
              View Our Services
            </Link>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex justify-center"
        >
          <div className="w-[450px] h-[450px] rounded-full bg-sky-500/20 backdrop-blur-3xl flex items-center justify-center border border-sky-500/20">
            <div className="w-[300px] h-[300px] rounded-full bg-sky-400/20 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-center">
                SW <br /> Technologies
              </h2>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
