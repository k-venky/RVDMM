import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import heroCampus from "@/assets/hero-campus3.jpeg";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  return (
    <div>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCampus} alt="Campus" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative section-container px-4 text-center">
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-foreground mb-3">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg">We'd Love to Hear From You</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Info */}
            <AnimatedSection>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">Get In Touch</h2>
              <div className="space-y-5 mb-8">
                {[
                  { icon: MapPin, label: "Address", value: "N.S Gate Road, Opp: Tidco Houses, Dharmavaram, Sri Sathya Sai District, Andhra Pradesh" },
                  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                  { icon: Mail, label: "Email", value: "info@rishividyalaya.edu.in" },
                  { icon: Clock, label: "Office Hours", value: "Mon – Sat: 8:00 AM – 5:00 PM" },
                ].map((c, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <c.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-sm text-foreground">{c.label}</p>
                      <p className="text-sm text-muted-foreground">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-sm border border-border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30737.14!2d77.35!3d14.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14a1adf8c1e3d%3A0x14f3e3!2sDharmavaram%2C+Andhra+Pradesh!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                  className="border-0"
                />
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.2}>
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
                <h3 className="font-heading font-bold text-xl text-foreground mb-6">Send Us a Message</h3>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <textarea
                    placeholder="Your Message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                  <button type="submit" className="w-full py-3 rounded-lg font-heading font-semibold text-primary-foreground gradient-primary hover:opacity-90 transition-all">
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
