import React, { useState } from "react";
import SectionHeading from "../components/utils/SectionHeading";
import Account from "../components/utils/Account";
import Down from "../assets/icons/Down";
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
    text: "maecenas vitae vehicula eget. Ultricies ac id massa maecenas nulla arcu lacus. Turpis porttitor.",
    name: "Jane Doe",
    description: "Senior Designer",
    profileSrc: "./dummyImgLight.png",
  },
];

const Clients7 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < comments.length - 1) {
      setCurrentIndex(currentIndex + 1);
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
        <div className="flex flex-col justify-center gap-10 items-center transition-opacity duration-500 ease-in-out h-96">
          <q className="text-xl sm:text-4xl text-center max-w-3xl">
            {comments[currentIndex].text}
          </q>
          <Account
            name={comments[currentIndex].name}
            description={comments[currentIndex].description}
            profileSrc={comments[currentIndex].profileSrc}
          />
        </div>
        <Button>
          <Down
            className={`-rotate-90 size-7 sm:size-14 cursor-pointer ${
              currentIndex === comments.length - 1 ? "opacity-50" : ""
            }`}
            onClick={handleNext}
          />
        </Button>
      </div>
    </div>
  );
};

export default Clients7;
