import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact" },
    { label: "EULA", href: "/eula" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "AUP", href: "/aup" },
    { label: "FAQ", href: "/faq" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ];

  return (
    <nav className="bg-primary sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="The Trucker Pro Logo" className="h-10 w-auto" loading="eager" />
            <span className="text-primary-foreground font-bold text-lg hidden sm:block">
              The Trucker Pro
            </span>
          </Link>

          {/* Desktop Menu - Hidden, using hamburger for all */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-foreground hover:bg-primary/90"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile/Tablet Menu Dropdown */}
        {isMenuOpen && (
          <div className="pb-4 border-t border-primary-foreground/20">
            <div className="flex flex-col space-y-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
