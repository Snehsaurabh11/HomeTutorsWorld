import { SectionHeader } from '../components/SectionHeader';
import { ServicesSection } from '../sections/ServicesSection';

export function SubjectsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title={<>All Services We Offer</>}
          subtitle="Browse all subjects, boards, and competitive exam preparation options we provide."
          align="center"
        />
      </div>
      <ServicesSection />
    </div>
  );
}
