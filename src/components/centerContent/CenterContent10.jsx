import React from "react";
import SectionHeading from "../utils/SectionHeading";

const CenterContent10 = () => {
  return (
    <div className="my-7 sm:my-16 flex flex-col justify-center items-center">
      <SectionHeading heading="We Keep Your Data Safe." />
      <img src="circleImage.png" className="size-14 sm:size-28" />
      <SectionHeading className={"my-0"} subHeading="GDPR Compliant" />
    </div>
  );
};

export default CenterContent10;
