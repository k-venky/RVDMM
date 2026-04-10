import AnimatedSection from "@/components/AnimatedSection";
import { Bot, Code, Gamepad2, Zap, ArrowLeft, CheckCircle, Trophy, Users, Award, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import roboticsLab from "@/assets/lab1.jpg";

const DigitalFest = () => {
  const events = [
    {
      icon: Code,
      title: "Coding Competitions",
      description: "Programming challenges and algorithm contests",
      categories: ["Beginner Coding", "Advanced Algorithms", "Web Development", "Mobile Apps"],
      skills: ["Programming logic", "Problem-solving", "Time management", "Code optimization"]
    },
    {
      icon: Bot,
      title: "Robotics Challenges",
      description: "Robot building and autonomous navigation contests",
      categories: ["Sumo Bots", "Line Following", "Maze Solving", "Obstacle Course"],
      skills: ["Mechanical design", "Electronics", "Programming", "Team coordination"]
    },
    {
      icon: Gamepad2,
      title: "Digital Gaming",
      description: "Educational games and interactive digital experiences",
      categories: ["Educational Games", "Virtual Reality", "Simulation Games", "Puzzle Challenges"],
      skills: ["Strategic thinking", "Quick decision making", "Digital literacy", "Creativity"]
    },
    {
      icon: Zap,
      title: "Innovation Showcase",
      description: "Presenting student-created digital projects and inventions",
      categories: ["App Development", "IoT Projects", "AI Solutions", "Digital Art"],
      skills: ["Innovation", "Presentation", "Project management", "Technical communication"]
    }
  ];

  const highlights = [
    "Annual technology showcase event",
    "Inter-school participation",
    "Industry expert judges",
    "Prize distribution ceremony",
    "Technology workshops",
    "Networking opportunities",
    "Career guidance sessions",
    "Innovation awards"
  ];

  const achievements = [
    { year: "2024", title: "Best Innovation Award", description: "First place in robotics category" },
    { year: "2023", title: "Coding Excellence Prize", description: "Top performer in programming contest" },
    { year: "2023", title: "Digital Creativity Award", description: "Outstanding digital art project" },
    { year: "2022", title: "Tech Pioneer Award", description: "Groundbreaking IoT project" }
  ];

  return (
    <div>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={roboticsLab} alt="Digital Fest" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative section-container px-4 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-foreground mb-4">
            Digital <span className="text-secondary">Fest</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-6">Celebrating Technology & Innovation</p>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Our annual Digital Fest brings together the brightest young minds to showcase their technological talents, compete in exciting challenges, and celebrate innovation.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">Event Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Diverse competitions and activities that challenge and inspire young innovators across different technology domains.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {events.map((event, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover h-full">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <event.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>

                  <div className="mb-4">
                    <h4 className="font-heading font-medium text-foreground mb-2 text-sm">Categories:</h4>
                    <ul className="space-y-1">
                      {event.categories.map((category, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          {category}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-heading font-medium text-foreground mb-2 text-sm">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.skills.map((skill, idx) => (
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

      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <AnimatedSection>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                Fest Highlights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Digital Fest is more than just competitions - it's a celebration of technology, creativity, and young innovation that brings together students, educators, and industry experts.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {highlights.slice(0, 8).map((highlight, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                <h3 className="font-heading font-semibold text-foreground mb-4">Participation Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Students</span>
                    <span className="font-bold text-primary">500+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Schools</span>
                    <span className="font-bold text-secondary">25+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Projects</span>
                    <span className="font-bold text-primary">200+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Prizes</span>
                    <span className="font-bold text-secondary">₹50,000+</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center mb-8">
            <h2 className="font-heading font-bold text-xl text-foreground mb-6">Recent Achievements</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover">
                  <div className="flex items-start gap-3">
                    <Trophy className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-heading font-semibold text-foreground mb-1">{achievement.title}</div>
                      <div className="text-sm text-secondary font-medium mb-1">{achievement.year}</div>
                      <div className="text-sm text-muted-foreground">{achievement.description}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="section-container">
          <AnimatedSection className="text-center mb-8">
            <h2 className="font-heading font-bold text-xl text-foreground mb-6">Learning Outcomes</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <Lightbulb className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold text-secondary mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Innovation Skills</div>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">90%</div>
              <div className="text-sm text-muted-foreground">Team Collaboration</div>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <Award className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold text-secondary mb-1">85%</div>
              <div className="text-sm text-muted-foreground">Technical Proficiency</div>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">92%</div>
              <div className="text-sm text-muted-foreground">Competition Readiness</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding gradient-primary">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-primary-foreground mb-4">
              Join the Digital Revolution
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Be part of Rishi Vidyalaya's Digital Fest and discover your potential in the exciting world of technology and innovation.
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

export default DigitalFest;