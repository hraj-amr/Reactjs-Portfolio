import { AnimatedSection } from "./Animated";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Shridhar from '@/assets/Shridhar.jpg';

const reviews = [
  {
    quote: "He is highly motivated, passionate about learning, hardworking, diligent, a strong team player.",
    author: "Shridhar Kumar",
    role: "Backend Developer",
    company: "Jungleworks",
    avatar: Shridhar,
    initials: "SK"
  },
  // {
  //   quote: "Rare combination of technical excellence and design sensibility. Delivered beyond expectations, on time.",
  //   author: "Marcus Webb",
  //   role: "VP Engineering",
  //   company: "TechCorp",
  //   avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  //   initials: "MW"
  // },
  // {
  //   quote: "The attention to detail is unmatched. Every interaction, every animation — meticulously crafted.",
  //   author: "Elena Rodriguez",
  //   role: "Product Director",
  //   company: "DesignLab",
  //   avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
  //   initials: "ER"
  // },
  //   {
  //   quote: "The attention to detail is unmatched. Every interaction, every animation — meticulously crafted.",
  //   author: "Elena Rodriguez",
  //   role: "Product Director",
  //   company: "DesignLab",
  //   avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
  //   initials: "ER"
  // }
];

export const ReviewsSection = () => {
  return (
      <section id="reviews" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-background relative overflow-hidden scroll-mt-16">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 sm:w-150 h-75 sm:h-150 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <AnimatedSection>
          <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                <span className="w-10 sm:w-16 h-px bg-primary" />
                <span className="text-[10px] sm:text-xs font-sans font-medium tracking-[0.2em] sm:tracking-[0.25em] text-primary uppercase">
                  Testimonials
                </span>
              </div>
          <h2 className="editorial-heading text-4xl md:text-5xl mb-16">
            Words from{" "}
            <span className="text-gradient-gold">collaborators</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="group relative h-full">
                {/* Card */}
                <div className="glass-dark p-5 sm:p-8 h-full flex flex-col border border-border/30 hover:border-accent/30 transition-colors duration-500">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-accent/40 mb-4 sm:mb-6 group-hover:text-accent/60 transition-colors duration-500" />

                  {/* Quote text */}
                  <blockquote className="text-foreground/90 text-base sm:text-lg leading-relaxed font-light mb-6 sm:mb-8 grow">
                    “{review.quote}”
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-border/30 pt-4 sm:pt-6 flex items-center gap-3 sm:gap-4">
                    <Avatar className="w-10 h-10 sm:w-12 sm:h-12 border border-border/50">
                      <AvatarImage src={review.avatar} alt={review.author} />
                      <AvatarFallback className="bg-accent/10 text-accent font-serif text-sm">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>

                    {/* Text container */}
                    <div className="flex flex-col">
                      <p className="font-serif text-foreground font-medium text-sm sm:text-base leading-tight">
                        {review.author}
                      </p>

                      <p className="text-muted-foreground text-xs sm:text-sm leading-tight">
                        {review.role}
                        <span className="text-accent mx-1">·</span>
                        {review.company}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Decorative corners */}
                <div className="absolute -top-px -right-px w-6 sm:w-8 h-6 sm:h-8 border-t border-r border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-px -left-px w-6 sm:w-8 h-6 sm:h-8 border-b border-l border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
