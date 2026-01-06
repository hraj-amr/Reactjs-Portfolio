import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/Projects';
import { AboutSection } from '@/components/About';
import { ContactSection } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import ReviewsSection from '../components/Review';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
