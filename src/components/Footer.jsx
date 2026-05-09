import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">SW Technologies</h2>

          <p className="text-slate-300">
            We build modern and responsive websites for startups and businesses.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-slate-300">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>

          <p className="text-slate-300">info@swtechnologies.com</p>

          <p className="text-slate-300 mt-2">+91 9876543210</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4 text-xl">
            <FaFacebookF className="hover:text-sky-400 cursor-pointer transition" />
            <FaInstagram className="hover:text-sky-400 cursor-pointer transition" />
            <FaLinkedinIn className="hover:text-sky-400 cursor-pointer transition" />
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-400">
        © 2026 SW Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
