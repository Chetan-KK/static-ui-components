import React, { useState } from "react";
import Close from "../../assets/icons/Close";
import Tick from "../../assets/icons/Tick";

const FeatureContent12 = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto text-center space-y-6">
        <h1 className=" text-xl sm:text-4xl font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet
          at molestie mattis.
        </h1>
      </div>
      <div className="container mx-auto my-16 grid grid-cols-1 md:grid-cols-2 p-2 sm:p-5 gap-5 gap-y-10 lg:px-20 items-start cursor-pointer">
        <div className="grid grid-rows-[20rem_auto] hover:-translate-y-1 border border-[#f0f0f0] dark:border-[#252528] rounded-xl hover:shadow-[#005cf0]/30 shadow-lg transition-all duration-500 gap-5">
          <img
            src="/dummyImgLight.png"
            className="rounded-t-lg h-full w-full object-cover"
            alt=""
          />
          <div className="p-3 space-y-2">
            <h1 className="text-lg sm:text-2xl font-bold">Harbor way</h1>
            <ol className="py-4 space-y-5 text-sm sm:text-base text-[#4d4d4d] dark:text-[#ababab]">
              <li className="flex gap-2 items-center">
                <div className="bg-red-600 text-white dark:text-black rounded-full">
                  <Close className="size-4" />
                </div>{" "}
                Waiting weeks for appointments
              </li>
              <li className="flex gap-2 items-center">
                <div className="bg-red-600 text-white dark:text-black rounded-full">
                  <Close className="size-4" />
                </div>{" "}
                Waiting weeks for appointments
              </li>
              <li className="flex gap-2 items-center">
                <div className="bg-red-600 text-white dark:text-black rounded-full">
                  <Close className="size-4" />
                </div>{" "}
                Waiting weeks for appointments
              </li>
              <li className="flex gap-2 items-center">
                <div className="bg-red-600 text-white dark:text-black rounded-full">
                  <Close className="size-4" />
                </div>{" "}
                Waiting weeks for appointments
              </li>
            </ol>
          </div>
        </div>
        <div className="grid grid-rows-[auto_20rem] hover:-translate-y-1 border border-[#f0f0f0] dark:border-[#252528] rounded-xl hover:shadow-[#005cf0]/30 shadow-lg transition-all duration-500 gap-5">
          <div className="p-3 space-y-2">
            <h1 className="text-lg sm:text-2xl font-bold">Harbor way</h1>
            <ol className="py-4 space-y-5  text-sm sm:text-base text-[#4d4d4d] dark:text-[#ababab]">
              <li className="flex gap-2 items-center">
                <div className="bg-green-600 text-white dark:text-black rounded-full">
                  <Tick className="size-4" />
                </div>{" "}
                Waiting weeks for appointments
              </li>
              <li className="flex gap-2 items-center">
                <div className="bg-green-600 text-white dark:text-black rounded-full">
                  <Tick className="size-4" />
                </div>{" "}
                Waiting weeks for appointments
              </li>
              <li className="flex gap-2 items-center">
                <div className="bg-green-600 text-white dark:text-black rounded-full">
                  <Tick className="size-4" />
                </div>{" "}
                Waiting weeks for appointments
              </li>
              <li className="flex gap-2 items-center">
                <div className="bg-green-600 text-white dark:text-black rounded-full">
                  <Tick className="size-4" />
                </div>{" "}
                Waiting weeks for appointments
              </li>
            </ol>
          </div>
          <img
            src="/dummyImgLight.png"
            className="rounded-b-lg h-full w-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureContent12;
