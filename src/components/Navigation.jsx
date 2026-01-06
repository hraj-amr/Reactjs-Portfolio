import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: 'home'},
  { label: 'Work', href: 'work' },
  { label: 'About', href: 'about' },
  { label: 'Contact', href: 'contact' },
  { label: 'Review', href: 'reviews' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-dark py-4' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="font-serif text-xl md:text-2xl font-medium tracking-tight text-foreground hover:text-primary transition-colors duration-300"
        >
          Harshit Raj
        </button>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-10">
          <button
            onClick={() => scrollToSection("work")}
            className="hover-underline text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground uppercase"
          >
            Work
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="hover-underline text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground uppercase"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="hover-underline text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground uppercase"
          >
            Contact
          </button>

          <button
            onClick={() => scrollToSection("reviews")}
            className="hover-underline text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground uppercase"
          >
            Review
          </button>
        </div>

        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:block text-sm font-medium tracking-wide text-primary hover:text-foreground transition-colors duration-300"
        >
          Let's Talk
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="4" y1="8" x2="20" y2="8" />
            <line x1="4" y1="16" x2="20" y2="16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
