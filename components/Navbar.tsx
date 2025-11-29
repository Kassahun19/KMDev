import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Coffee } from 'lucide-react';
import { NAV_LINKS, BUY_ME_COFFEE_URL } from '../constants';

interface NavbarProps {
  currentView: string;
  onNavigate: (viewId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md shadow-md py-3' : 'bg-background/80 backdrop-blur-sm py-4 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button 
              onClick={() => handleNavClick('home')} 
              className="flex items-center gap-2 group z-50 outline-none"
            >
              <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-primary/30">
                <Code2 size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                KM<span className="text-primary">.Dev</span>
              </span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_LINKS.map((link) => {
                const isActive = currentView === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 outline-none
                      ${isActive 
                        ? 'bg-primary/10 text-primary font-bold' 
                        : 'text-muted-foreground hover:text-primary hover:bg-muted'
                      }`}
                  >
                    {link.name}
                  </button>
                );
              })}
              
              <div className="h-6 w-px bg-border mx-2"></div>
              
              <a
                href={BUY_ME_COFFEE_URL}
                target="_blank"
                rel="noreferrer"
                title="Buy me a coffee"
                className="p-2 text-muted-foreground hover:text-amber-600 hover:bg-muted rounded-full transition-all duration-300 outline-none"
              >
                <Coffee size={20} />
              </a>

              <button 
                onClick={() => handleNavClick('contact')}
                className={`ml-2 px-5 py-2 text-sm font-medium rounded-full transition-all shadow-lg bg-primary text-primary-foreground hover:opacity-90 shadow-blue-500/20 outline-none`}
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-foreground transition-colors hover:bg-muted"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Sidebar (Right Drawer) */}
      <div className={`fixed top-0 right-0 bottom-0 w-[75%] sm:w-[60%] max-w-sm bg-background border-l border-border z-[45] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 px-6 shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-2 overflow-y-auto">
          {NAV_LINKS.map((link) => {
             const isActive = currentView === link.id;
             return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-lg font-medium py-4 border-b border-border flex justify-between items-center outline-none ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
              >
                {link.name}
                {isActive && <span className="w-2 h-2 bg-primary rounded-full"></span>}
              </button>
             );
          })}
          
          <a
            href={BUY_ME_COFFEE_URL}
            target="_blank"
            rel="noreferrer"
            className="text-lg font-medium py-4 border-b border-border flex justify-between items-center outline-none text-muted-foreground hover:text-amber-600"
          >
            Buy Me a Coffee
            <Coffee size={20} className="text-amber-600" />
          </a>

          <button
            onClick={() => handleNavClick('contact')}
            className="mt-6 w-full py-3 bg-primary text-primary-foreground text-center font-medium rounded-xl hover:opacity-90 transition-colors shadow-lg shadow-blue-500/30 outline-none"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;