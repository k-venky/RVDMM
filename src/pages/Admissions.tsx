import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import heroCampus from "@/assets/hero-campus3.jpeg";
import { ClipboardList, UserCheck, CreditCard, Send } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Submit Application", desc: "Fill out the online inquiry form or visit the campus to collect the application form." },
  { icon: UserCheck, title: "Student Assessment", desc: "An age-appropriate interaction/assessment to understand the student's readiness." },
  { icon: CreditCard, title: "Fee Payment", desc: "Upon selection, complete the admission by paying the applicable fees." },
  { icon: Send, title: "Welcome to Rishi Vidyalaya!", desc: "Receive the welcome kit and orientation schedule. Your child's journey begins!" },
];

const fees = [
  { grade: "LKG – UKG", day: "₹60,000", semi: "₹90,000", residential: "₹1,20,000" },
  { grade: "Grade 1 – 3", day: "₹70,000", semi: "₹1,00,000", residential: "₹1,40,000" },
  { grade: "Grade 4 – 5", day: "₹80,000", semi: "₹1,10,000", residential: "₹1,50,000" },
  { grade: "Grade 6 – 8", day: "₹90,000", semi: "₹1,20,000", residential: "₹1,60,000" },
];

const Admissions = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", grade: "", message: "" });

  return (
    <div>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCampus} alt="Campus" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative section-container px-4 text-center">
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-foreground mb-3">Admissions</h1>
          <p className="text-primary-foreground/80 text-lg">Join the Rishi Vidyalaya Family</p>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">Admission Process</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover text-center h-full relative">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading font-bold text-primary-foreground text-sm">{i + 1}</span>
                  </div>
                  <s.icon className="mx-auto mb-3 text-primary" size={28} />
                  <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" className="section-padding bg-muted">
        <div className="section-container max-w-3xl">
          <AnimatedSection className="text-center mb-8">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">Eligibility</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border space-y-4">
              {[
                { label: "LKG", req: "Age 3.5+ years as of June 1st" },
                { label: "UKG", req: "Age 4.5+ years, prior schooling preferred" },
                { label: "Grade 1–5", req: "Age-appropriate, transfer certificate from previous school" },
                { label: "Grade 6–8", req: "Age-appropriate, academic records, entrance interaction" },
              ].map((e, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-20 shrink-0 font-heading font-semibold text-primary text-sm">{e.label}</div>
                  <p className="text-sm text-muted-foreground">{e.req}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Fees }
      <section id="fees" className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center mb-8">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">Fee Structure</h2>
            <p className="text-sm text-muted-foreground mt-2">Annual fees (indicative, subject to change)</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full bg-card rounded-xl shadow-sm border border-border overflow-hidden">
                <thead>
                  <tr className="gradient-primary text-primary-foreground">
                    <th className="px-4 py-3 text-left font-heading text-sm">Grade</th>
                    <th className="px-4 py-3 text-center font-heading text-sm">Day School</th>
                    <th className="px-4 py-3 text-center font-heading text-sm">Semi-Residential</th>
                    <th className="px-4 py-3 text-center font-heading text-sm">Residential</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((f, i) => (
                    <tr key={i} className="border-t border-border hover:bg-muted/50 transition-colors">
                      <td className="px-4 py-3 font-medium text-sm text-foreground">{f.grade}</td>
                      <td className="px-4 py-3 text-center text-sm text-muted-foreground">{f.day}</td>
                      <td className="px-4 py-3 text-center text-sm text-muted-foreground">{f.semi}</td>
                      <td className="px-4 py-3 text-center text-sm text-muted-foreground">{f.residential}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>*/}

      {/* Inquiry Form */}
      <section className="section-padding bg-muted">
        <div className="section-container max-w-2xl">
          <AnimatedSection className="text-center mb-8">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">Admission Inquiry</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Parent / Guardian Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <select
                    value={form.grade}
                    onChange={(e) => setForm({ ...form, grade: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select Grade</option>
                    <option>LKG</option>
                    <option>UKG</option>
                    <option>Grade 1</option>
                    <option>Grade 2</option>
                    <option>Grade 3</option>
                    <option>Grade 4</option>
                    <option>Grade 5</option>
                    <option>Grade 6</option>
                    <option>Grade 7</option>
                    <option>Grade 8</option>
                  </select>
                </div>
                <textarea
                  placeholder="Any questions or message?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
                <button type="submit" className="w-full py-3 rounded-lg font-heading font-semibold text-primary-foreground gradient-primary hover:opacity-90 transition-all">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
