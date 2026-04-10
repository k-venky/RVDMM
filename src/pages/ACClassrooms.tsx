import AnimatedSection from "@/components/AnimatedSection";
import { Snowflake, Thermometer, Wind, ArrowLeft, CheckCircle, Users, BookOpen, Award } from "lucide-react";
import { Link } from "react-router-dom";
import classroom from "@/assets/classroom1.jpg";

const ACClassrooms = () => {
  const benefits = [
    {
      icon: Thermometer,
      title: "Optimal Temperature",
      description: "Maintained at 22-24°C for ideal learning conditions",
      details: ["Consistent cooling", "Energy efficient", "Health-focused", "Comfort priority"]
    },
    {
      icon: Wind,
      title: "Air Quality",
      description: "Advanced filtration and ventilation systems",
      details: ["HEPA filtration", "Fresh air circulation", "Allergen control", "Humidity regulation"]
    },
    {
      icon: Users,
      title: "Enhanced Focus",
      description: "Temperature-controlled environment improves concentration",
      details: ["Reduced fatigue", "Better attention span", "Improved learning", "Health benefits"]
    },
    {
      icon: BookOpen,
      title: "Academic Performance",
      description: "Studies show improved test scores in AC classrooms",
      details: ["Higher grades", "Better retention", "Increased participation", "Reduced absences"]
    }
  ];

  const features = [
    "Centralized AC system", "Smart temperature controls", "Regular maintenance", "Energy monitoring", "Emergency cooling backup"
  ];

  return (
    <div>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={classroom} alt="AC Classrooms" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative section-container px-4 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-foreground mb-4">
            Stress-Free <span className="text-secondary">AC Classrooms</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-6">First in Dharmavaram</p>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Experience learning in temperature-controlled classrooms designed for optimal comfort and academic excellence.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">Why AC Classrooms Matter</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our air-conditioned classrooms provide the perfect learning environment, ensuring students can focus entirely on their education.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover h-full">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <benefit.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-4">{benefit.description}</p>
                  <ul className="space-y-1">
                    {benefit.details.map((detail, idx) => (
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
            <h2 className="font-heading font-bold text-xl text-foreground mb-6">Technical Features</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {features.map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-lg p-4 text-center shadow-sm border border-border card-hover">
                  <Snowflake className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{feature}</p>
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
              Experience Comfortable Learning
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join the first school in Dharmavaram to offer AC classrooms for an unparalleled learning experience.
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

export default ACClassrooms;