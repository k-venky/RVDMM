import AnimatedSection from "@/components/AnimatedSection";
import { FolderKanban, Lightbulb, Target, Users, ArrowLeft, CheckCircle, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import classroom from "@/assets/classroom1.jpg";

const ProjectBasedLearning = () => {
  const projects = [
    {
      title: "Environmental Sustainability Project",
      description: "Students design and implement eco-friendly solutions for local environmental challenges",
      skills: ["Research", "Problem-solving", "Design thinking", "Presentation skills"],
      duration: "3 months",
      level: "All Grades"
    },
    {
      title: "Community Service Initiative",
      description: "Real-world projects that benefit the local community and teach social responsibility",
      skills: ["Teamwork", "Leadership", "Empathy", "Project management"],
      duration: "2 months",
      level: "Grades 3-8"
    },
    {
      title: "Innovation Lab Challenges",
      description: "Technology-driven projects combining coding, electronics, and creative problem-solving",
      skills: ["Coding", "Electronics", "Innovation", "Prototyping"],
      duration: "6 weeks",
      level: "Grades 5-8"
    },
    {
      title: "Cultural Heritage Documentation",
      description: "Research and documentation projects about local history and cultural traditions",
      skills: ["Research", "Writing", "Photography", "Cultural awareness"],
      duration: "2 months",
      level: "Grades 4-8"
    }
  ];

  const benefits = [
    {
      icon: Lightbulb,
      title: "Critical Thinking",
      description: "Develops analytical and problem-solving skills through real-world challenges"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Learns to work effectively in teams and communicate ideas clearly"
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Master the art of planning, executing, and achieving project objectives"
    },
    {
      icon: Award,
      title: "Achievement",
      description: "Builds confidence through successful completion of meaningful projects"
    }
  ];

  const process = [
    "Project Selection & Planning",
    "Research & Information Gathering",
    "Design & Prototyping",
    "Implementation & Testing",
    "Presentation & Evaluation",
    "Reflection & Learning"
  ];

  return (
    <div>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={classroom} alt="Project-Based Learning" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative section-container px-4 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-foreground mb-4">
            Project-Based <span className="text-secondary">Learning</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-6">Learning Through Real-World Challenges</p>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Our project-based learning approach transforms theoretical knowledge into practical skills through hands-on, real-world projects that inspire creativity and innovation.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">Why Project-Based Learning?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Project-based learning engages students in real-world challenges, fostering deeper understanding and practical application of knowledge.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover h-full">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <benefit.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mb-8">
            <h3 className="font-heading font-bold text-xl text-foreground mb-6">Project Development Process</h3>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {process.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-card rounded-lg p-4 text-center shadow-sm border border-border card-hover">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                    {i + 1}
                  </div>
                  <p className="text-sm font-medium text-foreground">{step}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">Sample Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our students work on diverse projects that build real-world skills and create meaningful impact.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover h-full">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-semibold text-lg text-foreground">{project.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.level === 'All Grades' ? 'bg-green-100 text-green-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {project.level}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="mb-3">
                    <p className="text-sm font-medium text-foreground mb-2">Duration: {project.duration}</p>
                    <p className="text-sm font-medium text-foreground mb-2">Skills Developed:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center mb-8">
            <h2 className="font-heading font-bold text-xl text-foreground mb-6">Impact & Outcomes</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <TrendingUp className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold text-secondary mb-1">85%</div>
              <div className="text-sm text-muted-foreground">Improved Problem-Solving</div>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">90%</div>
              <div className="text-sm text-muted-foreground">Enhanced Collaboration</div>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <Award className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold text-secondary mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Project Completion Rate</div>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <Lightbulb className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">78%</div>
              <div className="text-sm text-muted-foreground">Increased Creativity</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding gradient-primary">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-primary-foreground mb-4">
              Start Your Project Journey
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join Rishi Vidyalaya and experience learning that goes beyond textbooks through meaningful, real-world projects.
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

export default ProjectBasedLearning;