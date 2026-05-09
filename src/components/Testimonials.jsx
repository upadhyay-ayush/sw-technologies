"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    review:
      "SW Technologies delivered an amazing website for our business. Professional and highly responsive team.",
  },

  {
    name: "Priya Verma",
    review:
      "The design quality and responsiveness exceeded our expectations. Highly recommended.",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-slate-100">
      <div className="container-width">
        <div className="text-center mb-16">
          <p className="text-sky-500 font-semibold uppercase tracking-wider">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold mt-3">What Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <p className="text-slate-600 leading-8 text-lg">
                “{item.review}”
              </p>

              <h3 className="mt-6 text-xl font-semibold">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
