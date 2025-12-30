import { Palette, Code2, Users, Leaf } from "lucide-react";
import CountUpNumber from "./CountUpNumber";
const AboutSection = () => {
  const expertise = [
    { icon: Palette, label: "Fine Art" },
    { icon: Leaf, label: "Environmental Art" },
    { icon: Users, label: "Art Education" },
    { icon: Code2, label: "Web Development" },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
 {/* Left - Image/Visual */}
<div className="relative w-full lg:w-auto">
  <div className="relative glow-hover overflow-hidden group">
    {/* Image Container - Responsive aspect ratio */}
    <div className="relative w-full pb-[66.67%] bg-charcoal lg:pb-[75%] xl:pb-[66.67%]">
      {/* Your image */}
      <img
        src="https://i.postimg.cc/bwqTSntf/Whats-App-Image-2025-12-29-at-22-59-33.jpg"
        alt="Artist & Developer"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      {/* Frame Overlay */}
      <div className="absolute inset-0">
        {/* Outer frame */}
        <div className="absolute inset-2 sm:inset-3 lg:inset-4 border border-gold/20" />
        {/* Inner frame */}
        <div className="absolute inset-4 sm:inset-6 lg:inset-8 border border-gold/10" />
      </div>
      
      {/* Overlay gradient for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-8 text-center">
        <p className="text-cream/90 font-display text-xl sm:text-2xl lg:text-3xl mb-2 tracking-wide">
          Artist & Developer
        </p>
        <p className="text-gold/80 font-serif text-sm sm:text-base lg:text-lg italic">
          Where Art Meets Technology
        </p>
      </div>
    </div>

    {/* Floating element - Responsive positioning with counting animation */}
    <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 bg-card/90 backdrop-blur-sm border border-gold/30 p-4 sm:p-6 shadow-lg">
      <CountUpNumber end={5} duration={2} className="text-gold text-2xl sm:text-3xl lg:text-4xl font-display" />
      <p className="text-cream/70 text-xs sm:text-sm lg:text-base font-body tracking-wider uppercase">
        Years Creating
      </p>
    </div>

    {/* Decorative corner accents */}
    <div className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border-t border-l border-gold/30" />
    <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border-t border-r border-gold/30" />
    <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border-b border-l border-gold/30" />
    <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border-b border-r border-gold/30" />
  </div>

  {/* Additional info below image on mobile with counting animations */}
  <div className="mt-6 lg:hidden text-center">
    <p className="text-muted-foreground text-sm mb-4">
      Full Stack Developer crafting digital experiences.<br />
      Artist teaching and inspiring through creative expression.
    </p>
    <div className="flex items-center justify-center gap-6">
      <div className="text-center">
        <CountUpNumber end={100} duration={3} className="text-gold text-xl font-display" />
        <p className="text-cream/70 text-xs uppercase tracking-widest">Projects</p>
      </div>
      <div className="text-center">
        <CountUpNumber end={50} duration={2.5} className="text-gold text-xl font-display" />
        <p className="text-cream/70 text-xs uppercase tracking-widest">Students</p>
      </div>
      <div className="text-center">
        <CountUpNumber end={2} duration={1} className="text-gold text-xl font-display" />
        <p className="text-cream/70 text-xs uppercase tracking-widest">Passions</p>
      </div>
    </div>
  </div>
</div>
          {/* Right - Content */}
          <div>
            <p className="section-label">About Me</p>
            <h2 className="font-display text-4xl md:text-5xl text-cream tracking-wide mb-8">
              Bridging Creativity
              <br />
              <span className="text-gold italic font-serif font-light">& Innovation</span>
            </h2>

            <div className="space-y-6 text-muted-foreground font-serif text-lg leading-relaxed">
              <p>
                I am a certified Full Stack Software Developer with hands-on experience 
                building websites and systems. My work for Furaha Initiative showcases 
                my ability to create functional, user-centered digital experiences.
              </p>
              
              <p>
                Beyond code, I am an artist who has led major art projects for 
                <span className="text-cream"> Greenpeace Africa</span>, using creative 
                expression to amplify climate and environmental awareness.
              </p>
              
              <p>
                I host sip-and-paint events for children and adults, teaching and 
                inspiring others to explore art in an interactive, welcoming environment.
              </p>
            </div>

            {/* Expertise */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {expertise.map((item) => (
                <div 
                  key={item.label}
                  className="flex items-center gap-3 p-4 border border-border bg-card/50 hover:border-gold/30 transition-colors duration-300"
                >
                  <item.icon className="w-5 h-5 text-gold/70" />
                  <span className="text-cream text-sm tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;