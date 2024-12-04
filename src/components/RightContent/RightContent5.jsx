import React, { useState } from "react";
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
  {
    title: "Voice Cover",
    description:
      "Remix audio or mix voice and music. Upload, pick a model, and change sounds to get new covers.",
  },
];

const RightContent5 = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="py-10">
      <SectionHeading subHeading="Neque, pulvinar vestibulum non aliquam." />
      <SectionHeading
        heading="Etiam nulla lectus amet nunc molestie at vulputate."
        subHeading="Neque, pulvinar vestibulum non aliquam."
      />
      <div className="lg:container mx-auto p-4 my-7 sm:px-20 sm:my-16 grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center sm:justify-items-end gap-5">
        <img
          src="/dummyImgLight.png"
          className="w-[90vw] h-auto sm:w-auto md:h-[30rem] object-cover rounded-xl"
          alt="hero image"
        />
        <div className="w-[90vw] sm:w-auto">
          {contentData.map((content, index) => (
            <div
              key={index}
              className={`p-3 border-l cursor-pointer hover:translate-x-2 transition-all ${
                selectedIndex === index
                  ? "border-[#005cf0]"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <h1 className="font-bold sm:text-xl">{content.title}</h1>
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

export default RightContent5;
