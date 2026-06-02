export default function ClientWaitlist() {
  return (
    <section id="waitlist" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#C9963A] uppercase tracking-[0.3em] text-sm text-center mb-4">
          Client Waitlist
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Luxury Grooming Is Coming Soon
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Join the waitlist to be notified when Be My Barber launches in your area.
        </p>

        <form
          action="https://formspree.io/f/mykvqzdd"
          method="POST"
          className="space-y-6"
        >
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            className="w-full bg-[#111827] border border-[#C9963A]/30 rounded-xl p-4"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full bg-[#111827] border border-[#C9963A]/30 rounded-xl p-4"
          />

          <input
            name="city"
            type="text"
            placeholder="City / State"
            required
            className="w-full bg-[#111827] border border-[#C9963A]/30 rounded-xl p-4"
          />
<input
  type="hidden"
  name="_redirect"
  value="http://localhost:5173/thank-you-client"
/>
          <button
            type="submit"
            className="w-full bg-[#C9963A] text-black font-semibold py-4 rounded-xl hover:opacity-90 transition"
          >
            Join the Waitlist
          </button>
        </form>
      </div>
    </section>
  );
}