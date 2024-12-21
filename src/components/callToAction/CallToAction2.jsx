import React from "react";
import SectionHeading from "../utils/SectionHeading";
import Button from "../utils/Button";
import Down from "../../assets/icons/Down";
import SecondaryButton from "../utils/SecondaryButton";

const CallToAction2 = () => {
  return (
    <div className=" flex justify-center sm:items-center flex-col bg-[#005cf0]/10 rounded-md mx-3 sm:mx-10 my-10 p-2 py-4 sm:p-10">
      <div
        className={`container mx-auto sm:text-center  space-y-3 md:space-y-5 mb-5`}
      >
        <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
          Neque, pulvinar vestibulum non aliquam.
        </p>
        <div className="text-2xl sm:text-3xl md:text-5xl font-bold">
          Etiam nulla lectus amet nunc molestie at vulputate.
        </div>
      </div>
      <div className="flex gap-2 sm:gap-5 flex-wrap">
        <Button>
          Get free quotes <Down className="size-5 sm:size-7 -rotate-90" />
        </Button>
        <SecondaryButton color="blue">
          Free SignUp <Down className="size-5 sm:size-7 -rotate-90" />
        </SecondaryButton>
      </div>
    </div>
  );
};

export default CallToAction2;
