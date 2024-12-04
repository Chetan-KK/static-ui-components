import React from "react";
import SectionHeading from "../utils/SectionHeading";
import Button from "../utils/Button";
import SecondaryButton from "../utils/SecondaryButton";
import CurveBg from "../utils/CurveBg";

const MidContent = () => {
  return (
    <div className="my-7 sm:my-16">
      {/* todo: build curve bg for sections and also we should add img here        
      <CurveBg /> */}
      <SectionHeading subHeading="Neque, pulvinar vestibulum non aliquam." />
      <SectionHeading
        heading="Etiam nulla lectus amet nunc molestie at vulputate."
        subHeading="Neque, pulvinar vestibulum non aliquam."
      />

      <img
        src="/dummyImgLight.png"
        className="mx-auto w-[90vw] lg:w-[60rem] h-96 md:h-[40rem] object-cover rounded-xl"
        alt="hero image"
      />
    </div>
  );
};

export default MidContent;
