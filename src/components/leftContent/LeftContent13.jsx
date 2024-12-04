import React, { useState } from "react";
import SecondaryButton from "../utils/SecondaryButton";

const LeftContent13 = () => {
  return (
    <div className="py-10">
      <div className="lg:container mx-auto p-2 my-7 md:px-20 md:my-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] items-start justify-items-center md:justify-items-end gap-10 sm:gap-20">
        <div className="space-y-5  sm:w-auto">
          <div className={`container mx-auto my-5`}>
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-5">
              Our Popular Use Cases
            </h1>
            <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
              Here’s what developers can do with our voice AI generator:
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <SecondaryButton>Content Production</SecondaryButton>
              <SecondaryButton>Accessibility</SecondaryButton>
              <SecondaryButton>Customer Support</SecondaryButton>
              <SecondaryButton>Education</SecondaryButton>
              <SecondaryButton>Marketing</SecondaryButton>
              <SecondaryButton>Gaming and VR</SecondaryButton>
              <SecondaryButton>Healthcare</SecondaryButton>
              <SecondaryButton>Corporate Training</SecondaryButton>
              <SecondaryButton>Smart Homes and IoT</SecondaryButton>
              <SecondaryButton>News & Information</SecondaryButton>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="/dummyImgLight.png"
            className="w-full h-auto sm:w-[40rem] md:h-[25rem] object-cover rounded-xl"
            alt="hero image"
          />

          <input
            className="absolute bottom-2 left-[50%] translate-x-[-50%] w-auto sm:w-96 bg-white dark:bg-black border border-[#f0f0f0] dark:border-[#252528] text-sm sm:text-base rounded-full px-3 py-2 sm:px-4 sm:py-2 font-semibold shadow-[#005cf0]/20 shadow-sm hover:bg-[#f0f0f0] dark:hover:bg-[#252528] transition-all"
            type="text"
            value={
              "Make podcasts, audio notes, and AI voice-overs for quick and viral content."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default LeftContent13;
