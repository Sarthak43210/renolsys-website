export default function PCIDSS() {
  return (
    <main className="pt-32 pb-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-[42px] font-semibold tracking-tight text-gray-900 mb-6">
          PCI DSS Compliance Advisory
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Renolsys assists organizations handling cardholder data
          in meeting PCI DSS requirements securely and efficiently.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Scope validation & cardholder data flow analysis</li>
          <li>Gap assessments against PCI DSS controls</li>
          <li>Remediation planning & evidence readiness</li>
          <li>QSA coordination & audit support</li>
        </ul>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg border">
          <h3 className="text-xl font-semibold mb-3">
            Reduce Risk, Avoid Penalties
          </h3>
          <p className="text-gray-600">
            Our PCI DSS programs are designed to reduce breach risk,
            avoid compliance penalties, and satisfy acquiring banks.
          </p>
        </div>

      </div>
    </main>
  );
}
