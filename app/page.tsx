import { Shield, Cloud, Code } from "lucide-react";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section 
        className="text-center py-24 px-6"
        style={{ background: "var(--primary)", color: "white" }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          ByteHub Solutions
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Enterprise-grade software development, cybersecurity, 
          and cloud computing — built specifically for small 
          and medium businesses.
        </p>

        <button 
          className="px-8 py-4 rounded text-white font-semibold text-lg transition hover:scale-105"
          style={{ background: "var(--accent)" }}
        >
          Get Started
        </button>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 md:px-10">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="p-6 rounded-xl shadow hover:shadow-xl transition text-center">
            <Code size={40} className="mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-2">
              Software Development
            </h3>
            <p>
              Custom-built applications designed to scale with your business.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-6 rounded-xl shadow hover:shadow-xl transition text-center">
            <Shield size={40} className="mx-auto mb-4 text-green-500" />
            <h3 className="text-xl font-bold mb-2">
              Cybersecurity
            </h3>
            <p>
              Protect your systems with advanced security solutions.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-6 rounded-xl shadow hover:shadow-xl transition text-center">
            <Cloud size={40} className="mx-auto mb-4 text-sky-500" />
            <h3 className="text-xl font-bold mb-2">
              Cloud Computing
            </h3>
            <p>
              Reliable, scalable cloud infrastructure for modern businesses.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}