import React from "react";
import SectionHeading from "../utils/SectionHeading";
import Button from "../utils/Button";
import SecondaryButton from "../utils/SecondaryButton";

const Hero9 = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="text-center">
        <SectionHeading
          className={
            "!m-0 !text-left sm:!text-center text-black dark:text-white"
          }
          heading={"Etiam nulla lectus amet nunc molestie at vulputate."}
        />
        <p className="px-5 sm:px-10 lg:px-40 text-[#000000] dark:text-white text-left sm:text-center text-sm sm:text-base">
          Neque, pulvinar vestibulum non aliquam.
        </p>
        <div className="my-10 mx-auto flex flex-wrap items-center px-5 sm:px-10 lg:px-40 justify-start sm:justify-center gap-3">
          <Button>Get Started</Button>
          <SecondaryButton>Start for free</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default Hero9;