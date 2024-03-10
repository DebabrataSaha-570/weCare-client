import { Outlet } from "react-router-dom";
import Navbar from "../ui/shared/Navbar";
import Footer from "../ui/shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
