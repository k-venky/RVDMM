import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="section-container px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
            <div>
              <p className="font-heading font-bold text-lg">Rishi Vidyalaya</p>
              <p className="text-sm opacity-70">IIT–NEET Foundation School</p>
            </div>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Building strong foundations for your child's future through knowledge, discipline, and innovation.
          </p>
          <div className="flex gap-3 mt-4">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-base mb-4">Quick Links</h4>
          <div className="space-y-2">
            {[
              { label: "About Us", path: "/about" },
              { label: "Academics", path: "/academics" },
              { label: "Admissions", path: "/admissions" },
              { label: "Events", path: "/events" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="block text-sm opacity-70 hover:opacity-100 hover:text-secondary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-heading font-semibold text-base mb-4">Programs</h4>
          <div className="space-y-2 text-sm opacity-70">
            <p>IIT Foundation</p>
            <p>NEET Foundation</p>
            <p>P5 Model Education</p>
            <p>AI & Robotics</p>
            <p>Co-Curricular Activities</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-base mb-4">Contact Us</h4>
          <div className="space-y-3 text-sm opacity-70">
            <div className="flex gap-2">
              <MapPin size={16} className="shrink-0 mt-0.5" />
              <p>N.S Gate Road, Opp: Tidco Houses, Dharmavaram, Sri Sathya Sai District, AP</p>
            </div>
            <div className="flex gap-2 items-center">
              <Phone size={16} className="shrink-0" />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex gap-2 items-center">
              <Mail size={16} className="shrink-0" />
              <p>info@rishividyalaya.edu.in</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 mt-10 pt-6 text-center text-sm opacity-50">
        © {new Date().getFullYear()} Rishi Vidyalaya IIT–NEET Foundation School. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
