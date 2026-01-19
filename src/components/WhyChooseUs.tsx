import { motion } from "framer-motion";
import { Check, Search, Stethoscope, Pill, ExternalLink } from "lucide-react";

const benefits = [
  "Fast, friendly & reliable service",
  "Free home delivery",
  "Accept most insurances",
  "Expert medication counseling",
  "Competitive prices & savings",
  "Community focused pharmacy",
];

const resources = [
  {
    icon: Search,
    title: "Search Drugs",
    description: "Look up medication information",
    url: "https://www.epocrates.com/online/drugs",
  },
  {
    icon: Stethoscope,
    title: "Search Diseases",
    description: "Learn about health conditions",
    url: "https://www.epocrates.com/online/diseases",
  },
  {
    icon: Pill,
    title: "Pill Identification",
    description: "Identify your medications",
    url: "https://www.drugs.com/imprints.php",
  },
];

/* ✅ Premium motion settings */
const ease = [0.22, 1, 0.36, 1];

const leftWrap = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease },
  },
};

const rightWrap = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease, delay: 0.05 },
  },
};

const headerFade = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const listContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.12 },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease },
  },
};

const resourceContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
};

const resourceItem = {
  hidden: { opacity: 0, y: 14, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease },
  },
};

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ✅ Benefits List */}
          <motion.div
            variants={leftWrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
          >
            <motion.div
              variants={headerFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                WHY CHOOSE US
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8">
                The Pharmacy That{" "}
                <span className="text-primary">Truly Cares</span>
              </h2>
            </motion.div>

            <motion.div
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="space-y-4"
            >
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit}
                  variants={listItem}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
                  >
                    <Check className="w-4 h-4 text-primary" />
                  </motion.div>

                  <span className="text-lg text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ✅ Quick Resources Panel */}
          <motion.div
            variants={rightWrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
            className="relative bg-card-gradient rounded-3xl border border-border/50 p-8 shadow-soft overflow-hidden"
          >
            {/* subtle glow like reference */}
            <div className="pointer-events-none absolute -top-28 -right-28 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

            <motion.h3
              variants={headerFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              className="text-2xl font-bold text-foreground mb-2 relative z-10"
            >
              Quick Resources
            </motion.h3>

            <motion.p
              variants={headerFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              className="text-muted-foreground mb-8 relative z-10"
            >
              Access helpful tools and information
            </motion.p>

            <motion.div
              variants={resourceContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className="space-y-4 relative z-10"
            >
              {resources.map((resource) => (
                <motion.a
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={resourceItem}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all"
                >
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.05 }}
                    transition={{
                      type: "spring",
                      stiffness: 240,
                      damping: 16,
                    }}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                  >
                    <resource.icon className="w-6 h-6 text-primary" />
                  </motion.div>

                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {resource.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>

                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
