import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {/* LOGO + DESCRIPTION */}
        <div>
          <Image 
            src="/logo.png" 
            alt="ByteHub Solutions Logo"
            width={120}
            height={20}
            className="mb-4"
          />

          <p className="text-gray-400">
            ByteHub Solutions delivers enterprise-grade software,
            cybersecurity, and cloud solutions for growing businesses.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-400">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link href="/projects" className="hover:text-white transition">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Software Development</li>
            <li>Cybersecurity</li>
            <li>Cloud Computing</li>
            <li>Networking</li>
            <li>IT Support</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <ul className="space-y-2 text-gray-400">
            <li>
              <a 
                href="https://wa.me/27601452970"
                target="_blank"
                className="hover:text-white"
              >
                WhatsApp Us
              </a>
            </li>
            <li>Email: info@bytehubsolutions.co.za</li>
            <li>Phone: +27 60 145 2970</li>
            <li>Location: Johannesburg, South Africa</li>
          </ul>

          <div className="mt-4">
  <h4 className="mb-3 font-semibold">Follow Us</h4>

  <div className="flex gap-4">

    <a 
      href="https://www.linkedin.com/company/bytehub-solutions"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-[#2A9FD6] hover:scale-110 transition"
    >
      <FaLinkedin size={22} />
    </a>

    <a 
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-[#2A9FD6] hover:scale-110 transition"
    >
      <FaFacebook size={22} />
    </a>

    <a 
      href="https://www.instagram.com/bytehub.solutionsptyltd/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-[#F47B20] hover:scale-110 transition"
    >
      <FaInstagram size={22} />
    </a>
  </div>
</div>
        </div>

        
      </div>

      {/* BOTTOM */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center">

  {/* LEGAL LINKS */}
  <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-4">

    <a href="#" className="hover:text-white transition">Terms of Use</a>
    <a href="#" className="hover:text-white transition">Cookies</a>
    <a href="/privacy" className="hover:text-white transition">Privacy</a>
    <a href="#" className="hover:text-white transition">Sitemap</a>
    <a href="#" className="hover:text-white transition">Accessibility</a>

  </div>

  {/* COPYRIGHT */}
  <p className="text-gray-500 text-sm">
    © {new Date().getFullYear()} ByteHub Solutions. All rights reserved.
  </p>

</div>

    </footer>
  );
}