import React from "react";
import { useTheme } from "../../lib/ThemeContext";

const BigCard = ({
  imgSrc,
  lightImg = "/dummyImgLight.png",
  darkImg = "/dummyImgDark.png",
  heading = "Etiam nulla lectus amet nunc molestie at vulputate.",
  subHeading = "Facilisi viverra dictum augue eu lobortis elit. In et donec habitasse lacus mi commodo elementum.",
  className = "",
}) => {
  const { theme } = useTheme();
  return (
    <div className={`p-4 max-w-[30rem] rounded-lg space-y-5 ${className}`}>
      <img
        src={imgSrc || (theme === "light" ? lightImg : darkImg)}
        alt=""
        className="rounded-md object-cover w-full h-60 sm:h-96"
      />
      <h1 className="font-bold text-xl">{heading}</h1>
      <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm">{subHeading}</p>
    </div>
  );
};

export default BigCard;
