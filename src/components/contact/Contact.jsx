"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Enter valid phone number";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

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
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-width relative z-10 text-center"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-sky-400/20 bg-sky-400/10 text-sky-400 text-sm font-semibold tracking-[3px] uppercase">
            Contact Us
          </span>

          <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight">
            Let’s Build Something
            <span className="block bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>

          <p className="text-slate-400 mt-8 max-w-3xl mx-auto text-lg leading-8">
            Have a project idea or business requirement? Get in touch with SW
            Technologies and let’s create something extraordinary.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 overflow-hidden bg-[#020617] text-white">
        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/10 blur-[120px]" />

          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400/10 blur-[120px]" />
        </div>

        <div className="container-width relative z-10 grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10"
          >
            <h2 className="text-4xl font-black mb-8">Send Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Input Style */}
              {[
                {
                  type: "text",
                  name: "name",
                  placeholder: "Your Name",
                },

                {
                  type: "email",
                  name: "email",
                  placeholder: "Your Email",
                },

                {
                  type: "text",
                  name: "phone",
                  placeholder: "Phone Number",
                },

                {
                  type: "text",
                  name: "subject",
                  placeholder: "Subject",
                },
              ].map((field, index) => (
                <div key={index}>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-sky-400 transition"
                  />

                  {errors[field.name] && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              {/* Textarea */}
              <div>
                <textarea
                  rows="6"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-sky-400 transition"
                />

                {errors.message && (
                  <p className="text-red-400 text-sm mt-2">{errors.message}</p>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-sky-500 to-cyan-400 hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold shadow-[0_10px_40px_rgba(14,165,233,0.35)]"
              >
                Send Message
                <FaPaperPlane className="group-hover:translate-x-1 transition" />
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10">
              <h2 className="text-4xl font-black mb-10">Contact Details</h2>

              <div className="space-y-8">
                {[
                  {
                    icon: <FaMapMarkerAlt />,
                    title: "Address",
                    value: "New Delhi, India",
                  },

                  {
                    icon: <FaPhoneAlt />,
                    title: "Phone",
                    value: "+91 9876543210",
                  },

                  {
                    icon: <FaEnvelope />,
                    title: "Email",
                    value: "info@swtechnologies.com",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-2xl shadow-[0_10px_40px_rgba(14,165,233,0.35)]">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>

                      <p className="text-slate-400 mt-2 leading-7">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48165244688!2d77.0688997188934!3d28.527280343046214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d8f5e5b5f8f%3A0x5cfc9e4a5e5b6c3c!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1719833300000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
