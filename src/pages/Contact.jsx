export default function Contact() {
  return (
    <div className="pt-32 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-semibold mb-6">
        Request Expert Consultation
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Speak directly with Renolsys compliance specialists.
      </p>

      <form className="space-y-6 bg-gray-50 p-8 rounded-xl border">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          placeholder="Business Email"
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Company Name"
          className="w-full border p-3 rounded"
        />

        <textarea
          placeholder="How can we help you?"
          rows="4"
          className="w-full border p-3 rounded"
        />

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold">
          Submit Request
        </button>
      </form>
    </div>
  );
}
