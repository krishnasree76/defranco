import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Briefcase,
  Clock,
  X,
  Check,
  DollarSign,
  Heart,
  Calendar,
  TrendingUp,
  Settings,
  Percent,
  Users,
  Award,
  Handshake,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    title: "Pharmacist",
    type: "Full-Time",
    description: "Licensed pharmacist to provide expert medication counseling.",
    requirements: [
      "Valid NYS Pharmacist License",
      "Doctor of Pharmacy (PharmD) degree",
      "Strong communication skills",
      "Experience in retail pharmacy preferred",
      "Knowledge of insurance billing",
    ],
  },
  {
    title: "Pharmacy Technician",
    type: "Full-Time",
    description: "Certified technician to support pharmacy operations.",
    requirements: [
      "NYS Pharmacy Technician certification",
      "High school diploma or equivalent",
      "Excellent attention to detail",
      "Customer service experience",
      "Ability to work in fast-paced environment",
    ],
  },
  {
    title: "Customer Service Representative",
    type: "Part-Time",
    description: "Friendly representative to assist our valued customers.",
    requirements: [
      "High school diploma or equivalent",
      "Excellent communication skills",
      "Previous customer service experience",
      "Basic computer proficiency",
      "Bilingual (English/Spanish) preferred",
    ],
  },
  {
    title: "Delivery Driver",
    type: "Part-Time",
    description: "Reliable driver for prescription deliveries in Bronx area.",
    requirements: [
      "Valid NYS driver's license",
      "Clean driving record",
      "Knowledge of Bronx neighborhoods",
      "Reliable personal vehicle",
      "Professional and courteous demeanor",
    ],
  },
];

const benefits = [
  { icon: DollarSign, label: "Competitive Salary" },
  { icon: Heart, label: "Health Benefits" },
  { icon: Calendar, label: "Paid Time Off" },
  { icon: TrendingUp, label: "Professional Growth" },
  { icon: Settings, label: "Flexible Scheduling" },
  { icon: Percent, label: "Employee Discounts" },
];

const values = [
  { icon: Users, label: "Community First" },
  { icon: Award, label: "Excellence in Care" },
  { icon: Handshake, label: "Team Collaboration" },
  { icon: GraduationCap, label: "Continuous Learning" },
];

/* ✅ Premium animation setup (JSX Safe) */
const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const card = {
  hidden: { opacity: 0, y: 22, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
};

const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalPanel = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
  exit: { opacity: 0, y: 20, scale: 0.98, transition: { duration: 0.2 } },
};

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <section id="careers" className="section-padding bg-muted/30 overflow-hidden">
      <div className="container-custom">
        {/* ✅ Section Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.65 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
          >
            CAREERS
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Join Our <span className="text-primary">Growing Team</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-8">
            We're always looking for talented, compassionate individuals who share
            our commitment to excellent patient care and community service.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 bg-primary hover:bg-primary/90 shadow-soft hover:shadow-soft-lg transition-all"
            >
              <a href="mailto:defrancorx@gmail.com?subject=Career%20Application%20-%20Defranco%20Pharmacy">
                <Mail className="w-5 h-5 mr-2" />
                Email Your Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* ✅ Current Openings */}
        <div className="mb-20">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.65 }}
            className="text-2xl font-bold text-foreground text-center mb-10"
          >
            Current Openings
          </motion.h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {jobs.map((job) => (
              <motion.div
                key={job.title}
                variants={card}
                whileHover={{ y: -10, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="bg-background rounded-3xl border border-border/50 p-6 shadow-soft hover:shadow-soft-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 240, damping: 14 }}
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                    >
                      <Briefcase className="w-6 h-6 text-primary" />
                    </motion.div>

                    <div>
                      <h4 className="font-bold text-lg text-foreground">
                        {job.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{job.description}</p>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedJob(job)}
                    className="flex-1 rounded-full border-primary/30 hover:bg-primary/5 hover:border-primary/50"
                  >
                    View Requirements
                  </Button>

                  <Button
                    asChild
                    className="flex-1 rounded-full bg-primary hover:bg-primary/90"
                  >
                    <a href="mailto:defrancorx@gmail.com?subject=Career%20Application%20-%20Defranco%20Pharmacy">
                      Apply Now
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ✅ Benefits & Perks */}
        <div className="mb-20">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.65 }}
            className="text-2xl font-bold text-foreground text-center mb-10"
          >
            Benefits & Perks
          </motion.h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.label}
                variants={card}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="bg-background rounded-2xl border border-border/50 p-5 text-center shadow-soft hover:shadow-soft-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {benefit.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ✅ Core Values */}
        <div>
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.65 }}
            className="text-2xl font-bold text-foreground text-center mb-10"
          >
            Our Core Values
          </motion.h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {values.map((value) => (
              <motion.div
                key={value.label}
                variants={card}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="bg-background rounded-2xl border border-border/50 p-6 text-center shadow-soft hover:shadow-soft-lg transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="font-medium text-foreground">{value.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ✅ Requirements Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              variants={modalPanel}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="bg-background rounded-3xl shadow-soft-lg max-w-lg w-full p-8 relative"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {selectedJob.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {selectedJob.type}
                  </span>
                </div>
              </div>

              <h4 className="font-semibold text-foreground mb-4">Requirements</h4>

              <ul className="space-y-3 mb-8">
                {selectedJob.requirements.map((req, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, ease, delay: 0.05 * index }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{req}</span>
                  </motion.li>
                ))}
              </ul>

              <Button
                asChild
                className="w-full rounded-full bg-primary hover:bg-primary/90"
              >
                <a href="mailto:defrancorx@gmail.com?subject=Career%20Application%20-%20Defranco%20Pharmacy">
                  Apply for This Position
                </a>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Careers;
