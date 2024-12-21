import React from "react";
import SectionHeading from "../utils/SectionHeading";
import Button from "../utils/Button";

const Hero11 = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#005cf0]">
      <div className="text-center">
        <SectionHeading
          className={"!m-0 !text-left sm:!text-center !text-white"}
          heading={"Etiam nulla lectus amet nunc molestie at vulputate."}
          subHeading={" Neque, pulvinar vestibulum non aliquam."}
          subHeadingClassName={"!text-white"}
        />
        <div className="my-10 mx-auto flex items-center px-5 sm:px-10 lg:px-40 justify-start sm:justify-center gap-3">
          <Button color={"dark"} className={"!text-[#005cf0] !bg-white"}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero11;
