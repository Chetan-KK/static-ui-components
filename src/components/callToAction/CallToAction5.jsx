import React from "react";
import Button from "../utils/Button";
import InputField from "../utils/InputField";
import Sun from "../../assets/icons/Sun";
import SectionHeading from "../utils/SectionHeading";

const CallToAction5 = () => {
  return (
    <div className="container mx-auto my-10 flex p-2 justify-center items-center">
      <div className="sm:w-[90%] p-2 sm:p-10 rounded-2xl grid sm:grid-cols-2 gap-5 sm:gap-10">
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
        <img
          src="./dummyImgLight.png"
          className="ml-auto rounded-2xl h-full w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default CallToAction5;
