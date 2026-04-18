import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
const photo1 = "/photo1.png";
const photo2 = "/photo2.png";

export default function Home() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    intent: "",
    message: ""
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", intent: "", message: "" });
      toast({
        title: "Thank you.",
        description: "Your message has been received. We will be in touch shortly.",
      });
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference px-6 py-6 md:px-12 flex justify-between items-center pointer-events-none">
        <div className="text-xl font-display font-bold tracking-tight text-white pointer-events-auto cursor-pointer" data-testid="logo">
          AXIS<span className="text-primary">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-white/80 pointer-events-auto">
          <a href="#problem" className="hover:text-white transition-colors" data-testid="nav-problem">The Problem</a>
          <a href="#solution" className="hover:text-white transition-colors" data-testid="nav-solution">Our Solution</a>
          <a href="#news" className="hover:text-white transition-colors" data-testid="nav-news">Field Dispatches</a>
          <a href="#help" className="hover:text-white transition-colors" data-testid="nav-help">Take Action</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-[100dvh] flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-12">
        {/* Split background: two photos side by side */}
        <div className="absolute inset-0 z-0 flex">
          <div className="flex-1 overflow-hidden">
            <img 
              src={photo2} 
              alt="Man on crutches in rubble" 
              className="w-full h-full object-cover filter grayscale-[20%] contrast-125"
              data-testid="hero-image-1"
            />
          </div>
          <div className="hidden md:block flex-1 overflow-hidden">
            <img 
              src={photo1} 
              alt="Boy with prosthetic limb" 
              className="w-full h-full object-cover filter grayscale-[30%] contrast-125 brightness-90"
              data-testid="hero-image-2"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/15 z-[1]" />
        
        <div className="relative z-10 max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-9xl font-display font-bold text-white leading-[0.9] tracking-tighter"
            data-testid="hero-headline"
          >
            MOBILITY IS<br/>NOT A LUXURY.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 md:mt-10 text-xl md:text-2xl text-white/80 max-w-2xl font-medium"
            data-testid="hero-subheadline"
          >
            Deploying 3D-printed prosthetic sockets to conflict zones. Faster, cheaper, and built for the front lines.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6 text-lg font-bold tracking-wide" asChild>
              <a href="#help" data-testid="hero-cta">Stand With Us</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="py-24 md:py-40 px-6 md:px-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-none tracking-tighter text-foreground" data-testid="problem-title">
              THE SYSTEM IS BROKEN.
            </h2>
            <p className="mt-8 text-xl md:text-2xl leading-relaxed text-muted-foreground font-medium" data-testid="problem-copy">
              <strong className="text-foreground">Prosthetics are broken where they're needed most.</strong> The global prosthetics market is structurally broken: devices are expensive, slow to deliver, impossible to customize at scale, and virtually inaccessible in conflict zones.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold text-primary">6+</div>
                <div className="mt-2 text-sm text-muted-foreground uppercase tracking-widest font-bold">Months wait time</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold text-primary">$15k</div>
                <div className="mt-2 text-sm text-muted-foreground uppercase tracking-widest font-bold">Average cost</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square md:aspect-[4/5] bg-muted w-full"
          >
            <img 
              src={photo1} 
              alt="Boy with prosthetic limb" 
              className="w-full h-full object-cover grayscale contrast-125 mix-blend-multiply"
              data-testid="problem-image"
            />
            <div className="absolute inset-0 border border-border/50"></div>
          </motion.div>
        </div>
      </section>

      {/* The Solution */}
      <section id="solution" className="py-24 md:py-40 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-20"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">Our Solution</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold leading-none tracking-tighter" data-testid="solution-title">
              FIELD-DEPLOYABLE 3D PRINTING.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border/20 pt-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              <div className="text-2xl font-display font-bold mb-4 text-primary">01. FASTER</div>
              <p className="text-background/70 text-lg">We reduced manufacturing time from months to under 48 hours. Scans are taken via smartphone and printed on-site.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="text-2xl font-display font-bold mb-4 text-primary">02. CHEAPER</div>
              <p className="text-background/70 text-lg">By eliminating the supply chain and using advanced polymers, we dropped the cost per socket by 95%.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col"
            >
              <div className="text-2xl font-display font-bold mb-4 text-primary">03. FIELDABLE</div>
              <p className="text-background/70 text-lg">Our micro-factories fit in a shipping container. If there's power and internet, we can manufacture medical-grade prosthetics.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section id="news" className="py-24 md:py-40 px-6 md:px-12 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-foreground" data-testid="news-title">FIELD DISPATCHES</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                date: "OCTOBER 12, 2023",
                title: "First Mobile Factory Deployed to Eastern Europe",
                excerpt: "Our team successfully operationalized the first containerized printing unit, producing 14 sockets in the first week."
              },
              {
                date: "SEPTEMBER 04, 2023",
                title: "New Polymer Blend Passes Stress Testing",
                excerpt: "Engineering update: our new proprietary blend withstands 40% more sheer force while maintaining flexibility."
              },
              {
                date: "AUGUST 18, 2023",
                title: "Partnership with MSF Announced",
                excerpt: "Doctors Without Borders will pilot our scanning application in three active conflict zones starting next month."
              }
            ].map((article, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background border border-border p-8 flex flex-col group cursor-pointer hover:border-primary transition-colors"
                data-testid={`article-card-${i}`}
              >
                <div className="text-xs font-bold text-muted-foreground tracking-widest uppercase mb-4">{article.date}</div>
                <h4 className="text-xl font-display font-bold mb-4 group-hover:text-primary transition-colors">{article.title}</h4>
                <p className="text-muted-foreground leading-relaxed flex-grow">{article.excerpt}</p>
                <div className="mt-8 text-sm font-bold uppercase tracking-widest text-foreground flex items-center gap-2">
                  Read Dispatch <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Help / Form */}
      <section id="help" className="py-24 md:py-40 px-6 md:px-12 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-foreground mb-6" data-testid="form-title">
              WE CAN'T DO THIS ALONE.
            </h2>
            <p className="text-xl text-muted-foreground">The crisis is massive. The solution is here. We need resources, partners, and voices.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleFormSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Full Name</Label>
                  <Input 
                    id="name" 
                    required 
                    className="rounded-none border-border bg-muted/50 focus-visible:ring-primary h-12" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    className="rounded-none border-border bg-muted/50 focus-visible:ring-primary h-12" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    data-testid="input-email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="intent" className="text-xs uppercase tracking-widest font-bold text-muted-foreground">How would you like to help?</Label>
                <Select value={formData.intent} onValueChange={(val) => setFormData({...formData, intent: val})} required>
                  <SelectTrigger id="intent" className="rounded-none border-border bg-muted/50 focus-visible:ring-primary h-12" data-testid="select-intent">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="donate">Fund a deployment (Donate)</SelectItem>
                    <SelectItem value="partner">Organizational Partnership</SelectItem>
                    <SelectItem value="volunteer">Volunteer Expertise</SelectItem>
                    <SelectItem value="press">Press / Media Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Message (Optional)</Label>
                <Textarea 
                  id="message" 
                  className="rounded-none border-border bg-muted/50 focus-visible:ring-primary min-h-[120px]" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  data-testid="input-message"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-none h-14 text-lg font-bold tracking-widest uppercase"
                data-testid="button-submit"
              >
                {isSubmitting ? "Submitting..." : "Send Transmission"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-background/20 pb-16">
          <div className="max-w-md">
            <div className="text-3xl font-display font-bold tracking-tighter mb-4">AXIS<span className="text-primary">.</span></div>
            <p className="text-background/60 font-medium">Restoring mobility where it's needed most. Humanity through technology.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div className="flex flex-col gap-4">
              <a href="#problem" className="font-bold text-sm uppercase tracking-widest text-background/80 hover:text-primary transition-colors">The Problem</a>
              <a href="#solution" className="font-bold text-sm uppercase tracking-widest text-background/80 hover:text-primary transition-colors">Our Solution</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#news" className="font-bold text-sm uppercase tracking-widest text-background/80 hover:text-primary transition-colors">Dispatches</a>
              <a href="#help" className="font-bold text-sm uppercase tracking-widest text-background/80 hover:text-primary transition-colors">Take Action</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="font-bold text-sm uppercase tracking-widest text-background/80 hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="font-bold text-sm uppercase tracking-widest text-background/80 hover:text-primary transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 flex justify-between items-center text-sm font-bold tracking-widest uppercase text-background/40">
          <div>© {new Date().getFullYear()} AXIS PROSTHETICS</div>
          <div>NON-PROFIT ORG 501(C)(3)</div>
        </div>
      </footer>
    </main>
  );
}