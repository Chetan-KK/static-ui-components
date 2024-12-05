import React from "react";
import UserIcon from "../../assets/icons/UserIcon";
import CircleIcon from "../utils/CircleIcon";
import Export from "../../assets/icons/Export";
import SectionHeading from "../utils/SectionHeading";
import Button from "../utils/Button";

const FeatureContent7 = () => {
  const cardData = [
    {
      icon: UserIcon,
      heading: "Multilingual Voice Generator",
      subheading:
        "Translate speeches in any language, localize, and convert to any gender, style, and accent.",
    },
    {
      icon: UserIcon,
      heading: "Lip Sync",
      subheading:
        "Convey emotions and lip sync perfectly; sound like your favorite characters and personalities.",
    },
    {
      icon: UserIcon,
      heading: "API Integrations",
      subheading:
        "Seamless and flexible API integrations with platforms, workflows, and apps.",
    },
    {
      icon: UserIcon,
      heading: "Advanced Voice Cloning:",
      subheading:
        "Upload any voice and clone it—mimic celebrities. Accurate pronunciations. Speak with precision and clarity.",
    },
    {
      icon: UserIcon,
      heading: "Text-to-Speech",
      subheading:
        "Type text and generate AI voices. Change speed, reverb, and customize sound effects.",
    },
    {
      icon: UserIcon,
      heading: "AI Dubbing:",
      subheading:
        "Dub voice in any style or language. Recreate celebrity voices. Use AI-generated speech commercially anywhere.",
    },
  ];

  return (
    <div>
      <SectionHeading
        heading={"What makes ModelsLab more than just an AI Voice Generator?"}
      />
      <div className="lg:container mx-auto grid grid-cols-1 mt-14 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-40 px-2 sm:px-20 justify-center">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="p-4 rounded-3xl flex flex-col border border-[#f0f0f0] dark:border-[#252528] bg-white dark:bg-black transition-all duration-500 hover:shadow-[#005cf0]/30 shadow-lg"
          >
            <div className="flex justify-between items-start mb-5 sm:mb-10">
              {/* <img
                  src={card.image}
                  alt={card.heading}
                  className="h-10 w-7 mb-10"
                /> */}
              <card.icon className="size-10" />
              {/* <CircleIcon Icon={card.icon} size={20} /> */}
              <Export className="size-5 text-[#005cf0]" />
            </div>
            <div className="font-bold text-base dark:text-white">
              {card.heading}
            </div>
            <p className="text-[#4d4d4d]  dark:text-[#ababab] text-sm pt-1">
              {card.subheading}
            </p>
          </div>
        ))}
      </div>
      <Button className={"my-10 mx-auto"}>Generate Your First AI Voice</Button>
    </div>
  );
};

export default FeatureContent7;
