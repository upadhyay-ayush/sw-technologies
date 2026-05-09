"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCode,
  FaBullseye,
  FaRocket,
  FaUsers,
  FaLaptopCode,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Aman Gupta",
    role: "Frontend Developer",
    image: "/300.jpeg",
  },

  {
    name: "Neha Singh",
    role: "UI/UX Designer",
    image: "/neha.jpg",
  },

  {
    name: "Rohit Kumar",
    role: "Backend Developer",
    image: "/300 (2).jpeg",
  },
];

const stats = [
  {
    number: "50+",
    label: "Projects Completed",
    icon: <FaLaptopCode />,
  },

  {
    number: "30+",
    label: "Happy Clients",
    icon: <FaUsers />,
  },

  {
    number: "3+",
    label: "Years Experience",
    icon: <FaRocket />,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-[#020617] text-white py-36">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 blur-[120px]" />

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-width relative z-10 text-center"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-sky-400/20 bg-sky-400/10 text-sky-400 text-sm font-semibold tracking-[3px] uppercase">
            About SW Technologies
          </span>

          <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight">
            We Build Digital
            <span className="block bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Experiences That Matter
            </span>
          </h1>

          <p className="text-slate-400 mt-8 max-w-3xl mx-auto text-lg leading-8">
            We create modern, scalable, and high-performing websites that help
            businesses establish a powerful online presence and grow faster.
          </p>
        </motion.div>
      </section>

      {/* About Company */}
      <section className="relative py-24 bg-[#020617] overflow-hidden text-white">
        <div className="container-width grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-5 py-2 rounded-full border border-sky-400/20 bg-sky-400/10 text-sky-400 text-sm font-semibold tracking-[3px] uppercase">
              Who We Are
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-6 leading-tight">
              A Creative
              <span className="block bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Web Development Agency
              </span>
            </h2>

            <p className="text-slate-400 leading-8 mt-7 text-lg">
              SW Technologies helps businesses, startups, and entrepreneurs
              create strong online identities through responsive, modern, and
              scalable digital solutions.
            </p>

            <p className="text-slate-400 leading-8 mt-5 text-lg">
              Our mission is to deliver innovative experiences that improve user
              engagement, business growth, and brand trust.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid gap-8"
          >
            {/* Mission */}
            <div className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-sky-400/40 transition-all duration-500">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-4xl shadow-[0_10px_40px_rgba(14,165,233,0.35)] mb-7">
                <FaBullseye />
              </div>

              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>

              <p className="text-slate-400 leading-8">
                Deliver high-quality web solutions with outstanding performance,
                user experience, and modern UI/UX design.
              </p>
            </div>

            {/* Vision */}
            <div className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-sky-400/40 transition-all duration-500">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-4xl shadow-[0_10px_40px_rgba(14,165,233,0.35)] mb-7">
                <FaRocket />
              </div>

              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>

              <p className="text-slate-400 leading-8">
                Become a trusted technology partner for businesses worldwide by
                building innovative and impactful digital experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 overflow-hidden bg-[#020617] text-white">
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
              Our Team
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-6">
              Meet Our
              <span className="block bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Creative Experts
              </span>
            </h2>
          </motion.div>

          {/* Team Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden hover:border-sky-400/40 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={500}
                    className="w-full h-[360px] object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="p-7 relative z-10">
                  <h3 className="text-2xl font-bold group-hover:text-sky-400 transition">
                    {member.name}
                  </h3>

                  <p className="text-slate-400 mt-3">{member.role}</p>
                </div>

                {/* Hover Glow */}
                <div className="absolute -bottom-24 -right-24 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 bg-[#020617] overflow-hidden text-white">
        <div className="container-width relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 text-center hover:border-sky-400/40 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl mx-auto bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-4xl shadow-[0_10px_40px_rgba(14,165,233,0.35)] mb-7 group-hover:scale-110 transition duration-500">
                  {item.icon}
                </div>

                {/* Number */}
                <h2 className="text-5xl font-black text-sky-400">
                  {item.number}
                </h2>

                {/* Label */}
                <p className="text-slate-400 mt-5 text-lg">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
