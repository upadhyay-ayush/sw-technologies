"use client";

import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

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
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(formData.email)
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
      {/* Banner */}
      <section className="bg-slate-950 text-white py-28">
        <div className="container-width text-center">
          <p className="text-sky-400 uppercase tracking-wider font-semibold">
            Contact Us
          </p>

          <h1 className="text-5xl font-bold mt-4">Let’s Work Together</h1>

          <p className="text-slate-300 mt-6 max-w-2xl mx-auto leading-8">
            Have a project idea or business requirement? Get in touch with SW
            Technologies today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-width grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-8">Send Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-xl px-5 py-4 outline-none focus:border-sky-500"
                />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-xl px-5 py-4 outline-none focus:border-sky-500"
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-xl px-5 py-4 outline-none focus:border-sky-500"
                />

                {errors.phone && (
                  <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-xl px-5 py-4 outline-none focus:border-sky-500"
                />

                {errors.subject && (
                  <p className="text-red-500 text-sm mt-2">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows="6"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-xl px-5 py-4 outline-none focus:border-sky-500"
                />

                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 transition text-white px-8 py-4 rounded-xl font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">
              <h2 className="text-3xl font-bold mb-8">Contact Details</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="text-sky-500 text-2xl mt-1">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">Address</h3>

                    <p className="text-slate-600 mt-2">New Delhi, India</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-sky-500 text-2xl mt-1">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">Phone</h3>

                    <p className="text-slate-600 mt-2">+91 9876543210</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-sky-500 text-2xl mt-1">
                    <FaEnvelope />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">Email</h3>

                    <p className="text-slate-600 mt-2">
                      info@swtechnologies.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-3xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48165244688!2d77.0688997188934!3d28.527280343046214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d8f5e5b5f8f%3A0x5cfc9e4a5e5b6c3c!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1719833300000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
