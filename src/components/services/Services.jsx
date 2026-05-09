import { FaCode, FaLaptopCode, FaSearch, FaShoppingCart } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Website Design",
    description:
      "We create professional, modern, and visually appealing website designs that improve user experience and build trust for your business.",
  },

  {
    icon: <FaCode />,
    title: "Website Development",
    description:
      "Fast, scalable, and responsive websites developed using modern technologies with performance and reliability in mind.",
  },

  {
    icon: <FaShoppingCart />,
    title: "E-Commerce Development",
    description:
      "Complete e-commerce solutions with responsive product pages, secure checkout systems, and user-friendly shopping experiences.",
  },

  {
    icon: <FaSearch />,
    title: "SEO & Digital Marketing",
    description:
      "Boost your online visibility with SEO optimization and digital marketing strategies that help attract more customers.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-slate-950 text-white py-28">
        <div className="container-width text-center">
          <p className="text-sky-400 uppercase tracking-wider font-semibold">
            Our Services
          </p>

          <h1 className="text-5xl font-bold mt-4">Solutions We Provide</h1>

          <p className="text-slate-300 mt-6 max-w-2xl mx-auto leading-8">
            We help startups, entrepreneurs, and businesses establish a strong
            online presence through modern digital solutions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-10 shadow-lg hover:-translate-y-2 transition duration-300 border border-slate-100 hover:border-sky-200"
              >
                {/* Icon */}
                <div className="text-5xl text-sky-500 mb-6">{service.icon}</div>

                {/* Title */}
                <h2 className="text-3xl font-bold mb-5">{service.title}</h2>

                {/* Description */}
                <p className="text-slate-600 leading-8">
                  {service.description}
                </p>

                {/* Button */}
                <button className="mt-8 bg-sky-500 hover:bg-sky-600 transition text-white px-6 py-3 rounded-xl font-semibold">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-950 text-white py-24">
        <div className="container-width text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready To Build Your Next Website?
          </h2>

          <p className="text-slate-300 mt-6 max-w-2xl mx-auto leading-8">
            Let SW Technologies help you create a strong, modern, and
            professional online presence.
          </p>

          <button className="mt-8 bg-sky-500 hover:bg-sky-600 transition px-8 py-4 rounded-xl font-semibold">
            Contact Us Today
          </button>
        </div>
      </section>
    </>
  );
}
