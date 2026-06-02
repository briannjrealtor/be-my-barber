export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Apply",
      text: "Submit your professional information, license details, service area, and portfolio.",
    },
    {
      number: "02",
      title: "Get Verified",
      text: "Our team reviews your credentials, experience, and work to ensure a premium standard.",
    },
    {
      number: "03",
      title: "Create Your Profile",
      text: "Showcase your services, specialties, photos, availability, and professional brand.",
    },
    {
      number: "04",
      title: "Accept Bookings",
      text: "Receive appointment requests from clients looking for luxury grooming delivered to them.",
    },
  ];

  return (
    <section className="py-28 px-6 bg-[#0B111A]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#C9963A] uppercase tracking-[0.3em] text-sm text-center mb-4">
          How It Works
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          From Licensed Barber to Mobile Business Owner
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#111827] border border-[#C9963A]/60 rounded-2xl p-6"
            >
              <div className="text-[#C9963A] text-3xl font-bold mb-4">
                {step.number}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}