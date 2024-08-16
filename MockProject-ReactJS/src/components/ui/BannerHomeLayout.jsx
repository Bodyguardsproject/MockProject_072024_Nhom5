/* eslint-disable react/prop-types */
import styled from "styled-components";

const BannerHomeLayout = ({ contentH3 }) => {
  return (
    <DivS className="w-full h-[150px] flex flex-col justify-center items-center">
      <h2 className="text-primary-color font-bold text-3xl sm:text-5xl uppercase text-center  ">
        {contentH3}
      </h2>
    </DivS>
  );
};

export default BannerHomeLayout;
const DivS = styled.div`
  background-image: url(https://fastguardservice.com/wp-content/uploads/2024/01/fgs-header-jpg.webp);
  background-position: top left;
`;
