import AnimatedSection from "@/components/AnimatedSection";
import { Car, Wrench, Cog, ArrowLeft, CheckCircle, Users, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import playground from "@/assets/playground1.jpg";

const AutomotiveLab = () => {
  const features = [
    {
      icon: Car,
      title: "Vehicle Dynamics",
      description: "Study of vehicle movement, stability, and performance characteristics",
      details: ["Suspension systems", "Braking mechanisms", "Aerodynamics", "Tire technology", "Engine performance"]
    },
    {
      icon: Wrench,
      title: "Hands-on Maintenance",
      description: "Practical experience with vehicle maintenance and repair",
      details: ["Engine diagnostics", "Brake system repair", "Electrical systems", "Fuel systems", "Safety inspections"]
    },
    {
      icon: Cog,
      title: "Engineering Design",
      description: "Design and prototyping of automotive components",
      details: ["CAD software training", "3D modeling", "Prototype building", "Material science", "Design optimization"]
    },
    {
      icon: Zap,
      title: "Electric Vehicles",
      description: "Exploration of electric and hybrid vehicle technology",
      details: ["Battery technology", "Electric motors", "Charging systems", "Energy efficiency", "Sustainable transport"]
    }
  ];

  const projects = [
    "Electric Go-Kart Design", "Hybrid Vehicle Prototype", "Smart Parking System", "Autonomous Vehicle Model", "Fuel Efficiency Study"
  ];

  return (
    <div>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={playground} alt="Automotive Lab" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative section-container px-4 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-foreground mb-4">
            Automotive <span className="text-secondary">Space Lab</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-6">Engineering Tomorrow's Mobility Solutions</p>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Our Automotive Space Lab inspires the next generation of engineers through hands-on exploration of vehicle technology, design, and innovation.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">Lab Features & Learning Areas</h2>
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

      <section className="section-padding bg-muted">
        <div className="section-container">
          <AnimatedSection className="text-center mb-8">
            <h2 className="font-heading font-bold text-xl text-foreground mb-6">Student Projects</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {projects.map((project, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-lg p-4 text-center shadow-sm border border-border card-hover">
                  <Car className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{project}</p>
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
              Start Your Engineering Journey
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Discover the exciting world of automotive engineering and transportation innovation.
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

export default AutomotiveLab;