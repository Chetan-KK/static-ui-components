import React from "react";
import SectionHeading from "../utils/SectionHeading";
import Button from "../utils/Button";
import Down from "../../assets/icons/Down";

const CallToAction3 = () => {
  return (
    <div className="container mx-auto my-10 flex p-2 justify-center items-center">
      <div className="w-[90%] bg-[#005cf0] p-2 sm:p-10 rounded-2xl grid sm:grid-cols-2 gap-5 sm:gap-10">
        <div>
          <SectionHeading
            className={"!p-0 !text-left !my-2 text-white"}
            heading={"Etiam nulla lectus amet nunc molestie at vulputate."}
            subHeading={"Neque, pulvinar vestibulum non aliquam."}
            subHeadingClassName={"!text-white"}
          />
          <Button color={"dark"} className={"!text-[#005cf0] mt-5 !bg-white"}>
            Get free quotes <Down className="size-5 sm:size-7 -rotate-90" />
          </Button>
        </div>
        <img
          src="./dummyImgLight.png"
          className="ml-auto rounded-2xl h-full w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default CallToAction3;
