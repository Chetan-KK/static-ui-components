import React from "react";
import UserIcon from "../../assets/icons/UserIcon";

const InputField = ({ Icon, className = "", ...props }) => {
  return (
    <div className="relative">
      {Icon && (
        <Icon className="size-4 sm:size-5 absolute top-[50%] translate-y-[-50%] left-2 sm:left-2.5 text-black/50 dark:text-white/50" />
      )}
      <input
        {...props}
        className={`bg-transparent text-[#f6f8fe] text-sm border border-[#f0f0f0] dark:border-[#252528] sm:text-base rounded-lg px-3 py-2 sm:px-4 sm:py-2 transition-all ${
          Icon && "pl-7 sm:pl-9"
        } ${className}`}
      />
    </div>
  );
};

export default InputField;
