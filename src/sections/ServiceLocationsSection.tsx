import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/ui/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ServiceLocation {
  id: string;
  name: string;
  icon: string;
}

const activeLocations: ServiceLocation[] = [
  { id: 'loc-01', name: 'Delhi', icon: '🏙️' },
  { id: 'loc-02', name: 'Noida', icon: '🏢' },
  { id: 'loc-03', name: 'Greater Noida', icon: '🏘️' },
  { id: 'loc-04', name: 'Ghaziabad', icon: '🌆' },
  { id: 'loc-05', name: 'Gurugram', icon: '🏗️' },
  { id: 'loc-06', name: 'Faridabad', icon: '🏭' },
];

const expandingSoonLocations = [
  'Chandigarh',
  'Jaipur',
  'Lucknow',
  'Varanasi',
];

/**
 * ServiceLocationsSection — Displays service locations with map
 * Shows currently serving areas and expansion plans
 */
export function ServiceLocationsSection() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-16 bg-[#F3EEFF]"
      aria-labelledby="locations-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Service Locations"
            title={<>Currently Serving Across Delhi NCR</>}
            subtitle="Providing trusted home and online tuition services across Delhi NCR with expansion planned for more cities."
            align="center"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Left: Location Cards */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {activeLocations.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <Card hover className="p-6 text-center h-full flex flex-col items-center justify-center">
                    <div className="text-4xl mb-3">{location.icon}</div>
                    <h3 className="font-display font-bold text-neutral-900 text-lg">
                      {location.name}
                    </h3>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand-purple">
                      <MapPin className="w-3 h-3" />
                      Active
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Expanding Soon Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-brand-purple-light to-blue-50 rounded-lg p-6 border border-brand-purple/20"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-purple text-white text-xs font-bold">
                  ⭐
                </span>
                <h4 className="font-display font-bold text-neutral-900">
                  Expanding Soon
                </h4>
              </div>
              <p className="text-sm text-neutral-600 mb-4">
                We're expanding to new cities to serve more students
              </p>
              <div className="flex flex-wrap gap-2">
                {expandingSoonLocations.map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-xs font-medium text-neutral-700 border border-neutral-200"
                  >
                    <span className="text-base">🚀</span>
                    {city}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

         {/* Right: Google Map */}
<motion.div
  initial={{ opacity: 0, x: 24 }}
  animate={isInView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  <div className="w-full rounded-xl overflow-hidden border-2 border-brand-purple/20 bg-white shadow-card">
    <iframe
      title="HomeTutorsWorld Service Locations"
      src="https://www.google.com/maps?q=Delhi%20NCR&output=embed"
      width="100%"
      height="500"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full"
    />

    <div className="p-6 border-t border-neutral-200">
      <h3 className="font-display font-bold text-neutral-900 text-xl mb-3">
        Home Tutors Available Across Delhi NCR
      </h3>

      <p className="text-neutral-600 text-sm leading-relaxed mb-4">
        We currently provide qualified home tutors and online tutors across
        Delhi, Noida, Greater Noida, Ghaziabad, Gurugram and Faridabad.
      </p>

      <div className="flex flex-wrap gap-2">
        {activeLocations.map((location) => (
          <span
            key={location.id}
            className="px-3 py-1 rounded-full bg-brand-purple-light text-brand-purple text-xs font-medium"
          >
            {location.name}
          </span>
        ))}
      </div>
    </div>
  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
}

