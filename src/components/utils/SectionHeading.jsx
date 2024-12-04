import React from "react";

const SectionHeading = ({ heading, subHeading, className }) => {
  return (
    <div
      className={`container mx-auto text-center px-5 sm:px-10 lg:px-40 my-5 ${className}`}
    >
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-5">
        {heading}
      </h1>
      <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
        {subHeading}
      </p>
    </div>
  );
};

export default SectionHeading;
