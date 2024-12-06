import React from "react";
import SectionHeading from "../utils/SectionHeading";
import SecondaryButton from "../utils/SecondaryButton";
import Button from "../utils/Button";

const CallToAction8 = () => {
  return (
    <div className="container mx-auto my-10 p-2 flex justify-between flex-col sm:flex-row sm:items-center">
      <div>
        <h5 className="text-[#005cf0] font-bold uppercase">Caption</h5>
        <SectionHeading
          className={"w-full !text-left !p-0"}
          heading="Bibendum amet at molestie mattis."
          subHeading="Rhoncus morbi et augue nec, in id ullamcorper at sit."
        />
      </div>
      <div className="flex gap-2 sm:gap-5">
        <Button>Get free quotes</Button>
        <SecondaryButton>Free SignUp</SecondaryButton>
      </div>
    </div>
  );
};

export default CallToAction8;
