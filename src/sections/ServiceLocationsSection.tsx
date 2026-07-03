import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ROUTES } from '../constants/routes';
import { MAPS_CONFIG } from '../constants/config';

/**
 * Location data — edit these arrays to add/remove locations.
 * The chip UI re-renders automatically.
 */
const noidaSectors: string[] = [
  'Sector 18', 'Sector 37', 'Sector 50', 'Sector 62', 'Sector 75',
  'Sector 76', 'Sector 78', 'Sector 93', 'Sector 104', 'Sector 137', 'Sector 150',
];

const greaterNoidaAreas: string[] = [
  'Alpha', 'Beta', 'Gamma', 'Delta', 'Omega',
  'Knowledge Park', 'Pari Chowk', 'Jaypee Greens', 'Tech Zone',
];

const greaterNoidaWestAreas: string[] = [
  'Gaur City', 'Gaur City 2', 'Ace City', 'Nirala Estate',
  'Cherry County', 'Supertech Eco Village', 'Techzone 4', 'Bisrakh',
];

const expandingSoonCities: string[] = [
  'Delhi', 'Ghaziabad', 'Gurugram', 'Faridabad', 'Across Delhi NCR',
];

/* ─── Reusable chip group component ─── */
interface LocationGroupProps {
  title: string;
  icon: ReactNode;
  items: string[];
  chipClass: string;
  dotClass: string;
  badgeLabel?: string;
  delay?: number;
  isInView: boolean;
}

function LocationGroup({
  title, icon, items, chipClass, dotClass, badgeLabel, delay = 0, isInView,
}: LocationGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay }}
      className="bg-white rounded-2xl border border-neutral-200/80 shadow-card p-5"
    >
      <h3 className="font-display font-bold text-neutral-900 text-base mb-3 flex items-center gap-2">
        {icon}
        {title}
        {badgeLabel && (
          <span className="ml-auto text-[11px] font-semibold text-violet-500 bg-violet-50 px-2 py-0.5 rounded-full border border-violet-100">
            {badgeLabel}
          </span>
        )}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={`subject-pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-default ${chipClass}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotClass}`} aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/**
 * ServiceLocationsSection
 * Layout: Section header → Google Map → 4 chip groups (2×2 grid) → note
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
            subtitle="Trusted home and online tutors in Noida, Greater Noida and Greater Noida West — with more cities launching soon."
            align="center"
            highlighted
          />
        </motion.div>

        {/* Google Map — full width at top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-8 w-full rounded-2xl overflow-hidden border border-brand-purple/15 shadow-card-lg"
        >
          <iframe
            title="HomeTutorsWorld Service Locations — Noida, Greater Noida, Greater Noida West"
            src={MAPS_CONFIG.serviceLocationsUrl}
            width="100%"
            height="380"
            style={{ border: 0, display: 'block' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Location chip groups — 2×2 on desktop, 1-col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <LocationGroup
            title="Noida"
            icon={<MapPin className="w-4 h-4 text-brand-purple flex-shrink-0" />}
            items={noidaSectors}
            chipClass="bg-brand-purple-light text-brand-purple border-brand-purple/15 hover:bg-brand-purple hover:text-white"
            dotClass="bg-green-500"
            delay={0.15}
            isInView={isInView}
          />
          <LocationGroup
            title="Greater Noida"
            icon={<MapPin className="w-4 h-4 text-brand-purple flex-shrink-0" />}
            items={greaterNoidaAreas}
            chipClass="bg-brand-purple-light text-brand-purple border-brand-purple/15 hover:bg-brand-purple hover:text-white"
            dotClass="bg-green-500"
            delay={0.2}
            isInView={isInView}
          />
          <LocationGroup
            title="Greater Noida West"
            icon={<MapPin className="w-4 h-4 text-brand-purple flex-shrink-0" />}
            items={greaterNoidaWestAreas}
            chipClass="bg-brand-purple-light text-brand-purple border-brand-purple/15 hover:bg-brand-purple hover:text-white"
            dotClass="bg-green-500"
            delay={0.25}
            isInView={isInView}
          />
          <LocationGroup
            title="Expanding Soon"
            icon={<Rocket className="w-4 h-4 text-violet-500 flex-shrink-0" />}
            items={expandingSoonCities}
            chipClass="bg-neutral-50 text-neutral-600 border-neutral-200 hover:border-brand-purple/30 hover:bg-brand-purple-light/40 hover:text-brand-purple"
            dotClass="bg-violet-400"
            badgeLabel="Coming Soon"
            delay={0.3}
            isInView={isInView}
          />
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm text-neutral-400 text-center mt-6 leading-relaxed"
        >
          <span className="font-semibold text-neutral-600">
            More locations are being added regularly.
          </span>{' '}
          <Link
            to={ROUTES.CONTACT}
            className="text-brand-purple font-medium hover:underline underline-offset-2"
          >
            Contact us
          </Link>{' '}
          <span className="font-semibold text-neutral-600">
            to check tutor availability in your area.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
