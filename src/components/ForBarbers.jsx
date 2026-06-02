export default function ForBarbers() {
  return (
    <section className="min-h-screen bg-[#0E1621] text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <a href="/" className="text-[#C9963A] text-sm uppercase tracking-[0.25em]">
          ← Back Home
        </a>

        <div className="mt-16 text-center">
          <p className="text-[#C9963A] uppercase tracking-[0.3em] text-sm mb-4">
            For Barbers
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Build Your Independent Mobile Grooming Business
          </h1>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg mb-10">
            Be My Barber helps licensed professionals grow beyond the chair by connecting them with clients seeking premium grooming services at home, work, hotels, and private events.
          </p>

          <a
            href="/#apply"
            className="inline-block bg-[#C9963A] text-black font-semibold px-8 py-4 rounded-xl"
          >
            Apply to Join
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-24">
          {[
            {
              title: "No Chair Rent",
              text: "Reduce overhead and keep more of what you earn while building your own mobile client base.",
            },
            {
              title: "Set Your Schedule",
              text: "Choose when you work, where you travel, and which appointments fit your business.",
            },
            {
              title: "Premium Clients",
              text: "Connect with clients who value convenience, professionalism, privacy, and quality.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#111827] border border-[#C9963A]/40 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-[#0B111A] border border-[#C9963A]/30 rounded-3xl p-10">
          <p className="text-[#C9963A] uppercase tracking-[0.3em] text-sm mb-4">
            Why Join
          </p>

          <h2 className="text-4xl font-bold mb-6">
            More Freedom. More Control. More Opportunity.
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Traditional barber shops can limit earning potential through chair rent, shop rules, and walk-in dependency. Be My Barber gives licensed barbers a platform to showcase their work, accept premium appointments, and build a professional mobile grooming business.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <p>✓ Showcase your portfolio</p>
            <p>✓ Receive qualified appointment requests</p>
            <p>✓ Build your personal brand</p>
            <p>✓ Serve homes, offices, hotels, and events</p>
            <p>✓ Keep independence</p>
            <p>✓ Grow with a national luxury platform</p>
          </div>
        </div>

        <div className="mt-24">
          <p className="text-[#C9963A] uppercase tracking-[0.3em] text-sm text-center mb-4">
            FAQ
          </p>

          <h2 className="text-4xl font-bold text-center mb-12">
            Common Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Do I need to be licensed?",
                a: "Yes. Be My Barber is built around trusted, licensed grooming professionals.",
              },
              {
                q: "Do I have to leave my current shop?",
                a: "No. Many barbers may start part-time, evenings, weekends, or by accepting select mobile appointments.",
              },
              {
                q: "How does Be My Barber make money?",
                a: "The platform is designed around a 15% transaction fee on completed appointments.",
              },
              {
                q: "What types of clients will use the platform?",
                a: "Busy professionals, families, hotel guests, event clients, and people who value premium service and convenience.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="border border-[#C9963A]/30 rounded-2xl p-6 bg-[#111827]"
              >
                <h3 className="text-xl font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-24">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Mobile Grooming Business?
          </h2>

          <a
            href="/#apply"
            className="inline-block bg-[#C9963A] text-black font-semibold px-10 py-4 rounded-xl"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}