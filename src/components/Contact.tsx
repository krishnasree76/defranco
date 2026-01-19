import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import CircularImage from "./CircularImage";
import heroImage from "@/assets/hero-pharmacy.jpg";

const storeHours = [
  { day: "Monday (MLK Day)", hours: "9:30 am – 6:30 pm", note: "Hours might differ" },
  { day: "Tuesday", hours: "9:30 am – 6:30 pm" },
  { day: "Wednesday", hours: "9:30 am – 6:30 pm" },
  { day: "Thursday", hours: "9:30 am – 6:30 pm" },
  { day: "Friday", hours: "9:30 am – 6:30 pm" },
  { day: "Saturday", hours: "10 am – 4 pm" },
  { day: "Sunday", hours: "Closed" },
];

/* ✅ Premium motion settings (JSX safe) */
const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease, delay: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const mapFade = {
  hidden: { opacity: 0, y: 24, scale: 0.99 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.85, ease } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // ✅ JSX safe (removed React.FormEvent)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-background overflow-hidden">
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
            CONTACT US
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
            Have questions or need assistance? We're here to help. Reach out to us
            through any of the channels below.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* ✅ Contact Form */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="bg-card-gradient rounded-3xl border border-border/50 p-8 shadow-soft"
          >
            <motion.h3 variants={fadeUp} className="text-2xl font-bold text-foreground mb-6">
              Send Us a Message
            </motion.h3>

            <motion.form
              onSubmit={handleSubmit}
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-5"
            >
              <motion.div variants={item}>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="rounded-xl border-border/50 focus:border-primary focus:ring-primary"
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div variants={item}>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="rounded-xl border-border/50 focus:border-primary focus:ring-primary"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div variants={item}>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="rounded-xl border-border/50 focus:border-primary focus:ring-primary resize-none"
                  placeholder="How can we help you?"
                />
              </motion.div>

              <motion.div variants={item}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-primary hover:bg-primary/90 shadow-soft hover:shadow-soft-lg transition-all"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>

          {/* ✅ Contact Info */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-6"
          >
            {/* Circular Image */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="hidden lg:flex justify-center mb-6"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <CircularImage
                  imageSrc={heroImage}
                  alt="Pharmacy interior"
                  text="DEFRANCO PHARMACY"
                  size="sm"
                />
              </motion.div>
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.75, ease }}
              className="bg-card-gradient rounded-3xl border border-border/50 p-8 shadow-soft"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                <motion.a
                  href="mailto:defrancorx@gmail.com"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      defrancorx@gmail.com
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+17188932400"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      +1 (718) 893-2400
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.google.com/maps/place/1790+Randall+Ave,+Bronx,+NY+10473"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Address</div>
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      1790 Randall Ave, Bronx, NY 10473
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Plus Code: R48P+PQ Bronx, New York, USA
                    </div>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Store Hours */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.75, ease }}
              className="bg-card-gradient rounded-3xl border border-border/50 p-8 shadow-soft"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Store Hours</h3>
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                className="space-y-3"
              >
                {storeHours.map((itemData) => (
                  <motion.div
                    key={itemData.day}
                    variants={item}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="text-muted-foreground">{itemData.day}</span>
                    <div className="text-right">
                      <span
                        className={`font-medium ${
                          itemData.hours === "Closed"
                            ? "text-destructive"
                            : "text-foreground"
                        }`}
                      >
                        {itemData.hours}
                      </span>
                      {itemData.note && (
                        <span className="block text-xs text-muted-foreground">
                          {itemData.note}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* ✅ Google Map */}
        <motion.div
          variants={mapFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-12 rounded-3xl overflow-hidden shadow-soft border border-border/50"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.8899890736!2d-73.8621!3d40.8178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f4b8c9b3b1b3%3A0x0!2s1790%20Randall%20Ave%2C%20Bronx%2C%20NY%2010473!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Defranco Pharmacy Location"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
