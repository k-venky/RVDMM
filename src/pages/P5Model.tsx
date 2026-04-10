import AnimatedSection from "@/components/AnimatedSection";
import { Target, Flame, Lightbulb, FolderKanban, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const P5Model = () => {
  const p5Details = [
    {
      num: "P1",
      title: "Purpose",
      icon: Target,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "Discovering the 'why' behind learning",
      content: "At Rishi Vidyalaya, we believe that true education begins with purpose. Our P1 approach helps students discover their goals and direction in life. Through guided self-reflection, career counseling, and inspirational sessions, we help each child understand their unique potential and align their learning journey with their aspirations.",
      features: [
        "Personal goal setting workshops",
        "Career guidance sessions",
        "Life skills development",
        "Values-based education",
        "Future-ready mindset building"
      ],
      benefits: [
        "Clear life direction",
        "Motivated learning approach",
        "Strong decision-making skills",
        "Purpose-driven academic excellence"
      ]
    },
    {
      num: "P2",
      title: "Passion",
      icon: Flame,
      color: "text-red-600",
      bgColor: "bg-red-50",
      description: "Igniting curiosity and love for knowledge",
      content: "Passion is the fuel that drives lifelong learning. Our P2 methodology focuses on igniting genuine curiosity and fostering a deep love for knowledge. Through interactive learning experiences, hands-on projects, and real-world applications, we transform education from a chore into an exciting adventure.",
      features: [
        "Interactive learning experiences",
        "Project-based activities",
        "Creative expression programs",
        "Exploratory learning sessions",
        "Interest-based learning paths"
      ],
      benefits: [
        "Natural curiosity development",
        "Engaged learning experience",
        "Creative problem-solving skills",
        "Lifelong love for learning"
      ]
    },
    {
      num: "P3",
      title: "Proficiency",
      icon: Lightbulb,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      description: "Mastering skills through practice",
      content: "Proficiency comes from deliberate practice and mastery. Our P3 approach ensures students develop strong academic and practical skills through structured learning, regular assessments, and skill-building exercises. We focus on both conceptual understanding and practical application.",
      features: [
        "Structured skill development",
        "Regular assessments and feedback",
        "Practice-oriented learning",
        "Mastery-based progression",
        "Comprehensive skill evaluation"
      ],
      benefits: [
        "Strong academic foundation",
        "Practical skill application",
        "Confidence in abilities",
        "Competitive exam readiness"
      ]
    },
    {
      num: "P4",
      title: "Project-Based Learning",
      icon: FolderKanban,
      color: "text-green-600",
      bgColor: "bg-green-50",
      description: "Applying knowledge to real-world challenges",
      content: "Real-world application brings learning to life. Our P4 methodology emphasizes project-based learning where students work on authentic, meaningful projects that solve real problems. This approach develops critical thinking, collaboration, and innovation skills.",
      features: [
        "Real-world project assignments",
        "Collaborative learning experiences",
        "Innovation challenges",
        "Problem-solving workshops",
        "Portfolio development"
      ],
      benefits: [
        "Critical thinking development",
        "Teamwork and collaboration skills",
        "Innovation and creativity",
        "Real-world problem-solving ability"
      ]
    },
    {
      num: "P5",
      title: "Perfection",
      icon: Star,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      description: "Striving for excellence in everything",
      content: "Perfection is not about being flawless, but about continuous improvement and excellence. Our P5 approach teaches students to strive for the highest standards while understanding that growth comes from learning from mistakes and persistent effort.",
      features: [
        "Excellence-focused education",
        "Continuous improvement culture",
        "Quality assurance processes",
        "Achievement recognition programs",
        "Leadership development"
      ],
      benefits: [
        "High achievement standards",
        "Resilience and perseverance",
        "Quality consciousness",
        "Leadership qualities"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-secondary/10 to-primary/5">
        <div className="section-container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mb-4">
              The <span className="text-secondary">P5 Model</span> of Education
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Our revolutionary five-pillar approach to holistic education
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The P5 Model represents our commitment to comprehensive development, ensuring every student achieves their full potential through purpose-driven, passion-fueled learning.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              What is the P5 Model?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              The P5 Model is our signature educational framework that transforms traditional learning into a dynamic, purpose-driven experience. Each "P" represents a crucial pillar that builds upon the previous one, creating a comprehensive pathway to excellence.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {p5Details.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="text-center">
                <div className={`rounded-xl p-4 ${p.bgColor} border border-border card-hover`}>
                  <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center mx-auto mb-3">
                    <p.icon className={p.color} size={20} />
                  </div>
                  <p className="font-heading font-bold text-lg text-foreground mb-1">{p.num}</p>
                  <h3 className="font-heading font-semibold text-sm text-foreground">{p.title}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      {p5Details.map((p, i) => (
        <section key={i} className={`section-padding ${i % 2 === 0 ? 'bg-muted' : 'bg-background'}`}>
          <div className="section-container">
            <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${i % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
              <AnimatedSection delay={0.2}>
                <div className={`w-16 h-16 rounded-xl ${p.bgColor} flex items-center justify-center mb-4`}>
                  <p.icon className={`${p.color} text-2xl`} />
                </div>
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
                  {p.num}: {p.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-4 italic">
                  {p.description}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {p.content}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {p.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${p.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {p.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Star className={`w-3 h-3 ${p.color} mt-1 flex-shrink-0`} />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className={`rounded-2xl p-8 ${p.bgColor} border border-border`}>
                  <div className="text-center">
                    <div className={`w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mx-auto mb-4`}>
                      <p.icon className={`${p.color} text-3xl`} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                      {p.title} Excellence
                    </h3>
                    <p className="text-muted-foreground">
                      Building tomorrow's leaders through {p.title.toLowerCase()}-driven education
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="section-padding gradient-primary">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-primary-foreground mb-4">
              Experience the P5 Difference
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join Rishi Vidyalaya and discover how our P5 Model transforms education into an extraordinary journey of growth and achievement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admissions"
                className="px-8 py-3 rounded-lg font-heading font-semibold bg-secondary text-secondary-foreground hover:opacity-90 transition-all shadow-lg"
              >
                Apply Now
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg font-heading font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default P5Model;