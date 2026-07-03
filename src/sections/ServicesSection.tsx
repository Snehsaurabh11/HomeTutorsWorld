import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * ServicesSection — Three infinite marquee rows (data-driven):
 *   Row 1: Boards & Exams  → scrolls LEFT
 *   Row 2: Subjects        → scrolls RIGHT
 *   Row 3: Skills & Languages → scrolls LEFT
 *
 * To add/remove items: edit the arrays below.
 * No JSX changes needed.
 */

/* ─── Row 1: Boards & Exams ─────────────────────── */
const boardItems = [
  { label: 'CBSE',          tag: 'Board', dot: 'bg-brand-purple' },
  { label: 'ICSE',          tag: 'Board', dot: 'bg-brand-purple' },
  { label: 'IB',            tag: 'Board', dot: 'bg-violet-500'   },
  { label: 'IGCSE',         tag: 'Board', dot: 'bg-violet-500'   },
  { label: 'NIOS',          tag: 'Board', dot: 'bg-brand-purple' },
  { label: 'Class 1–12',    tag: 'All',   dot: 'bg-green-500'    },
  { label: 'JEE Main',      tag: 'Exam',  dot: 'bg-red-500'      },
  { label: 'JEE Advanced',  tag: 'Exam',  dot: 'bg-red-600'      },
  { label: 'NEET',          tag: 'Exam',  dot: 'bg-pink-500'     },
  { label: 'CUET',          tag: 'Exam',  dot: 'bg-indigo-500'   },
  { label: 'CLAT',          tag: 'Exam',  dot: 'bg-cyan-500'     },
];

/* ─── Row 2: Subjects ───────────────────────────── */
const subjectItems = [
  { label: 'Mathematics',       tag: 'Core',       dot: 'bg-brand-purple' },
  { label: 'Science',           tag: 'Core',       dot: 'bg-green-500'    },
  { label: 'Physics',           tag: 'Science',    dot: 'bg-blue-500'     },
  { label: 'Chemistry',         tag: 'Science',    dot: 'bg-green-600'    },
  { label: 'Biology',           tag: 'Science',    dot: 'bg-emerald-500'  },
  { label: 'English',           tag: 'Language',   dot: 'bg-amber-500'    },
  { label: 'Accountancy',       tag: 'Commerce',   dot: 'bg-orange-500'   },
  { label: 'Business Studies',  tag: 'Commerce',   dot: 'bg-amber-600'    },
  { label: 'Economics',         tag: 'Commerce',   dot: 'bg-yellow-600'   },
  { label: 'History',           tag: 'Social',     dot: 'bg-teal-500'     },
  { label: 'Geography',         tag: 'Social',     dot: 'bg-lime-500'     },
  { label: 'Political Science', tag: 'Social',     dot: 'bg-cyan-600'     },
  { label: 'Computer Science',  tag: 'Technology', dot: 'bg-indigo-500'   },
  { label: 'Reasoning',         tag: 'Aptitude',   dot: 'bg-violet-500'   },
  { label: 'Aptitude',          tag: 'Aptitude',   dot: 'bg-purple-500'   },
];

/* ─── Row 3: Skills & Languages ─────────────────── */
const skillItems = [
  { label: 'Coding',                       tag: 'Technology', dot: 'bg-indigo-500' },
  { label: 'Artificial Intelligence (AI)', tag: 'Technology', dot: 'bg-violet-500' },
  { label: 'Spoken English',               tag: 'Language',   dot: 'bg-amber-500'  },
  { label: 'French',                        tag: 'Language',   dot: 'bg-blue-500'   },
  { label: 'German',                        tag: 'Language',   dot: 'bg-red-500'    },
  { label: 'Spanish',                       tag: 'Language',   dot: 'bg-orange-500' },
  { label: 'Japanese',                      tag: 'Language',   dot: 'bg-pink-500'   },
  { label: 'Hindi',                         tag: 'Language',   dot: 'bg-rose-400'   },
  { label: 'Sanskrit',                      tag: 'Language',   dot: 'bg-amber-600'  },
];

/* Duplicate each array so the marquee loops seamlessly */
const boardsDouble   = [...boardItems,   ...boardItems];
const subjectsDouble = [...subjectItems, ...subjectItems];
const skillsDouble   = [...skillItems,   ...skillItems];

export function ServicesSection() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>();

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
              {/* Yellow underline accent */}
              <span
                className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-brand-yellow"
                aria-hidden="true"
              />
            </span>
          </h2>
          <p className="text-neutral-500 text-base mt-3 max-w-xl mx-auto leading-relaxed">
            From school subjects to competitive exams — covering every board, subject, language and skill.
          </p>
        </motion.div>
      </div>

      {/* ── Marquee Rows — full bleed (no max-w wrapper) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-3"
      >

        {/* ── Row 1: Boards & Exams → scrolls LEFT ── */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#faf9ff] to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#faf9ff] to-transparent" aria-hidden="true" />
          <div className="flex animate-marquee-left whitespace-nowrap">
            {boardsDouble.map((item, i) => (
              <div
                key={`b-${i}`}
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

        {/* ── Row 2: Subjects → scrolls RIGHT ── */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#faf9ff] to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#faf9ff] to-transparent" aria-hidden="true" />
          <div className="flex animate-marquee-right whitespace-nowrap">
            {subjectsDouble.map((item, i) => (
              <div
                key={`s-${i}`}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 mx-2 bg-white rounded-full border border-neutral-200/80 shadow-soft flex-shrink-0 hover:border-brand-yellow/40 hover:shadow-card transition-all duration-200 cursor-default group"
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

        {/* ── Row 3: Skills & Languages → scrolls LEFT ── */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#faf9ff] to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#faf9ff] to-transparent" aria-hidden="true" />
          <div className="flex animate-marquee-left whitespace-nowrap">
            {skillsDouble.map((item, i) => (
              <div
                key={`k-${i}`}
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
      </motion.div>
    </section>
  );
}
