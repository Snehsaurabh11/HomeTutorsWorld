import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { ROUTES } from '../../constants/routes';

export function LegalCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-purple to-[#6b5bd2] text-white p-8 md:p-12">

        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

        <div className="relative text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm text-white/70 font-semibold">
            Need Help?
          </p>

          <h2 className="mt-4 font-display text-3xl md:text-4xl font-black">
            Still Have Questions?
          </h2>

          <p className="mt-4 text-white/80 leading-8">
            If you have any questions regarding our policies or terms,
            feel free to contact our support team.
          </p>

          <div className="mt-8">
            <Link to={ROUTES.CONTACT}>
              <Button
                size="lg"
                className="bg-white text-brand-purple hover:bg-neutral-100"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Contact Us
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </motion.section>
  );
}