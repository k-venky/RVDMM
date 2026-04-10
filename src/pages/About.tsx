import AnimatedSection from "@/components/AnimatedSection";
import aboutSchool from "@/assets/about-school1.jpg";
import heroCampus from "@/assets/hero-campus3.jpeg";
import { Eye, Rocket, BookOpen, Users, Award, Target } from "lucide-react";

const About = () => (
  <div>
    {/* Hero */}
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroCampus} alt="Campus" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="relative section-container px-4 text-center">
        <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-foreground mb-3">About Us</h1>
        <p className="text-primary-foreground/80 text-lg">Nurturing Future Leaders Since Day One</p>
      </div>
    </section>

    {/* About Content */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <AnimatedSection>
            <img src={aboutSchool} alt="About" className="rounded-xl shadow-lg w-full" loading="lazy" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              Our <span className="text-primary">Story</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
              Rishi Vidyalaya IIT–NEET Foundation School was established in Dharmavaram with a singular vision — to provide world-class education rooted in Indian values. As the first AC campus in Dharmavaram, we set new benchmarks in educational infrastructure.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
              Our ISO-certified institution combines the best of modern pedagogy with time-tested teaching methods. With 500+ admissions in our very first year, we have already earned the trust of hundreds of families.
            </p>
            <div className="flex gap-4 flex-wrap">
              {[{ icon: Users, label: "500+ Students" }, { icon: Award, label: "ISO Certified" }, { icon: Target, label: "IIT-NEET Focus" }].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-muted rounded-lg px-4 py-2">
                  <item.icon size={18} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section id="vision" className="section-padding bg-muted">
      <div className="section-container">
        <AnimatedSection className="text-center mb-10">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">Vision & Mission</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border h-full card-hover">
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <Eye className="text-secondary" size={24} />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-justify">
                To create future-ready students who excel globally while staying rooted in Indian values. We envision a generation of thinkers, innovators, and leaders who transform society.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border h-full card-hover">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Rocket className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">Our Mission</h3>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex gap-2"><BookOpen size={16} className="shrink-0 mt-1 text-primary" /> Deliver quality education through innovative pedagogy</li>
                <li className="flex gap-2"><BookOpen size={16} className="shrink-0 mt-1 text-primary" /> Instill discipline, values, and ethical character</li>
                <li className="flex gap-2"><BookOpen size={16} className="shrink-0 mt-1 text-primary" /> Develop 21st-century skills and competencies</li>
                <li className="flex gap-2"><BookOpen size={16} className="shrink-0 mt-1 text-primary" /> Foster innovation and creative thinking</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* History */}
    <section id="history" className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <AnimatedSection className="text-center mb-10">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">Our History</h2>
        </AnimatedSection>
        <AnimatedSection>
          <div className="space-y-6">
            {[
              { year: "2023", title: "Foundation Year", desc: "Rishi Vidyalaya was established with a vision to bring IIT-NEET foundation education to Dharmavaram." },
              { year: "2024", title: "500+ Admissions", desc: "Achieved 500+ student admissions in the very first academic year, earning ISO certification and multiple awards." },
              { year: "2025", title: "Tech Recognition", desc: "Received ET Tech Award 2025 for innovation in education. Expanded AI & Robotics programs." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center shrink-0">
                  <span className="font-heading font-bold text-primary-foreground text-sm">{item.year}</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Principal Message */}
    <section className="section-padding bg-muted">
      <div className="section-container max-w-3xl text-center">
        <AnimatedSection>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">Principal's Message</h2>
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <p className="text-muted-foreground leading-relaxed italic mb-4 text-justify">
              "At Rishi Vidyalaya, we believe every child is unique and capable of greatness. Our P5 Model ensures that students don't just learn — they discover their purpose, ignite their passion, achieve proficiency, engage in project-based learning, and strive for perfection. We are committed to building not just academically excellent students, but responsible citizens of tomorrow."
            </p>
            <p className="font-heading font-semibold text-foreground">— The Principal</p>
            <p className="text-sm text-muted-foreground">Rishi Vidyalaya IIT–NEET Foundation School</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default About;
