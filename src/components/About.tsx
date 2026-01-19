import { motion } from "framer-motion";
import { Users, Award, HeadphonesIcon, Heart } from "lucide-react";
import CircularImage from "./CircularImage";
import aboutImage from "@/assets/about-pharmacy.jpg";

const features = [
  { icon: Users, label: "Happy Customers" },
  { icon: Award, label: "Experienced" },
  { icon: HeadphonesIcon, label: "Support Available" },
  { icon: Heart, label: "Care Focused" },
];

/* ✅ Premium animation settings (JSX safe) */
const ease = [0.22, 1, 0.36, 1];

const leftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease },
  },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.99 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: 0.05 * i,
      ease,
    },
  }),
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ✅ Content */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.span
                variants={fadeUp}
                className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
              >
                ABOUT US
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
              >
                Your Neighborhood{" "}
                <span className="text-primary">Health Partner</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
              >
                Defranco Pharmacy is a community-based pharmacy committed to
                providing fast service, fair pricing, and expert consultation.
                Located in the heart of Bronx, we're dedicated to serving our
                neighbors with care and attention.
              </motion.p>

              {/* ✅ Feature Tiles (stagger like reference) */}
              <motion.div
                variants={container}
                className="grid grid-cols-2 gap-4"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    custom={index}
                    variants={tileVariants}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                    className="group flex items-center gap-3 p-4 bg-background rounded-2xl border border-border/50 shadow-soft hover:shadow-soft-lg transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ rotate: 6, scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 240,
                        damping: 14,
                      }}
                      className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors"
                    >
                      <feature.icon className="w-5 h-5 text-primary" />
                    </motion.div>

                    <span className="font-medium text-foreground text-sm">
                      {feature.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ✅ Circular Image */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="relative flex justify-center items-center"
          >
            {/* Slow floating animation like reference */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <CircularImage
                imageSrc={aboutImage}
                alt="Pharmacist helping customer"
                text="DEFRANCO PHARMACY"
                size="lg"
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.65, ease, delay: 0.2 }}
              animate={{ y: [0, 8, 0] }}
              className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-4 shadow-soft-lg border border-border/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Experienced
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
