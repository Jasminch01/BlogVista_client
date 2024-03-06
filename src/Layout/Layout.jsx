import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Toaster />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
