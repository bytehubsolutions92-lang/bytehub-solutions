import Link from "next/link";

const faqs = [
  {
    question: "Why does my business need cybersecurity?",
    answer:
      "Every business that uses the internet, stores data, or processes payments is a potential target. Cyberattacks can result in data breaches, financial loss, and reputational damage. Strong cybersecurity protects your business, your customers, and your reputation.",
  },
  {
    question: "What is a vulnerability assessment?",
    answer:
      "A vulnerability assessment is a systematic review of your systems to identify security weaknesses before attackers can exploit them. We scan, test, and report on all potential entry points in your infrastructure.",
  },
  {
    question: "How often should we run security audits?",
    answer:
      "We recommend at least once a year, or after any major infrastructure change. For businesses handling sensitive data, quarterly audits are ideal.",
  },
  {
    question: "What happens if we get hacked?",
    answer:
      "We provide incident response services to contain the breach, identify the cause, recover your systems, and implement measures to prevent it from happening again.",
  },
  {
    question: "Do you provide employee security training?",
    answer:
      "Yes. Human error is the leading cause of security breaches. We offer training programs to educate your team on phishing, password hygiene, and safe online practices.",
  },
];

export default function Cybersecurity() {
  return (
    <main className="max-w-6xl mx-auto">

      {/* HERO */}
      <section className="text-center py-28 px-6 text-white bg-gradient-to-r from-[#1B2A4A] via-[#2A9FD6] to-[#1B2A4A]">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Cybersecurity
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Protecting your business from evolving digital threats with enterprise-grade security solutions.
        </p>
        <Link
          href="/contact"
          className="px-8 py-4 rounded-lg text-white font-semibold shadow-md bg-gradient-to-r from-[#F47B20] to-[#2A9FD6] hover:opacity-90 transition"
        >
          Secure My Business
        </Link>
      </section>

      {/* WHAT IS CYBERSECURITY */}
      <section className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#2A9FD6] to-[#F47B20] bg-clip-text text-transparent">
              What is Cybersecurity?
            </h2>
            <p className="text-gray-600 mb-4">
              Cybersecurity is the practice of protecting systems, networks, and data from digital attacks, unauthorized access, and damage, it is basically secutity but for your digital assets. As businesses become more digital, the threats they face grow more sophisticated every day.
            </p>
            <p className="text-gray-600">
              At ByteHub Solutions, we take a proactive approach identifying and eliminating vulnerabilities before they can be exploited by attackers to keep your business protected around the clock.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop"
              alt="Cybersecurity"
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
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-3">Vulnerability Assessments</h3>
            <p className="text-gray-600">
              We scan and test your systems to identify weaknesses before attackers do, giving you a clear picture of your security posture.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-3">Threat Protection</h3>
            <p className="text-gray-600">
              We deploy advanced tools to detect and block malware, ransomware, phishing attempts, and other cyber threats in real time.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-xl font-semibold mb-3">Access Control & Identity</h3>
            <p className="text-gray-600">
              We implement strict access controls and identity management to ensure only the right people access your sensitive systems and data.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-3">Security Audits</h3>
            <p className="text-gray-600">
              We conduct thorough security audits of your infrastructure, applications, and policies to ensure everything meets industry best practices.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">🚨</div>
            <h3 className="text-xl font-semibold mb-3">Incident Response</h3>
            <p className="text-gray-600">
              If a breach occurs, we act fast containing the damage, identifying the cause, and restoring your systems as quickly as possible.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-3">Security Awareness Training</h3>
            <p className="text-gray-600">
              We train your employees to recognize and respond to threats like phishing, social engineering, and unsafe online behaviour.
            </p>
          </div>

        </div>
      </section>

      {/* IMAGE BANNER */}
      <section className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop"
              alt="Security"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&auto=format&fit=crop"
              alt="Hacker protection"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop"
              alt="Data protection"
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
          Is Your Business Protected?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Don't wait for a breach to take security seriously. Let ByteHub Solutions assess and strengthen your defences today.
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