import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#about', label: '01. LOG' },
  { href: '#experience', label: '02. STACK' },
  { href: '#projects', label: '03. PROJECTS' },
  { href: '#contact', label: '04. CONNECT' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-wide">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center text-lg font-bold text-foreground font-mono tracking-tighter"
          >
            <span className="bg-foreground text-background px-2 py-1 mr-2">LV</span>
            ENGINEER_OS
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center h-full">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="h-full flex items-center px-6 font-mono text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300 border-l border-transparent hover:border-border hover:bg-card/30"
              >
                {link.label}
              </a>
            ))}
            
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="h-full flex items-center px-6 font-mono text-xs tracking-widest text-background bg-foreground hover:bg-muted-foreground transition-colors duration-300 ml-4"
            >
              INITIALIZE_CONTACT
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border overflow-hidden"
            >
              <div className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="px-6 py-4 font-mono text-sm tracking-widest text-muted-foreground border-b border-border/50 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#contact');
                  }}
                  className="px-6 py-4 font-mono text-sm tracking-widest text-background bg-foreground hover:bg-muted-foreground mt-4 mx-6 text-center"
                >
                  INITIALIZE_CONTACT
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
