import AnimatedSection from "@/components/AnimatedSection";
import { Footprints, Wrench, Microscope, Palette, ArrowLeft, CheckCircle, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import roboticsLab from "@/assets/lab1.jpg";

const HandsOnActivities = () => {
  const activities = [
    {
      icon: Wrench,
      title: "Science Experiments",
      description: "Hands-on experiments in physics, chemistry, and biology labs",
      examples: ["Chemical reactions", "Physics demonstrations", "Biological dissections", "Environmental testing"],
      skills: ["Observation", "Hypothesis testing", "Data analysis", "Safety protocols"]
    },
    {
      icon: Microscope,
      title: "Robotics & Electronics",
      description: "Building and programming robots and electronic circuits",
      examples: ["Arduino projects", "Circuit design", "Sensor integration", "Programming logic"],
      skills: ["Problem-solving", "Logical thinking", "Technical skills", "Creativity"]
    },
    {
      icon: Palette,
      title: "Arts & Crafts",
      description: "Creative expression through various artistic mediums",
      examples: ["Painting & drawing", "Sculpture & pottery", "Digital art", "Craft design"],
      skills: ["Fine motor skills", "Color theory", "Spatial awareness", "Self-expression"]
    },
    {
      icon: Footprints,
      title: "Outdoor Exploration",
      description: "Nature-based learning and environmental activities",
      examples: ["Nature walks", "Gardening projects", "Weather monitoring", "Ecosystem studies"],
      skills: ["Environmental awareness", "Observation skills", "Physical activity", "Teamwork"]
    }
  ];

  const benefits = [
    "Enhanced understanding through direct experience",
    "Improved retention of concepts",
    "Development of practical skills",
    "Increased engagement and motivation",
    "Better problem-solving abilities",
    "Hands-on application of theoretical knowledge"
  ];

  const facilities = [
    "Fully equipped science laboratories",
    "Robotics and electronics workshop",
    "Art and craft studio",
    "Outdoor learning spaces",
    "Safety equipment and supervision",
    "Professional instructor guidance"
  ];

  return (
    <div>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={roboticsLab} alt="Hands-on Activities" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative section-container px-4 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-foreground mb-4">
            Hands-on <span className="text-secondary">Activities</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-6">Learning Through Experience</p>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Our hands-on activities transform theoretical learning into practical experiences, helping students discover, explore, and master concepts through direct engagement.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">Activity Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer diverse hands-on activities that cater to different learning styles and interests.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {activities.map((activity, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover h-full">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <activity.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{activity.title}</h3>
                  <p className="text-muted-foreground mb-4">{activity.description}</p>

                  <div className="mb-4">
                    <h4 className="font-heading font-medium text-foreground mb-2 text-sm">Examples:</h4>
                    <ul className="space-y-1">
                      {activity.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-heading font-medium text-foreground mb-2 text-sm">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {activity.skills.map((skill, idx) => (
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
                Why Hands-on Learning Matters
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Hands-on activities provide students with direct, tangible experiences that deepen understanding and create lasting memories. Through active participation, students develop practical skills and gain confidence in their abilities.
              </p>

              <h3 className="font-heading font-semibold text-foreground mb-3">Key Benefits</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                <h3 className="font-heading font-semibold text-foreground mb-4">Learning Outcomes</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Collaboration</div>
                      <div className="text-sm text-muted-foreground">Teamwork & communication</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Achievement</div>
                      <div className="text-sm text-muted-foreground">Goal accomplishment</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Practical Skills</div>
                      <div className="text-sm text-muted-foreground">Real-world application</div>
                    </div>
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
            <h2 className="font-heading font-bold text-xl text-foreground mb-6">Our Facilities</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {facilities.map((facility, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-card rounded-lg p-4 text-center shadow-sm border border-border card-hover">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{facility}</p>
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
              Experience Active Learning
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join Rishi Vidyalaya and discover the joy of learning through hands-on experiences that bring education to life.
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

export default HandsOnActivities;