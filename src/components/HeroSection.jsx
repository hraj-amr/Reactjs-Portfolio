import heroPortrait from '@/assets/hero-portrait.webp';
import { useState } from 'react';

export const HeroSection = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id='home' className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroPortrait}
        alt=""
        className="hidden"
        onLoad={() => setBgLoaded(true)}
      />
      
      {/* 🔹 Background */}
      <div className="absolute inset-0">
        {/* Skeleton Loader */}
        {!bgLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}

        {/* Background Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 sm:opacity-50 transition-opacity duration-700 ${
            bgLoaded ? "opacity-40 sm:opacity-50" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${heroPortrait})` }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/90 sm:via-background/85 to-background/60 sm:to-background/40" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Magazine-style editorial lines */}
      <div className="absolute top-0 left-12 w-px h-32 bg-linear-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
      <div className="absolute bottom-0 right-12 w-px h-48 bg-linear-to-t from-transparent via-primary/30 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pt-24 sm:pt-32">
        <div className="max-w-4xl">
          {/* Editorial Label */}
          <div className="animate-fade-up mb-6 sm:mb-8" style={{ animationFillMode: 'both' }}>
            <span className="inline-flex items-center gap-2 sm:gap-3">
              <span className="w-8 sm:w-12 h-px bg-primary" />
              <span className="text-[10px] sm:text-xs font-sans font-medium tracking-[0.2em] sm:tracking-[0.25em] text-primary uppercase">
                Developer & Designer
              </span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-up animation-delay-200" style={{ animationFillMode: 'both' }}>
            <span className="block font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium leading-none tracking-tight text-foreground">
              Crafting
            </span>
            <span className="block font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium leading-none tracking-tight text-foreground mt-1 sm:mt-2">
              Digital
            </span>
            <span className="block font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium italic leading-[1.2] tracking-tight text-gradient-gold mt-1 sm:mt-2">
              Experiences
            </span>
          </h1>

          {/* Sub Copy */}
          <p className="animate-fade-up animation-delay-400 mt-6 sm:mt-10 max-w-sm sm:max-w-md font-sans text-base sm:text-lg text-muted-foreground font-light leading-relaxed" style={{ animationFillMode: 'both' }}>
            Full-stack developer focused on elegant interfaces and reliable, scalable architectures. Building products with purpose.
          </p>

          {/* CTA Row */}
          <div className="animate-fade-up animation-delay-600 mt-8 sm:mt-12 flex items-center gap-4 sm:gap-8" style={{ animationFillMode: 'both' }}>
            <button
              onClick={() => scrollToSection("work")}
              className="cursor-pointer group inline-flex items-center gap-2 sm:gap-3 font-sans text-xs sm:text-sm font-medium tracking-wide uppercase text-foreground hover:text-primary transition-colors duration-300"
            >
              <span>View Work</span>
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <span className="w-px h-5 sm:h-6 bg-border" />

            <button
              onClick={() => scrollToSection("about")}
              className="cursor-pointer font-sans text-xs sm:text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              About Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
