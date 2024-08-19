import React from "react";
import BannerHomeLayout from "../../components/ui/BannerHomeLayout";
export const Quote = () => {
  return (
    <div>
    <BannerHomeLayout contentH3={"QUOTATION"} />
    <div className='flex justify-center gap-4'>
        <div className='bg-blue-400 basis-1/3 p-4'>
          phone
        </div>
        <div className='bg-red-500 basis-2/3 p-4'>
          form
        </div>
    </div>
</div>
  );
};

export default Quote;
