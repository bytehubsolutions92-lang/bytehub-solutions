import Link from "next/link";

const faqs = [
  {
    question: "What is network infrastructure?",
    answer:
      "Network infrastructure refers to the hardware, software, and services that make up your business's communication and data systems this primary including routers, switches, firewalls, wireless access points, and the connections between them.",
  },
  {
    question: "How do I know if my network needs an upgrade?",
    answer:
      "Signs include slow internet speeds, frequent disconnections, difficulty supporting remote workers, or an inability to handle the number of devices on your network. We offer free assessments to evaluate your current setup.",
  },
  {
    question: "Can you set up networks for multiple office locations?",
    answer:
      "Yes. We design and implement multi-site networks that connect all your locations securely, including VPN solutions for remote teams.",
  },
  {
    question: "How do you secure a business network?",
    answer:
      "We use firewalls, VLANs, intrusion detection systems, access controls, and regular monitoring to keep your network protected from both internal and external threats.",
  },
  {
    question: "Do you provide ongoing network support?",
    answer:
      "Yes. We offer managed network services where we monitor, maintain, and support your network infrastructure on an ongoing basis so you can focus on running your business.",
  },
];

export default function Networking() {
  return (
    <main className="max-w-6xl mx-auto">

      {/* HERO */}
      <section className="text-center py-28 px-6 text-white bg-gradient-to-r from-[#1B2A4A] via-[#2A9FD6] to-[#1B2A4A]">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Networking
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Secure, stable, and reliable network architecture designed to keep your business connected.
        </p>
        <Link
          href="/contact"
          className="px-8 py-4 rounded-lg text-white font-semibold shadow-md bg-gradient-to-r from-[#F47B20] to-[#2A9FD6] hover:opacity-90 transition"
        >
          Get Connected
        </Link>
      </section>

      {/* WHAT IS NETWORKING */}
      <section className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#2A9FD6] to-[#F47B20] bg-clip-text text-transparent">
              What is Computer Networking?
            </h2>
            <p className="text-gray-600 mb-4">
              Computer networking is the backbone of your IT infrastructure. It connects your devices, systems, and people enabling communication, data sharing, and access to the tools your team needs to work effectively.
            </p>
            <p className="text-gray-600">
              A poorly designed network leads to slow speeds, security gaps, and costly downtime. ByteHub Solutions designs and manages networks built for performance, security, and scalability from the ground up.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop"
              alt="Networking"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#2A9FD6] to-[#F47B20] bg-clip-text text-transparent">
          What We Do
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-semibold mb-3">Network Design & Setup</h3>
            <p className="text-gray-600">
              We design and implement network infrastructure tailored to your business size, layout, and requirements from scratch.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">📡</div>
            <h3 className="text-xl font-semibold mb-3">Wireless Networking</h3>
            <p className="text-gray-600">
              We set up fast, reliable, and secure WiFi across your office or multiple locations with full coverage and no dead zones.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-xl font-semibold mb-3">Firewall & Security</h3>
            <p className="text-gray-600">
              We configure and manage firewalls and network security tools to protect your business from unauthorized access and threats.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-semibold mb-3">VPN Solutions</h3>
            <p className="text-gray-600">
              We set up secure VPNs so your remote team can access company resources safely from anywhere in the world.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-3">Network Monitoring</h3>
            <p className="text-gray-600">
              We monitor your network around the clock, identifying and resolving performance issues before they affect your business.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold mb-3">Network Upgrades</h3>
            <p className="text-gray-600">
              We assess and upgrade outdated network infrastructure to modern standards, improving speed, reliability, and security.
            </p>
          </div>

        </div>
      </section>

      {/* IMAGE BANNER */}
      <section className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop"
              alt="Network cables"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format&fit=crop"
              alt="Server room"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&auto=format&fit=crop"
              alt="Network setup"
              className="w-full h-56 object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#2A9FD6] to-[#F47B20] bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 group cursor-pointer"
            >
              <summary className="font-semibold text-[#1B2A4A] flex justify-between items-center list-none">
                {faq.question}
                <span className="text-[#2A9FD6] group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center border-t border-gray-200">
        <h2 className="text-3xl font-bold mb-4 text-[#1B2A4A]">
          Need a Reliable Network?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Let ByteHub Solutions design and manage a network that keeps your business running smoothly every day.
        </p>
        <Link
          href="/contact"
          className="px-8 py-4 rounded-lg text-white font-semibold shadow-md bg-gradient-to-r from-[#F47B20] to-[#2A9FD6] hover:opacity-90 transition"
        >
          Contact Us Today
        </Link>
      </section>

    </main>
  );
}