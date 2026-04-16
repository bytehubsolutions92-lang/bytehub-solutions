export default function Projects() {
  return (
    <main>

      {/* HERO */}
      <section 
        className="py-24 px-6 text-center"
        style={{ background: "var(--primary)", color: "white" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our Projects
        </h1>

        <p className="max-w-2xl mx-auto text-lg">
          A showcase of solutions we’ve built to help businesses grow and succeed.
        </p>
      </section>

      {/* PROJECT GRID */}
      <section className="py-20 px-6 md:px-10 bg-gray-50">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {/* PROJECT 1 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Business Management System
              </h3>
              <p className="text-gray-600">
                A custom platform designed to manage operations, clients,
                and workflows efficiently.
              </p>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Secure Cloud Migration
              </h3>
              <p className="text-gray-600">
                Migrated business infrastructure to a secure and scalable
                cloud environment.
              </p>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Cybersecurity Upgrade
              </h3>
              <p className="text-gray-600">
                Implemented advanced security systems to protect business
                data and networks.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}