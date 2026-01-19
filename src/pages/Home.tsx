import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Careers from '@/components/Careers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsappFloat from '@/components/WhatsappFloat';
import CallFloat from '@/components/CallFloat';
import ScrollToTop from '@/components/ScrollToTop';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Careers />
      <Contact />
      <Footer />
      <WhatsappFloat />
      <CallFloat />
      <ScrollToTop />
    </div>
  );
};

export default Home;
