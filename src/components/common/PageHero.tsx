import { motion } from 'framer-motion';

interface PageHeroProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  lastUpdated?: string;
}

export function PageHero({
  badge,
  title,
  highlight,
  description,
  lastUpdated,
}: PageHeroProps) {
  return (
    <section className="bg-section-primary py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-4xl border border-brand-purple/10 bg-gradient-subtle shadow-card-lg"
        >
          {/* Decorative Glow */}
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-purple/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-brand-yellow/10 blur-3xl" />

          {/* Dot Pattern */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'radial-gradient(circle, #7668B6 1px, transparent 1px)',
              backgroundSize: '26px 26px',
            }}
          />

          <div className="relative px-8 py-12 md:px-16 md:py-16">

            {/* Badge */}
            <div className="flex items-center justify-center gap-4 mb-6">

              <span className="h-px w-12 bg-brand-purple/30" />

              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.22em] text-brand-purple">
                {badge}
              </span>

              <span className="h-px w-12 bg-brand-purple/30" />

            </div>

            {/* Heading */}
            <h1 className="mx-auto max-w-4xl text-center font-display text-4xl font-black leading-tight tracking-tight text-neutral-900 md:text-6xl">
              {title}{' '}
              <span className="text-brand-purple">
                {highlight}
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-neutral-600">
              {description}
            </p>

            {/* Last Updated */}
            {lastUpdated && (
              <div className="mt-8 flex justify-center">
                <div className="inline-flex items-center rounded-full border border-brand-purple/10 bg-white px-6 py-3 shadow-soft">
                  <span className="text-sm text-neutral-500">
                    Last Updated
                  </span>

                  <span className="mx-3 text-neutral-300">
                    •
                  </span>

                  <span className="text-sm font-semibold text-brand-purple">
                    {lastUpdated}
                  </span>
                </div>
              </div>
            )}

          </div>
        </motion.div>

      </div>
    </section>
  );
}