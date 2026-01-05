export default function ThirdPartyRisk() {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-[40px] font-semibold tracking-tight mb-4">
            End-to-End Third-Party Risk Management
          </h1>

          <p className="text-[17px] text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Organizations across industries rely on Renolsys to design, implement,
            and scale third-party risk programs aligned with regulatory and business expectations.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <Capability
            title="Implement a World-Class TPRM Program"
            highlight
          />

          <Capability
            title="Conduct Inherent Risk Assessments"
          />

          <Capability
            title="Onboard New Vendors Faster"
          />

          <Capability
            title="Eliminate Due Diligence Backlogs"
          />

          <Capability
            title="Assess Hard-to-Assess Third Parties"
          />

          <Capability
            title="Respond to Emerging Threats & Vulnerabilities"
          />

          <Capability
            title="Comply with Global Third-Party Regulations"
          />

          <Capability
            title="AI-Assisted Control & Evidence Reviews"
          />

        </div>
      </section>
    </div>
  );
}

/* -------- COMPONENT -------- */

function Capability({ title, highlight }) {
  return (
    <div
      className={`flex items-center justify-between p-6 rounded-xl border transition
        ${
          highlight
            ? "bg-green-50 border-green-200"
            : "bg-white border-gray-200 hover:shadow-sm"
        }`}
    >
      <h3 className="text-[16px] font-medium text-gray-900">
        {title}
      </h3>

      <span className="text-green-600 text-lg font-semibold">
        →
      </span>
    </div>
  );
}
