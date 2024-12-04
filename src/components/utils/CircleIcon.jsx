import React from "react";
import UserIcon from "../../assets/icons/UserIcon";
import { Button } from "react-aria-components";

const CircleIcon = ({
  Icon = UserIcon,
  className = "",
  color = "default",
  size = 20,
  ...props
}) => {
  return (
    <Button
      className={`flex w-min h-min justify-center items-center aspect-square bg-[#f5f5f5] dark:bg-[#0f0f0f] rounded-full hover:bg-[#bdbdbd]/50 dark:hover:bg-[#575757]/50 transition-colors ${className} ${
        color === "blue" && "bg-[#005cf0]/30 hover:bg-[#005cf0]/40"
      } ${color === "darkblue" && "!bg-[#005cf0] hover:!bg-[#005cf0]"}
      `}
      {...props}
      style={{ size }}
    >
      <Icon
        className={`text-foreground m-3 ${color === "blue" && "text-[#005cf0]"}
          ${color === "darkblue" && "text-white"}
          `}
        style={{ height: `${size}px`, width: `${size}px` }}
      />
    </Button>
  );
};

export default CircleIcon;
