'use client';
import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, value: "hello@Eugene Oredi.com" },
    { icon: Phone, value: "+254 XXX XXX XXX" },
    { icon: MapPin, value: "Nairobi, Kenya" },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="section-label">Get in Touch</p>
            <h2 className="font-display text-4xl md:text-5xl text-cream tracking-wide">
              Let's <span className="text-gold italic font-serif font-light">Connect</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left - Info */}
            <div className="lg:col-span-2 space-y-8">
              <p className="text-muted-foreground font-serif text-lg leading-relaxed">
                Looking for an art teacher? Want to book a sip-and-paint? 
                Need a website? I'm here for it all.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.value} className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-border flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-gold/70" />
                    </div>
                    <span className="text-cream/80 text-sm">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Available */}
              <div className="border-l border-gold/30 pl-6 py-4">
                <p className="text-gold/70 text-xs tracking-widest uppercase mb-3">
                  Currently Available For
                </p>
                <ul className="space-y-2 text-cream/70 text-sm">
                  <li>• Part-time art teaching</li>
                  <li>• Private & group sessions</li>
                  <li>• Web development projects</li>
                </ul>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-cream/60 text-xs tracking-widest uppercase mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-card border border-border focus:border-gold/50 text-cream placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-cream/60 text-xs tracking-widest uppercase mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-card border border-border focus:border-gold/50 text-cream placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-cream/60 text-xs tracking-widest uppercase mb-2 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Art Teaching / Sip & Paint / Web Project"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-card border border-border focus:border-gold/50 text-cream placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="text-cream/60 text-xs tracking-widest uppercase mb-2 block">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me what you're looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-card border border-border focus:border-gold/50 text-cream placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors min-h-[150px] resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-transparent border border-gold text-gold hover:bg-gold hover:text-void px-8 py-4 text-sm uppercase tracking-widest font-body flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gold/50"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;