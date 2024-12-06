import React from "react";
import { Button } from "react-aria-components";

const SecondaryButton = ({ children, className, color, ...props }) => {
  return (
    <Button
      className={`bg-white dark:bg-black border border-[#f0f0f0] dark:border-[#252528] text-sm sm:text-base rounded-lg px-3 py-2 sm:px-4 sm:py-2 font-semibold shadow-[#005cf0]/20 shadow-sm hover:bg-[#f0f0f0] dark:hover:bg-[#252528] transition-all whitespace-nowrap flex justify-center items-center gap-2 ${
        color === "blue" && "!border-[#005cf0] !text-[#005cf0]"
      } ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
