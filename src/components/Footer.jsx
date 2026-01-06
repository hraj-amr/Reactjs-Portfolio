export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <a
            href="#"
            className="font-serif text-xl font-medium tracking-tight text-foreground hover:text-primary transition-colors duration-300"
          >
            Harshit Raj
          </a>

          {/* Copyright */}
          <p className="font-sans text-sm text-muted-foreground font-light">
            © {currentYear} Harshit Raj. Crafted with intention.
          </p>

          {/* Back to Top */}
          <a
            href="#"
            className="group flex items-center gap-2 font-sans text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <span>Back to top</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1"
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
          </a>

        </div>
      </div>
    </footer>
  );
};
