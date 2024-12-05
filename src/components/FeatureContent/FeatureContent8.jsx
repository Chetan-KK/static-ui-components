import React from "react";
import SectionHeading from "../utils/SectionHeading";
import CircleIcon from "../utils/CircleIcon";
import Sun from "../../assets/icons/Sun";
import Button from "../utils/Button";

const FeatureContent8 = () => {
  const contents = [
    {
      Icon: Sun,
      subHeading:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      Icon: Sun,
      subHeading:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      Icon: Sun,
      subHeading:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      Icon: Sun,
      subHeading:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto text-center space-y-6">
        <h5 className="text-[#005cf0] font-bold uppercase">Caption</h5>
        <h1 className=" text-xl sm:text-4xl font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet
          at molestie mattis.
        </h1>
      </div>
      <div className="container mx-auto my-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:text-center p-2 sm:p-5 place-items-center gap-5 gap-y-10 lg:px-20 items-start">
        {contents.map((content, _) => (
          <div
            key={_}
            className="flex flex-col gap-3 text-center items-center justify-center"
          >
            <content.Icon className="size-10 text-[#4d4d4d] dark:text-[#ababab]" />
            <p className="text-sm sm:text-base text-[#4d4d4d] dark:text-[#ababab]">
              {content.subHeading}
            </p>
          </div>
        ))}
      </div>
      <Button className={"my-10 mx-auto"}>Primary Action</Button>
    </div>
  );
};

export default FeatureContent8;
