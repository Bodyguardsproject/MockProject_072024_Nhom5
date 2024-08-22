import React from "react";
import imageServices from "../../assets/servicesImage.png";
import imageServices2 from "../../assets/servicesImage2.png";
import imageServices3 from "../../assets/servicesImage3.png";
import imageServices4 from "../../assets/servicesImage4.png";
import BannerAllNav from "../../components/ui/BannerAllNav";
import BannerHomeLayout from "../../components/ui/BannerHomeLayout";

export const Services = () => {
  return (
    <div className="bg-white-500 w-full top-[60px]">
      <BannerAllNav />
      <BannerHomeLayout contentH3={"Services"} />
      <div className="w-full ">
        <div className="w-full flex justify-center gap-10 items-center  md:my-10">
          <div className="relative xs:pl-2">
            <img
              src={imageServices}
              alt=""
              className="w-[400px] h-[297px] object-contain rounded-xl "
            />
            <p className="bg-primary-color absolute text-xl p-2 text-black-500 font-bold flex items-center justify-center xs:text-sm xs:w-[192px] xs:bottom-[50px]  md:bottom-[-20px] md:w-[400px] md:text-lg ">
              Personal security
            </p>
          </div>
          <p className="w-[400px] text-xl xs:text-sm">
            Professional crowd management and incident response for events of
            any scale.
          </p>
        </div>
        <div className="w-full flex justify-center gap-10 items-center  md:my-10">
          <div className="relative xs:pl-2">
            <img
              src={imageServices2}
              alt=""
              className="w-[400px] h-[297px] object-contain rounded "
            />
            <p className="bg-primary-color absolute text-xl p-2 text-black-500 font-bold flex items-center justify-center xs:text-sm xs:w-[192px] xs:bottom-[50px]  md:bottom-[-20px] md:w-[400px] md:text-lg">
              Event security
            </p>
          </div>
          <p className="w-[400px] text-xl xs:text-sm">
            Professional crowd management and incident response for events of
            any scale.
          </p>
        </div>
        <div className="w-full flex justify-center gap-10 items-center  md:my-10">
          <div className="relative xs:pl-2">
            <img
              src={imageServices3}
              alt=""
              className="w-[400px] h-[297px] object-contain rounded "
            />
            <p className="bg-primary-color absolute text-xl p-2 text-black-500 font-bold flex items-center justify-center xs:text-sm xs:w-[192px] xs:bottom-[50px]  md:bottom-[-20px] md:w-[400px] md:text-lg">
              Asset security
            </p>
          </div>
          <p className="w-[400px] text-xl xs:text-sm ">
            Round-the-clock protection for valuable property using advanced
            surveillance.
          </p>
        </div>
        <div className="w-full flex justify-center gap-10 items-center md:my-10">
          <div className="relative xs:pl-2">
            <img
              src={imageServices4}
              alt=""
              className="w-[400px] h-[297px] object-contain rounded "
            />

            <p className="bg-primary-color absolute text-xl p-2 text-black-500 font-bold flex items-center justify-center xs:text-sm xs:w-[192px] xs:bottom-[50px]  md:bottom-[-20px] md:w-[400px] md:text-lg">
              Escort service
            </p>
          </div>

          <p className="w-[400px] text-xl xs:text-sm ">
            Discreet, professional accompaniment ensuring client safety during
            travel or events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
