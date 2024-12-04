import React from "react";
import { useTheme } from "../../lib/ThemeContext";

const SmallCard = ({
  imgSrc,
  lightImg = "/dummyImgLight.png",
  darkImg = "/dummyImgDark.png",
  heading = "Etiam nulla lectus amet nunc molestie at vulputate.",
  subHeading = "Facilisi viverra dictum augue eu lobortis elit. In et donec habitasse lacus mi commodo elementum.",
}) => {
  const { theme } = useTheme();
  return (
    <div className="p-4 sm:max-w-[16rem] md:max-w-[20rem] rounded-lg space-y-3 md:space-y-5">
      <img
        src={imgSrc || (theme === "light" ? lightImg : darkImg)}
        alt=""
        className="rounded-md object-cover w-full sm:max-h-40 md:max-h-fit md:h-48"
      />
      <h1 className="font-bold text-base md:text-xl">{heading}</h1>
      <p className="text-[#4d4d4d]  dark:text-[#ababab]  text-xs md:text-sm">
        {subHeading}
      </p>
    </div>
  );
};

export default SmallCard;
