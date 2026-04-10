import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users, Building, ShieldCheck, GraduationCap, Heart,
  Bot, Car, Snowflake, Target, Flame, Lightbulb, FolderKanban, Star,
  Award, Trophy, Medal, BookOpen, Compass, Footprints, Music, Brain,
  Calculator, Dumbbell, Palette, Quote, ChevronLeft, ChevronRight, X,
} from "lucide-react";
import { useState, useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";

import heroCampus from "@/assets/hero-campus3.jpeg";
// import heroCampus from "@/assets/hero-campus.jpg";
import aboutSchool from "@/assets/about-school1.jpg";
import roboticsLab from "@/assets/lab1.jpg";
import classroom from "@/assets/classroom1.jpg";
import buses from "@/assets/bus1.jpg";
import playground from "@/assets/playground1.jpg";
import hostel from "@/assets/hostelbed1.jpg";
import annualDay from "@/assets/annual2.jpeg";
import sportsDay from "@/assets/sports1.jpg";
import culturalFest from "@/assets/cultural-fest1.jpg";
import awards from "@/assets/arts1.jpg";
import awardss from "@/assets/awards1.jpg";

const heroImages = [
  heroCampus,
  aboutSchool,
  classroom,
  roboticsLab,
  playground
];

const trustItems = [
  { icon: Users, number: "500+", label: "Admissions in First Year" },
  { icon: Snowflake, number: "First", label: "AC Campus in Dharmavaram" },
  { icon: ShieldCheck, number: "ISO", label: "Certified Institution" },
  { icon: GraduationCap, number: "IIT–NEET", label: "Foundation Programs" },
  { icon: Heart, number: "Most", label: "Trusted by Parents" },
];

const whyChooseUs = [
  { icon: Target, title: "P5 Model Education", desc: "A unique pedagogy focusing on Purpose, Passion, Proficiency, Project-Based Learning, and Perfection." },
  { icon: Bot, title: "AI & Robotics Lab", desc: "State-of-the-art lab where students learn coding, AI concepts, and build real robots." },
  { icon: Car, title: "Automotive Space Lab", desc: "Hands-on automotive exploration to inspire the next generation of engineers." },
  { icon: Snowflake, title: "Stress-Free AC Classrooms", desc: "Temperature-controlled classrooms for optimal learning comfort and focus." },
  { icon: GraduationCap, title: "IIT–NEET Foundation", desc: "Strong academic foundation from early grades preparing students for competitive exams." },
  { icon: BookOpen, title: "Holistic Development", desc: "Balanced focus on academics, sports, arts, and character building." },
];

const p5Model = [
  { num: "P1", title: "Purpose", desc: "Discovering the 'why' behind learning", icon: Compass, detail: "Helping students discover their goals and direction in life" },
  { num: "P2", title: "Passion", desc: "Igniting curiosity and love for knowledge", icon: Flame, detail: "Encouraging love for learning and curiosity" },
  { num: "P3", title: "Proficiency", desc: "Mastering skills through practice", icon: Lightbulb, detail: "Developing strong academic and practical skills" },
  { num: "P4", title: "Project-Based Learning", desc: "Applying knowledge to real-world challenges", icon: FolderKanban, detail: "Hands-on learning through real-world projects" },
  { num: "P5", title: "Perfection", desc: "Striving for excellence in everything", icon: Star, detail: "Striving for excellence in all areas" },
];

const facilities = [
  { img: roboticsLab, title: "AI & Robotics Lab" },
  { img: classroom, title: "Digital Classrooms" },
  { img: buses, title: "School Buses" },
  { img: playground, title: "Playground" },
  { img: hostel, title: "Hostel Facilities" },
  { img: awards, title: "Arts & Crafts" },
];

const achievementItems = [
  { icon: Trophy, title: "Best Emerging School Award", year: "2024" },
  { icon: Award, title: "Academic Excellence Award", year: "2024" },
  { icon: Medal, title: "ET Tech Award", year: "2025" },
];

const studentDev = [
  { icon: FolderKanban, title: "Project-Based Learning", desc: "Real-world projects that build critical thinking" },
  { icon: Footprints, title: "Hands-on Activities", desc: "Experiential learning through doing" },
  { icon: Compass, title: "Field Trips", desc: "Educational excursions for practical knowledge" },
  { icon: Bot, title: "Digital Fest", desc: "Technology and innovation showcases" },
];

const coCurricular = [
  { icon: Brain, title: "Yoga & Meditation" },
  { icon: Calculator, title: "Abacus" },
  { icon: BookOpen, title: "Vedic Maths" },
  { icon: Dumbbell, title: "Sports" },
  { icon: Palette, title: "Cultural Activities" },
  { icon: Music, title: "Music & Dance" },
];

const celebrations = [
  { img: annualDay, title: "Annual Day" },
  { img: sportsDay, title: "Sports Day" },
  { img: culturalFest, title: "Cultural Fest" },
  { img: awardss, title: "Award Ceremonies" },
];

const testimonials = [
  { name: "Mrs. Lakshmi Devi", text: "The best decision we made for our child. The P5 model has transformed how our son approaches learning. The teachers are incredibly dedicated.", role: "Parent of Grade 5 student" },
  { name: "Mr. Ramesh Kumar", text: "The AC classrooms and modern labs set this school apart. My daughter loves the robotics program. We see remarkable improvement in her confidence.", role: "Parent of Grade 3 student" },
  { name: "Mrs. Padma Reddy", text: "Discipline, values, and academics — Rishi Vidyalaya excels in all three. The residential facility is well-managed and safe. Highly recommended!", role: "Parent of Grade 7 student" },
];

const Index = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [activeP5, setActiveP5] = useState<number | null>(null);
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Floating decorative shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] -left-32 w-64 h-64 rounded-full bg-secondary/5 blur-3xl will-change-transform" />
        <div className="absolute top-[60%] -right-32 w-80 h-80 rounded-full bg-secondary/5 blur-3xl will-change-transform" />
        <div className="absolute bottom-[10%] left-[30%] w-48 h-48 rounded-full bg-primary/3 blur-3xl will-change-transform" />
      </div>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" onClick={() => setCurrentHeroIdx((prev) => (prev + 1) % heroImages.length)}>
          <AnimatePresence>
            <motion.img
              key={currentHeroIdx}
              src={heroImages[currentHeroIdx]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover will-change-transform"
              alt={`Rishi Vidyalaya Campus ${currentHeroIdx + 1}`}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-primary/30" />
        </div>
        {/* Floating circles in hero */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 rounded-full border border-secondary/20 animate-float" />
          <div className="absolute bottom-32 left-16 w-20 h-20 rounded-full bg-secondary/10 blur-xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading font-extrabold text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-4"
          >
            Rishi Vidyalaya – IIT & NEET Foundation School
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-3"
          >
            Building Strong Foundations for Your Child's Future
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm md:text-base text-secondary font-medium mb-8"
          >
            LKG to Grade 8 | Residential | Semi-Residential | Day School
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/admissions" className="px-8 py-3.5 rounded-full font-heading font-semibold text-white gradient-primary shadow-lg hover:opacity-90 transition-all text-sm md:text-base">
              Apply Now
            </Link>
            <Link to="/contact" className="px-8 py-3.5 rounded-full font-heading font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all text-sm md:text-base backdrop-blur-sm">
              Book a Visit
            </Link>
          </motion.div>
        </div>
        {/* Slider Navigation Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentHeroIdx(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentHeroIdx ? "bg-secondary w-8" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/*TRUST STRIP*/}
      
      <section className="bg-card shadow-sm relative -mt-1">
        <div className="section-container px-4 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
            {trustItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="text-center">
                <item.icon className="mx-auto mb-2 text-primary" size={28} />
                <p className="font-heading font-bold text-lg md:text-xl text-foreground">{item.number}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + VISION */}
      <section className="section-padding bg-background relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary/3 to-transparent pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <AnimatedSection>
              <img src={aboutSchool} alt="About Rishi Vidyalaya" className="rounded-2xl shadow-lg w-full img-hover" loading="lazy" width={800} height={600} />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
                About <span className="text-primary">Rishi Vidyalaya</span>
              </h2>
              <p className="text-secondary font-heading font-semibold text-base mb-1">
                మీ పిల్లల భవిష్యత్తుకు బలమైన పునాది
              </p>
              <p className="text-secondary font-heading text-sm mb-4">
                విద్యా నైపుణ్యం & విలువల సమన్వయం
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Strong foundation for your child's future through knowledge and values. Rishi Vidyalaya IIT–NEET Foundation School in Dharmavaram is committed to nurturing future leaders with a perfect blend of academic excellence, discipline, and modern infrastructure.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card rounded-2xl p-5 shadow-sm border border-secondary/20 card-hover">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center mb-3">
                    <Target className="text-secondary" size={18} />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Our Vision</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Future-ready students</li>
                    <li>• Global competence</li>
                    <li>• Innovation-driven learning</li>
                  </ul>
                </div>
                <div className="bg-card rounded-2xl p-5 shadow-sm border border-secondary/20 card-hover">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Compass className="text-primary" size={18} />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Our Mission</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Quality education</li>
                    <li>• Discipline & values</li>
                    <li>• Skill development</li>
                    <li>• Innovation culture</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="section-padding bg-muted">
        <div className="section-container">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              Why Choose <span className="text-primary">Rishi Vidyalaya</span>?
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Discover what sets us apart from the rest</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Link
                  to={
                    item.title === "P5 Model Education" ? "/p5-model" :
                    item.title === "AI & Robotics Lab" ? "/ai-robotics-lab" :
                    item.title === "Automotive Space Lab" ? "/automotive-lab" :
                    item.title === "Stress-Free AC Classrooms" ? "/ac-classrooms" :
                    item.title === "IIT–NEET Foundation" ? "/iit-neet-foundation" :
                    "/holistic-development"
                  }
                  className="block"
                >
                  <div className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover h-full cursor-pointer">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <item.icon className="text-primary-foreground" size={22} />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* P5 MODEL */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              The <span className="text-secondary">P5 Model</span> of Education
            </h2>
            <p className="text-muted-foreground mt-2">Our unique five-pillar approach to holistic learning</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {p5Model.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="text-center">
                <div className="bg-card rounded-xl p-5 shadow-sm border border-border card-hover h-full">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <span className="font-heading font-bold text-primary text-lg">{p.num}</span>
                  </div>
                  <p.icon className="mx-auto mb-2 text-secondary" size={24} />
                  <h3 className="font-heading font-semibold text-sm md:text-base text-foreground mb-1">{p.title}</h3>
                  <p className="text-xs text-muted-foreground">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="section-padding bg-[hsl(0,0%,95%)]">
        <div className="section-container">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              Our <span className="text-primary">Facilities</span> & Labs
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {facilities.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <Link to="/events#gallery" className="block">
                  <div className="relative group rounded-2xl overflow-hidden shadow-sm card-hover aspect-[4/3] cursor-pointer">
                    <img src={f.img} alt={f.title} className="w-full h-full object-cover img-hover" loading="lazy" width={800} height={600} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                      <p className="font-heading font-semibold text-white text-lg">{f.title}</p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section-padding bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/3 to-transparent pointer-events-none" />
        <div className="section-container relative z-10">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              Achievements & <span className="text-secondary">Awards</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {achievementItems.map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="text-center bg-card rounded-2xl p-6 shadow-sm border-2 border-secondary/20 card-hover relative overflow-hidden group h-full">
                  {/* Badge corner */}
                  <div className="absolute -top-1 -right-1 w-12 h-12">
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[48px] border-t-secondary/20 border-l-[48px] border-l-transparent" />
                    <Star className="absolute top-1.5 right-1.5 text-secondary" size={14} />
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary/25 to-secondary/10 flex items-center justify-center mx-auto mb-4 border-2 border-secondary/30 group-hover:shadow-[0_0_20px_hsl(48,97%,54%,0.2)] transition-shadow">
                    <a.icon className="text-secondary" size={28} />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.year}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT DEVELOPMENT */}

      <section className="section-padding bg-muted">
        <div className="section-container">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              Student <span className="text-primary">Development</span>
            </h2>
          </AnimatedSection>
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x">
            {studentDev.map((s, i) => {
              const routes = {
                "Project-Based Learning": "/project-based-learning",
                "Hands-on Activities": "/hands-on-activities",
                "Field Trips": "/field-trips",
                "Digital Fest": "/digital-fest"
              };
              return (
                <AnimatedSection key={i} delay={i * 0.1} className="min-w-[250px] snap-start">
                  <Link to={routes[s.title as keyof typeof routes]} className="block h-full">
                    <div className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover h-full">
                      <s.icon className="text-primary mb-3" size={28} />
                      <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CO-CURRICULAR */}

      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              Co-Curricular <span className="text-secondary">Activities</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {coCurricular.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-card rounded-xl p-5 text-center shadow-sm border border-border card-hover">
                  <c.icon className="mx-auto mb-2 text-primary" size={28} />
                  <p className="font-heading font-medium text-sm text-foreground">{c.title}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ANNUAL CELEBRATIONS */}
      <section className="section-padding bg-[hsl(0,0%,95%)]">
        <div className="section-container">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              Annual <span className="text-primary">Celebrations</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {celebrations.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Link to="/events#celebrations" className="block">
                  <div className="relative group rounded-2xl overflow-hidden shadow-sm card-hover aspect-[4/3] cursor-pointer">
                    <img src={c.img} alt={c.title} className="w-full h-full object-cover img-hover" loading="lazy" width={800} height={600} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                      <div>
                        <p className="font-heading font-semibold text-white text-sm md:text-base">{c.title}</p>
                        <p className="text-white/0 group-hover:text-white/70 text-xs transition-colors duration-300">View More →</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/3 to-transparent pointer-events-none" />
        <div className="section-container relative z-10">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              What <span className="text-primary">Parents</span> Say
            </h2>
          </AnimatedSection>
          <div className="max-w-2xl mx-auto relative">
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-secondary/20 text-center">
              <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-4">
                <Quote className="text-secondary" size={24} />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 italic">
                "{testimonials[testimonialIdx].text}"
              </p>
              <p className="font-heading font-semibold text-foreground">{testimonials[testimonialIdx].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[testimonialIdx].role}</p>
            </div>
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => setTestimonialIdx((p) => (p === 0 ? testimonials.length - 1 : p - 1))}
                className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors"
              >
                <ChevronLeft size={18} className="text-secondary" />
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${i === testimonialIdx ? "bg-secondary" : "bg-border"}`}
                />
              ))}
              <button
                onClick={() => setTestimonialIdx((p) => (p === testimonials.length - 1 ? 0 : p + 1))}
                className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors"
              >
                <ChevronRight size={18} className="text-secondary" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="section-padding gradient-primary">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-primary-foreground mb-4">
              Admissions Open – Enroll Now
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Give your child the best start in life. Join Rishi Vidyalaya's family of excellence.
            </p>
            <Link
              to="/admissions"
              className="inline-block px-10 py-4 rounded-lg font-heading font-semibold bg-secondary text-secondary-foreground hover:opacity-90 transition-all shadow-lg text-base"
            >
              Apply Now
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
