import React from "react";
import SectionHeading from "../utils/SectionHeading";
import Button from "../utils/Button";
import SecondaryButton from "../utils/SecondaryButton";

const DoubleColumnHero = () => {
  return (
    <div className="lg:container mx-auto p-4 my-7 sm:my-16 grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center sm:justify-items-end gap-5">
      <div className="w-[90vw] sm:w-auto">
        <SectionHeading
          className="!text-left !px-0 my-0"
          heading="Etiam nulla lectus amet nunc molestie at vulputate."
          subHeading="Neque, pulvinar vestibulum non aliquam."
        />
        <div className="flex gap-2 justify-start items-center my-10">
          <Button>Get started</Button>
          <SecondaryButton>Start for free</SecondaryButton>
        </div>
      </div>
      <img
        src="/dummyImgLight.png"
        className="w-[90vw] sm:w-auto h-96 md:h-[30rem] object-cover rounded-xl"
        alt="hero image"
      />
    </div>
  );
};

export default DoubleColumnHero;
