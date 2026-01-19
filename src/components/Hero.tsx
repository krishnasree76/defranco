import { motion } from "framer-motion";
import { Phone, MapPin, ArrowRight, Heart, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import pillsImage from "@/assets/image.png"; // Using this as the main pharmacy hero
import heroImage from "@/assets/hero-pharmacy.jpg";   // Using this for the small detail card

/* ✅ Pure JSX variants */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.12, 
      delayChildren: 0.15 
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: 0.05 * i,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden pt-20"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: 0.5,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2.2,
            ease: "easeOut",
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20"
            >
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Your Trusted Community Pharmacy
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
            >
              Your Health, <span className="text-primary text-gradient">Our Priority</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Defranco Pharmacy makes staying healthy easier with fast refills, 
              free delivery, and trusted advice. We're your family-owned community 
              pharmacy in the Bronx, serving the neighborhood for many years.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-base shadow-soft hover:shadow-soft-lg group">
                <a href="tel:+17188932400">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button asChild size="lg" variant="outline" className="rounded-full px-8 py-6 text-base">
                <a href="https://maps.google.com" target="_blank" rel="noreferrer">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Get Directions
                </a>
              </Button>
            </motion.div>

            {/* Icon Trust Indicators */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Free Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Fast Service</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Pharmacy Image with Floating Cards */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative lg:block"
          >
            <div className="relative group">
              {/* Main Rounded Image */}
              <div className="w-full aspect-[4/3] lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-900">
                <img
                  src={pillsImage}
                  alt="Pharmacy Care"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating Card 1: Free Delivery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-soft-lg border border-primary/10 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground leading-none">Free Delivery</p>
                    <p className="text-xs text-muted-foreground mt-1">Same day service</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2: Certified */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-soft-lg border border-primary/10 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground leading-none">100% Safe</p>
                    <p className="text-xs text-muted-foreground mt-1">Certified pharmacy</p>
                  </div>
                </div>
              </motion.div>

              {/* Secondary Detail Image Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-10 -right-10 w-32 h-32 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-900 hidden xl:block"
              >
                <img src={heroImage} alt="Detail" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stat Indicators */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "10+", label: "Years of Service" },
            { value: "10k+", label: "Happy Patients" },
            { value: "Free", label: "Same-Day Delivery" },
            { value: "Fast", label: "Trusted Care" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={index}
              variants={statItem}
              className="text-center p-6 rounded-3xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0]">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto">
          <path
            d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z"
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;