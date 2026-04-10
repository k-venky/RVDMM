import AnimatedSection from "@/components/AnimatedSection";
import heroCampus from "@/assets/hero-campus3.jpeg";
import classroom from "@/assets/classroom1.jpg";
import roboticsLab from "@/assets/lab1.jpg";
import { BookOpen, Microscope, Calculator, Globe, Code, Users } from "lucide-react";

const departments = [
  { icon: Microscope, title: "Science", desc: "Physics, Chemistry, Biology with hands-on lab experiments" },
  { icon: Calculator, title: "Mathematics", desc: "Vedic Maths, Abacus, and competitive math training" },
  { icon: Globe, title: "Social Studies", desc: "History, Geography, and Civics with project-based approach" },
  { icon: BookOpen, title: "Languages", desc: "English, Hindi, Telugu with focus on communication skills" },
  { icon: Code, title: "Technology", desc: "AI, Robotics, Coding from foundational grades" },
  { icon: Users, title: "Physical Education", desc: "Sports, Yoga, and holistic fitness programs" },
];

const Academics = () => (
  <div>
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroCampus} alt="Campus" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="relative section-container px-4 text-center">
        <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-foreground mb-3">Academics</h1>
        <p className="text-primary-foreground/80 text-lg">Excellence in Education, Innovation in Learning</p>
      </div>
    </section>

    {/* Curriculum */}
    <section id="curriculum" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              Our <span className="text-primary">Curriculum</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our curriculum is designed to build strong foundations from LKG to Grade 8, integrating CBSE standards with IIT-NEET preparatory modules. We emphasize conceptual clarity, critical thinking, and practical application.
            </p>
            <div className="space-y-3">
              {["CBSE-aligned curriculum with advanced modules", "IIT Foundation from Grade 6", "NEET Foundation with strong science focus", "P5 Model integrated across all subjects", "Regular assessments and parent updates"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-muted rounded-lg px-4 py-3">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <img src={classroom} alt="Classroom" className="rounded-xl shadow-lg w-full" loading="lazy" />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* IIT-NEET */}
    <section className="section-padding bg-muted">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <AnimatedSection>
            <img src={roboticsLab} alt="Lab" className="rounded-xl shadow-lg w-full" loading="lazy" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              IIT–NEET <span className="text-secondary">Foundation</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our dedicated IIT-NEET foundation program starts building competitive exam readiness from Grade 6. Expert faculty guide students through advanced concepts in Mathematics, Physics, Chemistry, and Biology.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[{ num: "6+", label: "Years of Prep" }, { num: "Expert", label: "Faculty" }, { num: "Regular", label: "Mock Tests" }, { num: "Personal", label: "Mentoring" }].map((s, i) => (
                <div key={i} className="bg-card rounded-lg p-4 text-center shadow-sm border border-border">
                  <p className="font-heading font-bold text-primary text-lg">{s.num}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Departments */}
    <section id="departments" className="section-padding bg-background">
      <div className="section-container">
        <AnimatedSection className="text-center mb-10">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">Our Departments</h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((d, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <d.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Faculty */}
    <section id="faculty" className="section-padding bg-muted">
      <div className="section-container max-w-3xl text-center">
        <AnimatedSection>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">Our Faculty</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our handpicked team of experienced educators brings expertise from leading institutions. Every teacher undergoes continuous training and follows our P5 pedagogy framework.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[{ num: "50+", label: "Teachers" }, { num: "1:20", label: "Teacher-Student Ratio" }, { num: "100%", label: "Trained in P5" }].map((s, i) => (
              <div key={i} className="bg-card rounded-xl p-5 shadow-sm border border-border">
                <p className="font-heading font-bold text-primary text-2xl">{s.num}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Academics;
