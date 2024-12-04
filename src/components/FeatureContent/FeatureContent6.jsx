import React from "react";
import SectionHeading from "../utils/SectionHeading";
import CircleIcon from "../utils/CircleIcon";
import Sun from "../../assets/icons/Sun";

const FeatureContent6 = () => {
  const contents = [
    {
      Icon: Sun,
      heaidng: "Et, odio elementum",
      subHeading:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus",
    },
    {
      Icon: Sun,
      heaidng: "Et, odio elementum",
      subHeading:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus",
    },
    {
      Icon: Sun,
      heaidng: "Et, odio elementum",
      subHeading:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus",
    },
    {
      Icon: Sun,
      heaidng: "Et, odio elementum",
      subHeading:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus",
    },
    {
      Icon: Sun,
      heaidng: "Et, odio elementum",
      subHeading:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus",
    },
    {
      Icon: Sun,
      heaidng: "Et, odio elementum",
      subHeading:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus",
    },
  ];

  return (
    <div className="py-10">
      <SectionHeading
        heading="Etiam nulla lectus amet nunc molestie at vulputate."
        subHeading="Neque, pulvinar vestibulum non aliquam."
      />
      <div className="container mx-auto my-16 grid grid-cols-1 sm:grid-cols-3 p-2 sm:p-5 place-items-center gap-5 sm:gap-y-10 lg:px-20">
        {contents.map((content, _) => (
          <div
            key={_}
            className="flex border border-[#f0f0f0] dark:border-[#252528] p-5 rounded-xl hover:shadow-[#005cf0]/30 shadow-lg flex-col gap-3 items-start transition-all duration-500"
          >
            <CircleIcon size={25} Icon={content.Icon} color="darkblue" />
            <div className="space-y-3">
              <h1 className="text-lg sm:text-2xl font-bold">
                {content.heaidng}
              </h1>
              <p className="text-sm sm:text-base text-[#4d4d4d] dark:text-[#ababab]">
                {content.subHeading}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureContent6;
