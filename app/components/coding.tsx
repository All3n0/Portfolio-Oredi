import { Github, ExternalLink } from "lucide-react";
import { Button } from "./button";

const CodeSection = () => {
  const projects = [
    {
      name: "Furaha Initiative",
      type: "CBO Website",
      description: "Full website for a community-based organization focused on empowerment and education.",
      tech: ["React", "TypeScript", "Tailwind"],
    },
    {
      name: "Eugene Oredi Projects",
      type: "Web Development",
      description: "Various responsive websites showcasing modern design and functionality.",
      tech: ["JavaScript", "CSS3", "HTML5"],
    },
    {
      name: "Creative Tools",
      type: "Web Applications",
      description: "Digital tools bridging technology and artistic expression.",
      tech: ["Canvas API", "React", "Node.js"],
    },
  ];

  const skills = ["JavaScript", "TypeScript", "React", "Node.js", "HTML5", "CSS3", "Git", "Tailwind"];

  return (
    <section id="code" className="py-32 relative bg-charcoal/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label">Development</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream tracking-wide">
            The <span className="text-gold italic font-serif font-light">Code</span>
          </h2>
          <p className="text-muted-foreground font-serif text-lg mt-6 max-w-2xl mx-auto">
            Full Stack Developer creating functional, user-centered digital experiences.
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-6 py-3 border border-border text-cream/80 text-sm tracking-wider hover:border-gold/30 transition-colors duration-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-3 gap-1">
          {projects.map((project) => (
            <div
              key={project.name}
              className="gothic-card group glow-hover"
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-gold/50 text-xs tracking-widest uppercase">
                    {project.type}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors" />
                </div>

                <h3 className="font-display text-xl text-cream tracking-wide mb-4">
                  {project.name}
                </h3>
                <p className="text-muted-foreground font-serif text-sm mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-3 py-1 bg-background/50 text-cream/60 text-xs tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="gap-2">
            <Github className="w-4 h-4" />
            View on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CodeSection;