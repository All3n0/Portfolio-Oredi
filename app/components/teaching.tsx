import { Button } from "./button";
import { Check } from "lucide-react";

const TeachingSection = () => {
  const offerings = [
    {
      title: "Children's Classes",
      age: "Ages 5-12",
      description: "Nurturing young artists through creative exploration and fundamental techniques.",
      features: ["Safe materials", "Age-appropriate projects", "Creative freedom"],
    },
    {
      title: "Sip & Paint",
      age: "Adults 18+",
      description: "Relaxed evening sessions combining artistry with social connection.",
      features: ["Step-by-step guidance", "All materials included", "BYOB friendly"],
    },
    {
      title: "School Programs",
      age: "All Levels",
      description: "Structured curriculum designed to integrate seamlessly with educational goals.",
      features: ["Flexible scheduling", "Curriculum aligned", "Progress tracking"],
    },
  ];

  return (
    <section id="teaching" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left - Content */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="section-label">Services</p>
            <h2 className="font-display text-4xl md:text-5xl text-cream tracking-wide mb-8">
              Teaching
              <br />
              <span className="text-gold italic font-serif font-light">Art</span>
            </h2>

            <p className="text-muted-foreground font-serif text-lg leading-relaxed mb-8">
              I believe everyone possesses creativity. My teaching approach creates 
              a judgment-free space where exploration and self-expression flourish.
            </p>

            <blockquote className="border-l border-gold/30 pl-6 my-12">
              <p className="text-cream font-serif text-xl italic leading-relaxed">
                "My daughter couldn't stop talking about her painting. 
                The way you engage with children is absolutely wonderful."
              </p>
              <cite className="text-muted-foreground text-sm mt-4 block not-italic">
                — Parent, Kids Workshop
              </cite>
            </blockquote>

            <Button variant="gothic" size="lg">
              Book a Session
            </Button>
          </div>

          {/* Right - Offerings */}
          <div className="space-y-6">
            {offerings.map((offering, i) => (
              <div
                key={offering.title}
                className="gothic-card glow-hover"
              >
                <div className="relative z-10">
                  <span className="text-gold/50 text-xs tracking-widest uppercase">
                    {offering.age}
                  </span>
                  <h3 className="font-display text-2xl text-cream tracking-wide mt-2 mb-4">
                    {offering.title}
                  </h3>
                  <p className="text-muted-foreground font-serif mb-6">
                    {offering.description}
                  </p>

                  <ul className="space-y-3">
                    {offering.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-cream/80">
                        <Check className="w-4 h-4 text-gold/70" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;