import React, { useState } from "react";
import CircleIcon from "../utils/CircleIcon";
import SectionHeading from "../utils/SectionHeading";

const contentData = [
  {
    title: "Text to Voice",
    description:
      "Build voice experiences for virtual assistants, audiobooks, podcasts, e-learning, and video games.",
  },
  {
    title: "Voice Cloning",
    description:
      "Clone voices as short as 30 seconds and translate into multiple languages.",
  },
  {
    title: "Voice Changer",
    description:
      "Mimic identities and create voices of your favourite personalities. Alter or maintain original pitch. Switch between male and female voices.",
  },
];

const RightContent6 = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="py-10">
      <SectionHeading subHeading="Neque, pulvinar vestibulum non aliquam." />
      <SectionHeading
        heading="Etiam nulla lectus amet nunc molestie at vulputate."
        subHeading="Neque, pulvinar vestibulum non aliquam."
      />
      <div className="lg:container mx-auto p-4 my-7 md:px-20 md:my-16 grid grid-cols-1 md:grid-cols-[auto_1fr] items-center justify-items-center md:justify-items-end gap-5">
        <img
          src="/dummyImgLight.png"
          className="w-[90vw] h-auto sm:w-[45rem] md:h-[45rem] object-cover rounded-xl"
          alt="hero image"
        />
        <div className="w-[90vw] grid gap-3 h-full sm:w-auto">
          {contentData.map((content, index) => (
            <div
              key={index}
              className={`p-3 md:min-w-72 border-l border border-[#f0f0f0] dark:border-[#252528] cursor-pointer rounded-xl hover:translate-y-1 transition-all ${
                selectedIndex === index
                  ? "border-[#005cf0]"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <CircleIcon
                className="rounded-lg"
                size={20}
                color="blue"
                aria-label="Menu"
              />

              <div className="font-bold my-2 sm:text-xl">{content.title}</div>
              <p className="text-[#4d4d4d] text-xs sm:text-base dark:text-[#ababab]">
                {content.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightContent6;
