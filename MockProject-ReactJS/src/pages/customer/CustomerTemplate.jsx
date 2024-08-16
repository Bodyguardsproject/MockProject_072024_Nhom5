import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import HeaderCustomer from "../../components/Header/HeaderCustomer";
import Footer from "../../components/ui/Footer";
import MenuMobile from "../../components/ui/MenuMobile";
import { BREAKPOINT } from "../../constant";

export const CustomerTemplate = () => {
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
            <HeaderCustomer />
          </header>
        )}
      </>

     
      <div className="m-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default CustomerTemplate