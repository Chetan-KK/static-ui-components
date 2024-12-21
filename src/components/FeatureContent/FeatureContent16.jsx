import React, { useState } from "react";
import Button from "../utils/Button";
import Account from "../utils/Account";
import Sun from "../../assets/icons/Sun";
import SectionHeading from "../utils/SectionHeading";
import CircleIcon from "../utils/CircleIcon";

const FeatureContent16 = () => {
  const contents = [
    {
      Icon: Sun,
      count: "250+",
      title: "Happy customer",
    },
    {
      Icon: Sun,
      count: "600+",
      title: "Completed projects",
    },
    {
      Icon: Sun,
      count: "250+",
      title: "Happy customer",
    },
    {
      Icon: Sun,
      count: "600+",
      title: "Completed projects",
    },
  ];

  return (
    <div className="py-10">
      <SectionHeading
        className={"!text-left sm:!text-center"}
        heading="Etiam nulla lectus amet nunc molestie at vulputate."
        subHeading="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis."
      />
      <div className="container mx-auto my-16 grid grid-cols-1 sm:grid-cols-2 sm:place-items-center lg:grid-cols-4 p-2 sm:p-5 gap-5 gap-y-10">
        {contents.map((content, i) => (
          <div
            key={i}
            className="flex gap-3 items-center border border-[#f0f0f0] dark:border-[#252528] rounded-xl p-2 px-4"
          >
            <CircleIcon
              Icon={content.Icon}
              className="rounded-md"
              color="darkblue"
            />
            <div className="">
              <div className="text-lg sm:text-2xl font-bold">
                {content.count}
              </div>
              <p className="text-sm sm:text-base text-[#4d4d4d] dark:text-[#ababab] sm:whitespace-nowrap">
                {content.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureContent16;
