import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Toaster } from "react-hot-toast";
import Banner2 from "../Components/Banner2";

const Layout = () => {
  return (
    <div className="font-Karla">
      <Toaster />
      <Banner2/>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
