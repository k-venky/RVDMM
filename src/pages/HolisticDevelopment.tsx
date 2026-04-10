import AnimatedSection from "@/components/AnimatedSection";
import { Heart, Dumbbell, Palette, Music, Brain, ArrowLeft, CheckCircle, Users, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import playground from "@/assets/playground1.jpg";

const HolisticDevelopment = () => {
  const areas = [
    {
      icon: Brain,
      title: "Academic Excellence",
      description: "Strong foundation in core subjects with innovative teaching methods",
      aspects: ["Conceptual learning", "Critical thinking", "Problem-solving skills", "Research abilities", "Knowledge application"]
    },
    {
      icon: Dumbbell,
      title: "Physical Development",
      description: "Comprehensive sports and physical education programs",
      aspects: ["Multiple sports", "Physical fitness", "Team sports", "Individual sports", "Health education"]
    },
    {
      icon: Palette,
      title: "Arts & Creativity",
      description: "Nurturing artistic talents and creative expression",
      aspects: ["Visual arts", "Performing arts", "Creative writing", "Craft work", "Design thinking"]
    },
    {
      icon: Music,
      title: "Cultural Activities",
      description: "Music, dance, and cultural programs for holistic growth",
      aspects: ["Classical music", "Folk dance", "Cultural festivals", "Stage performances", "Music appreciation"]
    },
    {
      icon: Heart,
      title: "Character Building",
      description: "Values, ethics, and personality development",
      aspects: ["Moral values", "Leadership skills", "Social responsibility", "Emotional intelligence", "Ethical decision making"]
    },
    {
      icon: Users,
      title: "Social Skills",
      description: "Interpersonal relationships and community involvement",
      aspects: ["Communication skills", "Teamwork", "Empathy", "Conflict resolution", "Community service"]
    }
  ];

  const activities = [
    "Yoga & Meditation", "Abacus Training", "Vedic Mathematics", "Public Speaking", "Debate Club", "Environmental Club", "Science Club", "Literary Club"
  ];

  return (
    <div>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={playground} alt="Holistic Development" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative section-container px-4 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-foreground mb-4">
            Holistic <span className="text-secondary">Development</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-6">Nurturing Complete Individuals</p>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Our holistic approach ensures balanced development of mind, body, and spirit, preparing students for success in all aspects of life.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">Six Pillars of Development</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We focus on comprehensive development across all areas to create well-rounded, confident, and capable individuals.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover h-full">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <area.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{area.title}</h3>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  <ul className="space-y-1">
                    {area.aspects.map((aspect, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        {aspect}
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
            <h2 className="font-heading font-bold text-xl text-foreground mb-6">Co-Curricular Activities</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activities.map((activity, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-lg p-4 text-center shadow-sm border border-border card-hover">
                  <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{activity}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center mb-8">
            <h2 className="font-heading font-bold text-xl text-foreground mb-6">Development Outcomes</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <Award className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold text-secondary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Well-rounded Development</div>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Character Building</div>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold text-secondary mb-1">90%</div>
              <div className="text-sm text-muted-foreground">Leadership Skills</div>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <Brain className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">85%</div>
              <div className="text-sm text-muted-foreground">Creative Thinking</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding gradient-primary">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-primary-foreground mb-4">
              Develop Your Child's Full Potential
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Experience education that nurtures every aspect of your child's development - academically, physically, emotionally, and socially.
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

export default HolisticDevelopment;