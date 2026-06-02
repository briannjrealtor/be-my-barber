export default function ThankYouClient() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-[#0E1621]">
      <div className="max-w-2xl text-center">
        <p className="text-[#C9963A] uppercase tracking-[0.3em] text-sm mb-4">
          You're On The Waitlist
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Be My Barber
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Thank you for joining the waitlist. We'll notify you when luxury grooming services become available in your area.
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