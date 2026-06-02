export default function Benefits() {
  const items = [
    "Keep More of What You Earn",
    "Set Your Own Schedule",
    "Build Your Personal Brand",
    "Access Premium Clients",
  ];

  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Build Your Independent Grooming Business
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item}
            className="bg-slate-900 p-6 rounded-xl border border-[#C9963A]"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}