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
    <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
      <Code size={40} className="mx-auto mb-4 text-blue-500" />
      <h3 className="text-xl font-semibold mb-3">Software Development</h3>
      <p className="text-gray-600">
        Custom-built applications designed to scale with your business.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
      <Shield size={40} className="mx-auto mb-4 text-green-500" />
      <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
      <p className="text-gray-600">
        Protect your systems with advanced security solutions.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
      <Cloud size={40} className="mx-auto mb-4 text-sky-500" />
      <h3 className="text-xl font-semibold mb-3">Cloud Computing</h3>
      <p className="text-gray-600">
        Reliable, scalable cloud infrastructure for modern businesses.
      </p>
    </div>

    {/* CARD 4 */}
    <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
      <Network size={40} className="mx-auto mb-4 text-indigo-500" />
      <h3 className="text-xl font-semibold mb-3">Networking</h3>
      <p className="text-gray-600">
        Secure, stable, and reliable network architecture and design.
      </p>
    </div>

    {/* CARD 5 */}
    <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
      <MonitorCheck size={40} className="mx-auto mb-4 text-emerald-500" />
      <h3 className="text-xl font-semibold mb-3">IT Support</h3>
      <p className="text-gray-600">
        Hardware and software support for enterprises and small businesses.
      </p>
    </div>

    {/* CARD 6 */}
    <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
      <Megaphone size={40} className="mx-auto mb-4 text-orange-500" />
      <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
      <p className="text-gray-600">
        Modern marketing strategies focused on digital growth and visibility.
      </p>
    </div>

  </div>
</section>

      {/* Why choose Us */}
      <section className="py-20 px-6 border-t border-gray-200">
  <h2 className="text-3xl font-bold text-center mb-12 
bg-gradient-to-r from-[#2A9FD6] to-[#F47B20] bg-clip-text text-transparent">
  Why Choose ByteHub Solutions
</h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">

    <div>
      <h3 className="font-bold text-lg mb-2">Enterprise Quality</h3>
      <p>We deliver solutions built to enterprise standards.</p>
    </div>

    <div>
      <h3 className="font-bold text-lg mb-2">Tailored for SMEs</h3>
      <p>Solutions designed specifically for small and medium businesses.</p>
    </div>

    <div>
      <h3 className="font-bold text-lg mb-2">Secure & Reliable</h3>
      <p>Security and reliability are at the core of everything we build.</p>
    </div>

  </div>
</section>
    </main>
  );
}