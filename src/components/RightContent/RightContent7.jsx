import React, { useState } from "react";
import Button from "../utils/Button";

const RightContent7 = () => {
  return (
    <div className="lg:container mx-auto p-4 my-7 md:px-20 md:my-16 grid grid-cols-1 md:grid-cols-[auto_1fr] items-center justify-items-center md:justify-items-end gap-5">
      <img
        src="/dummyImgLight.png"
        className="w-[90vw] h-auto sm:w-[30rem] md:h-[20rem] object-cover rounded-xl"
        alt="hero image"
      />
      <div className="w-[90vw] space-y-5  sm:w-auto">
        <h5 className="text-[#005cf0] font-bold uppercase">Caption</h5>
        <div className=" text-xl sm:text-3xl font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <p className=" text-xs sm:text-base text-[#4d4d4d] dark:text-[#ababab]">
          Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit
          nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut.
          Non, amet, aliquet scelerisque nullam sagittis, pulvinar.{" "}
        </p>
        <Button>Get started</Button>
      </div>
    </div>
  );
};

export default RightContent7;
