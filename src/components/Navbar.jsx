import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* MAIN NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* BRAND */}
          <Link to="/" className="leading-tight">
            <div className="text-[22px] font-semibold tracking-tight text-blue-600">
              Renolsys
            </div>
            <div className="text-[11px] uppercase tracking-wide text-gray-500">
              Compliance & Risk Advisory
            </div>
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-10 text-[14px] font-medium text-gray-700">
            <NavLink to="/" className="hover:text-blue-600">
              Home
            </NavLink>

            <NavLink to="/iso-27001" className="hover:text-blue-600">
              Services
            </NavLink>

            <NavLink to="/process" className="hover:text-blue-600">
              Process
            </NavLink>

            <NavLink to="/why-renolsys" className="hover:text-blue-600">
              Why Renolsys
            </NavLink>

            <NavLink to="/blog" className="hover:text-blue-600">
              Insights
            </NavLink>

            <NavLink to="/contact" className="hover:text-blue-600">
              Contact
            </NavLink>
          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white text-[14px] font-semibold px-6 py-3 rounded-lg transition shadow-sm"
          >
            Request Expert Consultation
          </Link>
        </div>
      </header>

      {/* TRUST STRIP */}
      <div className="pt-[86px] bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-2 text-center text-[11px] text-gray-600 tracking-wide">
          Framework expertise across{" "}
          <span className="font-semibold text-gray-900">
            ISO 27001 · SOC 2 · PCI DSS · NIST CSF
          </span>
        </div>
      </div>
    </>
  );
}
