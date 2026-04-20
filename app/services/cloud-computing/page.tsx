import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "What is cloud computing?",
    answer:
      "Cloud computing is the delivery of computing resources(storage, servers, databases, networking) over the internet, on demand. Instead of buying, setting up, maintaining physical hardware on-site, businesses can get these resources remotely and can scale them vertially or horizontally as needed at the time.",
  },
  {
    question: "Is cloud computing secure?",
    answer:
      "Yes. Leading cloud providers invest heavily in security. At ByteHub, we layer additional security configurations, access controls, zero trust policy and monitoring on top of your cloud environment to keep your data safe.",
  },
  {
    question: "How long does it take to migrate to the cloud?",
    answer:
      "It depends on the size and complexity of your infrastructure. A small business migration can take as little as a few days, while larger setups may take a few weeks. We handle the entire process for you.",
  },
  {
    question: "Will there be downtime during migration?",
    answer:
      "We plan migrations carefully to minimize or eliminate downtime. In most cases, your business continues operating normally throughout the process.",
  },
  {
    question: "Which cloud platform do you use?",
    answer:
      "We work with all major platforms including AWS, Microsoft Azure, and Google Cloud. We recommend the best fit based on your business needs and budget.",
  },
];

export default function CloudComputing() {
  return (
    <main className="max-w-6xl mx-auto">

      {/* HERO */}
      <section className="text-center py-28 px-6 text-white bg-gradient-to-r from-[#1B2A4A] via-[#2A9FD6] to-[#1B2A4A]">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Cloud Computing
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Reliable, scalable, and secure cloud infrastructure built for modern businesses.
        </p>
        <Link
          href="/contact"
          className="px-8 py-4 rounded-lg text-white font-semibold shadow-md bg-gradient-to-r from-[#F47B20] to-[#2A9FD6] hover:opacity-90 transition"
        >
          Get Started
        </Link>
      </section>

      {/* WHAT IS CLOUD COMPUTING */}
      <section className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#2A9FD6] to-[#F47B20] bg-clip-text text-transparent">
              What is Cloud Computing?
            </h2>
            <p className="text-gray-600 mb-4">
              Cloud computing is the delivery of computing resources(storage, servers, databases, networking) over the internet, on demand. Instead of buying, setting up, maintaining physical hardware on-site, businesses can get these resources remotely and can scale them vertially or horizontally as needed at the time.
            </p>
            <p className="text-gray-600">
              Cloud computing enables your busines to move faster, reduce costs, and focus on what matters most, while leaving the infrastructure to the experts.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop"
              alt="Cloud Computing"
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
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-xl font-semibold mb-3">Cloud Migration</h3>
            <p className="text-gray-600">
              We help move your existing infrastructure and applications to the cloud seamlessly with minimal disruption to your operations.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold mb-3">Cloud Setup & Configuration</h3>
            <p className="text-gray-600">
              We design and configure a cloud environment from scratch personalised for your business with emphasis on performance, security, and cost efficiency.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-3">Cloud Monitoring</h3>
            <p className="text-gray-600">
              We monitor your cloud infrastructure 24/7, ensuring uptime, performance, and security at all times.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">💾</div>
            <h3 className="text-xl font-semibold mb-3">Backup & Disaster Recovery</h3>
            <p className="text-gray-600">
              We implement automated cloud backups and disaster recovery plans so your data is always protected and recoverable.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-3">Scalable Infrastructure</h3>
            <p className="text-gray-600">
              We build infrastructure that grows with your business, flexible to scale up during peak times and down when you need less resources.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-3">Cloud Security</h3>
            <p className="text-gray-600">
              We apply best-practice security configurations, access controls, and encryption to keep your cloud environment safe.
            </p>
          </div>

        </div>
      </section>

      {/* IMAGE BANNER */}
      <section className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&auto=format&fit=crop"
              alt="Cloud servers"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop"
              alt="Data center"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop"
              alt="Cloud network"
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
          Ready to Move to the Cloud?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Let ByteHub Solutions design and manage a cloud environment tailored to your business needs.
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