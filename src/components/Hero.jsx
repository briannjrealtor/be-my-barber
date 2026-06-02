export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <img
        src="/logo.png"
        alt="Be My Barber"
        className="w-56 mb-6"
      />

      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Luxury Grooming Delivered
      </h1>

      <p className="max-w-2xl text-xl text-gray-300 mb-8">
        America's Marketplace for Independent Mobile Barbers.
      </p>

      <div className="flex gap-4">
        <a
          href="#apply"
          className="bg-[#C9963A] text-black px-6 py-3 rounded-lg font-semibold"
        >
          Apply as a Barber
        </a>
<a
  href="/for-barbers"
  className="border border-[#C9963A] px-6 py-3 rounded-lg"
>
  For Barbers
</a>
        <a
          href="#waitlist"
          className="border border-[#C9963A] px-6 py-3 rounded-lg"
        >
          Join Waitlist
        </a>
      </div>
    </section>
  );
}