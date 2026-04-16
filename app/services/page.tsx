import { 
  Code, Shield, Cloud, Network, MonitorCheck, Megaphone 
} from "lucide-react";

export default function Services() {
  return (
    <main>

      {/* HERO */}
      <section 
        className="py-24 px-6 text-center"
        style={{ background: "var(--primary)", color: "white" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our Services
        </h1>

        <p className="max-w-2xl mx-auto text-lg">
          We provide a full range of technology solutions designed to help your
          business grow, scale, and stay secure.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6 md:px-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          What We Offer
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">

          {[
            "Software Development",
            "Cybersecurity",
            "Cloud Computing",
            "Networking",
            "IT Support",
            "Digital Marketing",
          ].map((service) => (
            <div key={service} className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-semibold">{service}</h3>
            </div>
          ))}

        </div>
      </section>

      {/* DETAILED SERVICES */}

      {/* 1 SOFTWARE */}
      <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Software Development</h2>
          <p className="text-gray-600">
            We build custom software tailored to your business needs. From web
            applications to internal systems, our solutions are scalable,
            efficient, and built for long-term success.
          </p>
        </div>
        <div className="flex items-center justify-center bg-gray-100 h-64 rounded-xl shadow-inner hover:scale-105 transition">
  <Code size={80} className="text-blue-500" />
</div>
      </section>

      {/* 2 CYBER */}
      <section className="py-20 px-6 md:px-10 bg-gray-50 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex items-center justify-center bg-gray-100 h-64 rounded-xl shadow-inner hover:scale-105 transition">
  <Shield size={80} className="text-green-500" />
</div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Cybersecurity</h2>
          <p className="text-gray-600">
            Protect your systems, networks, and data with advanced security
            solutions designed to defend against modern cyber threats.
          </p>
        </div>
      </section>

      {/* 3 CLOUD */}
      <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Cloud Computing</h2>
          <p className="text-gray-600">
            We help businesses transition to secure, scalable cloud environments
            that improve performance, flexibility, and cost efficiency.
          </p>
        </div>
        <div className="flex items-center justify-center bg-gray-100 h-64 rounded-xl shadow-inner hover:scale-105 transition">
  <Cloud size={80} className="text-sky-500" />
</div>
      </section>

      {/* 4 NETWORKING */}
      <section className="py-20 px-6 md:px-10 bg-gray-50 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex items-center justify-center bg-gray-100 h-64 rounded-xl shadow-inner hover:scale-105 transition">
  <Network size={80} className="text-indigo-500" />
</div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Networking</h2>
          <p className="text-gray-600">
            We design and implement secure and reliable network infrastructures
            to keep your business connected and operating smoothly.
          </p>
        </div>
      </section>

      {/* 5 IT SUPPORT */}
      <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">IT Support</h2>
          <p className="text-gray-600">
            From troubleshooting to full IT management, we provide dependable
            support services to ensure your systems run efficiently at all times.
          </p>
        </div>
        <div className="flex items-center justify-center bg-gray-100 h-64 rounded-xl shadow-inner hover:scale-105 transition">
  <MonitorCheck size={80} className="text-emerald-500" />
</div>
      </section>

      {/* 6 MARKETING */}
      <section className="py-20 px-6 md:px-10 bg-gray-50 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex items-center justify-center bg-gray-100 h-64 rounded-xl shadow-inner hover:scale-105 transition">
  <Megaphone size={80} className="text-orange-500" />
</div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Digital Marketing</h2>
          <p className="text-gray-600">
            Grow your online presence with modern marketing strategies that
            increase visibility, engagement, and conversions.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="py-20 px-6 text-center"
        style={{ background: "var(--primary)", color: "white" }}
      >
        <h2 className="text-3xl font-bold mb-6">
          Ready to take your business to the next level?
        </h2>

        <p className="mb-8">
          Let’s build something powerful together.
        </p>

        <a
          href="/contact"
          className="px-8 py-4 rounded-lg bg-white text-black font-semibold"
        >
          Contact Us
        </a>
      </section>

    </main>
  );
}