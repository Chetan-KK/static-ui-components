import React from "react";
import SectionHeading from "../utils/SectionHeading";
import SmallCard from "../utils/SmallCard";

const CenterContent2 = () => {
  return (
    <div className="py-10">
      <SectionHeading subHeading="Neque, pulvinar vestibulum non aliquam." />
      <SectionHeading
        heading="Etiam nulla lectus amet nunc molestie at vulputate."
        subHeading="Neque, pulvinar vestibulum non aliquam."
      />
      <div className="container mx-auto flex justify-center items-start gap-5 md:gap-10 sm:px-2 lg:px-32 flex-wrap">
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </div>
  );
};

export default CenterContent2;
