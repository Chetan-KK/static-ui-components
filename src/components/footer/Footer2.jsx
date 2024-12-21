import React from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import Down from "../../assets/icons/Down";
import Sun from "../../assets/icons/Sun";

const Footer2 = () => {
  const cols = [
    {
      title: "Product",
      links: [
        {
          title: "Diam orci",
          url: "/",
        },
        {
          title: "Mi feugiat",
          url: "/",
        },
        {
          title: "Netus fermentum",
          url: "/",
        },
        {
          title: "Suspendisse viverra",
          url: "/",
        },
        {
          title: "Id dolor",
          url: "/",
        },
        {
          title: "Erat mattis",
          url: "/",
        },
      ],
    },
    {
      title: "Information",
      links: [
        {
          title: "Nibh",
          url: "/",
        },
        {
          title: "Egestas",
          url: "/",
        },
        {
          title: "Dictum",
          url: "/",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          title: "Id maecenas",
          url: "/",
        },
        {
          title: "Id orci",
          url: "/",
        },
        {
          title: "Magna ultricies",
          url: "/",
        },
        {
          title: "Quis risus",
          url: "/",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-5 sm:p-10 bg-[#005cf0]">
      <div className="grid md:grid-cols-[auto_auto_auto_auto] md:place-items-center gap-10 border-b border-white/20 pb-16">
        {cols.map((col, _) => (
          <div key={_} className="h-full">
            <div className="font-bold mb-5 text-lg text-white">{col.title}</div>
            <ul className="space-y-2">
              {col.links.map((colLink, i) => (
                <li
                  key={i}
                  className="text-[#dadada] hover:text-[#ffffff] text-sm transition-all  hover:translate-x-1 "
                >
                  <Link to={colLink.url} className="">
                    {colLink.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="bg-[#005cf0]/10 rounded-xl p-5 sm:p-10 space-y-5 md:w-min">
          <div className="font-bold text-lg text-white">Subscribe</div>
          <div className="relative flex">
            <input
              type="text"
              placeholder="Email address"
              className="rounded-l-md w-full sm:w-auto border border-[#f0f0f0] dark:border-[#252528] px-3"
            />
            <Button className={"rounded-none rounded-r-md"}>
              <Down className="-rotate-90 size-7" />
            </Button>
          </div>
          <p className="text-[#d0d0d0] text-sm">
            Gravida sed justo, justo, id est et. Amet tristique convallis sed
            porttitor nullam eu ut. Duis et odio aliquam bibendum. Metus et
            lectus id viverra fringilla magna morbi.
          </p>
        </div>
      </div>
      <div className="pt-10 flex justify-between items-center flex-col md:flex-row gap-5 sm:px-10">
        <Link to={"/"} className="text-2xl font-bold w-min">
          <div className="text-white">
            Models<span className="">Lab</span>
          </div>
        </Link>
        <div className="flex gap-7 flex-wrap text-white">
          <Link to={"/"} className="hover:opacity-50 transition-opacity">
            Terms
          </Link>
          <Link to={"/"} className="hover:opacity-50 transition-opacity">
            Privacy
          </Link>
          <Link to={"/"} className="hover:opacity-50 transition-opacity">
            Cookies
          </Link>
        </div>
        <div className="flex gap-3 items-center text-white">
          <Link to={"/"} className="hover:opacity-50 transition-opacity">
            <Sun className="size-6" />
          </Link>
          <Link to={"/"} className="hover:opacity-50 transition-opacity">
            <Sun className="size-6" />
          </Link>
          <Link to={"/"} className="hover:opacity-50 transition-opacity">
            <Sun className="size-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
