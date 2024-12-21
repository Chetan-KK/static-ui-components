import React, { useState } from "react";
import Button from "../utils/Button";
import SectionHeading from "../utils/SectionHeading";

const Hero1 = () => {
  return (
    <div className="lg:container mx-auto p-2 my-7 md:px-20 md:my-16 grid grid-cols-1 md:grid-cols-[1fr_auto] items-center justify-items-center md:justify-items-end gap-10 sm:gap-20">
      <div className="space-y-5  sm:w-auto">
        <SectionHeading
          className={"!text-left !px-0"}
          heading={"Arcu suscipit massa aliquam proin amet"}
          subHeading={
            "At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus."
          }
        />

        <div className="mt-10">
          <Button>Get started</Button>
        </div>
      </div>
      <img
        src="/dummyImgLight.png"
        className=" h-auto sm:w-[30rem] md:h-[25rem] object-cover rounded-xl"
        alt="hero image"
      />
    </div>
  );
};

export default Hero1;
