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
import whoStartups from "./assets/who-startups.png";
import whoEnterprise from "./assets/who-enterprise.png";
import whoLeaders from "./assets/who-leaders.png";
import frameworkImg from "./assets/framework.png";
import auditorImg from "./assets/auditor.png";
import enterpriseImg from "./assets/enterprise.png";
import frameworkControlsImg from "./assets/framework/framework_controls.png";
import auditorExecutionImg from "./assets/framework/auditor_execution.png";
import enterpriseDocsImg from "./assets/framework/enterprise_docs.png"


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

<section className="relative w-full h-[65vh] flex items-center overflow-hidden">

  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="/videos/homepage-hero.mp4"
    autoPlay
    muted
    loop
    playsInline
  />

 {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

  <div className="relative z-10 w-full">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

      <div>
        <p className="text-blue-400 text-sm uppercase tracking-widest mb-4">
          Compliance & Risk Advisory
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Audit-Ready Compliance.
          <span className="text-blue-400 block">Designed for Scale.</span>
        </h1>

        <p className="text-slate-200 mt-6 max-w-xl">
          Renolsys helps high-growth and regulated organizations design,
          implement, and operate enterprise-grade compliance programs aligned
          with ISO 27001, SOC 2, PCI DSS, and global regulatory expectations.
        </p>

        <div className="mt-8 flex items-center gap-6">
          <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-xl">
            Request Expert Consultation
          </button>

          <span className="text-slate-300 text-sm">
            Trusted by startups & regulated enterprises
          </span>
        </div>
      </div>

      <div></div>

    </div>
  </div> 
*/}
  </section>




              {/* SERVICES */}
<section id="services" className="relative py-24 bg-white px-6 overflow-hidden">
  {/* Technical background glow */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none -z-10" />

  <div className="max-w-7xl mx-auto">
    {/* Header - Large/Bold Hero Style */}
    <div className="max-w-4xl mx-auto text-center mb-24">
      <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50/50 backdrop-blur-sm border border-blue-100/50">
        <p className="text-[11px] uppercase tracking-[0.2em] text-blue-600 font-bold">
          Our Expert Capabilities
        </p>
      </div>

      <h2 className="text-5xl md:text-7xl font-bold text-[#0F172A] leading-[1.1] tracking-tighter mb-8">
        Full-Spectrum <br />
        <span className="text-blue-600">Compliance Services</span>
      </h2>

      <p className="text-xl text-slate-500 leading-relaxed font-light">
        End-to-end advisory and implementation support <span className="font-semibold text-slate-700">aligned with global standards</span>.
      </p>
    </div>

    {/* Enhanced Cards - Top Accent Only */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { 
          icon: <ShieldCheck size={30} />, 
          title: "ISO 27001",
          desc: "End-to-end advisory and implementation support aligned with global standards." 
        },
        { 
          icon: <FileCheck size={30} />, 
          title: "SOC 2 & Audits",
          desc: "Comprehensive readiness and audit support for SOC 2 Type I and Type II certifications."
        },
        { 
          icon: <Lock size={30} />, 
          title: "PCI DSS",
          desc: "Secure payment environment compliance from early gap analysis to final assessment."
        },
        { 
          icon: <BarChart3 size={30} />, 
          title: "Risk Assessments",
          desc: "Deep-dive operational and regulatory risk analysis designed for enterprise scale."
        },
      ].map((service, idx) => (
        <div 
          key={idx} 
          className="group relative rounded-[1.8rem] p-10 border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(59,130,246,0.12)] transition-all duration-500 transform hover:-translate-y-2 overflow-hidden bg-gradient-to-b from-[#f8faff] to-white"
        >
          {/* Top Border Accent - Kept for visual impact */}
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#4f86ff] via-[#a855f7] to-[#22d3ee] opacity-90" />
          
          {/* Bottom Border Accent Removed */}

          {/* Icon Container */}
          <div className="mb-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-white text-blue-600 shadow-md shadow-blue-500/5 group-hover:scale-110 transition-transform duration-500">
            {service.icon}
          </div>

          <h3 className="text-[22px] font-bold text-[#0F172A] mb-5 group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>
          
          <p className="text-slate-500 text-[15px] leading-relaxed font-normal mb-8">
            {service.desc}
          </p>

          {/* Learn More Link */}
          <div className="flex items-center text-blue-600/40 font-bold text-xs group-hover:text-blue-600 transition-all duration-500">
            <span className="uppercase tracking-widest text-[10px]">Learn more</span>
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


{/* THIRD-PARTY RISK MANAGEMENT */}
<section className="relative py-24 bg-[#F8FAFC] overflow-hidden px-6">
  {/* Abstract Background Decoration */}
  <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-full blur-3xl"></div>
    {/* You can add a background grid or SVG pattern here like in your reference */}
    <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(#e2e8f0 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto text-center">
    {/* Header Section */}
    <h2 className="text-4xl md:text-[42px] font-bold tracking-tight text-[#0F172A] mb-4">
      End-to-End Third-Party Risk Management
    </h2>

    <p className="text-[18px] text-slate-500 max-w-3xl mx-auto mb-20 leading-relaxed font-light">
      We help organizations <span className="font-semibold text-slate-700">design, scale, and operationalize</span> robust third-party risk programs aligned with regulatory expectations and enterprise best practices.
    </p>

    {/* Grid with Custom Cards */}
    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-left">
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
          className="group flex items-center justify-between bg-white/80 backdrop-blur-sm border border-white rounded-2xl p-2 pl-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] transition-all duration-500 cursor-pointer"
        >
          <span className="text-[16px] font-semibold text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
            {item}
          </span>
          
          {/* Action Button */}
          <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
            <svg 
              className="w-5 h-5 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      )
      )
      
      }
    </div>
  
</div>
</section>

     {/* TRUST SIGNALS - COMPLIANCE APPROACH */}
<section className="py-24 bg-white px-6">
  <div className="max-w-7xl mx-auto text-center">
    
    {/* Eyebrow Tag mirroring the 'Typical Engagements' style */}
    <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-50">
      <p className="text-[11px] uppercase tracking-[0.2em] text-blue-600 font-bold">
        Our Compliance Approach
      </p>
    </div>

    {/* The Modern Heading with the high-contrast Blue */}
    <h2 className="text-5xl md:text-7xl font-bold text-[#0F172A] leading-[1.1] tracking-tighter mb-8">
      Built for Audit Confidence.
      <br />
      <span className="text-blue-600">Designed for Scale.</span>
    </h2>

    <p className="max-w-3xl mx-auto text-xl text-slate-500 leading-relaxed font-light">
      <span className="font-semibold text-blue-600">Renolsys</span> delivers enterprise-grade compliance programs that align
      regulatory requirements, operational realities, and auditor expectations.
    </p>

    {/* The Cards Grid */}
    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      {[
        {
          num: "01",
          title: "Framework-Aligned",
          desc: "Compliance programs mapped directly to ISO 27001, SOC 2, PCI DSS, and NIST CSF — ensuring alignment with globally recognized standards."
        },
        {
          num: "02",
          title: "Auditor-Ready Delivery",
          desc: "Policies, controls, and evidence structured to withstand internal and external audits with minimal friction and rework."
        },
        {
          num: "03",
          title: "Enterprise-Grade Execution",
          desc: "Designed to scale across startups, regulated enterprises, and global organizations with complex compliance requirements."
        }
      ].map((card, i) => (
        <div key={i} className="group p-8 rounded-3xl bg-[#F8FAFC] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
          <div className="text-blue-600 font-bold text-sm mb-6 flex items-center">
            <span className="mr-2 h-[1px] w-4 bg-blue-600"></span>
            {card.num}
          </div>
          <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-blue-600 transition-colors">
            {card.title}
          </h3>
          <p className="text-slate-500 leading-relaxed">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


   {/* PROCESS SECTION */}
<section className="relative py-24 px-6 bg-white overflow-hidden">
  {/* Soft background glow to highlight the image area */}
  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-50 rounded-full blur-[120px] pointer-events-none" />

  <div className="relative z-10 max-w-7xl mx-auto">
    {/* Header - Using the bold style you preferred */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-50">
        <p className="text-[11px] uppercase tracking-[0.2em] text-blue-600 font-bold">
          Our Delivery Methodology
        </p>
      </div>

      <h2 className="text-5xl md:text-7xl font-bold text-[#0F172A] leading-[1.1] tracking-tighter">
        A Proven Compliance <br />
        <span className="text-blue-600">Execution Model</span>
      </h2>

      <p className="mt-8 text-xl text-slate-500 leading-relaxed font-light">
        A structured, auditor-aligned approach designed to reduce risk, 
        eliminate rework, and accelerate certification outcomes.
      </p>
    </div>

    {/* Split Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      
      {/* LEFT — IMAGE with Glassmorphism Frame */}
      <div className="relative p-4">
        <div className="relative z-10 bg-white/40 backdrop-blur-md border border-white p-2 rounded-[2.5rem] shadow-2xl shadow-blue-500/10">
          <img
            src={complianceMethod}
            alt="Compliance delivery process"
            className="rounded-[2rem] w-full"
          />
        </div>
        {/* Secondary decorative ring */}
        <div className="absolute inset-0 border-2 border-dashed border-blue-100 rounded-[3rem] -m-4 scale-95" />
      </div>

      {/* RIGHT — STEPS with Connecting Line */}
      <div className="relative space-y-12">
        {/* Vertical Journey Line */}
        <div className="absolute left-6 top-2 bottom-2 w-[2px] bg-gradient-to-b from-blue-600 via-blue-200 to-transparent" />

        {[
          {
            num: "01",
            title: "Assess",
            desc: "Define scope, identify risks, and perform a current-state maturity assessment aligned with regulatory and auditor expectations."
          },
          {
            num: "02",
            title: "Implement",
            desc: "Design controls, develop policies, track remediation, and establish evidence structures across frameworks."
          },
          {
            num: "03",
            title: "Certify",
            desc: "Prepare audit artifacts, conduct stakeholder walkthroughs, and support certification through external assessment."
          }
        ].map((step, idx) => (
          <div key={idx} className="group relative pl-16">
            {/* Step Number Circle */}
            <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-white border-2 border-blue-600 text-blue-600 font-bold shadow-lg shadow-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              {step.num}
            </div>

            <h3 className="text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-blue-600 transition-colors">
              {step.title}
            </h3>
            <p className="text-slate-500 text-lg leading-relaxed font-light">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>



{/* WHO WE WORK WITH */}
<section className="relative py-24 bg-white px-6 overflow-hidden">
  {/* Subtle Background Glow */}
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none -z-10" />

  <div className="max-w-7xl mx-auto">
    {/* Header - Matching your bold high-contrast style */}
    <div className="max-w-4xl mx-auto text-center mb-24">
      <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-50">
        <p className="text-[11px] uppercase tracking-[0.2em] text-blue-600 font-bold">
          Who We Work With
        </p>
      </div>

      <h2 className="text-5xl md:text-7xl font-bold text-[#0F172A] leading-[1.1] tracking-tighter mb-8">
        Trusted by Growing and <br />
        <span className="text-blue-600">Regulated Organizations</span>
      </h2>

      <p className="text-xl text-slate-500 leading-relaxed font-light">
        <span className="font-semibold text-blue-600">Renolsys</span> partners with organizations that require structured, 
        audit-ready compliance programs aligned with business growth.
      </p>
    </div>

    {/* Enhanced Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          img: whoStartups,
          title: "High-Growth Startups & Scaleups",
          desc: "SaaS and technology-driven companies preparing for enterprise customers, regulatory requirements, or first-time certifications."
        },
        {
          img: whoEnterprise,
          title: "Regulated & Enterprise Organizations",
          desc: "Enterprises operating in regulated environments requiring mature risk management, governance structures, and audit readiness."
        },
        {
          img: whoLeaders,
          title: "Security, Risk & Compliance Leaders",
          desc: "CISOs, Risk Heads, Compliance Managers, and founders responsible for building and maintaining trust with customers and regulators."
        }
      ].map((card, idx) => (
        <div 
          key={idx} 
          className="group relative bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
        >
          {/* Image Container with subtle dashed border */}
          <div className="relative h-64 overflow-hidden p-6">
            <div className="absolute inset-4 border border-dashed border-slate-200 rounded-2xl -z-10" />
            <img 
              src={card.img}
              alt={card.title}
              className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text Content */}
          <div className="p-8 pt-2 text-center">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-blue-600 transition-colors">
              {card.title}
            </h3>
            <p className="text-slate-500 leading-relaxed font-light">
              {card.desc}
            </p>
          </div>

          {/* Decorative Bottom Bar */}
          <div className="h-1.5 w-0 bg-blue-600 group-hover:w-full transition-all duration-500" />
        </div>
      ))}
    </div>
  </div>
</section>

{/* FRAMEWORK COVERAGE */}
<section className="relative py-24 px-6 bg-[#fcfcfd] overflow-hidden">
  {/* Abstract Background Decoration */}
  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[120px] pointer-events-none -z-10" />

  <div className="max-w-7xl mx-auto">
    
    {/* Header - Using your preferred high-contrast bold style */}
    <div className="max-w-4xl mx-auto text-center mb-20">
      <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-50">
        <p className="text-[11px] uppercase tracking-[0.2em] text-blue-600 font-bold">
          Framework Coverage
        </p>
      </div>

      <h2 className="text-5xl md:text-7xl font-bold text-[#0F172A] leading-[1.1] tracking-tighter mb-8">
        Compliance Programs Aligned to <br />
        <span className="text-blue-600">Global Standards</span>
      </h2>

      <p className="text-xl text-slate-500 leading-relaxed font-light">
        Our compliance methodology is mapped directly to globally recognized frameworks — 
        ensuring <span className="font-semibold text-slate-700">audit defensibility</span>, consistency, and scalability.
      </p>
    </div>

    {/* Enhanced Image Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          img: frameworkControlsImg,
          title: "Framework-Mapped Controls",
          desc: "All policies, controls, and evidence mapped directly to ISO 27001, SOC 2, PCI DSS, and NIST CSF requirements."
        },
        {
          img: auditorExecutionImg,
          title: "Auditor-First Execution",
          desc: "Our delivery model mirrors how auditors evaluate scope, control design, and evidence sufficiency."
        },
        {
          img: enterpriseDocsImg,
          title: "Enterprise-Grade Documentation",
          desc: "Documentation structured for internal governance, regulatory reviews, and repeatable certification cycles."
        }
      ].map((card, idx) => (
        <div 
          key={idx} 
          className="group relative bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(59,130,246,0.12)] transition-all duration-500 transform hover:-translate-y-4 overflow-hidden"
        >
          {/* Image Container with Gradient Overlay */}
          <div className="relative h-56 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 opacity-60" />
            <img 
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Content Area */}
          <div className="p-10 pt-4">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-blue-600 transition-colors">
              {card.title}
            </h3>
            <p className="text-slate-500 leading-relaxed font-light">
              {card.desc}
            </p>
          </div>

          {/* Hidden "Learn More" reveal on hover */}
          <div className="px-10 pb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <span className="text-blue-600 font-bold text-sm flex items-center">
              View Capability <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* TRUST SIGNALS */}
<section className="relative py-24 px-6 bg-[#fcfcfd] overflow-hidden border-t border-slate-100">
  {/* Modern Technical Background Grid */}
  <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
       style={{ backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto">
    
    {/* Heading Section - Updated to be Large and Bold */}
    <div className="max-w-4xl mx-auto text-center mb-24">
      <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50/50 backdrop-blur-sm border border-blue-100/50">
        <p className="text-[11px] uppercase tracking-[0.2em] text-blue-600 font-bold">
          Trusted Compliance Delivery
        </p>
      </div>

      <h2 className="text-5xl md:text-7xl font-bold text-[#0F172A] leading-[1.1] tracking-tighter mb-8">
        Built for Accuracy. <br />
        <span className="text-blue-600">Trusted by Experts.</span>
      </h2>

      <p className="text-xl text-slate-500 leading-relaxed font-light">
        Our compliance methodology is engineered to provide <span className="font-semibold text-slate-700">maximum audit defensibility</span> while streamlining your internal documentation.
      </p>
    </div>

    {/* Enhanced Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {[
        {
          img: frameworkImg,
          title: "Framework-Mapped Controls",
          desc: "All policies, controls, and evidence are mapped directly to ISO 27001, SOC 2, PCI DSS, and NIST CSF requirements."
        },
        {
          img: auditorImg,
          title: "Auditor-First Execution",
          desc: "Our delivery model is designed around how external auditors evaluate scope, control design, and evidence sufficiency."
        },
        {
          img: enterpriseImg,
          title: "Enterprise-Grade Documentation",
          desc: "Documentation structured for internal governance, regulatory reviews, and repeatable certification cycles."
        }
      ].map((signal, idx) => (
        <div key={idx} className="group relative flex flex-col items-center text-center">
          {/* Enhanced Image Container */}
          <div className="relative w-full aspect-[4/3] mb-10 overflow-hidden rounded-[2.5rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] group-hover:-translate-y-2">
            <img
              src={signal.img}
              alt={signal.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Card Text Content */}
          <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-blue-600 transition-colors duration-300 px-4">
            {signal.title}
          </h3>
          <p className="text-slate-500 leading-relaxed font-light px-6">
            {signal.desc}
          </p>
          
          {/* Animated Indicator Line */}
          <div className="mt-8 w-12 h-1 bg-blue-100 rounded-full overflow-hidden">
            <div className="w-0 h-full bg-blue-600 group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


{/* TYPICAL ENGAGEMENTS */}
<section className="relative py-24 px-6 bg-[#fcfcfd] overflow-hidden">
  {/* Abstract Background Elements */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-[100px]"></div>
    <div className="absolute top-1/2 -left-24 w-72 h-72 bg-indigo-50 rounded-full blur-[80px]"></div>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto">
    {/* Header */}
    <div className="max-w-3xl mx-auto text-center mb-20">
      <span className="inline-block py-1 px-3 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
        Typical Engagements
      </span>

      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
        How Organizations Engage <span className="text-blue-600">Renolsys</span>
      </h2>

      <p className="text-slate-500 text-lg leading-relaxed font-light">
        We partner with organizations at critical compliance and risk inflection
        points — from early readiness to enterprise-scale audit execution.
      </p>
    </div>

    {/* Engagement Cards */}
    <div className="grid md:grid-cols-2 gap-8">
      {[
        {
          title: "ISO / SOC / PCI Readiness Programs",
          desc: "End-to-end readiness assessments, gap remediation, and documentation development to prepare organizations for first-time or renewal audits."
        },
        {
          title: "Enterprise Audit & Certification Support",
          desc: "Hands-on audit support including evidence structuring, stakeholder walkthroughs, and coordination with external auditors."
        },
        {
          title: "Risk & Control Framework Design",
          desc: "Design and implementation of scalable control frameworks aligned with ISO 27001, SOC 2, PCI DSS, and NIST CSF requirements."
        },
        {
          title: "Ongoing Compliance & Advisory Retainers",
          desc: "Continuous advisory support for growing organizations managing evolving compliance obligations, audits, and risk programs."
        }
      ].map((item, index) => (
        <div 
          key={index} 
          className="group relative bg-white border border-slate-200 rounded-2xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.08)] transition-all duration-500 transform hover:-translate-y-2"
        >
          {/* Subtle Icon/Graphic Indicator */}
          <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
            {item.title}
          </h3>
          
          <p className="text-slate-600 text-[15px] leading-relaxed">
            {item.desc}
          </p>

          {/* Decorative Corner Element */}
          <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-5 h-5 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      ))}
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
