import React from "react";
import SectionHeading from "../utils/SectionHeading";
import Button from "../utils/Button";
import InputField from "../utils/InputField";
import Sun from "../../assets/icons/Sun";
import SecondaryButton from "../utils/SecondaryButton";
import Down from "../../assets/icons/Down";

const CallToAction7 = () => {
  return (
    <div className="container mx-auto my-10 flex p-2 justify-center items-center">
      <div className="p-2 sm:p-0 grid sm:grid-cols-2 gap-5 sm:gap-10">
        <div className="sm:p-10">
          <SectionHeading
            className={"!p-0 !text-left !my-2"}
            heading={"Etiam nulla lectus amet nunc molestie at vulputate."}
            subHeading={"Neque, pulvinar vestibulum non aliquam."}
          />
          <div className="mt-5 flex flex-wrap gap-4">
            <Button>
              Get free quotes <Down className="size-5 sm:size-7 -rotate-90" />
            </Button>
            <SecondaryButton>
              Free SignUp <Down className="size-5 sm:size-7 -rotate-90" />
            </SecondaryButton>
          </div>
        </div>
        <img
          src="./dummyImgLight.png"
          className="ml-auto rounded-2xl sm:rounded-none sm:rounded-l-2xl h-full w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default CallToAction7;
