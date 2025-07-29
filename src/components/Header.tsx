import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const navigation = [
    { name: "Početna", href: "#home", type: "anchor" },
    { name: "O meni", href: "/o-meni", type: "link" },
    { name: "Cenovnik", href: "/cenovnik", type: "link" },
    { name: "Galerija", href: "#gallery", type: "anchor" },
    { name: "Kontakt", href: "#contact", type: "anchor" },
  ];

  const handleAnchorClick = (href: string) => {
    if (isHomePage) {
      // Ako smo na početnoj strani, koristi smooth scroll
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Ako nismo na početnoj strani, idi na početnu sa anchor hash
      navigate({ pathname: '/', hash: href });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-accent/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-secondary rounded-full p-2">
              <Heart className="h-6 w-6 text-navy fill-current" />
            </div>
            <span className="text-2xl font-bold text-navy">LogijaM</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.type === "link" ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-navy hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleAnchorClick(item.href)}
                  className="text-navy hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-navy" />
            ) : (
              <Menu className="h-6 w-6 text-navy" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-accent/20 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                item.type === "link" ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-navy hover:text-primary transition-colors duration-200 font-medium px-4 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleAnchorClick(item.href)}
                    className="text-navy hover:text-primary transition-colors duration-200 font-medium px-4 py-2 text-left"
                  >
                    {item.name}
                  </button>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};