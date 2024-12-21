import React from "react";
import SectionHeading from "../utils/SectionHeading";
import Button from "../utils/Button";
import SecondaryButton from "../utils/SecondaryButton";
import InputField from "../utils/InputField";
import Sun from "../../assets/icons/Sun";

const Hero10 = () => {
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
          <InputField
            className="w-auto sm:w-96"
            Icon={Sun}
            placeholder="Enter your email to get the latest news..."
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero10;
