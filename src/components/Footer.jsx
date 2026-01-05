import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-teal-400 flex items-center justify-center text-white shadow-md">R</div>
            <div>
              <div className="text-lg font-semibold">Renolsys</div>
              <div className="text-sm text-gray-400">Compliance & Risk Advisory</div>
            </div>
          </div>
          <p className="text-sm text-gray-400">We help organizations scale securely and achieve compliance with ISO 27001, SOC 2, PCI DSS, and industry frameworks.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><Link to="/iso-27001" className="hover:text-white">ISO 27001</Link></li>
            <li><Link to="/soc-2" className="hover:text-white">SOC 2</Link></li>
            <li><Link to="/pci-dss" className="hover:text-white">PCI DSS</Link></li>
            <li><Link to="/services/risk-assessment" className="hover:text-white">Risk Assessments</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
            <li><Link to="/resources" className="hover:text-white">Whitepapers</Link></li>
            <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-400">hello@renolsys.com</p>
          <p className="text-sm text-gray-400">+1 (800) 123-4567</p>

          <div className="mt-5 flex gap-3">
            <a href="#" className="text-gray-400 hover:text-white"><Facebook size={18} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Twitter size={18} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={18} /></a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-500 flex flex-col md:flex-row justify-between">
          <div>© {new Date().getFullYear()} Renolsys. All rights reserved.</div>
          <div className="mt-2 md:mt-0">Privacy · Terms · Security</div>
        </div>
      </div>
    </footer>
  );
}
