import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Why Choose Us", href: "#why-choose-us" },
  { name: "Careers", href: "/careers" }, // ✅ correct
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Sticky navbar shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Lock background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // ✅ Smooth scroll only for # links
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (!element) return;

    setIsMobileMenuOpen(false);

    setTimeout(() => {
      const yOffset = -90;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }, 180);
  };

  // ✅ Handles both page routes and in-page scroll
  const handleNavClick = (href) => {
    // Case 1: Careers route
    if (!href.startsWith("#")) {
      setIsMobileMenuOpen(false);
      navigate(href);
      return;
    }

    // Case 2: Section scroll only works on homepage
    if (location.pathname !== "/") {
      // go to home first then scroll
      navigate("/");
      setTimeout(() => scrollToSection(href), 350);
      return;
    }

    scrollToSection(href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? "bg-primary/95 backdrop-blur-md shadow-soft" : "bg-primary"}
      `}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* ✅ Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              whileHover={{ rotate: 3, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center
                border border-white/30 bg-white/10 shadow-soft
                ${isScrolled ? "ring-2 ring-white/20 shadow-soft-lg" : ""}
              `}
            >
              <img
                src={logo}
                alt="Defranco Pharmacy Logo"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <span className="text-xl font-bold text-white">
              Defranco <span className="text-white/80">Pharmacy</span>
            </span>
          </motion.a>

          {/* ✅ Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <motion.button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.button>
              ) : (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.href}
                    className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              )
            )}
          </div>

          {/* ✅ CTA */}
          <div className="hidden lg:block">
            <Button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="rounded-full px-6 bg-white text-primary hover:bg-white/90 shadow-soft hover:shadow-soft-lg transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>

          {/* ✅ Mobile Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* ✅ Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-primary/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="container-custom py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ delay: index * 0.04 }}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="pt-2"
              >
                <Button
                  type="button"
                  onClick={() => handleNavClick("#contact")}
                  className="w-full rounded-full bg-white text-primary hover:bg-white/90"
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
