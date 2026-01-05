import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* MAIN NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-white border-b border-gray-200"}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
          
          {/* BRAND */}
          <Link to="/" className="leading-tight">
            <div className="text-xl font-semibold text-blue-600">
              Renolsys
            </div>
            <div className="text-[11px] tracking-wide text-gray-500 uppercase">
              Compliance & Risk Advisory
            </div>
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <span className="cursor-pointer hover:text-blue-600 transition">
                Services
              </span>

              {servicesOpen && (
                <div className="absolute top-8 left-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  <Link
                    to="/iso-27001"
                    className="block px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    ISO 27001
                  </Link>
                  <Link
                    to="/soc-2"
                    className="block px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    SOC 2
                  </Link>
                  <Link
                    to="/pci-dss"
                    className="block px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    PCI DSS
                  </Link>
                </div>
              )}
            </div>

            <Link to="/#process" className="hover:text-blue-600 transition">
              Process
            </Link>

            <Link to="/#why-renolsys" className="hover:text-blue-600 transition">
              Why Renolsys
            </Link>

            <Link to="/blog" className="hover:text-blue-600 transition">
              Blog
            </Link>

            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition"
          >
            Request Expert Consultation
          </Link>
        </div>
      </header>

      {/* TRUST STRIP */}
      <div className="pt-[68px] bg-gray-100 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-2 text-center text-[11px] text-gray-600 tracking-wide">
          Framework expertise across{" "}
          <span className="font-semibold text-gray-800">
            ISO 27001 · SOC 2 · PCI DSS · NIST CSF
          </span>
        </div>
      </div>
    </>
  );
}
