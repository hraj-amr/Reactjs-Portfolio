export const Footer = () => {
  const currentYear = new Date().getFullYear();

    const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="py-8 sm:py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="font-serif text-lg sm:text-xl font-medium tracking-tight text-foreground hover:text-primary transition-colors duration-300"
          >
            Harshit Raj
          </button>

          {/* Copyright */}
          <p className="font-sans text-xs sm:text-sm text-muted-foreground font-light text-center">
            © {currentYear} Harshit Raj. Crafted with intention.
          </p>

          {/* Back to Top */}
          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-2 font-sans text-xs sm:text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <span>Back to top</span>
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:-translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>

        </div>
      </div>
    </footer>
  );
};
