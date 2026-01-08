import { AnimatedSection } from "./Animated";


const experiences = [
  {
    role: 'Freelance Developer',
    company: '',
    period: '2025 - Present',
    description: 'Built a full-stack exam management platform for British School - Gurukul',
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Innocrede Solutions',
    period: '2025',
    description: 'Built a responsive client onboarding form using React and Tailwind CSS, collaborated with other interns on multiple projects, and worked in a real-world team environment using GitHub for version control.',
  },
  // {
  //   role: 'Software Engineer',
  //   company: 'GitHub',
  //   period: '2017 – 2019',
  //   description: 'Contributed to core features and developer experience.',
  // },
];

const skills = [
  { category: 'Languages', items: ['TypeScript', 'JavaScript', 'C', 'C++'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Vite', 'Tailwind', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'MongoDB', 'Express'] },
  { category: 'Tools', items: ['Git', 'Figma', 'Vercel', 'Clerk', 'Convex', 'Postman', 'Firebase'] },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-card relative scroll-mt-16">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                <span className="w-10 sm:w-16 h-px bg-primary" />
                <span className="text-[10px] sm:text-xs font-sans font-medium tracking-[0.2em] sm:tracking-[0.25em] text-primary uppercase">
                  About
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-6 sm:mb-8">
                Building with
                <span className="italic text-gradient-gold"> intention</span>
              </h2>

              <div className="space-y-4 sm:space-y-6 font-sans text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                <p>
                  I’m a software developer dedicated to building practical web applications and learning through hands-on projects. I primarily use JavaScript, React, and backend technologies to transform ideas into functional products.
                </p>
                <p>
                 I enjoy exploring modern UI, animations, and tools while keeping things simple and practical. My aim is to keep building, learning deeply, and delivering work that truly matters.
                </p>
                <p>
                  When I’m not coding, I enjoy photography and capturing everyday moments.
                </p>
              </div>
            </AnimatedSection>

            {/* Experience */}
            <AnimatedSection delay={200} className="mt-10 sm:mt-16">
              <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-foreground mb-6 sm:mb-8">
                Experience
              </h3>

              <div className="space-y-6 sm:space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="group relative pl-4 sm:pl-6 border-l border-border hover:border-primary transition-colors duration-300"
                  >
                    <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors duration-300 -translate-x-1/2" />

                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      <span className="font-sans text-sm sm:text-base font-medium text-foreground">
                        {exp.role}
                      </span>

                      {exp.company && (
                        <>
                          <span className="text-muted-foreground text-sm">at</span>
                          <span className="font-sans text-sm sm:text-base font-medium text-primary">
                            {exp.company}
                          </span>
                        </>
                      )}
                    </div>

                    <span className="text-[10px] sm:text-xs font-sans text-muted-foreground tracking-wide">
                      {exp.period}
                    </span>

                    <p className="mt-1 sm:mt-2 font-sans text-xs sm:text-sm text-muted-foreground font-light">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column */}
          <div>
            <AnimatedSection delay={100}>
              <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-foreground mb-6 sm:mb-8">
                Expertise
              </h3>

              <div className="space-y-6 sm:space-y-10">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <h4 className="text-[10px] sm:text-xs font-sans font-medium tracking-[0.2em] text-primary uppercase mb-3 sm:mb-4">
                      {skill.category}
                    </h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-sans font-light text-foreground bg-secondary border border-border rounded-sm hover:border-primary hover:text-primary transition-colors duration-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection delay={300} className="mt-10 sm:mt-16">
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                <div className="text-center">
                  <span className="block font-serif text-xl sm:text-2xl md:text-3xl font-medium text-gradient-gold">
                    Full Stack
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-sans text-muted-foreground tracking-wide uppercase mt-1 block">
                    Projects
                  </span>
                </div>

                <div className="text-center">
                  <span className="block font-serif text-xl sm:text-2xl md:text-3xl font-medium text-gradient-gold">
                    Production
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-sans text-muted-foreground tracking-wide uppercase mt-1 block">
                    Deployments
                  </span>
                </div>

                <div className="text-center">
                  <span className="block font-serif text-xl sm:text-2xl md:text-3xl font-medium text-gradient-gold">
                    Real World
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-sans text-muted-foreground tracking-wide uppercase mt-1 block">
                    Experience
                  </span>
                </div>
              </div>
            </AnimatedSection>

          </div>

        </div>
      </div>
    </section>
  );
};
