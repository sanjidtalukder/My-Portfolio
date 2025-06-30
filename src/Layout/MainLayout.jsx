

import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* All children route will render here */}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
