"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaSearch,
  FaShoppingCart,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Website Design",
    desc: "Modern and visually attractive UI/UX designs tailored for your business.",
  },

  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Fast, scalable, and responsive websites using modern technologies.",
  },

  {
    icon: <FaShoppingCart />,
    title: "E-Commerce",
    desc: "Powerful online stores with smooth shopping experiences.",
  },

  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    desc: "Improve visibility and rank higher on search engines.",
  },
];

const Services = () => {
  return (
    <section className="relative py-24 bg-[#020617] overflow-hidden text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-sky-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/10 blur-[120px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="container-width relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-sky-400/20 bg-sky-400/10 text-sky-400 text-sm font-semibold tracking-[3px] uppercase">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-6 leading-tight">
            Solutions That Help
            <span className="block bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Your Business Grow
            </span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg leading-8">
            We provide modern digital solutions designed to improve your online
            presence, increase conversions, and grow your brand faster.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-sky-400/40 transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-sky-500/10 to-cyan-400/5" />

              {/* Icon */}
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-4xl shadow-[0_10px_40px_rgba(14,165,233,0.35)] mb-8 group-hover:scale-110 transition duration-500">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-bold mb-4 group-hover:text-sky-400 transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-slate-400 leading-8 text-[15px]">
                {service.desc}
              </p>

              {/* Learn More */}
              <div className="relative z-10 mt-8 flex items-center gap-2 text-sky-400 font-semibold opacity-0 group-hover:opacity-100 transition duration-500">
                Learn More
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition" />
              </div>

              {/* Border Glow */}
              <div className="absolute -bottom-24 -right-24 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
