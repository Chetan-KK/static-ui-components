import React, { useState } from "react";
import Button from "../utils/Button";
import SectionHeading from "../utils/SectionHeading";
import Moon from "../../assets/icons/Moon";

const LeftContent12 = () => {
  return (
    <div className="py-10">
      <div className="lg:container mx-auto p-2 my-7 md:px-20 md:my-16 grid grid-cols-1 md:grid-cols-[1fr_auto] items-start justify-items-center md:justify-items-end gap-10 sm:items-center sm:gap-20">
        <div className="space-y-5 sm:w-auto">
          <div className={`container mx-auto my-5`}>
            <div className="text-xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-5">
              Make Your Own Apps using Models
              <span className="text-[#005cf0]">Lab</span> API
            </div>
            <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
              Use Our API to Build apps, Make Great AI Art, Create Awesome
              Videos and generate sound with ease!
            </p>
          </div>
        </div>
        <img
          src="/dummyImgLight.png"
          className="w-full h-auto sm:w-[30rem] md:h-[25rem] object-cover rounded-xl"
          alt="hero image"
        />
      </div>
    </div>
  );
};

export default LeftContent12;
