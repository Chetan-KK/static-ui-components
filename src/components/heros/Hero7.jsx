import React from "react";
import SectionHeading from "../utils/SectionHeading";
import Button from "../utils/Button";
import SecondaryButton from "../utils/SecondaryButton";

const Hero7 = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div
        className="absolute bg-[#005cf0] top-0 left-0 z-0 object-cover h-full w-full"
        alt=""
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 z-0 text-white dark:text-black object-cover w-full"
        viewBox="0 0 1440 400"
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,320L48,293.3C96,267,192,213,288,186.7C384,160,480,160,576,186.7C672,213,768,267,864,266.7C960,267,1056,213,1152,186.7C1248,160,1344,160,1392,186.7L1440,213.3L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z"
        ></path>
      </svg>
      {/* <div className="absolute top-0 left-0 h-full w-full z-0 bg-white/50"></div> */}
      <div className="text-center z-10">
        <SectionHeading
          className={"!m-0 !text-left sm:!text-center !text-white"}
          heading={"Etiam nulla lectus amet nunc molestie at vulputate."}
          subHeading={" Neque, pulvinar vestibulum non aliquam."}
          subHeadingClassName={"!text-white"}
        />
        <div className="my-10 mx-auto flex items-center flex-wrap px-5 sm:px-10 lg:px-40 justify-start sm:justify-center gap-3">
          <Button color={"dark"} className={"!text-[#005cf0] !bg-white"}>
            Get Started
          </Button>
          <SecondaryButton
            className={"!bg-transparent !border-white !text-white"}
          >
            Start for free
          </SecondaryButton>
        </div>
        <img
          src="/dummyImgLight.png"
          className="mx-auto w-[90vw] lg:w-[60rem] h-96 md:h-[30rem] object-cover rounded-xl"
          alt="hero image"
        />
      </div>
    </div>
  );
};

export default Hero7;
