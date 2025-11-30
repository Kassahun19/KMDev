import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code2,
  Heart,
  Coffee,
} from "lucide-react";
import { PERSONAL_INFO, NAV_LINKS, BUY_ME_COFFEE_URL } from "../constants";

interface FooterProps {
  onNavigate: (viewId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 pt-16 border-t border-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center gap-2 group w-fit outline-none"
            >
              <div className="bg-primary text-white p-2 rounded-lg">
                <Code2 size={24} />
              </div>
              <span className="text-xl font-bold text-white">
                KM<span className="text-primary">.Dev</span>
              </span>
            </button>
            <p className="text-slate-400 text-sm leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900 p-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900 p-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={PERSONAL_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900 p-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-slate-400 hover:text-primary transition-colors text-sm inline-flex items-center gap-2 outline-none"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-700 rounded-full"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="mt-1 text-primary">
                  <Mail size={16} />
                </div>
                <span className="text-slate-400">{PERSONAL_INFO.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">Ph:</span>
                <span className="text-slate-400">{PERSONAL_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">Ad:</span>
                <span className="text-slate-400">{PERSONAL_INFO.address}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-white font-semibold mb-6">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-4">
              Enjoying my work or learned something new from my courses?
            </p>
            <div className="space-y-3">
              <button
                onClick={() => onNavigate("contact")}
                className="inline-block w-full text-center py-2.5 px-4 bg-slate-900 border border-slate-800 rounded-lg text-sm font-medium hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 outline-none"
              >
                Contact Me
              </button>

              <a
                href={BUY_ME_COFFEE_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-amber-600/10 border border-amber-600/30 text-amber-500 rounded-lg text-sm font-medium hover:bg-amber-600 hover:text-white transition-all duration-300 outline-none"
              >
                <Coffee size={16} />
                Buy Me a Coffee
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
