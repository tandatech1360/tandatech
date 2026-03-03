export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          TandaTech
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          Professional IT & Networking Solutions in Johannesburg.
          Reliable on-site support for homes and small businesses.
        </p>

        <div className="flex gap-4">
          <a
            href="https://wa.me/27826490965"
            className="bg-green-500 px-6 py-3 rounded-xl font-semibold hover:bg-green-600"
          >
            WhatsApp Now
          </a>

          <a
            href="tel:+2783XXXXXXX"
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black"
          >
            Call Now
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-900 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Emergency IT Support",
            "Network Installation & Setup",
            "WiFi Optimization",
            "CCTV Installation",
            "PC & Laptop Repairs",
            "On-Site Technical Support"
          ].map((service) => (
            <div
              key={service}
              className="bg-black p-6 rounded-2xl border border-gray-800 hover:border-green-500 transition"
            >
              <h3 className="text-xl font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Why Choose TandaTech?
        </h2>

        <div className="space-y-4 text-gray-300 max-w-2xl mx-auto">
          <p>✔ Same-day response in Johannesburg</p>
          <p>✔ Transparent pricing</p>
          <p>✔ Professional & reliable service</p>
          <p>✔ Home & small business specialists</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gray-900 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Need Immediate IT Assistance?
        </h2>

        <a
          href="https://wa.me/27826490965"
          className="bg-green-500 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-green-600"
        >
          Chat on WhatsApp
        </a>
      </section>

    </main>
  );
}