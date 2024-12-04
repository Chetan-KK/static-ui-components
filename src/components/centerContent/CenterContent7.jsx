import React from "react";
import SectionHeading from "../utils/SectionHeading";
import Button from "../utils/Button";
import CircleIcon from "../utils/CircleIcon";

const CenterContent7 = () => {
  return (
    <div className="my-7 sm:my-16 flex flex-col justify-center items-center">
      <CircleIcon size={50} color="blue" />
      <SectionHeading subHeading="Neque, pulvinar vestibulum non aliquam." />
      <SectionHeading
        className={"mb-20"}
        heading="Etiam nulla lectus amet nunc molestie at vulputate."
        subHeading="Neque, pulvinar vestibulum non aliquam."
      />

      <Button>Learn More</Button>
    </div>
  );
};

export default CenterContent7;
