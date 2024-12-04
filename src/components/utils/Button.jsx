import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-[#005cf0] text-[#f6f8fe] text-sm sm:text-base rounded-lg px-3 py-2 sm:px-4 sm:py-2 font-semibold shadow-[#005cf0]/20 shadow-sm hover:bg-[#005cf0]/80 transition-all whitespace-nowrap flex justify-center items-center gap-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
