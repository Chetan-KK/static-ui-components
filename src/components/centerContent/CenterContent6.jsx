import React from "react";
import SectionHeading from "../utils/SectionHeading";

const CenterContent6 = () => {
  return (
    <div className="my-7 sm:my-16">
      <SectionHeading subHeading="Neque, pulvinar vestibulum non aliquam." />
      <SectionHeading
        className={"mb-20"}
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

export default CenterContent6;
