import React, { useState } from "react";
import Button from "../utils/Button";
import SectionHeading from "../utils/SectionHeading";
import Moon from "../../assets/icons/Moon";

const RightContent3 = () => {
  return (
    <div className="py-10">
      <SectionHeading subHeading="Neque, pulvinar vestibulum non aliquam." />
      <SectionHeading
        heading="Etiam nulla lectus amet nunc molestie at vulputate."
        subHeading="Neque, pulvinar vestibulum non aliquam."
      />
      <div className="lg:container mx-auto p-2 my-7 md:px-20 md:my-16 grid grid-cols-1 md:grid-cols-[auto_1fr] items-center justify-items-center md:justify-items-end gap-10 sm:gap-20">
        <img
          src="/dummyImgLight.png"
          className="w-full h-auto sm:w-[30rem] md:h-[25rem] object-cover rounded-xl"
          alt="hero image"
        />
        <div className="space-y-5  sm:w-auto">
          <div className={`container mx-auto my-5`}>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-5">
              Etiam nulla lectus amet nunc molestie at vulputate.
            </div>
            <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
              Facilisi viverra dictum augue eu lobortis elit. In et donec
              habitasse lacus mi commodo elementum.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:container mx-auto p-2 my-7 md:px-20 md:my-16 grid grid-cols-1 md:grid-cols-[auto_1fr] items-center justify-items-center md:justify-items-end gap-10 sm:gap-20">
        <img
          src="/dummyImgLight.png"
          className="w-full h-auto sm:w-[30rem] md:h-[25rem] object-cover rounded-xl"
          alt="hero image"
        />
        <div className="space-y-5  sm:w-auto">
          <div className={`container mx-auto my-5`}>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-5">
              Etiam nulla lectus amet nunc molestie at vulputate.
            </div>
            <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
              Facilisi viverra dictum augue eu lobortis elit. In et donec
              habitasse lacus mi commodo elementum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContent3;
