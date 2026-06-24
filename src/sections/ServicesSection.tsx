import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * ServicesSection — redesigned with:
 * - Board selector tabs (fixed, always visible)
 * - Marquee Row 1: Subjects scrolling left →
 * - Marquee Row 2: Key topics scrolling right ←
 * Accent color: brand-yellow (#F5A623) for energy and engagement
 */

/* ─── Board data ─────────────────────────────── */
const boardTabs = [
  { id: 'cbse',       label: 'CBSE' },
  { id: 'icse',       label: 'ICSE' },
  { id: 'isc',        label: 'ISC' },
  { id: 'state',      label: 'State Boards' },
  { id: 'nios',       label: 'NIOS' },
  { id: 'jee-neet',   label: 'JEE / NEET' },
];

/* ─── Subjects marquee (Row 1, scrolls LEFT) ─── */
const subjectItems = [
  { label: 'Mathematics',       tag: 'Core',       dot: 'bg-brand-purple' },
  { label: 'Physics',           tag: 'Science',    dot: 'bg-blue-500' },
  { label: 'Chemistry',         tag: 'Science',    dot: 'bg-green-500' },
  { label: 'Biology',           tag: 'Science',    dot: 'bg-emerald-500' },
  { label: 'English',           tag: 'Language',   dot: 'bg-amber-500' },
  { label: 'Hindi',             tag: 'Language',   dot: 'bg-orange-400' },
  { label: 'History',           tag: 'Social',     dot: 'bg-teal-500' },
  { label: 'Economics',         tag: 'Commerce',   dot: 'bg-yellow-600' },
  { label: 'Accountancy',       tag: 'Commerce',   dot: 'bg-orange-500' },
  { label: 'Computer Science',  tag: 'Technology', dot: 'bg-indigo-500' },
  { label: 'Business Studies',  tag: 'Commerce',   dot: 'bg-amber-600' },
  { label: 'Social Studies',    tag: 'Social',     dot: 'bg-cyan-500' },
  { label: 'Sanskrit',          tag: 'Language',   dot: 'bg-rose-400' },
  { label: 'Geography',         tag: 'Social',     dot: 'bg-lime-500' },
];

/* ─── Topics marquee (Row 2, scrolls RIGHT) ──── */
const topicItems = [
  { label: 'Quadratic Equations',        tag: 'Maths',     color: 'text-brand-purple' },
  { label: "Newton's Laws of Motion",    tag: 'Physics',   color: 'text-blue-500' },
  { label: 'Periodic Table & Bonding',   tag: 'Chemistry', color: 'text-green-600' },
  { label: 'Cell Biology & Genetics',    tag: 'Biology',   color: 'text-emerald-600' },
  { label: 'Essay Writing & Grammar',    tag: 'English',   color: 'text-amber-600' },
  { label: 'Indian Freedom Movement',    tag: 'History',   color: 'text-teal-600' },
  { label: 'Demand & Supply Analysis',   tag: 'Economics', color: 'text-yellow-700' },
  { label: 'Double Entry Bookkeeping',   tag: 'Accounts',  color: 'text-orange-600' },
  { label: 'Thermodynamics',             tag: 'Physics',   color: 'text-blue-500' },
  { label: 'Electromagnetic Waves',      tag: 'Physics',   color: 'text-blue-600' },
  { label: 'Probability & Statistics',   tag: 'Maths',     color: 'text-brand-purple' },
  { label: 'Organic Chemistry Reactions',tag: 'Chemistry', color: 'text-green-600' },
  { label: 'Python Programming Basics',  tag: 'CS',        color: 'text-indigo-600' },
  { label: 'Indian Constitution',        tag: 'Civics',    color: 'text-cyan-600' },
  { label: 'Trigonometry & Calculus',    tag: 'Maths',     color: 'text-brand-purple' },
  { label: 'Climate & Weather Systems',  tag: 'Geography', color: 'text-lime-600' },
];

/* Duplicate arrays so the marquee loops seamlessly */
const subjectsDouble = [...subjectItems, ...subjectItems];
const topicsDouble   = [...topicItems,   ...topicItems];

export function ServicesSection() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>();
  const [activeBoard, setActiveBoard] = useState('cbse');

  return (
    <section
      ref={ref}
      className="py-12 bg-[#faf9ff] overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold text-brand-purple uppercase tracking-[0.14em] mb-3">
            <span className="w-5 h-px bg-brand-purple/50 rounded-full" aria-hidden="true" />
            Our Services
            <span className="w-5 h-px bg-brand-purple/50 rounded-full" aria-hidden="true" />
          </span>
          <h2
            id="services-heading"
            className="font-display font-bold text-neutral-900 text-3xl md:text-4xl leading-tight tracking-tight"
          >
            What Can You{' '}
            <span className="relative inline-block">
              <span className="text-brand-yellow">Learn?</span>
              {/* Orange underline accent */}
              <span
                className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-brand-yellow"
                aria-hidden="true"
              />
            </span>
          </h2>
          <p className="text-neutral-500 text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Real subjects, real tutors — explore everything we teach across all boards.
          </p>
        </motion.div>

        {/* ── Board Tab Bar (fixed / always visible) ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {boardTabs.map((board) => (
            <button
              key={board.id}
              onClick={() => setActiveBoard(board.id)}
              aria-pressed={activeBoard === board.id}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeBoard === board.id
                  ? 'bg-brand-purple text-white border-brand-purple shadow-card'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-brand-purple/40 hover:text-brand-purple hover:bg-brand-purple-light'
              }`}
            >
              {board.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* ─────────────────────────────────────────────────────── */}
      {/* Marquee rows — full bleed (no max-w wrapper)           */}
      {/* ─────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-3"
      >
        {/* ── Row 1: Subjects → scrolls LEFT ── */}
        <div className="relative overflow-hidden">
          {/* Fade masks on edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#faf9ff] to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#faf9ff] to-transparent" aria-hidden="true" />

          <div className="flex animate-marquee-left whitespace-nowrap">
            {subjectsDouble.map((item, i) => (
              <div
                key={`s-${i}`}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 mx-2 bg-white rounded-full border border-neutral-200/80 shadow-soft flex-shrink-0 hover:border-brand-purple/30 hover:shadow-card transition-all duration-200 cursor-default group"
              >
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.dot}`} aria-hidden="true" />
                <span className="text-sm font-semibold text-neutral-800 group-hover:text-brand-purple transition-colors duration-200">
                  {item.label}
                </span>
                <span className="text-[11px] font-medium text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Row 2: Topics → scrolls RIGHT ── */}
        <div className="relative overflow-hidden">
          {/* Fade masks on edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#faf9ff] to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#faf9ff] to-transparent" aria-hidden="true" />

          <div className="flex animate-marquee-right whitespace-nowrap">
            {topicsDouble.map((item, i) => (
              <div
                key={`t-${i}`}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 mx-2 bg-white rounded-full border border-neutral-200/80 shadow-soft flex-shrink-0 hover:border-brand-yellow/40 hover:shadow-card transition-all duration-200 cursor-default group"
              >
                {/* Dot — orange accent for topics */}
                <span className="w-2 h-2 rounded-full flex-shrink-0 bg-brand-yellow" aria-hidden="true" />
                <span className="text-sm font-semibold text-neutral-800 group-hover:text-brand-purple transition-colors duration-200">
                  {item.label}
                </span>
                <span className={`text-[11px] font-bold ${item.color}`}>
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
