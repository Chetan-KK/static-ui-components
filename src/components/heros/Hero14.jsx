import React from "react";
import SectionHeading from "../utils/SectionHeading";
import Button from "../utils/Button";
import SecondaryButton from "../utils/SecondaryButton";

const Hero14 = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="text-center">
        <SectionHeading
          className={"!m-0 !text-left sm:!text-center"}
          heading={"Etiam nulla lectus amet nunc molestie at vulputate."}
          subHeading={" Neque, pulvinar vestibulum non aliquam."}
        />
        <div className="my-10 mx-auto flex items-center flex-wrap px-5 sm:px-10 lg:px-40 justify-start sm:justify-center gap-3">
          <Button>Get Started</Button>
          <SecondaryButton>Start for free</SecondaryButton>
        </div>
        <img
          src="/dummyImgLight.png"
          className="mx-auto w-[90vw] lg:w-[60rem] h-96 md:h-[40rem] object-cover rounded-xl"
          alt="hero image"
        />
      </div>
    </div>
  );
};

export default Hero14;
