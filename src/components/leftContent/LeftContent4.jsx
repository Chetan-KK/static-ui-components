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
];

const LeftContent4 = () => {
  return (
    <div className="py-10">
      <SectionHeading subHeading="Neque, pulvinar vestibulum non aliquam." />
      <SectionHeading
        heading="Etiam nulla lectus amet nunc molestie at vulputate."
        subHeading="Neque, pulvinar vestibulum non aliquam."
      />
      <div className="lg:container mx-auto p-4 my-7 md:px-20 md:my-16 grid grid-cols-1 md:grid-cols-[1fr_auto] items-center justify-items-center md:justify-items-end gap-5">
        <div className="w-[90vw] grid gap-3 h-full sm:w-auto">
          {contentData.map((content, index) => (
            <div
              key={index}
              className={`p-3 sm:min-w-96 flex  gap-2
                  my-2 hover:translate-x-2 transition-all
                  `}
            >
              <CircleIcon
                Icon={content.icon}
                className="rounded-lg"
                size={20}
                color="blue"
                aria-label="Menu"
              />
              <div>
                <div className="font-bold  sm:text-xl">{content.title}</div>
                <p className="text-[#4d4d4d] text-xs sm:text-base dark:text-[#ababab]">
                  {content.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <img
          src="/dummyImgLight.png"
          className="w-[90vw] h-auto sm:w-auto md:h-[35rem] object-cover rounded-xl"
          alt="hero image"
        />
      </div>
    </div>
  );
};

export default LeftContent4;
