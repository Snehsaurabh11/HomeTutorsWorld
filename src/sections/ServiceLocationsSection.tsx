import { motion } from 'framer-motion';
import { MapPin, Rocket } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ServiceLocation {
  id:   string;
  name: string;
}

const activeLocations: ServiceLocation[] = [
  { id: 'loc-01', name: 'Delhi' },
  { id: 'loc-02', name: 'Noida' },
  { id: 'loc-03', name: 'Greater Noida' },
  { id: 'loc-04', name: 'Ghaziabad' },
  { id: 'loc-05', name: 'Gurugram' },
  { id: 'loc-06', name: 'Faridabad' },
];

const expandingSoonLocations = [
  'Chandigarh',
  'Jaipur',
  'Lucknow',
  'Varanasi',
];

/**
 * ServiceLocationsSection — map left, city pills right
 * Preserves Google Map; replaces emoji card grid with premium location pills
 */
export function ServiceLocationsSection() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-12 bg-[#f6f3ff]"
      aria-labelledby="locations-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            eyebrow="Service Locations"
            title={<>Currently Serving Across Delhi NCR</>}
            subtitle="Trusted home and online tuition across 6 cities — with more cities launching soon."
            align="center"
          />
        </motion.div>

        {/* Map LEFT — Cities RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 items-start">
          {/* LEFT: Google Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="w-full rounded-2xl overflow-hidden border border-brand-purple/15 shadow-card-lg">
              <iframe
                title="HomeTutorsWorld Service Locations"
                src="https://www.google.com/maps?q=Delhi%20NCR&output=embed"
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* RIGHT: Cities we serve */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            {/* Active cities */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 shadow-card p-5">
              <h3 className="font-display font-bold text-neutral-900 text-base mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-purple flex-shrink-0" />
                Cities We Serve
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {activeLocations.map((location, index) => (
                  <motion.span
                    key={location.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.2, delay: 0.2 + index * 0.05 }}
                    className="subject-pill inline-flex items-center gap-2 px-4 py-2 bg-brand-purple-light text-brand-purple rounded-xl text-sm font-semibold border border-brand-purple/15 hover:bg-brand-purple hover:text-white transition-all duration-200 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" aria-hidden="true" />
                    {location.name}
                  </motion.span>
                ))}
              </div>

              <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
                Home tutors and online tutors available across all listed cities.
              </p>
            </div>

            {/* Expanding soon */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 shadow-card p-5">
              <h3 className="font-display font-bold text-neutral-900 text-base mb-1 flex items-center gap-2">
                <Rocket className="w-4 h-4 text-violet-500 flex-shrink-0" />
                Expanding Soon
              </h3>
              <p className="text-xs text-neutral-500 mb-4 leading-relaxed">
                We're growing fast — these cities launch soon.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {expandingSoonLocations.map((city, index) => (
                  <motion.span
                    key={city}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.2, delay: 0.35 + index * 0.06 }}
                    className="subject-pill inline-flex items-center gap-2 px-4 py-2 bg-neutral-50 text-neutral-600 rounded-xl text-sm font-medium border border-neutral-200 hover:border-brand-purple/30 hover:bg-brand-purple-light/40 hover:text-brand-purple transition-all duration-200 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" aria-hidden="true" />
                    {city}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
