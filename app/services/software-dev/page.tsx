import Link from "next/link";

const faqs = [
  {
    question: "What types of software do you build?",
    answer:
      "We build web applications, mobile apps, internal business tools, e-commerce platforms, dashboards, and custom enterprise software tailored to your specific needs.",
  },
  {
    question: "How long does a software project take?",
    answer:
      "It depends on the scope. A simple web app can take 2–4 weeks, while a complex enterprise system may take several months. We give you a clear timeline before we start.",
  },
  {
    question: "Do you work with existing codebases?",
    answer:
      "Yes. We can take over, improve, or extend existing projects regardless of the technology stack they were built on.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We work with modern technologies including React, Next.js, Node.js, Python, and various cloud platforms depending on what best suits your project.",
  },
  {
    question: "Will I own the code after the project?",
    answer:
      "Absolutely. You own 100% of the code and intellectual property once the project is delivered and paid for.",
  },
];

export default function SoftwareDevelopment() {
  return (
    <main className="max-w-6xl mx-auto">

      {/* HERO */}
      <section className="text-center py-28 px-6 text-white bg-gradient-to-r from-[#1B2A4A] via-[#2A9FD6] to-[#1B2A4A]">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Software Development
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Custom-built applications designed to scale with your business and solve real problems.
        </p>
        <Link
          href="/contact"
          className="px-8 py-4 rounded-lg text-white font-semibold shadow-md bg-gradient-to-r from-[#F47B20] to-[#2A9FD6] hover:opacity-90 transition"
        >
          Start a Project
        </Link>
      </section>

      {/* WHAT IS SOFTWARE DEVELOPMENT */}
      <section className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#2A9FD6] to-[#F47B20] bg-clip-text text-transparent">
              What is Custom Software Development?
            </h2>
            <p className="text-gray-600 mb-4">
              Custom software development is the process of designing and building software, applications specifically for your business, not a one-size-fits-all solution, but something built around your exact workflows, business model, culture, goals, and users.
            </p>
            <p className="text-gray-600">
              Unlike off-the-shelf software which is softwares you download online, custom softwares grow with your business, integrate with your existing tools, and give you a competitive edge that generic products simply can't match. Moreover with a custom software you are in full control of the app you run, you don't need to rely on some unknown third party to take care of the bugs and maintenance
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop"
              alt="Software Development"
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
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold mb-3">Web Applications</h3>
            <p className="text-gray-600">
              Fast, responsive, and modern web apps built with the latest frameworks to deliver exceptional user experiences.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-3">Mobile Apps</h3>
            <p className="text-gray-600">
              Cross-platform mobile applications for iOS and Android that are intuitive, performant, and scalable.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-semibold mb-3">Enterprise Systems</h3>
            <p className="text-gray-600">
              Large-scale internal systems, ERPs, and business tools built to handle complex workflows and large teams.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-xl font-semibold mb-3">E-Commerce Platforms</h3>
            <p className="text-gray-600">
              Custom online stores built for performance, security, and a seamless shopping experience for your customers.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-semibold mb-3">API & Integrations</h3>
            <p className="text-gray-600">
              We connect your software with third-party services, payment gateways, and external APIs to streamline your operations.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-xl font-semibold mb-3">Maintenance & Support</h3>
            <p className="text-gray-600">
              We don't disappear after delivery. We provide ongoing maintenance, updates, and support to keep your software running smoothly.
            </p>
          </div>

        </div>
      </section>

      {/* IMAGE BANNER */}
      <section className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop"
              alt="Coding"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop"
              alt="Development team"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop"
              alt="Software"
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
          Have a Project in Mind?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Let's build something great together. Tell us about your idea and we'll make it a reality.
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