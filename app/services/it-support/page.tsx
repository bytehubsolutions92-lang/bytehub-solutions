import Link from "next/link";

const faqs = [
  {
    question: "What does IT support cover?",
    answer:
      "Our IT support covers hardware and software troubleshooting, device setup and configuration, system maintenance, user account management, printer and peripheral support, and general technical assistance for your team.",
  },
  {
    question: "Do you offer remote support?",
    answer:
      "Yes. Most issues can be resolved remotely without any need for an on-site visit. We use secure remote access tools to diagnose and fix problems quickly.",
  },
  {
    question: "How fast do you respond to support requests?",
    answer:
      "We aim to respond to all support requests within 1 hour during business hours. Critical issues are prioritized and addressed immediately.",
  },
  {
    question: "Can you support both Windows and Mac devices?",
    answer:
      "Yes. We provide support for Windows, macOS, iOS, and Android devices across your entire organization.",
  },
  {
    question: "Do you offer monthly support packages?",
    answer:
      "Yes. We offer flexible monthly support packages tailored to the size and needs of your business so you always have reliable IT support available.",
  },
];

export default function ITSupport() {
  return (
    <main className="max-w-6xl mx-auto">

      {/* HERO */}
      <section className="text-center py-28 px-6 text-white bg-gradient-to-r from-[#1B2A4A] via-[#2A9FD6] to-[#1B2A4A]">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          IT Support
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Fast, reliable, and professional IT support for businesses of all sizes.
        </p>
        <Link
          href="/contact"
          className="px-8 py-4 rounded-lg text-white font-semibold shadow-md bg-gradient-to-r from-[#F47B20] to-[#2A9FD6] hover:opacity-90 transition"
        >
          Get Support
        </Link>
      </section>

      {/* WHAT IS IT SUPPORT */}
      <section className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#2A9FD6] to-[#F47B20] bg-clip-text text-transparent">
              What is IT Support?
            </h2>
            <p className="text-gray-600 mb-4">
              IT support is the ongoing assistance and maintenance that keeps your business's technology running smoothly. From fixing hardware issues to troubleshooting software problems, IT support ensures your team can work without technical interruptions.
            </p>
            <p className="text-gray-600">
              At ByteHub Solutions, we act as your dedicated IT team available when you need us, proactive in preventing problems, and committed to keeping your technology in peak condition.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop"
              alt="IT Support"
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
            <div className="text-4xl mb-4">🖥️</div>
            <h3 className="text-xl font-semibold mb-3">Hardware Support</h3>
            <p className="text-gray-600">
              We diagnose and repair hardware issues including computers, laptops, printers, and peripherals to keep your equipment running.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-semibold mb-3">Software Troubleshooting</h3>
            <p className="text-gray-600">
              We resolve software crashes, errors, compatibility issues, and performance problems across all your business applications.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold mb-3">Device Setup & Configuration</h3>
            <p className="text-gray-600">
              We set up and configure new devices, install software, and get your team up and running with minimal downtime.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold mb-3">Remote Support</h3>
            <p className="text-gray-600">
              Most issues can be resolved remotely. We connect securely to your devices and fix problems fast without any disruption.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold mb-3">System Maintenance</h3>
            <p className="text-gray-600">
              We perform regular system updates, patches, and health checks to keep your infrastructure secure and performing optimally.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">👤</div>
            <h3 className="text-xl font-semibold mb-3">User Account Management</h3>
            <p className="text-gray-600">
              We manage user accounts, permissions, and access rights to ensure your team has the right access to the right tools.
            </p>
          </div>

        </div>
      </section>

      {/* IMAGE BANNER */}
      <section className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop"
              alt="IT team"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop"
              alt="Tech support"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop"
              alt="Support desk"
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
          Need Reliable IT Support?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Let ByteHub Solutions be your dedicated IT team. We keep your technology running so you can focus on your business.
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