export default function BarberApplication() {
  return (
    <section id="apply" className="py-28 px-6 bg-[#0B111A]">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#C9963A] uppercase tracking-[0.3em] text-sm text-center mb-4">
          Apply as a Barber
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Build Your Mobile Grooming Business
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Join a growing network of licensed professionals delivering premium grooming experiences.
        </p>

        <form
          action="https://formspree.io/f/mqejvadb"
          method="POST"
          className="space-y-6"
          >
        <div className="grid md:grid-cols-2 gap-6">
  <input
    name="stateLicensedIn"
    type="text"
    placeholder="State Licensed In"
    className="bg-[#111827] border border-[#C9963A]/30 rounded-xl p-4"
  />

  <input
    name="yearsExperience"
    type="text"
    placeholder="Years of Experience"
    className="bg-[#111827] border border-[#C9963A]/30 rounded-xl p-4"
  />
</div>
<div className="grid md:grid-cols-2 gap-6">
  <input
    name="licenseNumber"
    type="text"
    placeholder="Barber License Number"
    className="bg-[#111827] border border-[#C9963A]/30 rounded-xl p-4"
  />

  <input
    name="licenseExpiration"
    type="text"
    placeholder="License Expiration Date"
    className="bg-[#111827] border border-[#C9963A]/30 rounded-xl p-4"
  />
</div>
<div className="grid md:grid-cols-2 gap-6">
  <input
    name="primaryCity"
    type="text"
    placeholder="Primary City"
    className="bg-[#111827] border border-[#C9963A]/30 rounded-xl p-4"
  />

  <input
    name="travelRadius"
    type="text"
    placeholder="Travel Radius (Miles)"
    className="bg-[#111827] border border-[#C9963A]/30 rounded-xl p-4"
  />
</div>

          <textarea
            name="experience"
            rows="5"
            placeholder="Tell us about your experience, specialties, and service area..."
            className="w-full bg-[#111827] border border-[#C9963A]/30 rounded-xl p-4"
          />
<div className="grid md:grid-cols-2 gap-6">

  <input
    name="instagram"
    type="text"
    placeholder="Instagram Profile"
    className="bg-[#111827] border border-[#C9963A]/30 rounded-xl p-4"
  />

  <input
    name="website"
    type="text"
    placeholder="Website (Optional)"
    className="bg-[#111827] border border-[#C9963A]/30 rounded-xl p-4"
  />
  <input
  name="portfolioLink"
  type="text"
  placeholder="Portfolio / Photo Gallery Link"
  className="w-full bg-[#111827] border border-[#C9963A]/30 rounded-xl p-4"
/>

<input
  name="reviewsLink"
  type="text"
  placeholder="Google, Yelp, or Client Review Link"
  className="w-full bg-[#111827] border border-[#C9963A]/30 rounded-xl p-4"
/>
<textarea
  name="specialties"
  rows="3"
  placeholder="Specialties (Fades, Beard Grooming, Kids Cuts, Luxury Grooming, Weddings, etc.)"
  className="w-full bg-[#111827] border border-[#C9963A]/30 rounded-xl p-4"
/>
<select
  name="transportation"
  className="w-full bg-[#111827] border border-[#C9963A]/30 rounded-xl p-4"
>
  <option value="">
    Reliable Transportation?
  </option>

  <option>Yes</option>
  <option>No</option>
</select>
</div>
<textarea
  name="servicesOffered"
  rows="3"
  placeholder="Services Offered (Haircuts, Beard Trims, Kids Cuts, Hot Towel Services, Weddings, House Calls, etc.)"
  className="w-full bg-[#111827] border border-[#C9963A]/30 rounded-xl p-4"
/>
<input
  type="hidden"
  name="_redirect"
  value="http://localhost:5173/thank-you-barber"
/>
<label className="flex items-start gap-3 text-sm text-gray-400">
  <input
    name="credentialConsent"
    type="checkbox"
    required
    className="mt-1"
  />
  <span>
    I confirm that the information provided is accurate and authorize Be My Barber to review my professional credentials, portfolio, and references.
  </span>
</label>
          <button
            type="submit"
            className="w-full bg-[#C9963A] text-black font-semibold py-4 rounded-xl hover:opacity-90 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}