import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    path: "/about",
    sub: [
      { label: "Vision & Mission", path: "/about#vision" },
      { label: "History", path: "/about#history" },
    ],
  },
  {
    label: "Academics",
    path: "/academics",
    sub: [
      { label: "Curriculum", path: "/academics#curriculum" },
      { label: "Departments", path: "/academics#departments" },
      { label: "Faculty", path: "/academics#faculty" },
    ],
  },
  {
    label: "Admissions",
    path: "/admissions",
    sub: [
      { label: "Process", path: "/admissions#process" },
      { label: "Eligibility", path: "/admissions#eligibility" },
      { label: "Fees", path: "/admissions#fees" },
    ],
  },
  {
    label: "Events",
    path: "/events",
    sub: [
      { label: "News", path: "/events#news" },
      { label: "Gallery", path: "/events#gallery" },
      { label: "Annual Celebrations", path: "/events#celebrations" },
    ],
  },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-sm border-b border-border">
      <div className="section-container flex items-center justify-between h-16 md:h-20 pl-0 pr-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Rishi Vidyalaya Logo" className="h-10 md:h-14 w-auto" />
          <div className="hidden sm:block">
            <p className="font-heading font-bold text-sm md:text-base text-primary leading-tight">
              Rishi Vidyalaya
            </p>
            <p className="text-[10px] md:text-xs text-muted-foreground leading-tight">
              IIT–NEET Foundation School
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                  isActive(item.path)
                    ? "text-primary bg-primary/5"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
                {item.sub && <ChevronDown size={14} />}
              </Link>
              {item.sub && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-card shadow-xl rounded-lg border border-border py-2 min-w-[180px]">
                  {item.sub.map((s) => (
                    <Link
                      key={s.label}
                      to={s.path}
                      className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/admissions"
            className="ml-2 px-5 py-2 rounded-lg text-sm font-semibold text-primary-foreground gradient-primary transition-all hover:opacity-90"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                    isActive(item.path) ? "text-primary bg-primary/5" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
                {item.sub && (
                  <div className="pl-6 space-y-1">
                    {item.sub.map((s) => (
                      <Link
                        key={s.label}
                        to={s.path}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm text-muted-foreground"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/admissions"
              onClick={() => setMobileOpen(false)}
              className="block text-center mt-3 px-5 py-2.5 rounded-lg text-sm font-semibold text-primary-foreground gradient-primary"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
