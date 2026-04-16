export default function About() {
  return (
    <main>

      {/* HERO */}
      <section 
        className="py-24 px-6 text-center"
        style={{ background: "var(--primary)", color: "white" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About ByteHub Solutions
        </h1>

        <p className="max-w-2xl mx-auto text-lg">
          We deliver enterprise-grade software, cybersecurity, and cloud
          solutions designed specifically for small and medium businesses.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 px-6 md:px-10 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>

        <p className="text-gray-600 mb-4">
          ByteHub Solutions is a modern technology company focused on helping
          businesses grow through reliable, scalable, and secure digital
          solutions.
        </p>

        <p className="text-gray-600">
          We understand the challenges small and medium businesses face, and we
          provide tailored solutions that deliver real results without the
          complexity of large enterprise systems.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 px-6 md:px-10 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What We Do</h2>

          <p className="text-gray-600 mb-4">
            We specialize in software development, cybersecurity, cloud
            computing, networking, IT support, and digital marketing — all
            designed to help your business operate efficiently and securely.
          </p>

          <p className="text-gray-600">
            Our goal is to provide solutions that are not only powerful, but
            also practical and easy to integrate into your business.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Enterprise-Level Quality
              </h3>
              <p className="text-gray-600">
                We deliver solutions built to the highest industry standards.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Tailored for Your Business
              </h3>
              <p className="text-gray-600">
                Every solution is customized to your specific needs.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Security First
              </h3>
              <p className="text-gray-600">
                We prioritize protecting your systems and data at every level.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION */}
      <section 
        className="py-20 px-6 text-center"
        style={{ background: "var(--primary)", color: "white" }}
      >
        <h2 className="text-3xl font-bold mb-6">
          Our Mission
        </h2>

        <p className="max-w-2xl mx-auto text-lg">
          To empower businesses with innovative, secure, and scalable
          technology solutions that drive growth and long-term success.
        </p>
      </section>

    </main>
  );
}