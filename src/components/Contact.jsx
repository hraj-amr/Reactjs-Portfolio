import { AnimatedSection } from "./Animated";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

export const ContactSection = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
  e.preventDefault();

  const validation = contactSchema.safeParse({ name, email, message });
  if (!validation.success) {
    toast({
      title: "Validation Error",
      description: validation.error.errors[0].message,
      variant: "destructive",
    });
    return;
  }

  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_mm6vi78",
      "template_olwwhri",
      {
        name,
        email,
        message,
      },
      "jdHYkP4MUvrSmcZNC"
    );

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll reply soon.",
    });

    setName('');
    setEmail('');
    setMessage('');
  } catch (error) {
    console.error("EmailJS Error:", error);
    toast({
      title: "Error",
      description: "Failed to send message. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

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

          {/* Contact Form */}
          <AnimatedSection delay={200}>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 text-left mb-10 sm:mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-sans font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="bg-card border-border focus:border-primary transition-colors"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-sans font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="bg-card border-border focus:border-primary transition-colors"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-sans font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-card border-border focus:border-primary transition-colors resize-none"
                  disabled={isSubmitting}
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-medium tracking-wide transition-all duration-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            {/* Email CTA */}
            <p className="text-xs sm:text-sm text-muted-foreground mb-3">Or reach out directly:</p>
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
                { label: 'GitHub', href: 'https://github.com/eternalspce' },
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
