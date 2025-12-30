'use client'
import { ArrowDown } from "lucide-react";
import { Button } from "./button";

const SketchHero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-charcoal/50" />
      
      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <p className="section-label animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Artist & Developer
          </p>

          {/* Main heading */}
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-tight tracking-wider mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Where Art
            <br />
            <span className="text-gold italic font-serif font-light">Meets</span>
            <br />
            Technology
          </h1>

          {/* Divider */}
          <div className="gothic-divider animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <svg className="w-8 h-8 text-gold/50" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z" />
            </svg>
          </div>

          {/* Description */}
          <p 
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-serif animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Full Stack Developer crafting digital experiences.
            <br />
            Artist teaching and inspiring through creative expression.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button variant="gothic" size="lg">
              View Eugene Oredi
            </Button>
            <Button variant="outline" size="lg">
              Teaching Services
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-gentle-float">
          <span className="text-muted-foreground text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 text-gold/50" />
        </div>
      </div>

      {/* Corner ornaments */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-gold/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-gold/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-gold/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-gold/20" />
    </section>
  );
};

export default SketchHero;