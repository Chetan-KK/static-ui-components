import React from "react";
import CircleIcon from "../utils/CircleIcon";
import BigCard from "../utils/BigCard";
import SectionHeading from "../utils/SectionHeading";

const CenterContent3 = () => {
  return (
    <div className="py-10">
      <SectionHeading subHeading="Neque, pulvinar vestibulum non aliquam." />
      <SectionHeading
        heading="Etiam nulla lectus amet nunc molestie at vulputate."
        subHeading="Neque, pulvinar vestibulum non aliquam."
      />
      <div className="flex justify-center items-center flex-col sm:flex-row">
        <div className="sm:p-5 flex flex-col gap-3 items-center justify-center max-w-[40rem] text-center">
          <CircleIcon size={30} color="blue" aria-label="Menu" />
          <h1 className="text-xl sm:text-3xl font-bold">Etiam nulla lectus</h1>
          <p className="text-[#4d4d4d]  dark:text-[#ababab]  text-sm">
            Facilisi viverra dictum augue eu lobortis elit. In et donec
            habitasse lacus mi commodo elementum.
          </p>
          <BigCard heading="" subHeading="" className="!w-full" />
        </div>
        <div className="sm:p-5 flex flex-col gap-3 items-center justify-center max-w-[40rem] text-center">
          <CircleIcon size={30} color="blue" aria-label="Menu" />
          <h1 className="text-xl sm:text-3xl font-bold">Etiam nulla lectus</h1>
          <p className="text-[#4d4d4d]  dark:text-[#ababab]  text-sm">
            Facilisi viverra dictum augue eu lobortis elit. In et donec
            habitasse lacus mi commodo elementum.
          </p>
          <BigCard heading="" subHeading="" className="!w-full" />
        </div>
      </div>
    </div>
  );
};

export default CenterContent3;
