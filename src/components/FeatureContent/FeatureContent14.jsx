import React, { useState } from "react";
import SectionHeading from "../utils/SectionHeading";
import CircleIcon from "../utils/CircleIcon";
import Sun from "../../assets/icons/Sun";
import Button from "../utils/Button";
import Moon from "../../assets/icons/Moon";
import { Link } from "react-router-dom";
import Account from "../utils/Account";

const FeatureContent14 = () => {
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
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto text-center space-y-6">
        <h5 className="text-[#005cf0] font-bold uppercase">Caption</h5>
        <div className=" text-xl sm:text-4xl font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet
          at molestie mattis.
        </div>
      </div>
      <div className="container mx-auto my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-2 sm:p-5 gap-5 gap-y-10 lg:px-20 items-start cursor-pointer">
        {contents.map((content, i) => (
          <div
            key={i}
            className="grid grid-rows-[15rem_auto] hover:-translate-y-1 border border-[#f0f0f0] dark:border-[#252528] rounded-xl hover:shadow-[#005cf0]/30 shadow-lg transition-all duration-500 gap-0"
          >
            <img
              src={content.imgSrc}
              className="rounded-t-lg h-full w-full object-cover"
              alt=""
            />
            <div className="p-3 space-y-1">
              <div className="text-[#005cf0]">Category</div>
              <div className="text-lg sm:text-2xl font-bold">
                {content.heading}
              </div>
              <p className="pb-4 text-sm sm:text-base text-[#4d4d4d] dark:text-[#ababab]">
                {content.subHeading}
              </p>
              <Account />
            </div>
          </div>
        ))}
      </div>
      <Button className={"my-10 mx-auto"}>Primary Action</Button>
    </div>
  );
};

export default FeatureContent14;
