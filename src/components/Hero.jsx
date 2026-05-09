"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaGlobe,
  FaLaptopCode,
  FaSparkles,
} from "react-icons/fa";
import { FaWandSparkles } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] text-white flex items-center">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 blur-[140px]" />

        {/* Grid Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="container-width relative z-10 grid lg:grid-cols-2 gap-16 items-center py-24">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full px-5 py-2 mb-7">
            <FaWandSparkles className="text-sky-400 text-sm" />
            <span className="text-sm tracking-wider text-slate-300 uppercase">
              Modern Web Solutions
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1]">
            We Create
            <span className="block bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Stunning Websites
            </span>
            For Your Business
          </h1>

          {/* Description */}
          <p className="text-slate-400 text-lg leading-8 mt-7 max-w-xl">
            SW Technologies builds high-performing, modern, and responsive
            websites that help startups and businesses grow faster online.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-sky-500 to-cyan-400 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-[0_10px_40px_rgba(14,165,233,0.35)]"
            >
              Get Free Quote
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </Link>

            <Link
              href="/services"
              className="border border-white/15 bg-white/5 hover:bg-white hover:text-slate-900 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold backdrop-blur-xl"
            >
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-14">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "100%", label: "Responsive Design" },
              { number: "24/7", label: "Client Support" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-3xl font-bold text-sky-400">
                  {item.number}
                </h3>
                <p className="text-slate-400 mt-1">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden lg:flex justify-center relative"
        >
          <div className="relative w-[520px] h-[520px] flex items-center justify-center">
            {/* Rotating Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-dashed border-sky-400/30"
            />

            {/* Glow */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-sky-500/20 blur-3xl" />

            {/* Center Card */}
            <div className="relative w-[300px] h-[300px] rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col items-center justify-center">
              <FaLaptopCode className="text-sky-400 text-7xl mb-5" />

              <h2 className="text-4xl font-black text-center">
                SW <br /> Technologies
              </h2>

              <p className="text-slate-400 text-sm mt-4 text-center px-8">
                Creative & Modern Web Development Agency
              </p>
            </div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-10 left-0 bg-white/5 border border-white/10 backdrop-blur-xl p-5 rounded-2xl"
            >
              <FaCode className="text-sky-400 text-3xl mb-2" />
              <h4 className="font-semibold">Clean Code</h4>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute bottom-16 right-0 bg-white/5 border border-white/10 backdrop-blur-xl p-5 rounded-2xl"
            >
              <FaGlobe className="text-cyan-300 text-3xl mb-2" />
              <h4 className="font-semibold">Global Presence</h4>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
