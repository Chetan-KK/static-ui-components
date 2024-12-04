import React, { useState } from "react";
import Button from "../utils/Button";
import SectionHeading from "../utils/SectionHeading";
import Moon from "../../assets/icons/Moon";

const RightContent2 = () => {
  return (
    <div className="lg:container mx-auto p-2 my-7 md:px-20 md:my-16 grid grid-cols-1 md:grid-cols-[auto_1fr] items-center justify-items-center md:justify-items-end gap-10 sm:gap-20">
      <img
        src="/dummyImgLight.png"
        className="w-[90vw] h-auto sm:w-[30rem] md:h-[25rem] object-cover rounded-xl"
        alt="hero image"
      />
      <div className="space-y-5  sm:w-auto">
        <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base flex items-center gap-2">
          <Moon className="text-[#005cf0] size-8" /> Neque, pulvinar vestibulum
          non aliquam.
        </p>
        <SectionHeading
          className={"!text-left !px-0"}
          heading={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
          subHeading={
            "Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar."
          }
        />

        <Button>Get started</Button>
      </div>
    </div>
  );
};

export default RightContent2;
