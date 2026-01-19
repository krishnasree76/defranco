import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const CallFloat = () => {
  return (
    <motion.a
      href="tel:+17188932400"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-40 group"
      aria-label="Call us"
    >
      <div className="relative">
        {/* Main Button */}
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
          <Phone className="w-6 h-6 text-primary-foreground" />
        </div>

        {/* Tooltip */}
        <div className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-foreground text-primary-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Now
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-foreground rotate-45" />
        </div>
      </div>
    </motion.a>
  );
};

export default CallFloat;
