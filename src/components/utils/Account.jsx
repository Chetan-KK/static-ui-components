import React from "react";
import CircleIcon from "./CircleIcon";

const Account = ({
  name = "Jane Doe",
  description = "Senior Designer",
  profileSrc,
}) => {
  return (
    <div className="flex gap-2 items-center">
      {profileSrc ? <img src={profileSrc} alt="" /> : <CircleIcon />}
      <div className="">
        <h1 className="text-sm font-bold">{name}</h1>
        <p className="text-xs text-[#4d4d4d] dark:text-[#ababab]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Account;
