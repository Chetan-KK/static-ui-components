import React, { useState } from "react";
import SecondaryButton from "./SecondaryButton";
import Globe from "../../assets/icons/Globe";
import { Menu, MenuItem, MenuTrigger, Popover } from "react-aria-components";

const LanguageButton = () => {
  const [selectedLang, setSelectedLang] = useState("EN");
  const langs = [
    { language: "English", notation: "EN" },
    { language: "Spanish", notation: "ES" },
    { language: "French", notation: "FR" },
    { language: "German", notation: "DE" },
    { language: "Chinese", notation: "ZH" },
  ];

  return (
    <MenuTrigger>
      <SecondaryButton className={"border-none shadow-none"} aria-label="Menu">
        <Globe className="size-5" /> {selectedLang}
      </SecondaryButton>
      <Popover>
        <Menu
          onAction={(key) => {
            let num = parseInt(key[11]) - 1;
            setSelectedLang(langs[num].notation);
          }}
          className="bg-white dark:bg-black p-1 border border-[#f0f0f0] dark:border-[#252528] rounded-md"
        >
          {langs.map((lang) => (
            <MenuItem
              key={lang.notation}
              className={({ isHovered }) =>
                `py-1 px-2 dark:text-white hover:bg-[#e6e6e6] dark:hover:bg-[#2b2b2b] rounded-md border-none focus-visible:bg-[#e6e6e6] dark:focus-visible:bg-[#2b2b2b] outline-none`
              }
            >
              {lang.language}
            </MenuItem>
          ))}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
};

export default LanguageButton;
