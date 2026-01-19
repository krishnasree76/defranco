import { motion } from "framer-motion";
import { Pill, Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

/* ✅ Premium motion variants (JSX safe) */
const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const Footer = () => {
  // ✅ removed TS ": string"
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground overflow-hidden">
      <div className="container-custom section-padding">
        {/* ✅ Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Brand */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                whileHover={{ rotate: 6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 240, damping: 16 }}
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center"
              >
                <Pill className="w-5 h-5 text-primary-foreground" />
              </motion.div>
              <span className="text-xl font-bold">Defranco Pharmacy</span>
            </div>

            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted community pharmacy serving Bronx with personalized
              care, prescriptions, and free delivery.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2, ease }}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <motion.a
                  href="tel:+17188932400"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2, ease }}
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +1 (718) 893-2400
                </motion.a>
              </li>

              <li>
                <motion.a
                  href="mailto:defrancorx@gmail.com"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2, ease }}
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  defrancorx@gmail.com
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Address */}
          <motion.div variants={fadeUp}>
            <h4 className="font-bold text-lg mb-4">Location</h4>

            <motion.a
              href="https://www.google.com/maps/place/1790+Randall+Ave,+Bronx,+NY+10473"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2, ease }}
              className="flex items-start gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
            >
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>
                1790 Randall Ave,
                <br />
                Bronx, NY 10473,
                <br />
                United States
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ✅ Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease, delay: 0.1 }}
          className="mt-12 pt-8 border-t border-primary-foreground/10 text-center"
        >
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Defranco Pharmacy. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
