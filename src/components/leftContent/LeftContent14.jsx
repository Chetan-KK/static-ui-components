import React, { useState } from "react";
import SecondaryButton from "../utils/SecondaryButton";

const LeftContent14 = () => {
  return (
    <div className="py-10">
      <div className="lg:max-w-[70rem] my-7 rounded-xl md:my-16 grid grid-cols-1 mx-2 sm:mx-4 lg:mx-auto md:grid-cols-2 items-start justify-items-start gap-10 sm:gap-10 border border-[#f0f0f0] dark:border-[#252528]">
        <div className={`my-5 ml-2 md:ml-10 space-y-5`}>
          <h5 className="text-[#005cf0] font-bold uppercase">Introductio</h5>

          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-5">
            Our Popular Use Cases
          </h1>
          <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
            Here’s what developers can do with our voice AI generator:
          </p>
          <SecondaryButton>Button</SecondaryButton>
        </div>
        <img
          src="/dummyImgLight.png"
          className="w-full h-auto md:h-[25rem] object-cover rounded-b-xl md:rounded-b-none md:rounded-br-xl md:rounded-r-xl"
          alt="hero image"
        />
      </div>
    </div>
  );
};

export default LeftContent14;
