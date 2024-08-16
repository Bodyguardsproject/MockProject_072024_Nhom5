import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../ui/Footer";
import MenuMobile from "../ui/MenuMobile";
import { BREAKPOINT } from "../../constant";

export const CustomerLayout = () => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth || 0);

  useEffect(() => {
    const handleResize = () => setWidthScreen(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <>
        {widthScreen && widthScreen <= BREAKPOINT ? (
          <MenuMobile />
        ) : (
          <header className="max-w-7xl m-auto ">
            <Header />
          </header>
        )}
      </>

     
      <div className="m-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default CustomerLayout;
