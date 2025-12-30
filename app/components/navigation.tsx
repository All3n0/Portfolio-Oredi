'use client';
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const SketchNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#teaching", label: "Teaching" },
    { href: "#code", label: "Code" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group">
          <span className="font-display text-xl tracking-[0.2em] text-cream group-hover:text-gold transition-colors duration-300">
            Eugene Oredi
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-cream"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-cream hover:text-gold transition-colors duration-300 text-sm tracking-wider uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default SketchNav;