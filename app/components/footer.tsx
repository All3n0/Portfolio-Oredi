import { Github, Instagram, Linkedin, Twitter, Youtube, Palette } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com", color: "hover:text-white" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "hover:text-pink-400" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "hover:text-blue-400" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "hover:text-sky-400" },
    { icon: Youtube, label: "YouTube", href: "https://youtube.com", color: "hover:text-red-400" },
    { icon: Palette, label: "Art Eugene Oredi", href: "#", color: "hover:text-gold" },
  ];

  return (
    <footer className="py-16 border-t border-border relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60M0 30L60 30' stroke='%23d4b483' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo with subtle animation */}
          <div className="group">
            <span className="font-display text-lg tracking-[0.2em] text-cream/80 hover:text-gold transition-all duration-500 group-hover:tracking-[0.3em] cursor-default">
              Eugene Oredi
            </span>
            <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-500 mt-1 mx-auto" />
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted-foreground ${social.color} transition-all duration-300 p-2 border border-transparent hover:border-gold/20 rounded-sm group/social`}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 transition-transform duration-300 group-hover/social:scale-110" />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-sm border border-border text-xs px-2 py-1 rounded-sm opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          {/* Copyright with subtle details */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-muted-foreground text-xs tracking-wider text-center md:text-right">
              © 2025 — Nairobi, Kenya
            </p>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            
            {/* Developer credit - subtle but noticeable */}
            <p className="text-muted-foreground/60 text-[10px] tracking-widest uppercase mt-2">
              Developed by{" "}
              <a 
                href="https://allan-k.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold/70 hover:text-gold transition-colors duration-300 font-medium hover:underline underline-offset-2"
              >
                Allan Kiprop
              </a>
            </p>
          </div>
        </div>

        {/* Navigation Links + Contact hint */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Navigation Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {["About", "Gallery", "Teaching", "Code", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-gold transition-all duration-300 text-xs tracking-wider uppercase relative group/link"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover/link:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Contact hint */}
            <div className="text-center md:text-right">
              <p className="text-muted-foreground/50 text-xs tracking-wider uppercase">
                Available for collaborations & art sessions
              </p>
              <p className="text-gold/50 text-[10px] tracking-widest uppercase mt-1">
                Reach out through the contact form
              </p>
            </div>
          </div>
        </div>

        {/* Back to top - subtle */}
        <div className="mt-8 text-center">
          <a 
            href="#top" 
            className="text-muted-foreground/40 hover:text-gold/60 text-xs tracking-widest uppercase transition-colors duration-300 inline-flex items-center gap-1 group/back"
          >
            Back to top
            <svg 
              className="w-3 h-3 transform group-hover/back:-translate-y-0.5 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </footer>
  );
};

export default Footer;