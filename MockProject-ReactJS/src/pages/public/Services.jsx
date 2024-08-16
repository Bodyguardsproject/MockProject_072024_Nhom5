import React from "react";
import imageServices from "../../assets/servicesImage.png";
import imageServices2 from "../../assets/servicesImage2.png";
import imageServices3 from "../../assets/servicesImage3.png";
import imageServices4 from "../../assets/servicesImage4.png";

export const Services = () => {
  return (
    <div className="bg-white-500 w-full">
      <div className="w-full h-[230px] relative flex justify-center items-center">
        <img
          src="https://fastguardservice.com/wp-content/uploads/2024/01/fgs-header-jpg.webp"
          alt=""
          className="object-center"
        />
        <p className="text-primary-color font-bold text-6xl absolute uppercase">
          SERVICES
        </p>
      </div>
      <div className="w-full p-4">
        <div className="w-full flex justify-center gap-10 items-center">
          <div className="relative">
            <img
              src={imageServices}
              alt=""
              className="w-[400px] h-[297px] object-contain rounded-xl "
            />
            <p className="bg-primary-color text-xl w-full absolute bottom-0 p-2 text-black-500 font-bold flex items-center justify-center">
              Personal security
            </p>
          </div>
          <p className="w-[400px] text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis tempora dolorem, corrupti quisquam sed veniam esse
            quos, provident quidem vero optio, nobis laborum ex accusamus alias
            quibusdam quasi iure eius.
          </p>
        </div>
        <div className="w-full flex justify-center gap-10 items-center">
          <div className="relative">
            <img
              src={imageServices2}
              alt=""
              className="w-[400px] h-[297px] object-contain rounded "
            />
            <p className="bg-primary-color text-xl w-full absolute bottom-0 p-2 text-black-500 font-bold flex items-center justify-center">
              Event security
            </p>
          </div>
          <p className="w-[400px] text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            consequuntur, dolores nesciunt exercitationem eligendi tenetur! Ipsa
            expedita facilis suscipit? Aliquid doloribus perspiciatis libero,
            laudantium tenetur nemo delectus voluptatibus. Adipisci, at.
          </p>
        </div>
        <div className="w-full flex justify-center gap-10 items-center">
          <div className="relative">
            <img
              src={imageServices3}
              alt=""
              className="w-[400px] h-[297px] object-contain rounded "
            />
            <p className="bg-primary-color text-xl w-full absolute bottom-0 p-2 text-black-500 font-bold flex items-center justify-center">
              Asset security
            </p>
          </div>
          <p className="w-[400px] text-xl ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            magnam omnis sint voluptates a temporibus, debitis asperiores ut sed
            earum similique facere quasi eos nesciunt totam laudantium mollitia
            tempore? Nemo?
          </p>
        </div>
        <div className="w-full flex justify-center gap-10 items-center">
          <div className="relative">
            <img
              src={imageServices4}
              alt=""
              className="w-[400px] h-[297px] object-contain  rounded"
            />
            <p className="bg-primary-color text-xl w-full absolute bottom-0 p-2 text-black-500 font-bold flex items-center justify-center">
              Escort serivce
            </p>
          </div>
          <p className="w-[400px] text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            repellat minima minus temporibus adipisci. Quia perferendis nihil
            non ipsa enim eaque sunt quae, est, porro provident sint quam, rem
            ea!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
