"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaRocket, FaHeadset, FaPalette } from "react-icons/fa";

const features = [
  {
    icon: <FaCheckCircle />,
    title: "100% Responsive Design",
    desc: "Perfectly optimized websites for mobile, tablet, and desktop devices.",
  },

  {
    icon: <FaPalette />,
    title: "Modern UI/UX Experience",
    desc: "Creative and engaging interfaces designed to improve user interaction.",
  },

  {
    icon: <FaRocket />,
    title: "Fast Project Delivery",
    desc: "Efficient development process to launch your project quickly and smoothly.",
  },

  {
    icon: <FaHeadset />,
    title: "Dedicated Client Support",
    desc: "Reliable support and communication throughout your project journey.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#020617] text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-sky-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-cyan-400/10 blur-[120px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="container-width relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <span className="inline-block px-5 py-2 rounded-full border border-sky-400/20 bg-sky-400/10 text-sky-400 text-sm font-semibold tracking-[3px] uppercase">
            Why Choose Us
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-black leading-tight mt-6">
            We Build Digital
            <span className="block bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Experiences That Inspire
            </span>
          </h2>

          {/* Description */}
          <p className="text-slate-400 text-lg leading-8 mt-7 max-w-xl">
            At SW Technologies, we focus on quality, innovation, and performance
            to create websites that help businesses build trust and grow faster
            online.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-12">
            <div>
              <h3 className="text-4xl font-black text-sky-400">50+</h3>
              <p className="text-slate-400 mt-2">Successful Projects</p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-cyan-300">98%</h3>
              <p className="text-slate-400 mt-2">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>

        {/* Right Cards */}
        <div className="grid sm:grid-cols-2 gap-7">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 overflow-hidden hover:border-sky-400/40 transition-all duration-500"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-sky-500/10 to-cyan-400/5 transition duration-500" />

              {/* Icon */}
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-4xl shadow-[0_10px_40px_rgba(14,165,233,0.35)] mb-7 group-hover:scale-110 transition duration-500">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-bold mb-4 group-hover:text-sky-400 transition">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-slate-400 leading-8 text-[15px]">
                {item.desc}
              </p>

              {/* Hover Glow Circle */}
              <div className="absolute -bottom-24 -right-24 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
