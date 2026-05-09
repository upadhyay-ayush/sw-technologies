"use client";

import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaSearch, FaShoppingCart } from "react-icons/fa";

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
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <p className="text-sky-500 font-semibold uppercase tracking-wider">
            Our Services
          </p>

          <h2 className="text-4xl font-bold mt-3">What We Offer</h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-slate-50 rounded-3xl p-8 shadow-lg border border-slate-100 hover:border-sky-200 transition"
            >
              <div className="text-5xl text-sky-500 mb-6">{service.icon}</div>

              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>

              <p className="text-slate-600 leading-7">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
