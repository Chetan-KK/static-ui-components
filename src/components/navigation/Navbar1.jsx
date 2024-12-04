import React, { useState } from "react";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import SecondaryButton from "../utils/SecondaryButton";
import HamburgerMenu from "../../assets/icons/HamburgerMenu";
import Close from "../../assets/icons/Close";
import ModeToggle from "../utils/ModeToggle";
import User from "../utils/User";

const Navbar1 = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const links = [
    {
      title: "Home",
      url: "/home",
    },
    {
      title: "Update",
      url: "/update",
    },
    {
      title: "Services",
      url: "/services",
    },
    {
      title: "Features",
      url: "/features",
    },
    {
      title: "About Us",
      url: "/about-us",
    },
  ];

  return (
    <header className="sticky top-0 border-b border-[#f0f0f0] dark:border-[#252528] bg-white/70 dark:bg-black/70 backdrop-blur-md backdrop-saturate-200">
      <div className="lg:container mx-auto p-4 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center">
        <Link to={"/"} className="text-2xl font-bold w-min">
          <h1 className="sm:hidden">
            M<span className="text-[#005cf0]">L</span>
          </h1>
          <h1 className="hidden sm:block">
            Models<span className="text-[#005cf0]">Lab</span>
          </h1>
        </Link>
        <div
          className={`fixed md:hidden top-0 left-0 bg-black/50 h-screen w-full z-20 ${
            isNavOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => {
            setIsNavOpen(false);
          }}
        ></div>
        <nav
          className={`flex fixed md:static top-0 left-0 bg-white dark:bg-black md:bg-transparent dark:md:bg-transparent p-5 md:w-auto w-[80%] md:p-0 h-screen md:h-auto border-r border-[#f0f0f0] dark:border-[#252528] md:border-none flex-col justify-start md:flex-row gap-5 md:translate-x-0 transition-transform z-30 ${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Link to={"/"} className="text-2xl font-bold md:hidden">
            <h1 className="sm:hidden">
              M<span className="text-[#005cf0]">L</span>
            </h1>
            <h1 className="hidden sm:block">
              Models<span className="text-[#005cf0]">Lab</span>
            </h1>
          </Link>
          {links.map((link, _) => (
            <Link
              key={_}
              to={link.url}
              className="text-[#4d4d4d] dark:text-[#ababab] underline-offset-8 hover:text-[#005cf0] hover:underline whitespace-nowrap"
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2 justify-end">
          <User />
          <SecondaryButton
            className="md:hidden z-30"
            onPress={() => {
              setIsNavOpen((prev) => !prev);
            }}
          >
            {isNavOpen ? (
              <Close className="text-black dark:text-white size-5" />
            ) : (
              <HamburgerMenu className="text-black dark:text-white size-5" />
            )}
          </SecondaryButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar1;
