import React from "react";
import Sun from "../../assets/icons/Sun";
import Button from "../utils/Button";

const FeatureContent13 = () => {
  const contents = [
    {
      Icon: Sun,
      subHeading:
        "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui. ",
    },
    {
      Icon: Sun,
      subHeading:
        "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui. ",
    },
    {
      Icon: Sun,
      subHeading:
        "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui. ",
    },
    {
      Icon: Sun,
      subHeading:
        "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui. ",
    },
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto text-center space-y-6">
        <h5 className="text-[#005cf0] font-bold uppercase">Caption</h5>
        <h1 className=" text-xl sm:text-4xl font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet
          at molestie mattis.
        </h1>
      </div>
      <div className="container mx-auto my-16 grid grid-cols-1 md:grid-cols-2 p-2 sm:p-5 gap-5 sm:gap-10 gap-y-20 lg:px-20 items-start ">
        {contents.map((content, _) => (
          <div
            key={_}
            className="flex flex-col gap-3 text-center items-center justify-center"
          >
            <content.Icon className="size-20 text-[#b4b4b4] dark:text-[#2b2b2b]" />
            <p className="text-sm sm:text-base text-[#4d4d4d] dark:text-[#ababab]">
              {content.subHeading}
            </p>
          </div>
        ))}
      </div>
      <Button className={"mx-auto my-10"}>Primary Action</Button>
    </div>
  );
};

export default FeatureContent13;
