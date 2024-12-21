import React, { useState } from "react";
import Button from "../utils/Button";
import CircleIcon from "../utils/CircleIcon";
import Sun from "../../assets/icons/Sun";
import Moon from "../../assets/icons/Moon";
import CopyIcon from "../utils/CopyIcon";

const LeftContent10 = () => {
  return (
    <div className="lg:container mx-auto p-2 my-7 md:px-20 md:my-16 grid grid-cols-1 md:grid-cols-[1fr_auto] items-center justify-items-center md:justify-items-end gap-5">
      <div className="w-[90vw] xl:mx-20 space-y-5  sm:w-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className=" text-lg sm:text-2xl font-bold">Title</div>
            <p className="text-xs text-[#4d4d4d] dark:text-[#ababab]">
              Tristique elementum, ac maecenas enim fringilla placerat
              scelerisque semper.
            </p>
          </div>
          <div className="space-y-2">
            <div className=" text-lg sm:text-2xl font-bold">Title</div>
            <p className="text-xs text-[#4d4d4d] dark:text-[#ababab]">
              Tristique elementum, ac maecenas enim fringilla placerat
              scelerisque semper.
            </p>
          </div>
          <div className="space-y-2">
            <div className=" text-lg sm:text-2xl font-bold">Title</div>
            <p className="text-xs text-[#4d4d4d] dark:text-[#ababab]">
              Tristique elementum, ac maecenas enim fringilla placerat
              scelerisque semper.
            </p>
          </div>
          <div className="space-y-2">
            <div className=" text-lg sm:text-2xl font-bold">Title</div>
            <p className="text-xs text-[#4d4d4d] dark:text-[#ababab]">
              Tristique elementum, ac maecenas enim fringilla placerat
              scelerisque semper.
            </p>
          </div>
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

export default LeftContent10;
