import React from "react";
import SectionHeading from "../utils/SectionHeading";
import Button from "../utils/Button";
import SecondaryButton from "../utils/SecondaryButton";

const Hero5 = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute top-0 left-0 z-0 object-cover  h-full sm:w-full opacity-40"
        alt=""
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 z-0 text-white dark:text-black object-cover w-full"
        viewBox="0 0 1440 320"
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,256L48,250.7C96,245,192,235,288,213.3C384,192,480,160,576,165.3C672,171,768,213,864,202.7C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      {/* <div className="absolute top-0 left-0 h-full w-full z-0 bg-white/50"></div> */}
      <div className="text-center z-10">
        <SectionHeading
          className={
            "!m-0 !text-left sm:!text-center text-black dark:text-white"
          }
          heading={"Etiam nulla lectus amet nunc molestie at vulputate."}
        />
        <p className="px-5 sm:px-10 lg:px-40 text-[#000000] dark:text-white text-left sm:text-center text-sm sm:text-base">
          Neque, pulvinar vestibulum non aliquam.
        </p>
        <div className="my-10 mx-auto flex items-center px-5 sm:px-10 lg:px-40 justify-start sm:justify-center gap-3">
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero5;
