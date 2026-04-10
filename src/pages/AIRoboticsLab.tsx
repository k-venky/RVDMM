import AnimatedSection from "@/components/AnimatedSection";
import { Bot, Cpu, Zap, Code, Gamepad2, ArrowLeft, CheckCircle, Users, Award, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import roboticsLab from "@/assets/lab1.jpg";
import classroom from "@/assets/classroom1.jpg";

const AIRoboticsLab = () => {
  const features = [
    {
      icon: Bot,
      title: "Advanced Robotics Kits",
      description: "State-of-the-art robotics equipment including Arduino, Raspberry Pi, and LEGO Mindstorms",
      details: ["Arduino Uno & Mega boards", "Raspberry Pi 4B systems", "LEGO Mindstorms Robot Inventor", "Custom sensor modules", "3D printing capabilities"]
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Introduction to artificial intelligence concepts through hands-on projects and coding",
      details: ["Python programming", "Machine learning basics", "Computer vision projects", "Natural language processing", "AI ethics discussions"]
    },
    {
      icon: Code,
      title: "Programming Languages",
      description: "Multiple programming languages taught with practical applications",
      details: ["Python for AI & data", "JavaScript for web development", "C/C++ for embedded systems", "Scratch for beginners", "Block-based coding"]
    },
    {
      icon: Gamepad2,
      title: "Interactive Learning",
      description: "Gamified learning experiences that make complex concepts engaging",
      details: ["Coding games", "Robot competitions", "Virtual reality simulations", "Interactive simulations", "Challenge-based learning"]
    }
  ];

  const projects = [
    {
      title: "Autonomous Robot Navigation",
      description: "Students build robots that can navigate complex environments using sensors and AI algorithms",
      skills: ["Sensor integration", "Pathfinding algorithms", "Obstacle avoidance", "AI decision making"],
      level: "Advanced"
    },
    {
      title: "Smart Home Automation",
      description: "IoT projects connecting devices and creating intelligent home systems",
      skills: ["IoT protocols", "Wireless communication", "Sensor networks", "Mobile app development"],
      level: "Intermediate"
    },
    {
      title: "AI-Powered Image Recognition",
      description: "Computer vision projects using machine learning for object detection and classification",
      skills: ["Computer vision", "Machine learning", "Python libraries", "Data processing"],
      level: "Advanced"
    },
    {
      title: "Robotic Arm Control",
      description: "Precision robotics projects involving mechanical design and control systems",
      skills: ["Mechanical design", "Servo control", "PID algorithms", "Precision engineering"],
      level: "Advanced"
    }
  ];

  const achievements = [
    { icon: Award, title: "National Robotics Championship", year: "2024", description: "First place in AI category" },
    { icon: Users, title: "STEM Fair Winners", year: "2024", description: "Best Innovation Award" },
    { icon: Lightbulb, title: "Tech Innovation Prize", year: "2023", description: "Outstanding AI project" },
    { icon: CheckCircle, title: "Coding Olympiad", year: "2023", description: "Gold medal in programming" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={roboticsLab} alt="AI & Robotics Lab" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative section-container px-4 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-foreground mb-4">
            AI & <span className="text-secondary">Robotics Lab</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-6">
            Where Future Innovators Are Built
          </p>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Our state-of-the-art AI & Robotics Lab provides hands-on experience with cutting-edge technology, fostering creativity, problem-solving, and innovation in every student.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <AnimatedSection>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                World-Class Robotics Facility
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our AI & Robotics Lab is equipped with the latest technology and resources to provide students with hands-on experience in robotics, artificial intelligence, and programming. From basic coding to advanced AI projects, we ensure every student develops the skills needed for the future.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Robots & Kits</div>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-2xl font-bold text-secondary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img src={classroom} alt="Robotics Classroom" className="rounded-2xl shadow-lg w-full img-hover" loading="lazy" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              Lab Features & Equipment
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our lab is equipped with industry-standard tools and technologies to provide comprehensive learning experiences.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover h-full">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Student Projects */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              Student Projects & Achievements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our students work on real-world projects that challenge their creativity and technical skills.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {projects.map((project, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover h-full">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-semibold text-lg text-foreground">{project.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.level === 'Advanced' ? 'bg-red-100 text-red-700' :
                      project.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {project.level}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div>
                    <h4 className="font-heading font-medium text-foreground mb-2 text-sm">Skills Developed:</h4>
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

          {/* Achievements */}
          <AnimatedSection className="text-center mb-8">
            <h3 className="font-heading font-bold text-xl text-foreground mb-6">Recent Achievements</h3>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-lg p-4 text-center shadow-sm border border-border card-hover">
                  <achievement.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-heading font-semibold text-sm text-foreground mb-1">{achievement.title}</h4>
                  <p className="text-xs text-secondary font-medium mb-1">{achievement.year}</p>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding gradient-primary">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-primary-foreground mb-4">
              Join Our Tech Revolution
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Be part of the next generation of innovators. Our AI & Robotics Lab opens doors to endless possibilities in technology and engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admissions"
                className="px-8 py-3 rounded-lg font-heading font-semibold bg-secondary text-secondary-foreground hover:opacity-90 transition-all shadow-lg"
              >
                Apply Now
              </Link>
              <Link
                to="/events#gallery"
                className="px-8 py-3 rounded-lg font-heading font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                View Projects
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AIRoboticsLab;