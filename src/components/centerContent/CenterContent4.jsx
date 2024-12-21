import React from "react";
import SecondaryButton from "../utils/SecondaryButton";
import Button from "../utils/Button";
import SectionHeading from "../utils/SectionHeading";

const CenterContent4 = () => {
  return (
    <div>
      <SectionHeading
        heading={"Etiam nulla lectus amet nunc molestie at vulputate."}
        subHeading={"Neque, pulvinar vestibulum non aliquam."}
      />
      <div className="lg:container !max-w-[70rem] mx-auto  p-4 my-7 sm:my-16 lg:px-20 grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center sm:justify-items-end gap-5 ">
        <div className="w-auto">
          <div className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 md:mb-5">
            Purus id tellus arcu habitant proin magna. Integer purus
          </div>
          <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
            Facilisi viverra dictum augue eu lobortis elit. In et donec
            habitasse lacus mi commodo elementum.
          </p>
          {/* <div className="flex gap-2 justify-start items-center my-10">
            <Button>Get started</Button>
            <SecondaryButton>Start for free</SecondaryButton>
          </div> */}
        </div>
        <img
          src="/dummyImgLight.png"
          className="w-[90vw] sm:w-auto max-h-96 md:h-[25rem] object-cover rounded-xl"
          alt="hero image"
        />
      </div>
      {/*  */}
      <div className="lg:container !max-w-[70rem] mx-auto p-4 my-7 sm:my-16 lg:px-20 grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center sm:justify-items-end gap-5">
        <img
          src="/dummyImgLight.png"
          className="w-[90vw] mr-auto sm:w-auto max-h-96 md:h-[25rem] object-cover rounded-xl"
          alt="hero image"
        />
        <div className="w-auto">
          <div className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 md:mb-5">
            Purus id tellus arcu habitant proin magna. Integer purus
          </div>
          <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
            Facilisi viverra dictum augue eu lobortis elit. In et donec
            habitasse lacus mi commodo elementum.
          </p>
          {/* <div className="flex gap-2 justify-start items-center my-10">
            <Button>Get started</Button>
            <SecondaryButton>Start for free</SecondaryButton>
          </div> */}
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="lg:container !max-w-[70rem] mx-auto  p-4 my-7 sm:my-16 lg:px-20 grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center sm:justify-items-end gap-5 ">
        <div className="w-auto">
          <div className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 md:mb-5">
            Purus id tellus arcu habitant proin magna. Integer purus
          </div>
          <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
            Facilisi viverra dictum augue eu lobortis elit. In et donec
            habitasse lacus mi commodo elementum.
          </p>
          {/* <div className="flex gap-2 justify-start items-center my-10">
            <Button>Get started</Button>
            <SecondaryButton>Start for free</SecondaryButton>
          </div> */}
        </div>
        <img
          src="/dummyImgLight.png"
          className="w-[90vw] sm:w-auto max-h-96 md:h-[25rem] object-cover rounded-xl"
          alt="hero image"
        />
      </div>
      {/*  */}
      <div className="lg:container !max-w-[70rem] mx-auto p-4 my-7 sm:my-16 lg:px-20 grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center sm:justify-items-end gap-5">
        <img
          src="/dummyImgLight.png"
          className="w-[90vw] mr-auto sm:w-auto max-h-96 md:h-[25rem] object-cover rounded-xl"
          alt="hero image"
        />
        <div className="w-auto">
          <div className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 md:mb-5">
            Purus id tellus arcu habitant proin magna. Integer purus
          </div>
          <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
            Facilisi viverra dictum augue eu lobortis elit. In et donec
            habitasse lacus mi commodo elementum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CenterContent4;
