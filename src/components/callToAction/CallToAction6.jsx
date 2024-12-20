import React from "react";
import SectionHeading from "../utils/SectionHeading";
import Button from "../utils/Button";
import InputField from "../utils/InputField";
import Sun from "../../assets/icons/Sun";

const CallToAction6 = () => {
  return (
    <div className="container mx-auto my-10 flex p-2 justify-center items-center">
      <div className="sm:w-[90%] p-2 sm:p-10 rounded-2xl grid sm:grid-cols-2 gap-5 sm:gap-10">
        <img
          src="./dummyImgLight.png"
          className="ml-auto rounded-2xl h-full w-full object-cover"
          alt=""
        />
        <div>
          <SectionHeading
            className={"!p-0 !text-left !my-2"}
            heading={"Etiam nulla lectus amet nunc molestie at vulputate."}
            subHeading={"Neque, pulvinar vestibulum non aliquam."}
          />
          <div className="mt-5 flex flex-wrap gap-4">
            <InputField
              Icon={Sun}
              placeholder="Enter your email to get the latest "
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction6;
