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

<<<<<<< HEAD
     
=======
      {/* <div className="max-w-7xl m-auto  bg-primary-color  h-[60px] mt-10">
        <ul className="flex gap-2 items-center h-full px-10">
          <li>
            <Link to={"contract"} />
            Contract
          </li>
          <li>
            <Link to={"contracts"} />
            Bodyguards
          </li>
          <li>
            <Link to={"contracts"} />
            Payment
          </li>
        </ul>
      </div> */}
>>>>>>> ff1f264d3f3fa01ea27aa371a8e9c607137276fe
      <div className="m-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default CustomerLayout;
