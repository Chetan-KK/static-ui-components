import React from "react";
import CircleIcon from "./CircleIcon";

const Account = ({
  name = "Jane Doe",
  description = "Senior Designer",
  profileSrc,
}) => {
  return (
    <div className="flex gap-2 items-center">
      {profileSrc ? (
        <img
          src={profileSrc}
          className="size-10 rounded-full object-cover"
          alt=""
        />
      ) : (
        <CircleIcon />
      )}
      <div className="">
        <div className="text-sm sm:text-base font-bold">{name}</div>
        <p className="text-xs sm:text-sm text-[#4d4d4d] dark:text-[#ababab]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Account;
