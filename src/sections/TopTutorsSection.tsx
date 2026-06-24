import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { TutorCard } from '../components/TutorCard';
import { Button } from '../components/ui/Button';
import { getFeaturedTutors } from '../data/tutors';
import { ROUTES } from '../constants/routes';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * TopTutorsSection — showcase of featured tutor profiles
 */
export function TopTutorsSection() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>();
  const featuredTutors = getFeaturedTutors();

  return (
    <section
      ref={ref}
      className="py-12 bg-[#faf9ff]"
      aria-labelledby="top-tutors-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + View All link */}
        <div className="flex items-end justify-between gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              eyebrow="Featured"
              title={
                <>
                  Meet Our{' '}
                  <span className="text-brand-purple">Top Tutors</span>
                </>
              }
              align="left"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden sm:block flex-shrink-0"
          >
            <Link
              to={ROUTES.TUTORS}
              className="flex items-center gap-1.5 text-brand-purple font-semibold text-sm hover:gap-2.5 transition-all duration-200 group"
            >
              View All Tutors
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>

        {/* Tutor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredTutors.map((tutor, index) => (
            <motion.div
              key={tutor.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <TutorCard tutor={tutor} variant="compact" className="h-full" />
            </motion.div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-7 text-center sm:hidden">
          <Link to={ROUTES.TUTORS}>
            <Button variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              View All Tutors
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
