import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const heroPhoto = "/assets/image_1776533493544.png";
const aliPhoto = "/assets/ali.png";
const amjadPhoto = "/assets/amjad.png";
const ibrahimPhoto = "/assets/ibrahim.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-block mb-6">
      <span className="bg-primary text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5">
        {children}
      </span>
    </div>
  );
}

export default function Home() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", intent: "", message: "" });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Please enter a valid email.";
    if (!formData.intent) errors.intent = "Please select how you'd like to help.";
    if (Object.keys(errors).length > 0) { setFormErrors(errors); return; }
    setFormErrors({});
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", intent: "", message: "" });
      toast({ title: "Thank you.", description: "Your message has been received. We'll be in touch shortly." });
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary selection:text-white">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference px-6 py-6 md:px-12 flex justify-between items-center pointer-events-none">
        <div className="text-xl font-display font-bold tracking-tight text-white pointer-events-auto cursor-pointer" data-testid="logo">
          Pro Bionics<span className="text-primary">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-white/80 pointer-events-auto">
          <a href="#problem" className="hover:text-white transition-colors" data-testid="nav-problem">The Problem</a>
          <a href="#solution" className="hover:text-white transition-colors" data-testid="nav-solution">Our Solution</a>
          <a href="#team" className="hover:text-white transition-colors" data-testid="nav-team">Team</a>
          <a href="#news" className="hover:text-white transition-colors" data-testid="nav-news">Updates</a>
          <a href="#help" className="hover:text-white transition-colors" data-testid="nav-help">Get Involved</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative w-full min-h-[100dvh] flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-12">
        <div className="absolute inset-0 z-0">
          <img src={heroPhoto} alt="Man on crutches navigating rubble in a conflict zone" className="w-full h-full object-cover grayscale-[20%] contrast-125" data-testid="hero-image" />
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
            MOBILITY IS<br />NOT A LUXURY.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 md:mt-10 text-xl md:text-2xl text-white/80 max-w-2xl font-medium"
            data-testid="hero-subheadline"
          >
            Low-cost 3D-printed prosthetic sockets for conflict zones, designed, manufactured, and fitted in under 48 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white/60 border border-white/15 rounded-lg px-5 py-3"
            data-testid="hero-pipeline"
          >
            <span className="text-white font-bold">Scan</span>
            <span className="text-primary">→</span>
            <span className="text-white font-bold">Design</span>
            <span className="text-primary">→</span>
            <span className="text-white font-bold">Print</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6 text-lg font-bold tracking-wide" asChild>
              <a href="#help" data-testid="hero-cta">Get Involved</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section id="problem" className="py-24 md:py-40 px-6 md:px-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-none tracking-tighter text-foreground" data-testid="problem-title">
              THE SYSTEM IS<br />BROKEN.
            </h2>
            <p className="mt-8 text-xl md:text-2xl leading-relaxed text-muted-foreground font-medium" data-testid="problem-copy">
              Prosthetics are expensive, slow to deliver, impossible to customize at scale, and virtually inaccessible in conflict zones.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold text-primary" data-testid="stat-amputees">57M+</div>
                <div className="mt-2 text-xs text-muted-foreground uppercase tracking-widest font-bold">Amputees worldwide</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold text-primary" data-testid="stat-cost">$15k+</div>
                <div className="mt-2 text-xs text-muted-foreground uppercase tracking-widest font-bold">Average device cost</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold text-primary" data-testid="stat-wait">6+</div>
                <div className="mt-2 text-xs text-muted-foreground uppercase tracking-widest font-bold">Months wait time</div>
              </div>
            </div>

            <div className="mt-8 pl-6 border-l-2 border-primary">
              <p className="text-base text-muted-foreground leading-relaxed italic">
                "In Gaza, Syria, Sudan: the people who need prosthetics the most are in the places where it's hardest, slowest, and most expensive to deliver them. That's the gap we're closing."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square md:aspect-[4/5] bg-muted w-full"
          >
            <img src={heroPhoto} alt="Man navigating a conflict zone on crutches" className="w-full h-full object-cover grayscale contrast-125" data-testid="problem-image" />
            <div className="absolute inset-0 border border-border/50" />
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="py-24 md:py-40 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl mb-20"
          >
            <SectionLabel>Our Solution</SectionLabel>
            <h3 className="text-4xl md:text-6xl font-display font-bold leading-none tracking-tighter" data-testid="solution-title">
              BUILT FOR THE<br />FRONT LINES.
            </h3>
            <p className="mt-6 text-lg text-background/70 max-w-xl">
              We've rebuilt the prosthetics pipeline from scratch, designed for conditions in the real world, not the ideal world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border/20 pt-16">
            {[
              {
                step: "01.",
                label: "SCAN",
                desc: "A certified prosthetist uses a smartphone to 3D-scan the residual limb. Our app converts it to a medical-grade STL file in under 2 minutes.",
              },
              {
                step: "02.",
                label: "DESIGN",
                desc: "A generative parametric model auto-generates a custom socket based on the scan data, accounting for volume, pressure points, and alignment.",
              },
              {
                step: "03.",
                label: "PRINT",
                desc: "The socket is printed on-site using medical-grade polymer. Our micro-factories fit in a shipping container. All you need is power and an internet connection.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col"
                data-testid={`solution-step-${i + 1}`}
              >
                <div className="text-xs font-bold tracking-widest text-primary uppercase mb-2">{item.step}</div>
                <div className="text-2xl font-display font-bold mb-4">{item.label}</div>
                <p className="text-background/70 text-base leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 md:py-40 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <SectionLabel>The Team</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-foreground" data-testid="team-title">
              THREE FOUNDERS.<br />ONE MISSION.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ali Kotb",
                flag: "🇵🇸",
                role: "CEO",
                photo: aliPhoto,
                bio: "Palestinian. Engineering student at Concordia University in Montreal. President of the Biomedical Engineering Club. Currently working at Motorola Solutions. Leads hardware, CAD, and prototyping.",
                tags: ["Concordia Engineering", "Motorola Solutions", "Biomed Club President", "CAD & 3D Printing", "Montreal, QC"],
                linkedin: "https://www.linkedin.com/in/ali-kotb/",
              },
              {
                name: "Amjad Hassoun",
                flag: "🇱🇧",
                role: "COO",
                photo: amjadPhoto,
                bio: "Lebanese. Graduate Computer Science student at the University of Toronto. IT administrator and tech lead at a private bilingual school in Ontario. Leads business, grants, partnerships, and project management.",
                tags: ["University of Toronto", "Graduate CS", "IT Admin", "iOS & Python", "Grant Strategy", "Ontario"],
                linkedin: "https://www.linkedin.com/in/amjadhassoun/",
              },
              {
                name: "Ibrahim",
                flag: "",
                role: "CTO",
                photo: ibrahimPhoto,
                bio: "Leads all technical architecture, software development, and engineering infrastructure at Pro Bionics. Responsible for the scanning pipeline, parametric design engine, and deployment systems.",
                tags: ["Software Engineering", "Systems Architecture", "Embedded Tech"],
                linkedin: "",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="border border-border p-8"
                data-testid={`team-card-${i}`}
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-muted flex-shrink-0">
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" data-testid={`team-photo-${i}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold tracking-tight">
                      {member.name}{member.flag && <span className="ml-2">{member.flag}</span>}
                    </h3>
                    <p className="text-sm font-semibold text-primary mt-1">{member.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-5">{member.bio}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {member.tags.map((tag, j) => (
                    <span key={j} className="text-xs font-semibold border border-border px-3 py-1 text-muted-foreground">{tag}</span>
                  ))}
                </div>
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline" data-testid={`team-linkedin-${i}`}>
                    LinkedIn
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section id="news" className="py-24 md:py-40 px-6 md:px-12 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <SectionLabel>Updates</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-foreground" data-testid="news-title">FIELD DISPATCHES</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                date: "MARCH 2026",
                title: "First Containerized Print Unit Operational",
                excerpt: "Our micro-factory prototype, built to fit inside a standard 20ft shipping container, successfully printed its first medical-grade socket. The unit requires only 220V power and an internet connection to operate.",
              },
              {
                date: "FEBRUARY 2026",
                title: "NGO Partnership Discussions Underway",
                excerpt: "We are in active discussions with organizations operating in Gaza and Sudan to pilot our scanning and printing pipeline. First deployments are being planned for Q3 2026.",
              },
              {
                date: "JANUARY 2026",
                title: "Parametric Design Model Validated",
                excerpt: "Our generative socket design model has passed initial clinical validation with a certified prosthetist in Montreal. The model can produce a fitting-ready socket design in under 4 minutes from scan data.",
              },
            ].map((article, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="border border-border bg-background p-8 flex flex-col"
                data-testid={`news-card-${i}`}
              >
                <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">{article.date}</p>
                <h3 className="text-lg font-display font-bold tracking-tight text-foreground mb-3 leading-tight">{article.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{article.excerpt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section id="help" className="py-24 md:py-40 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <SectionLabel>Get Involved</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-none tracking-tighter" data-testid="help-title">
              THIS PROJECT<br />IS OPEN.
            </h2>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              We're looking for people who want to help get prosthetics to the people who need them. No gatekeeping, just reach out.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {["NGO Partners", "Certified Prosthetists", "Funding & Grants", "3D Printing Expertise", "CAD Engineers", "Medical Advisors"].map((role, i) => (
                <span key={i} className="border border-border px-4 py-2 text-sm font-semibold text-muted-foreground" data-testid={`role-tag-${i}`}>{role}</span>
              ))}
            </div>
            <p className="mt-10 text-sm text-muted-foreground">
              Or email us directly at{" "}
              <a href="mailto:info@probionics.org" className="text-primary font-semibold hover:underline" data-testid="contact-email">info@probionics.org</a>
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <form onSubmit={handleFormSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Full Name</Label>
                  <Input
                    id="name"
                    className="rounded-none border-border bg-muted/50 focus-visible:ring-primary h-12"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    data-testid="input-name"
                  />
                  {formErrors.name && <p className="text-xs text-destructive" data-testid="error-name">{formErrors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    className="rounded-none border-border bg-muted/50 focus-visible:ring-primary h-12"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    data-testid="input-email"
                  />
                  {formErrors.email && <p className="text-xs text-destructive" data-testid="error-email">{formErrors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="intent" className="text-xs uppercase tracking-widest font-bold text-muted-foreground">How would you like to help?</Label>
                <Select value={formData.intent} onValueChange={(val) => setFormData({ ...formData, intent: val })}>
                  <SelectTrigger id="intent" className="rounded-none border-border bg-muted/50 focus-visible:ring-primary h-12" data-testid="select-intent">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ngo">NGO / Field Partnership</SelectItem>
                    <SelectItem value="prosthetist">Certified Prosthetist</SelectItem>
                    <SelectItem value="funding">Funding or Grant Support</SelectItem>
                    <SelectItem value="3dprinting">3D Printing Expertise</SelectItem>
                    <SelectItem value="cad">CAD Engineering</SelectItem>
                    <SelectItem value="medical">Medical Advisor</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {formErrors.intent && <p className="text-xs text-destructive" data-testid="error-intent">{formErrors.intent}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Message (Optional)</Label>
                <Textarea
                  id="message"
                  className="rounded-none border-border bg-muted/50 focus-visible:ring-primary min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-background/20 pb-16">
          <div>
            <div className="text-2xl font-display font-bold tracking-tight mb-2">Pro Bionics<span className="text-primary">.</span></div>
            <p className="text-background/60 text-sm max-w-sm">Custom prosthetics for conflict zones. Built in the open. Montreal and Ontario, Canada.</p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-background/60">
            <a href="#problem" className="hover:text-background transition-colors" data-testid="footer-link-problem">The Problem</a>
            <a href="#solution" className="hover:text-background transition-colors" data-testid="footer-link-solution">Our Solution</a>
            <a href="#team" className="hover:text-background transition-colors" data-testid="footer-link-team">Team</a>
            <a href="#help" className="hover:text-background transition-colors" data-testid="footer-link-contact">Get Involved</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-background/40 text-xs">Pro Bionics 2026. Built in the open. Montreal and Ontario, Canada.</p>
          <a href="mailto:info@probionics.org" className="text-primary text-xs font-semibold hover:underline" data-testid="footer-email">info@probionics.org</a>
        </div>
      </footer>
    </main>
  );
}
