export default function WhyClients() {
  const items = [
    {
      title: "Convenience",
      text: "Professional grooming delivered directly to your home, office, hotel, or event."
    },
    {
      title: "Licensed Professionals",
      text: "Every barber is vetted and verified before joining the platform."
    },
    {
      title: "Luxury Experience",
      text: "Premium service designed around your schedule and lifestyle."
    },
    {
      title: "Trusted Network",
      text: "Connect with experienced professionals committed to exceptional service."
    }
  ];

  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#C9963A] uppercase tracking-[0.3em] text-sm text-center mb-4">
          For Clients
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Why Clients Choose Be My Barber
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="border border-[#C9963A]/40 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}