import React, { useState } from "react";
import Button from "../utils/Button";
import Account from "../utils/Account";

const FeatureContent15 = () => {
  const contents = [
    {
      imgSrc: "/dummyImgLight.png",
    },
    {
      imgSrc: "/dummyImgLight.png",
    },
    {
      imgSrc: "/dummyImgLight.png",
    },
    {
      imgSrc: "/dummyImgLight.png",
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
            className="grid grid-rows-[15rem_auto] hover:-translate-y-1  hover:shadow-[#005cf0]/30 shadow-lg transition-all duration-500 gap-0"
          >
            <img
              src={content.imgSrc}
              className="rounded-lg h-full w-full object-cover"
              alt=""
            />
          </div>
        ))}
      </div>
      <Button className={"my-10 mx-auto"}>Primary Action</Button>
    </div>
  );
};

export default FeatureContent15;
