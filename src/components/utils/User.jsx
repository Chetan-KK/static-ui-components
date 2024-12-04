import React from "react";
import UserIcon from "../../assets/icons/UserIcon";
import { Menu, MenuItem, MenuTrigger, Popover } from "react-aria-components";
import CircleIcon from "../utils/CircleIcon";

const User = () => {
  return (
    <MenuTrigger>
      <CircleIcon size={20} Icon={UserIcon} aria-label="Menu" />
      <Popover>
        <Menu className="bg-white dark:bg-black p-1 border border-[#f0f0f0] dark:border-[#252528] rounded-md">
          <MenuItem
            className={({ isHovered }) =>
              `py-1 px-2 dark:text-white hover:bg-[#e6e6e6] dark:hover:bg-[#2b2b2b] rounded-md border-none focus-visible:bg-[#e6e6e6] dark:focus-visible:bg-[#2b2b2b] outline-none`
            }
          >
            Profile
          </MenuItem>
          <MenuItem
            className={({ isHovered }) =>
              `py-1 px-2 dark:text-white hover:bg-[#e6e6e6] dark:hover:bg-[#2b2b2b] rounded-md border-none focus-visible:bg-[#e6e6e6] dark:focus-visible:bg-[#2b2b2b] outline-none`
            }
          >
            Dashboard
          </MenuItem>
          <MenuItem
            className={({ isHovered }) =>
              `py-1 px-2 dark:text-white hover:bg-[#e6e6e6] dark:hover:bg-[#2b2b2b] rounded-md border-none focus-visible:bg-[#e6e6e6] dark:focus-visible:bg-[#2b2b2b] outline-none`
            }
          >
            Logout
          </MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
};

export default User;
