import "./App.css";
import Navbar from "./components/Navbar";
import { ShieldCheck, FileCheck, Lock, BarChart3 } from "lucide-react";
import { Routes, Route } from "react-router-dom";

import ISO27001 from "./pages/ISO27001";
import SOC2 from "./pages/SOC2";
import PCIDSS from "./pages/PCIDSS";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import ThirdPartyRisk from "./pages/ThirdPartyRisk";


export default function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <div className="font-sans text-gray-900">

              {/* HERO */}
              <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white pt-32 pb-24 px-6">
                <div className="max-w-6xl mx-auto text-center">
                  <h1 className="text-[48px] leading-tight font-semibold tracking-tight mb-6 text-white">
                    Simplifying Compliance & Risk Management
                  </h1>

                  <p className="text-[18px] text-gray-300 mb-8 leading-relaxed">
                    ISO 27001, SOC 2, PCI DSS, Risk Assessments & IT Audits — powered by modern compliance frameworks.
                  </p>

                  <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg text-[16px] font-semibold">
                    Get Compliance Ready
                  </button>
                </div>
              </section>

              {/* SERVICES */}
              <section id="services" className="py-24 bg-gray-50 px-6">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-[36px] font-semibold tracking-tight text-center mb-14 text-gray-900">
                    Our Compliance Services
                  </h2>

                  <div className="grid md:grid-cols-4 gap-8">
                    <Service icon={<ShieldCheck size={36} />} title="ISO 27001" />
                    <Service icon={<FileCheck size={36} />} title="SOC 2 & Audits" />
                    <Service icon={<Lock size={36} />} title="PCI DSS" />
                    <Service icon={<BarChart3 size={36} />} title="Risk Assessments" />
                  </div>
                </div>
              </section>
{/* THIRD-PARTY RISK MANAGEMENT */}
<section className="py-24 bg-white px-6">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-[34px] font-semibold tracking-tight text-gray-900 mb-4">
      End-to-End Third-Party Risk Management
    </h2>

    <p className="text-[17px] text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
      We help organizations design, scale, and operationalize robust third-party risk
      programs aligned with regulatory expectations and enterprise best practices.
    </p>

    <div className="grid md:grid-cols-2 gap-10 text-left">

      {[
        "Implement a World-Class TPRM Program",
        "Conduct Inherent Risk Assessments",
        "Onboard New Vendors Faster",
        "Eliminate Due Diligence Backlog",
        "Assess Hard-to-Assess Third Parties",
        "Respond to Emerging Threats",
        "Comply with Global Risk Regulations",
        "AI-Based Control Reviews",
      ].map((item, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between border border-gray-200 rounded-lg px-6 py-5 hover:shadow-md transition"
        >
          <span className="text-[15px] font-medium text-gray-900">
            {item}
          </span>
          <span className="text-blue-600 font-semibold text-lg">→</span>
        </div>
      ))}

    </div>

  </div>
</section>

              {/* TRUST SIGNALS */}
              {/* COMPLIANCE APPROACH */}
<section className="py-24 bg-gray-50 px-6">
  <div className="max-w-6xl mx-auto">

    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <p className="text-[12px] uppercase tracking-widest text-blue-600 font-semibold mb-3">
        Our Compliance Approach
      </p>
      <h2 className="text-[34px] font-semibold tracking-tight text-gray-900 mb-4">
        Built for Audit Confidence. Designed for Scale.
      </h2>
      <p className="text-[17px] text-gray-600 leading-relaxed">
        Renolsys delivers enterprise-grade compliance programs that align
        regulatory requirements, operational realities, and auditor expectations.
      </p>
    </div>

    {/* Approach Cards */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* Card 1 */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
        <div className="text-blue-600 text-sm font-semibold mb-3">
          01
        </div>
        <h3 className="text-[20px] font-semibold text-gray-900 mb-3">
          Framework-Aligned
        </h3>
        <p className="text-[15px] text-gray-600 leading-relaxed">
          Compliance programs mapped directly to ISO 27001, SOC 2, PCI DSS,
          and NIST CSF — ensuring alignment with globally recognized standards.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
        <div className="text-blue-600 text-sm font-semibold mb-3">
          02
        </div>
        <h3 className="text-[20px] font-semibold text-gray-900 mb-3">
          Auditor-Ready Delivery
        </h3>
        <p className="text-[15px] text-gray-600 leading-relaxed">
          Policies, controls, and evidence structured to withstand internal
          and external audits with minimal friction and rework.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
        <div className="text-blue-600 text-sm font-semibold mb-3">
          03
        </div>
        <h3 className="text-[20px] font-semibold text-gray-900 mb-3">
          Enterprise-Grade Execution
        </h3>
        <p className="text-[15px] text-gray-600 leading-relaxed">
          Designed to scale across startups, regulated enterprises,
          and global organizations with complex compliance requirements.
        </p>
      </div>

    </div>
  </div>
</section>


              {/* PROCESS */}
<section className="py-24 bg-gray-50 px-6">
  <div className="max-w-6xl mx-auto">

    <div className="max-w-3xl mx-auto text-center mb-16">
      <p className="text-sm uppercase tracking-widest text-blue-600 mb-3">
        Our Delivery Methodology
      </p>

      <h2 className="text-[36px] font-semibold tracking-tight text-gray-900 mb-4">
        A Proven Compliance Execution Model
      </h2>

      <p className="text-gray-600 text-[16px] leading-relaxed">
        A structured, auditor-aligned approach designed to reduce risk,
        eliminate rework, and accelerate certification outcomes.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-10">
      <ProcessStep
        number="01"
        title="Assess"
        description="Define scope, identify risks, and perform a current-state maturity assessment aligned with regulatory and auditor expectations."
      />

      <ProcessStep
        number="02"
        title="Implement"
        description="Design controls, develop policies, track remediation, and establish evidence structures across frameworks."
      />

      <ProcessStep
        number="03"
        title="Certify"
        description="Prepare audit artifacts, conduct stakeholder walkthroughs, and support certification through external assessment."
      />
    </div>

  </div>
</section>



              {/* CTA */}
              <section id="contact" className="py-24 px-6 bg-blue-600 text-white text-center">
                <h2 className="text-[36px] font-semibold mb-6">
                  Ready to Become Compliant?
                </h2>
                <p className="text-[18px] mb-8">
                  Start your compliance journey with confidence.
                </p>
                <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold">
                  Schedule a Consultation
                </button>
              </section>

              {/* FOOTER */}
              <footer className="bg-gray-900 text-gray-400 py-10 text-center text-[14px]">
                © 2025 Renolsys. All rights reserved.
              </footer>

            </div>
          }
        />

        {/* SERVICE PAGES */}
        <Route path="/iso-27001" element={<ISO27001 />} />
        <Route path="/soc-2" element={<SOC2 />} />
        <Route path="/pci-dss" element={<PCIDSS />} />
        <Route path="/third-party-risk" element={<ThirdPartyRisk />} />

        {/* BLOG & CONTACT */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </>
  );
}

/* ---------- COMPONENTS ---------- */

function Service({ icon, title }) {
  return (
    <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-blue-600">{icon}</div>
        <h3 className="text-[18px] font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-[14px] text-gray-600">
        End-to-end advisory and implementation support aligned with global standards.
      </p>
    </div>
  );
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition">

      <div className="flex items-start gap-4 mb-4">
        <div className="text-blue-600 text-[18px] font-semibold">
          {number}
        </div>

        <h3 className="text-[20px] font-semibold text-gray-900">
          {title}
        </h3>
      </div>

      <p className="text-[15px] text-gray-600 leading-relaxed">
        {description}
      </p>

    </div>
  );
}


function Trust({ title }) {
  return (
    <div>
      <h4 className="font-semibold mb-2 text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600">
        Enterprise-grade compliance delivery built for scale and audit readiness.
      </p>
    </div>
  );
}
