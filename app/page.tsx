import { Shield, Cloud, Code, Network, MonitorCheck, Megaphone } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-6x1 mx-auto">

      {/* HERO */}
      <section 
  className="text-center py-28 px-6 text-white bg-gradient-to-r from-[#1B2A4A] via-[#2A9FD6] to-[#1B2A4A]"
>
  <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
    Building Secure & Scalable <br /> Digital Solutions
  </h1>

  <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
    ByteHub Solutions helps small and medium businesses grow with 
    enterprise-grade software, cybersecurity, and cloud services.
  </p>

  <div className="flex justify-center gap-4 flex-wrap">
    <button 
      className="px-8 py-4 rounded-lg text-white font-semibold shadow-md 
bg-gradient-to-r from-[#F47B20] to-[#2A9FD6] hover:opacity-90 transition"
    >
      Get Started
    </button>

    <a 
      href="/contact"
      className="px-8 py-4 rounded-lg border border-white hover:bg-white hover:text-black transition"
    >
      Contact Us
    </a>
  </div>
</section>

{/* SERVICES */}
<section className="py-20 px-6 border-t border-gray-200">
  <h2 className="text-3xl font-bold text-center mb-12 
bg-gradient-to-r from-[#2A9FD6] to-[#F47B20] bg-clip-text text-transparent">
    Our Services
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

    {/* CARD 1 */}
    <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center flex flex-col">
      <Code size={40} className="mx-auto mb-4 text-blue-500" />
      <h3 className="text-xl font-semibold mb-3">Software Development</h3>
      <p className="text-gray-600 flex-grow">
        Custom-built applications designed to scale with your business.
      </p>
      <div className="mt-6">
        <a href="/services/software-dev"
          className="inline-block px-6 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#2A9FD6] to-[#1B2A4A] hover:opacity-90 transition">
          Read More
        </a>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center flex flex-col">
      <Shield size={40} className="mx-auto mb-4 text-green-500" />
      <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
      <p className="text-gray-600 flex-grow">
        Protect your systems with advanced security solutions.
      </p>
      <div className="mt-6">
        <a href="/services/cybersecurity"
          className="inline-block px-6 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#2A9FD6] to-[#1B2A4A] hover:opacity-90 transition">
          Read More
        </a>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center flex flex-col">
      <Cloud size={40} className="mx-auto mb-4 text-sky-500" />
      <h3 className="text-xl font-semibold mb-3">Cloud Computing</h3>
      <p className="text-gray-600 flex-grow">
        Reliable, scalable cloud infrastructure for modern businesses.
      </p>
      <div className="mt-6">
        <a href="/services/cloud-computing"
          className="inline-block px-6 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#2A9FD6] to-[#1B2A4A] hover:opacity-90 transition">
          Read More
        </a>
      </div>
    </div>

    {/* CARD 4 */}
    <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center flex flex-col">
      <Network size={40} className="mx-auto mb-4 text-indigo-500" />
      <h3 className="text-xl font-semibold mb-3">Networking</h3>
      <p className="text-gray-600 flex-grow">
        Secure, stable, and reliable network architecture and design.
      </p>
      <div className="mt-6">
        <a href="/services/networking"
          className="inline-block px-6 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#2A9FD6] to-[#1B2A4A] hover:opacity-90 transition">
          Read More
        </a>
      </div>
    </div>

    {/* CARD 5 */}
    <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center flex flex-col">
      <MonitorCheck size={40} className="mx-auto mb-4 text-emerald-500" />
      <h3 className="text-xl font-semibold mb-3">IT Support</h3>
      <p className="text-gray-600 flex-grow">
        IT support for enterprises and small businesses.
      </p>
      <div className="mt-6">
        <a href="/services/it-support"
          className="inline-block px-6 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#2A9FD6] to-[#1B2A4A] hover:opacity-90 transition">
          Read More
        </a>
      </div>
    </div>

    {/* CARD 6 */}
    <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center flex flex-col">
      <Megaphone size={40} className="mx-auto mb-4 text-orange-500" />
      <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
      <p className="text-gray-600 flex-grow">
        Modern marketing strategies focused on digital growth and visibility.
      </p>
      <div className="mt-6">
        <a href="/services/digital-marketing"
          className="inline-block px-6 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#2A9FD6] to-[#1B2A4A] hover:opacity-90 transition">
          Read More
        </a>
      </div>
    </div>

  </div>
</section>
    </main>
  );
}