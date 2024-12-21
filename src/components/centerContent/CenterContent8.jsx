import React from "react";
import SectionHeading from "../utils/SectionHeading";
import SecondaryButton from "../utils/SecondaryButton";
import Button from "../utils/Button";

const CenterContent8 = () => {
  return (
    <div className="mt-20">
      <SectionHeading
        heading="Etiam nulla lectus amet nunc molestie at vulputate."
        subHeading="Neque, pulvinar vestibulum non aliquam."
      />
      <div className="container mx-auto my-16 grid grid-cols-1 sm:grid-cols-3 sm:text-center p-2 sm:p-5 place-items-center gap-5 lg:px-20">
        <div>
          <div className="text-lg sm:text-2xl font-bold mb-4">
            Nibh mattis gravida
          </div>
          <p className="text-sm sm:text-base text-[#4d4d4d] dark:text-[#ababab]">
            A tristique facilisi gravida at felis. Sed ornare arcu, tortor
            hendrerit etiam vulputate libero tellus. Etiam nu
          </p>
        </div>
        <div>
          <div className="text-lg sm:text-2xl font-bold mb-4">
            Nibh mattis gravida
          </div>
          <p className="text-sm sm:text-base text-[#4d4d4d] dark:text-[#ababab]">
            A tristique facilisi gravida at felis. Sed ornare arcu, tortor
            hendrerit etiam vulputate libero tellus. Etiam nu
          </p>
        </div>
        <div>
          <div className="text-lg sm:text-2xl font-bold mb-4">
            Nibh mattis gravida
          </div>
          <p className="text-sm sm:text-base text-[#4d4d4d] dark:text-[#ababab]">
            A tristique facilisi gravida at felis. Sed ornare arcu, tortor
            hendrerit etiam vulputate libero tellus. Etiam nu
          </p>
        </div>
      </div>
      <Button className={"mx-auto"}>See All</Button>
    </div>
  );
};

export default CenterContent8;
