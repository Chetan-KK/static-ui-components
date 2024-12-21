import React, { useState } from "react";
import SectionHeading from "../utils/SectionHeading";
import Account from "../utils/Account";
import Down from "../../assets/icons/Down";
import { Button } from "react-aria-components";

const comments = [
  {
    text: "Pellentesque maecenas maecenas vitae vehicula eget. Ultricies ac id massa maecenas nulla arcu lacus. Turpis porttitor.",
    name: "Jane Doe",
    description: "Senior Designer",
    profileSrc: "./dummyImgLight.png",
  },
  {
    text: "vitae vehicula eget. Ultricies ac id massa maecenas nulla arcu lacus. Turpis porttitor.",
    name: "Jane Doe",
    description: "Senior Designer",
    profileSrc: "./dummyImgLight.png",
  },
  {
    text: "vitae vehicula eget. Ultricies ac id massa maecenas nulla arcu lacus. Turpis porttitor.",
    name: "Jane Doe",
    description: "Senior Designer",
    profileSrc: "./dummyImgLight.png",
  },
  {
    text: "maecenas vitae vehicula eget. Ultricies ac id massa maecenas nulla arcu lacus. Turpis porttitor.",
    name: "Jane Doe",
    description: "Senior Designer",
    profileSrc: "./dummyImgLight.png",
  },
  {
    text: "maecenas vitae vehicula eget. Ultricies ac id massa maecenas nulla arcu lacus. Turpis porttitor.",
    name: "Jane Doe",
    description: "Senior Designer",
    profileSrc: "./dummyImgLight.png",
  },
  {
    text: "maecenas vitae vehicula eget. Ultricies ac id massa maecenas nulla arcu lacus. Turpis porttitor.",
    name: "Jane Doe",
    description: "Senior Designer",
    profileSrc: "./dummyImgLight.png",
  },
];

const Clients8 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 2);
    }
  };

  const handleNext = () => {
    if (currentIndex < comments.length - 2) {
      setCurrentIndex(currentIndex + 2);
    }
  };

  return (
    <div className="py-10">
      {/* todo: we can use slider js for good accessibility (haven't added right now) [Chetan-KK] */}
      <SectionHeading
        heading="what our clients says"
        subHeading="what our clients says"
      />
      <div className="lg:container mx-auto mt-10 grid grid-cols-[auto_auto_auto] place-items-center">
        <Button>
          <Down
            className={`rotate-90 size-7 sm:size-14 cursor-pointer ${
              currentIndex === 0 ? "opacity-25" : ""
            }`}
            onClick={handlePrev}
          />
        </Button>
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-10 transition-opacity duration-500 items-center ease-in-out h-72">
          {comments
            .slice(currentIndex, currentIndex + 2)
            .map((comment, index) => (
              <div
                key={index}
                className="flex flex-col justify-start gap-3 sm:gap-5 p-3 sm:p-5 rounded-xl border border-[#f0f0f0] dark:border-[#252528] items-start"
              >
                <Account
                  name={comment.name}
                  description={comment.description}
                  profileSrc={comment.profileSrc}
                />
                <p className="text-sm sm:text-base text-[#4d4d4d] dark:text-[#ababab]">
                  {comment.text}
                </p>
              </div>
            ))}
        </div>
        <Button>
          <Down
            className={`-rotate-90 size-7 sm:size-14 cursor-pointer ${
              currentIndex >= comments.length - 2 ? "opacity-50" : ""
            }`}
            onClick={handleNext}
          />
        </Button>
      </div>
    </div>
  );
};

export default Clients8;
