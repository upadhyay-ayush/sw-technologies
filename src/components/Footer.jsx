"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#020617] text-white pt-24 pb-8">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-sky-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/10 blur-[120px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="container-width relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          {/* Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black">
              SW{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>

            <p className="text-slate-400 leading-8 mt-6">
              We create modern, responsive, and high-performing websites that
              help startups and businesses grow digitally.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg text-slate-300 hover:bg-sky-500 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-7">Quick Links</h3>

            <ul className="space-y-5">
              {["Home", "About", "Services", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link
                    href="/"
                    className="group flex items-center gap-3 text-slate-400 hover:text-sky-400 transition"
                  >
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-7">Services</h3>

            <ul className="space-y-5 text-slate-400">
              <li className="hover:text-sky-400 transition cursor-pointer">
                Website Design
              </li>

              <li className="hover:text-sky-400 transition cursor-pointer">
                Web Development
              </li>

              <li className="hover:text-sky-400 transition cursor-pointer">
                E-Commerce
              </li>

              <li className="hover:text-sky-400 transition cursor-pointer">
                SEO Optimization
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-7">Contact Us</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-slate-500 text-sm">Email</p>
                  <p className="text-slate-300">info@swtechnologies.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-slate-500 text-sm">Phone</p>
                  <p className="text-slate-300">+91 9876543210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-slate-500 text-sm">Location</p>
                  <p className="text-slate-300">India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>© 2026 SW Technologies. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <p className="hover:text-sky-400 transition cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-sky-400 transition cursor-pointer">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
