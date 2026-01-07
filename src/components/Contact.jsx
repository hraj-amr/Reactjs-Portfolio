import { AnimatedSection } from "./Animated";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 bg-background relative scroll-mt-16">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 sm:gap-6 mb-4 sm:mb-6">
              <span className="w-8 sm:w-16 h-px bg-primary" />
              <span className="text-[10px] sm:text-xs font-sans font-medium tracking-[0.2em] sm:tracking-[0.25em] text-primary uppercase">
                Get in Touch
              </span>
              <span className="w-8 sm:w-16 h-px bg-primary" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6 sm:mb-8">
              Let's create something
              <span className="block italic text-gradient-gold leading-relaxed">extraordinary</span>
            </h2>
          
            <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-8 sm:mb-12 max-w-xl mx-auto px-2">
              Currently open to new opportunities and collaborations. 
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            {/* Email CTA */}
            <a
              href="mailto:workmail.hraj@gmail.com"
              className="group inline-flex items-center gap-2 sm:gap-4 font-serif text-lg sm:text-2xl md:text-3xl font-medium text-foreground hover:text-primary transition-colors duration-300 break-all sm:break-normal"
            >
              <span className="hover-underline">workmail.hraj@gmail.com</span>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection delay={400} className="mt-10 sm:mt-16">
            <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-8">
              {[
                { label: 'WhatsApp', href: 'https://wa.me/7250337385' },
                { label: 'GitHub', href: 'https://github.com/hraj-amr' },
                { label: 'X', href: 'https://x.com/eternalspce' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/harshitraj1510' },
                
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-underline font-sans text-xs sm:text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
