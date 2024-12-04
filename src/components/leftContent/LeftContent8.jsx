import React, { useState } from "react";
import Button from "../utils/Button";
import CircleIcon from "../utils/CircleIcon";
import Sun from "../../assets/icons/Sun";
import Moon from "../../assets/icons/Moon";
import CopyIcon from "../utils/CopyIcon";
import SecondaryButton from "../utils/SecondaryButton";

const LeftContent8 = () => {
  return (
    <div className="lg:container mx-auto p-2 my-7 md:px-20 md:my-16 grid grid-cols-1 md:grid-cols-[1fr_auto] items-center justify-items-center md:justify-items-end gap-5">
      <div className="w-[90vw] xl:mx-20 space-y-5  sm:w-auto">
        <h1 className=" text-xl sm:text-3xl font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
        <div className="flex gap-2">
          <div className="space-y-2">
            <CircleIcon Icon={Sun} />
            <p className="text-xs text-[#4d4d4d] dark:text-[#ababab]">
              Tristique elementum, ac maecenas enim fringilla placerat
              scelerisque semper.
            </p>
          </div>
          <div className="space-y-2">
            <CircleIcon Icon={Moon} />
            <p className="text-xs text-[#4d4d4d] dark:text-[#ababab]">
              Tristique elementum, ac maecenas enim fringilla placerat
              scelerisque semper.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button>Get started</Button>
          <SecondaryButton>Start for free</SecondaryButton>
        </div>
      </div>
      <img
        src="/dummyImgLight.png"
        className="w-auto h-auto sm:w-[30rem] md:h-[20rem] object-cover rounded-xl"
        alt="hero image"
      />
    </div>
  );
};

export default LeftContent8;
