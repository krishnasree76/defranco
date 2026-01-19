import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappFloat = () => {
  return (
    <motion.a
      href="https://wa.me/17188932400"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Main Button */}
        <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
          {/* ✅ Real WhatsApp Icon */}
          <FaWhatsapp className="w-7 h-7 text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-foreground text-primary-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-foreground rotate-45" />
        </div>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </div>
    </motion.a>
  );
};

export default WhatsappFloat;
