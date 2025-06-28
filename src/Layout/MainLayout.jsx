

import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* All children route will render here */}
    </>
  );
};

export default MainLayout;
