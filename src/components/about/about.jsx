import Image from "next/image";

const teamMembers = [
  {
    name: "Aman Gupta",
    role: "Frontend Developer",
    image: "/300.jpg",
  },

  {
    name: "Neha Singh",
    role: "UI/UX Designer",
    image: "/300 (1).jpg",
  },

  {
    name: "Rohit Kumar",
    role: "Backend Developer",
    image: "/300 (2).jpg",
  },
];

const stats = [
  {
    number: "50+",
    label: "Projects Completed",
  },

  {
    number: "30+",
    label: "Happy Clients",
  },

  {
    number: "3+",
    label: "Years Experience",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-slate-950 text-white py-28">
        <div className="container-width text-center">
          <h1 className="text-5xl font-bold">About Us</h1>

          <p className="text-slate-300 mt-6 max-w-2xl mx-auto">
            We create powerful digital experiences that help businesses grow
            online.
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="section-padding bg-white">
        <div className="container-width grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sky-500 uppercase font-semibold tracking-wider">
              Who We Are
            </p>

            <h2 className="text-4xl font-bold mt-4 leading-tight">
              A Creative Web Development Company
            </h2>

            <p className="text-slate-600 leading-8 mt-6">
              SW Technologies helps businesses, startups, and entrepreneurs
              establish a strong online presence through modern, responsive, and
              scalable websites.
            </p>

            <p className="text-slate-600 leading-8 mt-4">
              Our mission is to deliver innovative digital solutions that
              improve business growth, user engagement, and brand trust.
            </p>
          </div>

          <div className="bg-slate-100 rounded-3xl p-10 shadow-xl">
            <h3 className="text-3xl font-bold mb-6">Mission & Vision</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">Our Mission</h4>

                <p className="text-slate-600 leading-7">
                  Deliver high-quality web solutions with excellent performance
                  and modern UI/UX.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-2">Our Vision</h4>

                <p className="text-slate-600 leading-7">
                  Become a trusted technology partner for businesses worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <p className="text-sky-500 uppercase tracking-wider font-semibold">
              Our Team
            </p>

            <h2 className="text-4xl font-bold mt-3">Meet Our Experts</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-[320px] object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{member.name}</h3>

                  <p className="text-slate-500 mt-2">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-slate-950 text-white">
        <div className="container-width grid md:grid-cols-3 gap-8 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-10"
            >
              <h2 className="text-5xl font-bold text-sky-400">{item.number}</h2>

              <p className="text-slate-300 mt-4 text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
