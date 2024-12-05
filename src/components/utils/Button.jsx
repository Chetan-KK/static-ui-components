import React from "react";

const Button = ({ children, className, color, ...props }) => {
  return (
    <button
      className={`bg-[#005cf0] text-[#f6f8fe] text-sm sm:text-base rounded-lg px-3 py-2 sm:px-4 sm:py-2 font-semibold shadow-[#005cf0]/20 shadow-sm hover:bg-[#005cf0]/80 transition-all whitespace-nowrap flex justify-center items-center gap-2 ${
        color == "dark" &&
        "bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
