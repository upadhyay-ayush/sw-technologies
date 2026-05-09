"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaSearch,
  FaShoppingCart,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Website Design",
    description:
      "We create professional, modern, and visually appealing website designs that improve user experience and build trust for your business.",
    features: ["Modern UI/UX", "Responsive Layout", "Creative Design"],
  },

  {
    icon: <FaCode />,
    title: "Website Development",
    description:
      "Fast, scalable, and responsive websites developed using modern technologies with performance and reliability in mind.",
    features: ["Fast Performance", "Clean Code", "Scalable Architecture"],
  },

  {
    icon: <FaShoppingCart />,
    title: "E-Commerce Development",
    description:
      "Complete e-commerce solutions with responsive product pages, secure checkout systems, and user-friendly shopping experiences.",
    features: ["Secure Payments", "Product Management", "Mobile Friendly"],
  },

  {
    icon: <FaSearch />,
    title: "SEO & Digital Marketing",
    description:
      "Boost your online visibility with SEO optimization and digital marketing strategies that help attract more customers.",
    features: ["SEO Optimization", "Marketing Strategy", "Traffic Growth"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#020617] text-white py-36">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 blur-[120px]" />

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-width relative z-10 text-center"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-sky-400/20 bg-sky-400/10 text-sky-400 text-sm font-semibold tracking-[3px] uppercase">
            Our Services
          </span>

          <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight">
            Solutions That
            <span className="block bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Drive Business Growth
            </span>
          </h1>

          <p className="text-slate-400 mt-8 max-w-3xl mx-auto text-lg leading-8">
            We help startups, entrepreneurs, and businesses establish a strong
            online presence through innovative digital solutions and modern web
            technologies.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 overflow-hidden bg-[#020617] text-white">
        <div className="container-width relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 overflow-hidden hover:border-sky-400/40 transition-all duration-500"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-sky-500/10 to-cyan-400/5 transition duration-500" />

                {/* Icon */}
                <div className="relative z-10 w-24 h-24 rounded-3xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-5xl shadow-[0_10px_40px_rgba(14,165,233,0.35)] mb-8 group-hover:scale-110 transition duration-500">
                  {service.icon}
                </div>

                {/* Title */}
                <h2 className="relative z-10 text-3xl font-black mb-5 group-hover:text-sky-400 transition">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="relative z-10 text-slate-400 leading-8 text-lg">
                  {service.description}
                </p>

                {/* Features */}
                <div className="relative z-10 mt-8 space-y-4">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <FaCheckCircle className="text-sky-400" />

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button className="relative z-10 mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-sky-500 to-cyan-400 hover:scale-105 transition-all duration-300 text-white px-7 py-4 rounded-2xl font-semibold shadow-[0_10px_40px_rgba(14,165,233,0.35)]">
                  Get Started
                  <FaArrowRight className="group-hover:translate-x-1 transition" />
                </button>

                {/* Glow Circle */}
                <div className="absolute -bottom-24 -right-24 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
