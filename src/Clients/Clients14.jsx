import React, { useState } from "react";
import SectionHeading from "../components/utils/SectionHeading";
import Account from "../components/utils/Account";
import Down from "../assets/icons/Down";
import { Button } from "react-aria-components";

const comments = [
  {
    text: "Orci vel eget in eu. Integer amet porttitor hendrerit etiam arcu, aliquet duis pretium consequat. Semper sed viverra enim ut nunc.",
    name: "Jane Doe",
    logo: "/clientLogo.png",
    role: "Senior Designer",
    profileSrc: "./dummyImgLight.png",
  },
  {
    text: "vitae vehicula eget. Ultricies ac id massa maecenas nulla arcu lacus. Turpis porttitor.",
    name: "Jane Doe",
    logo: "/clientLogo.png",
    role: "Senior Designer",
    profileSrc: "./dummyImgLight.png",
  },
  {
    text: "vitae vehicula eget. Ultricies ac id massa maecenas nulla arcu lacus. Turpis porttitor.",
    name: "Jane Doe",
    logo: "/clientLogo.png",
    role: "Senior Designer",
    profileSrc: "./dummyImgLight.png",
  },
  {
    text: "maecenas vitae vehicula eget. Ultricies ac id massa maecenas nulla arcu lacus. Turpis porttitor.",
    name: "Jane Doe",
    logo: "/clientLogo.png",
    role: "Senior Designer",
    profileSrc: "./dummyImgLight.png",
  },
  {
    text: "maecenas vitae vehicula eget. Ultricies ac id massa maecenas nulla arcu lacus. Turpis porttitor.",
    name: "Jane Doe",
    logo: "/clientLogo.png",
    role: "Senior Designer",
    profileSrc: "./dummyImgLight.png",
  },
  {
    text: "maecenas vitae vehicula eget. Ultricies ac id massa maecenas nulla arcu lacus. Turpis porttitor.",
    name: "Jane Doe",
    logo: "/clientLogo.png",
    role: "Senior Designer",
    profileSrc: "./dummyImgLight.png",
  },
];

const Clients14 = () => {
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
        <div className="flex flex-col justify-center gap-7 sm:gap-10 items-center transition-opacity duration-500 ease-in-out h-96 p-3 sm:p-5 rounded-xl border border-[#f0f0f0] dark:border-[#252528]">
          <div className="text-center flex flex-col items-center justify-center gap-4">
            {comments[currentIndex].profileSrc ? (
              <img
                src={comments[currentIndex].profileSrc}
                className="size-16 sm:size-20 rounded-full object-cover"
                alt=""
              />
            ) : (
              <CircleIcon />
            )}
            <div>
              <h1 className="sm:text-xl font-bold">
                {comments[currentIndex].name}
              </h1>
              <p className="text-xs sm:text-sm text-[#4d4d4d] dark:text-[#ababab]">
                {comments[currentIndex].role}
              </p>
            </div>
          </div>
          <q className=" sm:text-2xl text-center max-w-3xl">
            {comments[currentIndex].text}
          </q>
          <img
            src={comments[currentIndex].logo}
            className="h-7 sm:h-10 w-auto"
            alt=""
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

export default Clients14;
