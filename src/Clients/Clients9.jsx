import React, { useState } from "react";
import SectionHeading from "../components/utils/SectionHeading";
import Account from "../components/utils/Account";
import Down from "../assets/icons/Down";
import Star from "../assets/icons/Star";
import CircleIcon from "../components/utils/CircleIcon";
import { Button } from "react-aria-components";

const comments = [
  {
    text: "Orci vel eget in eu. Integer amet porttitor hendrerit etiam arcu, aliquet duis pretium consequat. Semper sed viverra enim ut nunc.",
    name: "Jane Doe",
    stars: 1,
    profileSrc: "./dummyImgLight.png",
  },
  {
    text: "vitae vehicula eget. Ultricies ac id massa maecenas nulla arcu lacus. Turpis porttitor.",
    name: "Jane Doe",
    stars: 2,
    profileSrc: "./dummyImgLight.png",
  },
  {
    text: "vitae vehicula eget. Ultricies ac id massa maecenas nulla arcu lacus. Turpis porttitor.",
    name: "Jane Doe",
    stars: 3,
    profileSrc: "./dummyImgLight.png",
  },
  {
    text: "maecenas vitae vehicula eget. Ultricies ac id massa maecenas nulla arcu lacus. Turpis porttitor.",
    name: "Jane Doe",
    stars: 4,
    profileSrc: "./dummyImgLight.png",
  },
  {
    text: "maecenas vitae vehicula eget. Ultricies ac id massa maecenas nulla arcu lacus. Turpis porttitor.",
    name: "Jane Doe",
    stars: 3,
    profileSrc: "./dummyImgLight.png",
  },
  {
    text: "maecenas vitae vehicula eget. Ultricies ac id massa maecenas nulla arcu lacus. Turpis porttitor.",
    name: "Jane Doe",
    stars: 2,
    profileSrc: "./dummyImgLight.png",
  },
];

const Clients9 = () => {
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
        <div className="grid sm:grid-cols-2 gap-10 sm:gap-10 transition-opacity duration-500 items-center ease-in-out h-72">
          {comments
            .slice(currentIndex, currentIndex + 2)
            .map((comment, index) => (
              <div
                key={index}
                className="flex flex-col justify-center gap-3 sm:gap-5 items-center"
              >
                <div className="flex gap-2">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={`size-5 ${
                        starIndex < comment.stars
                          ? "text-[#005cf0]"
                          : "text-[#4d4d4d] dark:text-[#ababab]"
                      }`}
                    />
                  ))}
                </div>
                <q className="text-sm text-center sm:text-base text-[#4d4d4d] dark:text-[#ababab]">
                  {comment.text}
                </q>
                {comment.profileSrc ? (
                  <img
                    src={comment.profileSrc}
                    className="size-10 sm:size-12 rounded-full object-cover"
                    alt=""
                  />
                ) : (
                  <CircleIcon />
                )}
                <h1 className="text-sm sm:text-base font-bold">
                  {comment.name}
                </h1>
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

export default Clients9;
