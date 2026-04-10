import AnimatedSection from "@/components/AnimatedSection";
import { GraduationCap, Target, BookOpen, Brain, ArrowLeft, CheckCircle, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import classroom from "@/assets/classroom1.jpg";

const IITNEETFoundation = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "IIT Foundation Program",
      description: "Comprehensive preparation for IIT-JEE entrance examinations",
      features: ["Mathematics excellence", "Physics fundamentals", "Chemistry mastery", "Mock tests", "Personal mentoring"]
    },
    {
      icon: Target,
      title: "NEET Foundation Program",
      description: "Strong foundation for medical entrance examinations",
      features: ["Biology specialization", "Medical concepts", "Practical knowledge", "Competitive exam prep", "Career guidance"]
    },
    {
      icon: BookOpen,
      title: "Olympiad Preparation",
      description: "Training for national and international Olympiads",
      features: ["Advanced problem solving", "Logical reasoning", "Time management", "Competition experience", "Recognition programs"]
    },
    {
      icon: Brain,
      title: "Mental Ability Development",
      description: "Enhancing cognitive skills and logical thinking",
      features: ["Critical thinking", "Problem-solving skills", "Analytical reasoning", "Memory techniques", "Speed mathematics"]
    }
  ];

  const achievements = [
    { metric: "95%", label: "Success Rate in Competitive Exams" },
    { metric: "500+", label: "Students Cleared IIT/NEET" },
    { metric: "50+", label: "Olympiad Medalists" },
    { metric: "100%", label: "College Admission Rate" }
  ];

  const curriculum = [
    "Grade 6-8 Foundation Building", "Grade 9-10 Advanced Preparation", "Grade 11-12 Intensive Training", "Regular Mock Tests", "Personalized Study Plans"
  ];

  return (
    <div>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={classroom} alt="IIT-NEET Foundation" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative section-container px-4 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-foreground mb-4">
            IIT–NEET <span className="text-secondary">Foundation</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-6">Building Future Doctors & Engineers</p>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Our specialized foundation programs prepare students from early grades for competitive examinations, ensuring success in IIT-JEE and NEET.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">Our Foundation Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive preparation programs designed to give your child the competitive edge from an early age.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {programs.map((program, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover h-full">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <program.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <ul className="space-y-1">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="section-container">
          <AnimatedSection className="text-center mb-8">
            <h2 className="font-heading font-bold text-xl text-foreground mb-6">Our Achievements</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border card-hover">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">{achievement.metric}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center mb-8">
            <h2 className="font-heading font-bold text-xl text-foreground mb-6">Curriculum Structure</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {curriculum.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-lg p-4 text-center shadow-sm border border-border card-hover">
                  <Award className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding gradient-primary">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-primary-foreground mb-4">
              Secure Your Child's Future
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Start early with our IIT-NEET foundation programs and give your child the best chance for success in competitive examinations.
            </p>
            <Link to="/admissions" className="px-8 py-3 rounded-lg font-heading font-semibold bg-secondary text-secondary-foreground hover:opacity-90 transition-all shadow-lg">
              Apply Now
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default IITNEETFoundation;