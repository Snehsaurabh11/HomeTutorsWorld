import { HeroSection } from '../sections/HeroSection';
import { WhyChooseUsSection } from '../sections/WhyChooseUsSection';
import { HowItWorksSection } from '../sections/HowItWorksSection';
import { ServicesSection } from '../sections/ServicesSection';
import { ServiceLocationsSection } from '../sections/ServiceLocationsSection';
import { TopTutorsSection } from '../sections/TopTutorsSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { BecomeTutorSection } from '../sections/BecomeTutorSection';
import { FAQSection } from '../sections/FAQSection';
import { APP_CONFIG } from '../constants/config';

/**
 * HomePage — Composes all homepage sections in order
 *
 * Section order:
 * 1. HeroSection           — tagline + lead form + stats
 * 2. WhyChooseUsSection    — 4 value props
 * 3. HowItWorksSection     — 3-step process
 * 4. ServicesSection       — subjects, boards & classes
 * 5. ServiceLocationsSection — service coverage & expansion
 * 6. TopTutorsSection      — featured tutors
 * 7. TestimonialsSection   — parent reviews
 * 8. BecomeTutorSection    — tutor registration CTA
 * 9. FAQSection            — common questions
 */
export function HomePage() {
  return (
    <>
      {/* SEO — inlined for now, move to <head> via react-helmet when needed */}
      <title>{APP_CONFIG.seo.defaultTitle}</title>
      <meta name="description" content={APP_CONFIG.seo.defaultDescription} />

      <HeroSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <ServicesSection />
      <ServiceLocationsSection />
      <TopTutorsSection />
      <TestimonialsSection />
      <BecomeTutorSection />
      <FAQSection />
    </>
  );
}
