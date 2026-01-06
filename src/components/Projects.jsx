import { AnimatedSection } from "./Animated";
import project1 from '@/assets/project-1.png';
import project2 from '@/assets/project-2.png';

const projects = [
  {
    id: 1,
    title: 'Exam Management Platform',
    category: 'Web Application',
    year: '2025',
    description: 'A streamlined web application for managing entrance exams with automated registration, admin operations, and admit card workflows.',
    image: project1,
    tech: ['React', 'Vite','Express', 'Node.js', 'MongoDB', 'PDFKit'],
    link: 'https://www.bsgurukul.com/',
  },
  {
    id: 2,
    title: 'Travel Planning Platform',
    category: 'AI-Powered Web Application',
    year: '2025',
    description: 'An AI-powered web application that generates personalized travel itineraries based on user preferences and trip constraints.',
    image: project2,
    tech: ['TypeScript', 'React', 'Next.js', 'Clerk', 'Convex', 'Google Gen-AI', 'Google Maps API'],
    link: 'https://trippy-trip-planner-2ddb.vercel.app',
  },
  // {
  //   id: 3,
  //   title: 'Luxury Commerce',
  //   category: 'E-Commerce',
  //   year: '2023',
  //   description: 'High-end fashion retail platform with personalized shopping experiences.',
  //   image: project3,
  //   tech: ['Vue.js', 'Shopify', 'Tailwind', 'Stripe'],
  // },
];

export const ProjectsSection = () => {
  return (
    <section id="work" className="py-32 bg-background relative">
      {/* Section Header */}
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-6 mb-6">
            <span className="w-16 h-px bg-primary" />
            <span className="text-xs font-sans font-medium tracking-[0.25em] text-primary uppercase">
              Selected Work
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
            Projects that
            <span className="italic text-gradient-gold"> define </span>
            excellence
          </h2>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 100}>
              <article className="group grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Image */}
                <div
                  className={`relative overflow-hidden rounded-sm ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-background/60 via-background/30 to-transparent" />
                  
                  {/* Project Number */}
                <span className="absolute top-6 left-6 font-serif text-7xl font-medium text-foreground/55 mix-blend-screen">
                    0{project.id}
                  </span>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}>
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    <span className="text-xs font-sans font-medium tracking-widest text-muted-foreground uppercase">
                      {project.category}
                    </span>
                    <span className="w-px h-4 bg-border" />
                    <span className="text-xs font-sans text-muted-foreground">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p
                    className={`font-sans text-muted-foreground font-light leading-relaxed mb-6 max-w-md
                      ${index % 2 === 1 ? 'lg:ml-auto' : 'lg:mr-auto'}
                    `}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className={`flex flex-wrap gap-2 mb-8 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-sans font-medium tracking-wide text-muted-foreground border border-border rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 font-sans text-sm font-medium tracking-wide uppercase text-foreground hover:text-primary transition-colors duration-300 ${
                      index % 2 === 1 ? '' : ''
                    }`}
                  >
                    <span>View Project</span>
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
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
