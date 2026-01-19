import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import {
  Truck,
  RefreshCcw,
  Package,
  Stethoscope,
  Heart,
  ArrowRight,
  MapPin,
  Phone,
  Check,
} from "lucide-react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const services = [
  {
    icon: Truck,
    title: "Free Delivery",
    description:
      "Get free, same-day prescription delivery. We service all areas in the Bronx and surrounding neighborhoods.",
    modalContent: {
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&h=420&fit=crop",
      fullDescription:
        "Enjoy the convenience of free prescription delivery right to your doorstep. Our professional delivery team ensures your medications arrive safely and on time, every time. We understand that getting to the pharmacy isn't always easy, which is why we bring your prescriptions directly to you.",
      included: [
        "Same-day delivery available",
        "Free for all prescriptions",
        "Serving Bronx and surrounding areas",
        "Contactless delivery options",
      ],
    },
  },
  {
    icon: RefreshCcw,
    title: "Prescription Transfers",
    description:
      "Hassle-free transfers from any pharmacy. We handle all the paperwork so you don't have to.",
    modalContent: {
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=420&fit=crop",
      fullDescription:
        "Switching pharmacies has never been easier. Our team handles the entire transfer process, contacting your previous pharmacy and managing all the necessary paperwork. You simply provide us with your prescription details, and we take care of the rest.",
      included: [
        "We contact your previous pharmacy",
        "Complete paperwork handling",
        "Fast processing time",
        "No hassle for you",
      ],
    },
  },
  {
    icon: Package,
    title: "Blister Packaging",
    description:
      "Custom multi-dose pill packs organized by day and time. Perfect for managing multiple medications.",
    modalContent: {
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&h=420&fit=crop",
      fullDescription:
        "Our blister packaging service organizes your medications into convenient, easy-to-use packs sorted by day and time. This system helps ensure you never miss a dose and makes medication management simple for those taking multiple prescriptions.",
      included: [
        "Medications sorted by day and time",
        "Easy-to-open packaging",
        "Reduces medication errors",
        "Perfect for caregivers",
      ],
    },
  },
  {
    icon: Stethoscope,
    title: "Health Consultations",
    description:
      "Free medication consultations and blood pressure checks by our licensed pharmacists.",
    modalContent: {
      image:
        "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200&h=420&fit=crop",
      fullDescription:
        "Our licensed pharmacists are available for free health consultations to answer your questions about medications, potential interactions, and general health concerns. We also offer complimentary blood pressure monitoring to help you stay on top of your health.",
      included: [
        "Free blood pressure checks",
        "Medication reviews",
        "Drug interaction consultations",
        "Personalized health advice",
      ],
    },
  },
  {
    icon: Heart,
    title: "Diabetes Care",
    description:
      "Glucose monitoring, diabetes counseling, and medication management support.",
    modalContent: {
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=420&fit=crop",
      fullDescription:
        "We provide comprehensive diabetes care services including glucose monitoring, personalized counseling, and medication management. Our pharmacists work with you to help manage your diabetes effectively and improve your quality of life.",
      included: [
        "Glucose monitoring services",
        "Diabetes education",
        "Medication management",
        "Lifestyle counseling",
      ],
    },
  },
];

/* ✅ Premium variants (JSX safe, no TS) */
const ease = [0.22, 1, 0.36, 1];

const sectionContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const headerFade = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const cardFade = {
  hidden: { opacity: 0, y: 26, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease },
  },
};

const modalVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
  exit: { opacity: 0, y: 18, scale: 0.985, transition: { duration: 0.18 } },
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* ✅ Section Header */}
        <motion.div
          variants={headerFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            SERVICES WE OFFER
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Customized Care,{" "}
            <span className="text-primary">Tailored Solutions</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            We provide comprehensive pharmacy services designed to meet your
            unique healthcare needs with care and expertise.
          </p>
        </motion.div>

        {/* ✅ Services Grid */}
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardFade}
              whileHover={{ y: -10, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
              className={`group relative bg-card-gradient rounded-3xl border border-border/50 p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 7, scale: 1.07 }}
                transition={{ type: "spring", stiffness: 260, damping: 14 }}
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
              >
                <service.icon className="w-7 h-7 text-primary" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* CTA */}
              <button
                type="button"
                onClick={() => setSelectedService(service)}
                className="inline-flex items-center text-sm font-semibold text-primary gap-2 group-hover:gap-3 transition-all"
              >
                <span className="relative">
                  Click Here
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </span>

                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ✅ MODAL */}
      <Dialog
        open={!!selectedService}
        onOpenChange={(open) => {
          if (!open) setSelectedService(null);
        }}
      >
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          <AnimatePresence mode="wait">
            {selectedService && (
              <motion.div
                key={selectedService.title}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Header image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <motion.img
                    initial={{ scale: 1.08, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease }}
                    src={selectedService.modalContent.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Back Arrow */}
                  <button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-soft flex items-center justify-center transition"
                    aria-label="Back"
                  >
                    <ArrowLeft className="w-5 h-5 text-primary" />
                  </button>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-soft">
                      <selectedService.icon className="w-5 h-5" />
                    </div>

                    <DialogTitle className="text-2xl font-bold text-white">
                      {selectedService.title}
                    </DialogTitle>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease, delay: 0.05 }}
                    className="text-muted-foreground leading-relaxed mb-6"
                  >
                    {selectedService.modalContent.fullDescription}
                  </motion.p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Included */}
                    <motion.div
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, ease, delay: 0.12 }}
                      className="bg-primary/5 rounded-xl p-5"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Check className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-foreground">
                          What's Included
                        </h4>
                      </div>

                      <ul className="space-y-3">
                        {selectedService.modalContent.included.map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.35,
                              ease,
                              delay: 0.16 + idx * 0.07,
                            }}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                      initial={{ opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, ease, delay: 0.14 }}
                      className="bg-primary/5 rounded-xl p-5"
                    >
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-primary mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            1790 Randall Ave, Bronx, NY 10473, United States
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-primary" />
                          <a
                            href="tel:+17188932400"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            +1 (718) 893-2400
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
