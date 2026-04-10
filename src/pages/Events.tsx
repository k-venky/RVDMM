import AnimatedSection from "@/components/AnimatedSection";
import { useEffect } from "react";
import heroCampus from "@/assets/hero-campus3.jpeg";
import annualDay from "@/assets/anuual2.jpg";
import sportsDay from "@/assets/sports2.jpg";
import culturalFest from "@/assets/cultural-fest1.jpg";
import awards from "@/assets/childrensday1.jpg";
import roboticsLab from "@/assets/lab2.jpg";
import classroom from "@/assets/classroom2.jpg";
import playground from "@/assets/bus2.jpg";
import library from "@/assets/arts1.jpg";

const news = [
  { date: "Mar 2025", title: "ET Tech Award 2025", desc: "Rishi Vidyalaya recognized for innovation in education at the ET Tech Awards." },
  { date: "Jan 2025", title: "Annual Day Celebrations", desc: "A grand celebration showcasing student talents in dance, drama, and music." },
  { date: "Dec 2024", title: "Science Exhibition", desc: "Students displayed innovative projects in AI, robotics, and renewable energy." },
  { date: "Nov 2024", title: "Sports Day 2024", desc: "A day of athletic excellence with inter-house competitions and prizes." },
];

const gallery = [annualDay, sportsDay, culturalFest, awards, roboticsLab, classroom, playground, library];

const celebrations = [
  { img: annualDay, title: "Annual Day", desc: "A grand celebration of student achievements and cultural performances" },
  { img: sportsDay, title: "Sports Day", desc: "Inter-house athletic competitions and team events" },
  { img: culturalFest, title: "Cultural Fest", desc: "Traditional dance, music, and art exhibitions" },
  { img: awards, title: "Award Ceremonies", desc: "Recognizing academic and extracurricular excellence" },
];

const Events = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  return (
    <div>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCampus} alt="Campus" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative section-container px-4 text-center">
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-foreground mb-3">Events & Gallery</h1>
          <p className="text-primary-foreground/80 text-lg">Life at Rishi Vidyalaya</p>
        </div>
      </section>

    {/* News */}
    <section id="news" className="section-padding bg-background">
      <div className="section-container">
        <AnimatedSection className="text-center mb-10">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">Latest News</h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {news.map((n, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover h-full">
                <span className="text-xs font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">{n.date}</span>
                <h3 className="font-heading font-semibold text-foreground mt-3 mb-2">{n.title}</h3>
                <p className="text-sm text-muted-foreground">{n.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Gallery */}
    <section id="gallery" className="section-padding bg-muted">
      <div className="section-container">
        <AnimatedSection className="text-center mb-10">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">Photo Gallery</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {gallery.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="rounded-xl overflow-hidden shadow-sm card-hover aspect-square">
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover img-hover" loading="lazy" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Celebrations */}
    <section id="celebrations" className="section-padding bg-background">
      <div className="section-container">
        <AnimatedSection className="text-center mb-10">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">Annual Celebrations</h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {celebrations.map((c, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border card-hover h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover img-hover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground mb-1">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Events;
