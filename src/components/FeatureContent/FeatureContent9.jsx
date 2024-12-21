import React, { useState } from "react";
import SectionHeading from "../utils/SectionHeading";
import CircleIcon from "../utils/CircleIcon";
import Sun from "../../assets/icons/Sun";
import Button from "../utils/Button";
import Moon from "../../assets/icons/Moon";

const FeatureContent9 = () => {
  const [active, setActive] = useState(0);

  const contents = [
    {
      Icon: Sun,
      heading: "Et, odio elementum",
      subHeading:
        "Transform voices and change them to the style you want with our AI voice dubber.",
    },
    {
      Icon: Moon,
      heading: "Et, odio elementum",
      subHeading:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      Icon: Sun,
      heading: "Et, odio elementum",
      subHeading:
        "Fix fragmentation by recording how it should be said. Mimic perfectly and use other voices to follow your direction. ",
    },
    {
      Icon: Moon,
      heading: "Et, odio elementum",
      subHeading:
        "Control delivery and express a wide range of emotions with our AI voice dubber. Access high-quality voices in over 40+ languages and enjoy rapid generation.",
    },
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto text-center space-y-6">
        <h5 className="text-[#005cf0] font-bold uppercase">Caption</h5>
        <div className=" text-xl sm:text-4xl font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet
          at molestie mattis.
        </div>
      </div>
      <div className="container mx-auto my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:text-center p-2 sm:p-5 place-items-center gap-2 gap-y-10 lg:px-20 items-start cursor-pointer">
        {contents.map((content, i) => (
          <div
            key={i}
            onClick={() => {
              setActive(i);
            }}
            className={`flex flex-col gap-5 p-4 rounded-lg text-center h-full items-center justify-start hover:-translate-y-1 transition-all border-2 border-transparent
              ${active === i && "bg-black/5 dark:bg-white/5 border-black/20"}
              `}
          >
            <content.Icon
              className={`size-10 text-[#4d4d4d] dark:text-[#ababab] ${
                active === i && "!text-[#005cf0]"
              } transition-all`}
            />
            <div className="text-lg sm:text-2xl font-bold">
              {content.heading}
            </div>
            <p className="text-sm sm:text-base text-[#4d4d4d] dark:text-[#ababab]">
              {content.subHeading}
            </p>
          </div>
        ))}
      </div>
      <Button className={"my-10 mx-auto"}>Dub Your First Voice</Button>
    </div>
  );
};

export default FeatureContent9;
