import React from "react";
import SectionHeading from "../utils/SectionHeading";
import CircleIcon from "../utils/CircleIcon";
import Sun from "../../assets/icons/Sun";

const FeatureContent3 = () => {
  const contents = [
    {
      Icon: Sun,
      heading: "odio elementum",
    },
    {
      Icon: Sun,
      heading: "odio elementum",
    },
    {
      Icon: Sun,
      heading: "odio elementum",
    },
    {
      Icon: Sun,
      heading: "odio elementum",
    },
    {
      Icon: Sun,
      heading: "odio elementum",
    },
    {
      Icon: Sun,
      heading: "odio elementum",
    },
    {
      Icon: Sun,
      heading: "odio elementum",
    },
    {
      Icon: Sun,
      heading: "odio elementum",
    },
  ];

  return (
    <div className="py-10">
      <SectionHeading subHeading="Neque, pulvinar vestibulum non aliquam." />
      <SectionHeading
        heading="Etiam nulla lectus amet nunc molestie at vulputate."
        subHeading="Neque, pulvinar vestibulum non aliquam."
      />
      <div className="container mx-auto my-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:text-center p-2 sm:p-5 place-items-center gap-5 gap-y-10 lg:px-20">
        {contents.map((content, _) => (
          <div
            key={_}
            className="flex flex-col gap-3 text-center items-center justify-center"
          >
            <CircleIcon size={35} Icon={content.Icon} color="darkblue" />
            <h1 className="text-lg sm:text-2xl font-bold">{content.heading}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureContent3;
