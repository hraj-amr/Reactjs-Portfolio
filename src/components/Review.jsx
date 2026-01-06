import { AnimatedSection } from "./Animated";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const reviews = [
  {
    quote: "Working with them was transformative. They don't just write code — they architect experiences that users genuinely love.",
    author: "Sarah Chen",
    role: "CEO, Fintech Startup",
    company: "PayFlow",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    initials: "SC"
  },
  {
    quote: "Rare combination of technical excellence and design sensibility. Delivered beyond expectations, on time.",
    author: "Marcus Webb",
    role: "VP Engineering",
    company: "TechCorp",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    initials: "MW"
  },
  {
    quote: "The attention to detail is unmatched. Every interaction, every animation — meticulously crafted.",
    author: "Elena Rodriguez",
    role: "Product Director",
    company: "DesignLab",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    initials: "ER"
  },
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
    <section
      id="reviews"
      className="py-32 bg-background relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <AnimatedSection>
          <div className="flex items-center gap-6 mb-6">
                <span className="w-16 h-px bg-primary" />
                <span className="text-xs font-sans font-medium tracking-[0.25em] text-primary uppercase">
                  Testimonials
                </span>
              </div>
          <h2 className="editorial-heading text-4xl md:text-5xl mb-16">
            Words from{" "}
            <span className="text-gradient-gold">collaborators</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="group relative h-full">
                {/* Card */}
                <div className="glass-dark p-8 h-full flex flex-col border border-border/30 hover:border-accent/30 transition-colors duration-500">
                  {/* Quote icon */}
                  <Quote className="w-10 h-10 text-accent/40 mb-6 group-hover:text-accent/60 transition-colors duration-500" />

                  {/* Quote text */}
                  <blockquote className="text-foreground/90 text-lg leading-relaxed font-light mb-8 grow">
                    “{review.quote}”
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-border/30 pt-6">
                  <Avatar className="w-12 h-12 border border-border/50">
                      <AvatarImage src={review.avatar} alt={review.author} />
                      <AvatarFallback className="bg-accent/10 text-accent font-serif">{review.initials}</AvatarFallback>
                    </Avatar>
                    <p className="font-serif text-foreground font-medium">
                      {review.author}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {review.role}{" "}
                      <span className="text-accent">·</span>{" "}
                      {review.company}
                    </p>
                  </div>
                </div>

                {/* Decorative corners */}
                <div className="absolute -top-px -right-px w-8 h-8 border-t border-r border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-px -left-px w-8 h-8 border-b border-l border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
