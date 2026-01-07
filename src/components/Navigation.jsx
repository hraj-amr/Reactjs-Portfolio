import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", section: "home" },
  { label: "Work", section: "work" },
  { label: "About", section: "about" },
  { label: "Review", section: "reviews" },
  { label: "Contact", section: "contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* Navbar scroll effect */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isMobileMenuOpen]);

  const handleNavClick = (section) => {
    scrollToSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass-dark py-4" : "py-6 md:py-8"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* LOGO */}
          <button
            onClick={() => scrollToSection("home")}
            className="font-serif text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-foreground hover:text-primary transition-colors duration-300 z-50"
          >
            Harshit Raj
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.section)}
                className="hover-underline text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block text-sm font-medium tracking-wide text-primary hover:text-foreground transition-colors duration-300"
          >
            Let's Talk
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-foreground z-50 p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* MENU CONTENT */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center gap-8">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.section)}
              className={`font-serif text-3xl sm:text-4xl font-medium text-foreground hover:text-primary transition-all duration-300 ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen
                  ? `${index * 75}ms`
                  : "0ms",
              }}
            >
              {item.label}
            </button>
          ))}

          {/* MOBILE CTA */}
          <button
            onClick={() => handleNavClick("contact")}
            className={`mt-4 px-8 py-3 border border-primary text-primary font-sans text-sm font-medium tracking-wide uppercase hover:bg-primary hover:text-background transition-all duration-300 ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: isMobileMenuOpen
                ? `${navItems.length * 75}ms`
                : "0ms",
            }}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </>
  );
};
