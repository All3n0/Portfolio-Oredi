'use client';
import { useState } from "react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const items: GalleryItem[] = [
  {
    id: 1,
    title: "Raw Form",
    category: "Experimental",
    description: "Unfiltered artistic expression",
    image: "https://res.cloudinary.com/dwft5hafl/image/upload/v1767085149/18_fmzh4e.jpg",
  },
  {
    id: 2,
    title: "Abstract Motion",
    category: "Contemporary",
    description: "Movement through color and texture",
    image: "https://res.cloudinary.com/dwft5hafl/image/upload/v1767085149/17_knexym.jpg",
  },
  {
    id: 3,
    title: "Surreal Frame",
    category: "Surrealism",
    description: "Dreamlike visual narrative",
    image: "https://res.cloudinary.com/dwft5hafl/image/upload/v1767085149/16_ym65gq.jpg",
  },
  {
    id: 4,
    title: "Figurative Silence",
    category: "Expressionism",
    description: "Emotion captured in stillness",
    image: "https://res.cloudinary.com/dwft5hafl/image/upload/v1767085150/15_jkrv5o.jpg",
  },
  {
    id: 5,
    title: "Muted Tones",
    category: "Minimal",
    description: "Balance of light and shadow",
    image: "https://res.cloudinary.com/dwft5hafl/image/upload/v1767085149/14_nwpfou.jpg",
  },
  {
    id: 6,
    title: "Textured Reality",
    category: "Mixed Media",
    description: "Layered surface exploration",
    image: "https://res.cloudinary.com/dwft5hafl/image/upload/v1767085150/13_yrwmmh.jpg",
  },
  {
    id: 7,
    title: "Grotesque Study",
    category: "Visual Art",
    description: "Exploration of distorted human forms",
    image: "https://res.cloudinary.com/dwft5hafl/image/upload/v1767085150/12_klf89n.jpg",
  },
];

const GallerySection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-32 relative bg-charcoal/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label">Selected Works</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream tracking-wide">
            Art <span className="text-gold italic font-serif font-light">Gallery</span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {items.map((item) => (
            <div
              key={item.id}
className="aspect-square relative overflow-hidden group cursor-pointer glow-hover bg-cover bg-center"
  style={{ backgroundImage: `url(${item.image})` }}              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L20 40M0 20L40 20' stroke='%23ffffff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
                }} />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <span className="text-6xl text-gold/10 font-display">
                    {String(item.id).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Hover overlay */}
              <div 
                className={`absolute inset-0 bg-background/95 flex flex-col items-center justify-center p-8 transition-all duration-500 ${
                  hoveredId === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-gold/70 text-xs tracking-widest uppercase mb-2">
                  {item.category}
                </p>
                <h3 className="font-display text-2xl text-cream tracking-wide text-center mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm font-serif text-center">
                  {item.description}
                </p>
              </div>

              {/* Border on hover */}
              <div 
                className={`absolute inset-0 border transition-all duration-500 ${
                  hoveredId === item.id ? "border-gold/30" : "border-transparent"
                }`} 
              />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="gothic-divider mt-20">
          <span className="text-muted-foreground text-xs tracking-widest uppercase px-4">
            Want to learn art?
          </span>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;