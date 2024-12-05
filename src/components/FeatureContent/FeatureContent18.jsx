import React, { useState } from "react";
import Sun from "../../assets/icons/Sun";
import SectionHeading from "../utils/SectionHeading";

const FeatureContent18 = () => {
  const contents = [
    {
      imgSrc: "/dummyImgLight.png",
      count: "250+",
      title: "Happy customer",
    },
    {
      imgSrc: "/dummyImgLight.png",
      count: "600+",
      title: "Completed projects",
    },
    {
      imgSrc: "/dummyImgLight.png",
      count: "250+",
      title: "Happy customer",
    },
  ];

  return (
    <div className="py-10">
      <SectionHeading
        heading="Etiam nulla lectus amet nunc molestie at vulputate."
        subHeading="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis."
      />
      <div className="container mx-auto my-16 grid grid-cols-1 place-items-center sm:grid-cols-3 p-2 sm:p-5 gap-5 gap-y-10 items-center">
        {contents.map((content, i) => (
          <div
            key={i}
            className="flex gap-3  flex-col text-center items-center border border-[#f0f0f0] dark:border-[#252528] rounded-xl"
          >
            <img
              src={content.imgSrc}
              className=" max-h-52 rounded-t-xl w-80 object-cover"
              alt=""
            />
            <div className="pb-2 px-4">
              <h1 className="text-lg sm:text-2xl font-bold">{content.count}</h1>
              <p className="text-sm sm:text-base text-[#4d4d4d] dark:text-[#ababab] sm:whitespace-nowrap">
                {content.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureContent18;
