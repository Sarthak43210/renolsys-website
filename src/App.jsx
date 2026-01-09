import complianceMethod from "./assets/compliancemethod.png";

import "./App.css";
import Navbar from "./components/Navbar";
import { ShieldCheck, FileCheck, Lock, BarChart3 } from "lucide-react";
import { Routes, Route } from "react-router-dom";

import ISO27001 from "./pages/ISO27001";
import SOC2 from "./pages/SOC2";
import PCIDSS from "./pages/PCIDSS";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { Search, Settings, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";








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

<section className="relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#08102a] to-[#0b1f5e]">
  <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">
        Compliance & Risk Advisory
      </p>

      <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-white">
        Audit-Ready Compliance.
        <span className="block text-blue-400">Designed for Scale.</span>
      </h1>

      <p className="mt-6 max-w-xl text-slate-300 text-lg leading-relaxed">
        Renolsys helps high-growth and regulated organizations design,
        implement, and operate enterprise-grade compliance programs aligned
        with ISO 27001, SOC 2, PCI DSS, and global regulatory expectations.
      </p>

      <div className="mt-10 flex items-center gap-6">
        <a
          href="#contact"
          className="inline-flex items-center rounded-xl bg-blue-500 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-400 transition"
        >
          Request Expert Consultation
        </a>

        <span className="text-sm text-slate-400">
          Trusted by startups & regulated enterprises
        </span>
      </div>
    </motion.div>

    {/* RIGHT VISUAL CARD */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      className="relative"
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
        <ul className="divide-y divide-white/10 text-sm text-slate-200">
          {[
            "ISO 27001 Control Mapping",
            "SOC 2 Evidence Readiness",
            "Risk Register & Gap Analysis",
            "Audit Walkthrough Support",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center justify-between py-4"
            >
              <span>{item}</span>
              <span className="text-emerald-400 text-xs font-medium">
                Complete
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>

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
  
  <div className="max-w-7xl mx-auto text-center">
  <p className="text-xs uppercase tracking-widest text-blue-600 font-semibold mb-4">
    OUR COMPLIANCE APPROACH
  </p>

  <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
    Built for Audit Confidence.
    <br />
    Designed for Scale.
  </h2>

  <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
    Renolsys delivers enterprise-grade compliance programs that align
    regulatory requirements, operational realities, and auditor expectations.
  </p>

  <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
    <ApproachCard
      number="01"
      title="Framework-Aligned"
      description="Compliance programs mapped directly to ISO 27001, SOC 2, PCI DSS, and NIST CSF — ensuring alignment with globally recognized standards."
    />

    <ApproachCard
      number="02"
      title="Auditor-Ready Delivery"
      description="Policies, controls, and evidence structured to withstand internal and external audits with minimal friction and rework."
    />

    <ApproachCard
      number="03"
      title="Enterprise-Grade Execution"
      description="Designed to scale across startups, regulated enterprises, and global organizations with complex compliance requirements."
    />
  </div>
</div>

</section>


    {/* PROCESS */}
<section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <p className="text-xs uppercase tracking-widest text-blue-600 font-semibold mb-4">
        OUR DELIVERY METHODOLOGY
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold text-slate-900">
        A Proven Compliance Execution Model
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        A structured, auditor-aligned approach designed to reduce risk,
        eliminate rework, and accelerate certification outcomes.
      </p>
    </div>

    {/* Split Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* LEFT — IMAGE */}
      <div className="relative">
        <img
  src={complianceMethod}
  alt="Compliance delivery process"
  className="rounded-2xl shadow-xl"
/>

        <div className="absolute -inset-6 bg-blue-500/10 blur-3xl rounded-full -z-10" />
      </div>

      {/* RIGHT — STEPS */}
      <div className="space-y-12">
        <MethodStep
          number="01"
          title="Assess"
          description="Define scope, identify risks, and perform a current-state maturity assessment aligned with regulatory and auditor expectations."
        />

        <MethodStep
          number="02"
          title="Implement"
          description="Design controls, develop policies, track remediation, and establish evidence structures across frameworks."
        />

        <MethodStep
          number="03"
          title="Certify"
          description="Prepare audit artifacts, conduct stakeholder walkthroughs, and support certification through external assessment."
        />
      </div>

    </div>
  </div>
</section>



{/* WHO WE WORK WITH */}
<section className="py-24 bg-white px-6 border-t border-slate-200">
  <div className="max-w-6xl mx-auto">

    {/* Header */}
    <div className="max-w-3xl mx-auto text-center mb-16">
      <p className="text-sm uppercase tracking-widest text-blue-600 mb-3">
        Who We Work With
      </p>

      <h2 className="text-[36px] font-semibold tracking-tight text-gray-900 mb-4">
        Trusted by Growing and Regulated Organizations
      </h2>

      <p className="text-[16px] text-gray-600 leading-relaxed">
        Renolsys partners with organizations that require structured,
        audit-ready compliance programs aligned with business growth.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* Card 1 */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          High-Growth Startups & Scaleups
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          SaaS and technology-driven companies preparing for enterprise
          customers, regulatory requirements, or first-time certifications.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Regulated & Enterprise Organizations
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Enterprises operating in regulated environments requiring mature
          risk management, governance structures, and audit readiness.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Security, Risk & Compliance Leaders
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          CISOs, Risk Heads, Compliance Managers, and founders responsible
          for building and maintaining trust with customers and regulators.
        </p>
      </div>

    </div>

  </div>
</section>

{/* FRAMEWORK COVERAGE */}
<section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
  <div className="max-w-6xl mx-auto">

    {/* Header */}
    <div className="max-w-3xl mx-auto text-center mb-16">
      <p className="text-sm uppercase tracking-widest text-blue-600 mb-3">
        Framework Coverage
      </p>

      <h2 className="text-[36px] font-semibold tracking-tight text-gray-900 mb-4">
        Compliance Programs Aligned to Global Standards
      </h2>

      <p className="text-gray-600 text-[16px] leading-relaxed">
        Our compliance methodology is mapped directly to globally recognized
        frameworks — ensuring audit defensibility, consistency, and scalability
        across regulatory environments.
      </p>
    </div>

    {/* Framework Grid */}
    <div className="grid md:grid-cols-3 gap-10">

      <div className="bg-white border border-slate-200 rounded-xl p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          ISO 27001
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Information Security Management System (ISMS) design, risk assessment,
          Statement of Applicability (SoA), and audit readiness aligned with
          ISO/IEC 27001 requirements.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          SOC 2 (Type I & II)
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Trust Services Criteria mapping, control design, evidence structuring,
          and auditor coordination for SOC 2 readiness and ongoing compliance.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          PCI DSS
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Cardholder data environment (CDE) scoping, gap assessments, remediation
          tracking, and compliance validation aligned with PCI DSS requirements.
        </p>
      </div>

    </div>
  </div>
</section>

{/* TRUST SIGNALS */}
<section className="py-16 px-6 bg-white border-t border-b border-slate-200">
  <div className="max-w-6xl mx-auto">

    <p className="text-center text-sm uppercase tracking-widest text-slate-500 mb-10">
      Trusted Compliance Delivery
    </p>

    <div className="grid md:grid-cols-3 gap-10 text-center">

      <div>
        <h4 className="text-lg font-semibold text-slate-900 mb-2">
          Framework-Mapped Controls
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          All policies, controls, and evidence are mapped directly to ISO 27001,
          SOC 2, PCI DSS, and NIST CSF requirements.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-slate-900 mb-2">
          Auditor-First Execution
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Our delivery model is designed around how external auditors evaluate
          scope, control design, and evidence sufficiency.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-slate-900 mb-2">
          Enterprise-Grade Documentation
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Documentation structured for internal governance, regulatory reviews,
          and repeatable certification cycles.
        </p>
      </div>

    </div>
  </div>
</section>


{/* TYPICAL ENGAGEMENTS */}
<section className="py-24 px-6 bg-white border-t border-slate-200">
  <div className="max-w-6xl mx-auto">

    {/* Header */}
    <div className="max-w-3xl mx-auto text-center mb-16">
      <p className="text-sm uppercase tracking-widest text-blue-600 mb-3">
        Typical Engagements
      </p>

      <h2 className="text-[36px] font-semibold tracking-tight text-gray-900 mb-4">
        How Organizations Engage Renolsys
      </h2>

      <p className="text-gray-600 text-[16px] leading-relaxed">
        We partner with organizations at critical compliance and risk inflection
        points — from early readiness to enterprise-scale audit execution.
      </p>
    </div>

    {/* Engagement Cards */}
    <div className="grid md:grid-cols-2 gap-10">

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          ISO / SOC / PCI Readiness Programs
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          End-to-end readiness assessments, gap remediation, and documentation
          development to prepare organizations for first-time or renewal audits.
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Enterprise Audit & Certification Support
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Hands-on audit support including evidence structuring, stakeholder
          walkthroughs, and coordination with external auditors.
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Risk & Control Framework Design
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Design and implementation of scalable control frameworks aligned with
          ISO 27001, SOC 2, PCI DSS, and NIST CSF requirements.
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Ongoing Compliance & Advisory Retainers
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Continuous advisory support for growing organizations managing evolving
          compliance obligations, audits, and risk programs.
        </p>
      </div>

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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -10 }}
      className="
        relative group
        overflow-hidden
        rounded-2xl
        p-8
        bg-gradient-to-br from-white via-slate-50 to-slate-100
        border border-slate-200/70
        shadow-[0_12px_40px_rgba(0,0,0,0.08)]
        hover:shadow-[0_40px_90px_rgba(0,0,0,0.18)]
        transition-shadow duration-500
      "
    >
      {/* subtle background glow */}
      <div className="
        pointer-events-none
        absolute inset-0
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500
        bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-cyan-400/10
      " />

      {/* top accent line */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400" />

      {/* icon */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: 2 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="
          relative z-10
          mb-6
          flex items-center justify-center
          w-14 h-14
          rounded-xl
          bg-gradient-to-br from-blue-50 to-indigo-50
          text-blue-600
        "
      >
        {icon}
      </motion.div>

      {/* title */}
      <h3 className="relative z-10 text-lg font-semibold text-slate-900 mb-3">
        {title}
      </h3>

      {/* description */}
      <p className="relative z-10 text-sm text-slate-600 leading-relaxed">
        End-to-end advisory and implementation support aligned with global standards.
      </p>
    </motion.div>
  );
}


function ProcessStep({ number, title, description }) {
  const icons = {
    "01": <Search size={22} />,
    "02": <Settings size={22} />,
    "03": <BadgeCheck size={22} />,
  };

  return (
    <div className="relative bg-white border border-slate-200 rounded-xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Arrow connector (desktop only) */}
      {number !== "03" && (
        <div className="hidden md:block absolute top-1/2 -right-5 text-slate-300 text-xl">
          →
        </div>
      )}

      {/* Icon + Step */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
          {icons[number]}
        </div>

        <span className="text-sm font-semibold text-blue-600">
          {number}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>

    </div>
  );
}

function ApproachCard({ number, title, description }) {
  return (
    <div
      className="
        relative
        rounded-2xl
        p-8
        bg-gradient-to-br from-white via-slate-50 to-slate-100
        border border-slate-200/70
        shadow-[0_10px_30px_rgba(0,0,0,0.06)]
        transition-all duration-500 ease-out
        hover:-translate-y-2
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.14)]
      "
    >
      {/* top accent */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-t-2xl" />

      <div className="mb-6 text-sm font-semibold text-blue-600 tracking-wide">
        {number}
      </div>

      <h3 className="text-xl font-semibold text-slate-900 mb-4">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed">
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

function MethodStep({ number, title, description }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
        {number}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-1">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
