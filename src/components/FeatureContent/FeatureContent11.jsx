import React, { useState } from "react";
import SectionHeading from "../utils/SectionHeading";
import CircleIcon from "../utils/CircleIcon";
import Sun from "../../assets/icons/Sun";
import Button from "../utils/Button";
import Moon from "../../assets/icons/Moon";
import { Link } from "react-router-dom";

const FeatureContent11 = () => {
  const contents = [
    {
      imgSrc: "/dummyImgLight.png",
      heading: "Title",
      subHeading:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      imgSrc: "/dummyImgLight.png",
      heading: "Title",
      subHeading:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      imgSrc: "/dummyImgLight.png",
      heading: "Title",
      subHeading:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      imgSrc: "/dummyImgLight.png",
      heading: "Title",
      subHeading:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      imgSrc: "/dummyImgLight.png",
      heading: "Title",
      subHeading:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      imgSrc: "/dummyImgLight.png",
      heading: "Title",
      subHeading:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      imgSrc: "/dummyImgLight.png",
      heading: "Title",
      subHeading:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      imgSrc: "/dummyImgLight.png",
      heading: "Title",
      subHeading:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      imgSrc: "/dummyImgLight.png",
      heading: "Title",
      subHeading:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      imgSrc: "/dummyImgLight.png",
      heading: "Title",
      subHeading:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto px-5">
        <div className="text-xl sm:text-3xl font-bold mb-5">
          What is Lorem Ipsum?
        </div>
        <div className="flex items-start gap-4 sm:items-center justify-between flex-col sm:flex-row">
          <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
            Neque porro quisquam est qui dolorem
          </p>
          <Button>Button</Button>
        </div>
      </div>
      <div className="container mx-auto my-10 flex flex-wrap justify-center gap-5 sm:justify-between gap-y-10 items-start cursor-pointer">
        {contents.map((content, i) => (
          <div
            key={i}
            className="grid max-w-56 grid-rows-[auto_auto] hover:-translate-y-1 border border-[#f0f0f0] dark:border-[#252528] rounded-xl hover:shadow-[#005cf0]/30 shadow-lg transition-all duration-500 gap-1 p-1"
          >
            <img
              src={content.imgSrc}
              className="rounded-lg max-h-44 w-full object-cover"
              alt=""
            />
            <div className="p-3 space-y-1">
              <div className="text-base sm:text-xl font-bold">Lorem Ipsum</div>
              <p className="pb-4 text-sm sm:text-base text-[#4d4d4d] dark:text-[#ababab]">
                Neque porro quisquam est qui dolorem
              </p>
              <div className="text-xs py-1 px-2 bg-[#005cf0]/20 w-fit rounded-md sm:text-sm text-[#005cf0]">
                Lorem Ipsum
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureContent11;
