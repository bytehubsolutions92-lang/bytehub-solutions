import Link from "next/link";

const faqs = [
  {
    question: "What digital marketing services do you offer?",
    answer:
      "We offer social media management, search engine optimization (SEO), Google Ads, content marketing, email marketing, and website analytics and reporting.",
  },
  {
    question: "How long before I see results?",
    answer:
      "It depends on the strategy. Paid advertising can generate results within days, while SEO and organic growth typically take 3–6 months to show significant impact. We set realistic expectations from the start.",
  },
  {
    question: "Do you manage social media accounts?",
    answer:
      "Yes. We create content, schedule posts, engage with your audience, and grow your following across platforms like Instagram, Facebook, LinkedIn, and more.",
  },
  {
    question: "Will I get reports on performance?",
    answer:
      "Absolutely. We provide regular reports showing key metrics like traffic, engagement, leads, and conversions so you always know exactly how your campaigns are performing.",
  },
  {
    question: "Can you help with Google Ads?",
    answer:
      "Yes. We set up, manage, and optimize Google Ads campaigns to drive targeted traffic to your website and maximize your return on ad spend.",
  },
];

export default function DigitalMarketing() {
  return (
    <main className="max-w-6xl mx-auto">

      {/* HERO */}
      <section className="text-center py-28 px-6 text-white bg-gradient-to-r from-[#1B2A4A] via-[#2A9FD6] to-[#1B2A4A]">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Digital Marketing
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Modern marketing strategies that grow your brand, drive traffic, and generate real results.
        </p>
        <Link
          href="/contact"
          className="px-8 py-4 rounded-lg text-white font-semibold shadow-md bg-gradient-to-r from-[#F47B20] to-[#2A9FD6] hover:opacity-90 transition"
        >
          Grow My Business
        </Link>
      </section>

      {/* WHAT IS DIGITAL MARKETING */}
      <section className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#2A9FD6] to-[#F47B20] bg-clip-text text-transparent">
              What is Digital Marketing?
            </h2>
            <p className="text-gray-600 mb-4">
              Digital marketing is the promotion of your business through online channels, search engines, social media, email, and websites. It allows you to reach your target audience where they already spend their time and convert them into loyal customers.
            </p>
            <p className="text-gray-600">
              At ByteHub Solutions, we build data-driven digital marketing strategies tailored to your business goals, helping you stand out in a crowded market and grow consistently.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&auto=format&fit=crop"
              alt="Digital Marketing"
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
            <div className="text-4xl mb-4">🔎</div>
            <h3 className="text-xl font-semibold mb-3">SEO</h3>
            <p className="text-gray-600">
              We optimize your website to rank higher on Google, driving organic traffic from people actively searching for your products or services.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-3">Social Media Management</h3>
            <p className="text-gray-600">
              We manage your social media presence, creating content, growing your audience, and engaging with followers across all major platforms.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">📢</div>
            <h3 className="text-xl font-semibold mb-3">Paid Advertising</h3>
            <p className="text-gray-600">
              We run and optimize Google Ads and social media ad campaigns that target the right audience and maximize your return on investment.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">✍️</div>
            <h3 className="text-xl font-semibold mb-3">Content Marketing</h3>
            <p className="text-gray-600">
              We create compelling blog posts, articles, and web content that build your authority, improve SEO, and attract your ideal customers.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-semibold mb-3">Email Marketing</h3>
            <p className="text-gray-600">
              We design and send targeted email campaigns that nurture leads, retain customers, and drive repeat business for your brand.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-3">Analytics & Reporting</h3>
            <p className="text-gray-600">
              We track, measure, and report on all your marketing activity so you always know what's working and where to invest your budget.
            </p>
          </div>

        </div>
      </section>

      {/* IMAGE BANNER */}
      <section className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop"
              alt="Social media"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
              alt="Marketing analytics"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
              alt="Marketing team"
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
          Ready to Grow Online?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Let ByteHub Solutions build and execute a digital marketing strategy that delivers real, measurable growth for your business.
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