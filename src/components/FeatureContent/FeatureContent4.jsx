import React from "react";
import SectionHeading from "../utils/SectionHeading";
import CircleIcon from "../utils/CircleIcon";
import Sun from "../../assets/icons/Sun";

const FeatureContent4 = () => {
  const contents = [
    {
      Icon: Sun,
      heading: "Et, odio elementum",
      subHeading:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus",
    },
    {
      Icon: Sun,
      heading: "Et, odio elementum",
      subHeading:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus",
    },
    {
      Icon: Sun,
      heading: "Et, odio elementum",
      subHeading:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus",
    },
    {
      Icon: Sun,
      heading: "Et, odio elementum",
      subHeading:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus",
    },
    {
      Icon: Sun,
      heading: "Et, odio elementum",
      subHeading:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus",
    },
    {
      Icon: Sun,
      heading: "Et, odio elementum",
      subHeading:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus",
    },
    {
      Icon: Sun,
      heading: "Et, odio elementum",
      subHeading:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus",
    },
    {
      Icon: Sun,
      heading: "Et, odio elementum",
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
      <div className="container mx-auto my-16 grid grid-cols-1 sm:grid-cols-3 p-2 sm:p-5 place-items-center gap-5 gap-y-10 lg:px-20">
        {contents.map((content, _) => (
          <div key={_} className="flex gap-3 items-start">
            <CircleIcon size={25} Icon={content.Icon} color="darkblue" />
            <div className="space-y-3">
              <div className="text-lg sm:text-2xl font-bold">
                {content.heading}
              </div>
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

export default FeatureContent4;
