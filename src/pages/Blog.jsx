export default function Blog() {
  return (
    <div className="pt-32 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-semibold mb-6">
        Renolsys Insights
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Expert insights on ISO 27001, SOC 2, PCI DSS, risk management, and compliance strategy.
      </p>

      <div className="space-y-6">
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold">
            How ISO 27001 Reduces Enterprise Risk
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Understanding ISMS implementation from a compliance-first lens.
          </p>
        </div>

        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold">
            SOC 2 vs ISO 27001 — What Should Startups Choose?
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            A practical decision framework for growing companies.
          </p>
        </div>
      </div>
    </div>
  );
}
