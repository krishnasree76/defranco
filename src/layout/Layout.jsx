import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
