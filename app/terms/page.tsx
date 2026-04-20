export default function Terms() {
  return (
    <main className="px-6 py-20 max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        Terms of Service
      </h1>

      <p className="text-gray-600 mb-6">
        Last updated: {new Date().getFullYear()}
      </p>

      {/* INTRO */}
      <section className="mb-8">
        <p className="text-gray-600">
          Welcome to ByteHub Solutions. By accessing or using our website,
          you agree to be bound by these Terms of Service.
        </p>
      </section>

      {/* USE OF SITE */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Use of Our Website
        </h2>

        <p className="text-gray-600">
          You agree to use this website only for lawful purposes and in a way
          that does not infringe the rights of others or restrict their use
          of the website.
        </p>
      </section>

      {/* SERVICES */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Our Services
        </h2>

        <p className="text-gray-600">
          ByteHub Solutions provides software development, cybersecurity,
          cloud computing, networking, IT support, and digital marketing services.
          All services are subject to separate agreements where applicable.
        </p>
      </section>

      {/* LIABILITY */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Limitation of Liability
        </h2>

        <p className="text-gray-600">
          We are not liable for any direct, indirect, or incidental damages
          arising from the use or inability to use this website.
        </p>
      </section>

      {/* ACCURACY */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Accuracy of Information
        </h2>

        <p className="text-gray-600">
          While we strive to keep information up to date, we do not guarantee
          that all content is accurate, complete, or current.
        </p>
      </section>

      {/* CHANGES */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Changes to Terms
        </h2>

        <p className="text-gray-600">
          We may update these Terms of Service at any time. Continued use
          of the website constitutes acceptance of those changes.
        </p>
      </section>

      {/* CONTACT */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Contact Us
        </h2>

        <p className="text-gray-600">
          If you have any questions about these Terms, please contact us at:
        </p>

        <p className="font-semibold mt-2">
          info@bytehubsolutions.co.za
        </p>
      </section>

    </main>
  );
}