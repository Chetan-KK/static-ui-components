import React from "react";
import SectionHeading from "../utils/SectionHeading";
import BigCard from "../utils/BigCard";

const CenterContent1 = () => {
  return (
    <div className="py-10">
      <SectionHeading subHeading="Neque, pulvinar vestibulum non aliquam." />
      <SectionHeading
        heading="Etiam nulla lectus amet nunc molestie at vulputate."
        subHeading="Neque, pulvinar vestibulum non aliquam."
      />
      <div className="flex flex-col sm:flex-row justify-center gap-5 md:gap-10 items-start">
        <BigCard />
        <BigCard />
      </div>
    </div>
  );
};

export default CenterContent1;
