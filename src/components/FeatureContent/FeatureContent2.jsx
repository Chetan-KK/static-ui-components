import React from "react";
import SectionHeading from "../utils/SectionHeading";
import CircleIcon from "../utils/CircleIcon";
import Sun from "../../assets/icons/Sun";

const FeatureContent2 = () => {
  const contents = [
    {
      Icon: Sun,
      heaidng: "Et, odio elementum",
      subHeading:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus mattis etiam.",
    },
    {
      Icon: Sun,
      heaidng: "Et, odio elementum",
      subHeading:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus mattis etiam.",
    },
    {
      Icon: Sun,
      heaidng: "Et, odio elementum",
      subHeading:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus mattis etiam.",
    },
    {
      Icon: Sun,
      heaidng: "Et, odio elementum",
      subHeading:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus mattis etiam.",
    },
    {
      Icon: Sun,
      heaidng: "Et, odio elementum",
      subHeading:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus mattis etiam.",
    },
    {
      Icon: Sun,
      heaidng: "Et, odio elementum",
      subHeading:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus mattis etiam.",
    },
  ];

  return (
    <div className="py-10">
      <SectionHeading subHeading="Neque, pulvinar vestibulum non aliquam." />
      <SectionHeading
        heading="Etiam nulla lectus amet nunc molestie at vulputate."
        subHeading="Neque, pulvinar vestibulum non aliquam."
      />
      <div className="container mx-auto my-16 grid grid-cols-1 sm:grid-cols-3 sm:text-center p-2 sm:p-5 place-items-center gap-5 gap-y-10 lg:px-20">
        {contents.map((content, _) => (
          <div
            key={_}
            className="flex flex-col gap-3 text-center items-center justify-center"
          >
            <CircleIcon size={35} Icon={content.Icon} color="darkblue" />
            <h1 className="text-lg sm:text-2xl font-bold">{content.heaidng}</h1>
            <p className="text-sm sm:text-base text-[#4d4d4d] dark:text-[#ababab]">
              {content.subHeading}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureContent2;
