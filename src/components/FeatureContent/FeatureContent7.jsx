import React, { useState } from "react";
import CircleIcon from "../utils/CircleIcon";
import UserIcon from "../../assets/icons/UserIcon";
import SectionHeading from "../utils/SectionHeading";

const contentData = [
  {
    title: "Text to Voice",
    icon: UserIcon,
    description:
      "Build voice experiences for virtual assistants, audiobooks, podcasts, e-learning, and video games.",
  },
  {
    title: "Voice Cloning",
    icon: UserIcon,
    description:
      "Clone voices as short as 30 seconds and translate into multiple languages.",
  },
  {
    title: "Voice Changer",
    icon: UserIcon,
    description:
      "Mimic identities and create voices of your favourite personalities. Alter or maintain original pitch. Switch between male and female voices.",
  },
  {
    title: "Voice Changer",
    icon: UserIcon,
    description:
      "Mimic identities and create voices of your favourite personalities. Alter or maintain original pitch. Switch between male and female voices.",
  },
  {
    title: "Voice Changer",
    icon: UserIcon,
    description:
      "Mimic identities and create voices of your favourite personalities. Alter or maintain original pitch. Switch between male and female voices.",
  },
];

const FeatureContent7 = () => {
  return (
    <div className="py-10">
      <div className="lg:container mx-auto p-4 my-7 md:px-20 md:my-16 grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center md:justify-items-end gap-5">
        <div className="">
          <SectionHeading
            className={"!text-left !p-0"}
            heading="Etiam nulla lectus amet nunc molestie at vulputate."
            subHeading="Neque, pulvinar vestibulum non aliquam."
          />
          <img
            src="/dummyImgLight.png"
            className="w-[90vw] h-auto md:w-auto md:h-[35rem] object-cover rounded-xl"
            alt="hero image"
          />
        </div>
        <div className="w-[90vw] space-y-7 h-full sm:w-auto">
          {contentData.map((content, index) => (
            <div
              key={index}
              className={`p-3 sm:min-w-96 flex  gap-2
                  my-2 hover:translate-x-2 transition-all
                  `}
            >
              <div className="flex justify-center items-center size-10 sm:size-14 rounded-full text-base sm:text-xl bg-[#005cf0] aspect-square">
                {index + 1}
              </div>
              <div>
                <h1 className="font-bold  sm:text-xl">{content.title}</h1>
                <p className="text-[#4d4d4d] text-xs sm:text-base dark:text-[#ababab]">
                  {content.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureContent7;
