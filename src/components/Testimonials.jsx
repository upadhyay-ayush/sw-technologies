"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    review:
      "SW Technologies delivered an amazing website for our business. Professional and highly responsive team.",
  },

  {
    name: "Priya Verma",
    role: "Startup Founder",
    review:
      "The design quality and responsiveness exceeded our expectations. Highly recommended.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#020617] text-white">
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
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-6 leading-tight">
            What Our
            <span className="block bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg leading-8">
            We help businesses build strong digital experiences that leave a
            lasting impression and deliver real results.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 overflow-hidden hover:border-sky-400/40 transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-sky-500/10 to-cyan-400/5 transition duration-500" />

              {/* Quote Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-2xl shadow-[0_10px_40px_rgba(14,165,233,0.35)] mb-7">
                <FaQuoteLeft />
              </div>

              {/* Review */}
              <p className="relative z-10 text-slate-300 leading-8 text-lg">
                “{item.review}”
              </p>

              {/* Stars */}
              <div className="relative z-10 flex gap-1 text-yellow-400 mt-6">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* User Info */}
              <div className="relative z-10 flex items-center gap-4 mt-8">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-3xl text-sky-400">
                  <FaUserCircle />
                </div>

                <div>
                  <h3 className="text-xl font-bold group-hover:text-sky-400 transition">
                    {item.name}
                  </h3>

                  <p className="text-slate-400 text-sm mt-1">{item.role}</p>
                </div>
              </div>

              {/* Bottom Glow */}
              <div className="absolute -bottom-24 -right-24 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
