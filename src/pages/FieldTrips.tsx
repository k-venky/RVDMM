import AnimatedSection from "@/components/AnimatedSection";
import { Compass, Mountain, Building, TreePine, ArrowLeft, CheckCircle, Users, Camera, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import playground from "@/assets/playground1.jpg";

const FieldTrips = () => {
  const tripTypes = [
    {
      icon: Mountain,
      title: "Nature & Environmental Trips",
      description: "Exploring national parks, wildlife sanctuaries, and natural ecosystems",
      destinations: ["Anantagiri Hills", "Horsley Hills", "Local Wildlife Sanctuaries", "River Ecosystems"],
      learning: ["Biodiversity", "Environmental conservation", "Ecosystem dynamics", "Sustainable practices"]
    },
    {
      icon: Building,
      title: "Industrial & Technical Visits",
      description: "Visits to factories, research centers, and technical facilities",
      destinations: ["Local Industries", "Research Laboratories", "Tech Companies", "Manufacturing Units"],
      learning: ["Industrial processes", "Career exploration", "Technical applications", "Innovation insights"]
    },
    {
      icon: TreePine,
      title: "Agricultural & Rural Learning",
      description: "Understanding farming practices and rural life experiences",
      destinations: ["Organic Farms", "Agricultural Research Centers", "Rural Villages", "Cooperative Societies"],
      learning: ["Sustainable agriculture", "Food systems", "Rural economics", "Community development"]
    },
    {
      icon: BookOpen,
      title: "Historical & Cultural Sites",
      description: "Exploring heritage sites, museums, and cultural landmarks",
      destinations: ["Local Temples", "Historical Monuments", "Cultural Centers", "Art Galleries"],
      learning: ["Cultural heritage", "Historical context", "Art appreciation", "Social studies"]
    }
  ];

  const safety = [
    "Professional supervision and guidance",
    "First aid and medical support",
    "Emergency communication systems",
    "Weather-appropriate planning",
    "Transportation safety protocols",
    "Parental consent and information"
  ];

  const preparation = [
    "Pre-trip briefings and orientation",
    "Learning objectives and expectations",
    "Packing checklists and requirements",
    "Group assignments and responsibilities",
    "Safety rules and emergency procedures",
    "Post-trip reflection and reporting"
  ];

  return (
    <div>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={playground} alt="Field Trips" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative section-container px-4 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-foreground mb-4">
            Educational <span className="text-secondary">Field Trips</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-6">Learning Beyond Classroom Walls</p>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Our carefully planned field trips provide students with real-world learning experiences that complement classroom education and create lasting memories.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">Types of Field Trips</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We organize diverse field trips that expose students to different aspects of our world and community.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {tripTypes.map((trip, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover h-full">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <trip.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{trip.title}</h3>
                  <p className="text-muted-foreground mb-4">{trip.description}</p>

                  <div className="mb-4">
                    <h4 className="font-heading font-medium text-foreground mb-2 text-sm">Destinations:</h4>
                    <ul className="space-y-1">
                      {trip.destinations.map((dest, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          {dest}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-heading font-medium text-foreground mb-2 text-sm">Learning Outcomes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trip.learning.map((skill, idx) => (
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
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <AnimatedSection>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                Safety & Security
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Student safety is our top priority. All field trips are conducted with comprehensive safety measures and professional supervision.
              </p>

              <h3 className="font-heading font-semibold text-foreground mb-3">Safety Measures</h3>
              <ul className="space-y-2">
                {safety.map((measure, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{measure}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                Trip Preparation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Thorough preparation ensures that every field trip is educational, enjoyable, and memorable for all participants.
              </p>

              <h3 className="font-heading font-semibold text-foreground mb-3">Preparation Process</h3>
              <ul className="space-y-2">
                {preparation.map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center mb-8">
            <h2 className="font-heading font-bold text-xl text-foreground mb-6">Field Trip Impact</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <Camera className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold text-secondary mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Enhanced Observation Skills</div>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">90%</div>
              <div className="text-sm text-muted-foreground">Improved Social Skills</div>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <BookOpen className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold text-secondary mb-1">85%</div>
              <div className="text-sm text-muted-foreground">Better Concept Retention</div>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <Compass className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">92%</div>
              <div className="text-sm text-muted-foreground">Increased Curiosity</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding gradient-primary">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-primary-foreground mb-4">
              Explore the World Together
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join Rishi Vidyalaya for educational field trips that broaden horizons and create unforgettable learning experiences.
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

export default FieldTrips;