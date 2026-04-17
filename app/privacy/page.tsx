export default function Privacy() {
  return (
    <main className="px-6 py-20 max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        Privacy Policy
      </h1>

      <p className="text-gray-600 mb-6">
        Last updated: {new Date().getFullYear()}
      </p>

      {/* INTRO */}
      <section className="mb-8">
        <p className="text-gray-600">
          ByteHub Solutions respects your privacy and is committed to protecting
          your personal information. This Privacy Policy explains how we collect,
          use, and safeguard your data.
        </p>
      </section>

      {/* DATA COLLECTION */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Information We Collect
        </h2>

        <p className="text-gray-600">
          We may collect personal information such as your name, email address,
          and any message you submit through our contact form.
        </p>
      </section>

      {/* USAGE */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How We Use Your Information
        </h2>

        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>To respond to your inquiries</li>
          <li>To provide our services</li>
          <li>To improve our website and offerings</li>
        </ul>
      </section>

      {/* SECURITY */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Data Security
        </h2>

        <p className="text-gray-600">
          We take appropriate measures to protect your personal information
          from unauthorized access, disclosure, or misuse.
        </p>
      </section>

      {/* SHARING */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Sharing of Information
        </h2>

        <p className="text-gray-600">
          We do not sell, trade, or rent your personal information to third
          parties.
        </p>
      </section>

      {/* CONTACT */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Contact Us
        </h2>

        <p className="text-gray-600">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>

        <p className="font-semibold mt-2">
          info@bytehubsolutions.com
        </p>
      </section>

    </main>
  );
}