import "./App.css";
import Navbar from "./components/Navbar";
import { ShieldCheck, FileCheck, Lock, BarChart3 } from "lucide-react";
import { Routes, Route } from "react-router-dom";

import ISO27001 from "./pages/ISO27001";
import SOC2 from "./pages/SOC2";
import PCIDSS from "./pages/PCIDSS";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

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

              {/* TRUST SIGNALS */}
              <section className="py-16 bg-white border-t border-b px-6">
                <div className="max-w-6xl mx-auto">
                  <h3 className="text-[12px] font-semibold text-gray-500 uppercase tracking-wide text-center mb-10">
                    Our Compliance Approach
                  </h3>

                  <div className="grid md:grid-cols-3 gap-10 text-center">
                    <Trust title="Framework-Aligned" />
                    <Trust title="Auditor-Ready Delivery" />
                    <Trust title="Enterprise-Grade Execution" />
                  </div>
                </div>
              </section>

              {/* PROCESS */}
              <section id="process" className="py-16 bg-gray-900 text-white px-6">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-[32px] font-semibold text-center mb-12">
                    Our Compliance Delivery Framework
                  </h2>

                  <div className="grid md:grid-cols-3 gap-6">
                    <ProcessStep
                      number="01"
                      title="Assess"
                      description="Scope definition, risk identification, and maturity assessment aligned with regulatory expectations."
                    />
                    <ProcessStep
                      number="02"
                      title="Implement"
                      description="Control design, policy development, remediation tracking, and evidence readiness."
                    />
                    <ProcessStep
                      number="03"
                      title="Certify"
                      description="Audit preparation and certification support through external assessment."
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
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <div className="flex gap-4">
        <div className="text-blue-400 font-bold">{number}</div>
        <div>
          <h3 className="font-semibold mb-2 text-white">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
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
