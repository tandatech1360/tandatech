export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        TandaTech
      </h1>

      <p className="text-lg text-gray-300 max-w-2xl mb-8">
        Professional IT & Networking Solutions in Johannesburg.
        On-site support for homes and small businesses.
      </p>

      <div className="flex gap-4">
        <a
          href="https://wa.me/27826490965"
          className="bg-green-500 px-6 py-3 rounded-xl font-semibold hover:bg-green-600"
        >
          WhatsApp Now
        </a>

        <a
          href="tel:27826490965"
          className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black"
        >
          Call Now
        </a>
      </div>
    </main>
  );
}