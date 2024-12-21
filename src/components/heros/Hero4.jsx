import React from "react";
import SectionHeading from "../utils/SectionHeading";
import Button from "../utils/Button";
import SecondaryButton from "../utils/SecondaryButton";

const Hero4 = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute top-0 left-0 z-0 object-cover  h-full sm:w-full opacity-40"
        alt=""
      />
      <div className="text-center z-10">
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

export default Hero4;
