export default function ThankYouBarber() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-[#0E1621]">
      <div className="max-w-2xl text-center">
        <p className="text-[#C9963A] uppercase tracking-[0.3em] text-sm mb-4">
          Application Received
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Thank You for Applying
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Our team will review your submission and contact qualified applicants as Be My Barber expands into new markets.
        </p>

        <a
          href="/"
          className="inline-block bg-[#C9963A] text-black font-semibold px-8 py-4 rounded-xl"
        >
          Return Home
        </a>
      </div>
    </section>
  );
}