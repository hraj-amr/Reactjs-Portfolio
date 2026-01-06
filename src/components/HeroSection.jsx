import heroPortrait from '@/assets/hero-portrait.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: `url(${heroPortrait})` }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Magazine-style editorial lines */}
      <div className="absolute top-0 left-12 w-px h-32 bg-linear-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
      <div className="absolute bottom-0 right-12 w-px h-48 bg-linear-to-t from-transparent via-primary/30 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-32">
        <div className="max-w-4xl">
          {/* Editorial Label */}
          <div className="animate-fade-up mb-8" style={{ animationFillMode: 'both' }}>
            <span className="inline-flex items-center gap-3">
              <span className="w-12 h-px bg-primary" />
              <span className="text-xs font-sans font-medium tracking-[0.25em] text-primary uppercase">
                Developer & Designer
              </span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-up animation-delay-200" style={{ animationFillMode: 'both' }}>
            <span className="block font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] tracking-tight text-foreground">
              Crafting
            </span>
            <span className="block font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] tracking-tight text-foreground mt-2">
              Digital
            </span>
            <span className="block font-serif text-5xl md:text-7xl lg:text-8xl font-medium italic leading-[1.05] tracking-tight text-gradient-gold mt-2">
              Experiences
            </span>
          </h1>

          {/* Sub Copy */}
          <p className="animate-fade-up animation-delay-400 mt-10 max-w-md font-sans text-lg text-muted-foreground font-light leading-relaxed" style={{ animationFillMode: 'both' }}>
            Full-stack developer focused on elegant interfaces and reliable, scalable architectures. Building products with purpose.
          </p>

          {/* CTA Row */}
          <div className="animate-fade-up animation-delay-600 mt-12 flex items-center gap-8" style={{ animationFillMode: 'both' }}>
            <a
              href="#work"
              className="group inline-flex items-center gap-3 font-sans text-sm font-medium tracking-wide uppercase text-foreground hover:text-primary transition-colors duration-300"
            >
              <span>View Work</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <span className="w-px h-6 bg-border" />

            <a
              href="#about"
              className="font-sans text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
