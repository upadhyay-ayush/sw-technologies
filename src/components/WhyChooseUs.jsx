"use client";

const features = [
  "100% Responsive Design",
  "Modern UI/UX Experience",
  "Fast Project Delivery",
  "Dedicated Client Support",
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-slate-950 text-white">
      <div className="container-width grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-sky-400 uppercase font-semibold tracking-wider">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold mt-4 leading-tight">
            We Create Digital Solutions That Build Trust
          </h2>

          <p className="text-slate-300 mt-6 leading-8">
            Our team focuses on quality, performance, and user experience to
            deliver websites that help businesses grow online.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-sky-500 transition"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
