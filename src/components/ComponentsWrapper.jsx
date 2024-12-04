import React, { useState } from "react";
import SecondaryButton from "./utils/SecondaryButton";
import Down from "../assets/icons/Down";
import HamburgerMenu from "../assets/icons/HamburgerMenu";
import Close from "../assets/icons/Close";
import Navbar4 from "./navigation/Navbar4";
import Navbar5 from "./navigation/Navbar5";
import Navbar1 from "./navigation/Navbar1";
import Navbar2 from "./navigation/Navbar2";
import Navbar3 from "./navigation/Navbar3";
import Navbar6 from "./navigation/Navbar6";
import Navbar7 from "./navigation/Navbar7";
import CenterContent1 from "./centerContent/CenterContent1";
import CenterContent2 from "./centerContent/CenterContent2";
import CenterContent3 from "./centerContent/CenterContent3";
import CenterContent4 from "./centerContent/CenterContent4";
import CenterContent5 from "./centerContent/CenterContent5";
import CenterContent6 from "./centerContent/CenterContent6";
import CenterContent7 from "./centerContent/CenterContent7";
import CenterContent8 from "./centerContent/CenterContent8";
import CenterContent9 from "./centerContent/CenterContent9";
import LeftContent1 from "./leftContent/LeftContent1";
import LeftContent2 from "./leftContent/LeftContent2";
import LeftContent3 from "./leftContent/LeftContent3";
import LeftContent4 from "./leftContent/LeftContent4";
import LeftContent5 from "./leftContent/LeftContent5";
import LeftContent6 from "./leftContent/LeftContent6";
import LeftContent7 from "./leftContent/LeftContent7";
import LeftContent8 from "./leftContent/LeftContent8";
import LeftContent9 from "./leftContent/LeftContent9";
import LeftContent10 from "./leftContent/LeftContent10";
import LeftContent11 from "./leftContent/LeftContent11";
import LeftContent12 from "./leftContent/LeftContent12";
import LeftContent13 from "./leftContent/LeftContent13";
import LeftContent14 from "./leftContent/LeftContent14";
import RightContent1 from "./RightContent/RightContent1";
import RightContent2 from "./RightContent/RightContent2";
import RightContent3 from "./RightContent/RightContent3";
import RightContent4 from "./RightContent/RightContent4";
import RightContent5 from "./RightContent/RightContent5";
import RightContent6 from "./RightContent/RightContent6";
import RightContent7 from "./RightContent/RightContent7";
import RightContent8 from "./RightContent/RightContent8";
import RightContent9 from "./RightContent/RightContent9";
import RightContent10 from "./RightContent/RightContent10";
import RightContent11 from "./RightContent/RightContent11";
import RightContent12 from "./RightContent/RightContent12";
import RightContent13 from "./RightContent/RightContent13";
import RightContent14 from "./RightContent/RightContent14";
import FeatureContent1 from "./FeatureContent/FeatureContent1";

const ComponentsWrapper = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [collapsed, setCollapsed] = useState({
    navbars: true,
    "center contents": true,
    "left contents": true,
    "Right contents": true,
  });
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleCollapse = (name) => {
    setCollapsed((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const allComponents = [
    {
      name: "navbars",
      type: "dropdown",
      components: [
        {
          name: "navbar 1",
          type: "component",
          component: <Navbar1 />,
        },
        {
          name: "navbar 2",
          type: "component",
          component: <Navbar2 />,
        },
        {
          name: "navbar 3",
          type: "component",
          component: <Navbar3 />,
        },
        {
          name: "navbar 4",
          type: "component",
          component: <Navbar4 />,
        },
        {
          name: "navbar 5",
          type: "component",
          component: <Navbar5 />,
        },
        {
          name: "navbar 6",
          type: "component",
          component: <Navbar6 />,
        },
        {
          name: "navbar 7",
          type: "component",
          component: <Navbar7 />,
        },
      ],
    },
    {
      name: "center contents",
      type: "dropdown",
      components: [
        {
          name: "Center Content 1",
          type: "component",
          component: <CenterContent1 />,
        },

        {
          name: "Center Content 2",
          type: "component",
          component: <CenterContent2 />,
        },

        {
          name: "Center Content 3",
          type: "component",
          component: <CenterContent3 />,
        },

        {
          name: "Center Content 4",
          type: "component",
          component: <CenterContent4 />,
        },

        {
          name: "Center Content 5",
          type: "component",
          component: <CenterContent5 />,
        },

        {
          name: "Center Content 6",
          type: "component",
          component: <CenterContent6 />,
        },
        {
          name: "Center Content 7",
          type: "component",
          component: <CenterContent7 />,
        },
        {
          name: "Center Content 8",
          type: "component",
          component: <CenterContent8 />,
        },
        {
          name: "Center Content 9",
          type: "component",
          component: <CenterContent9 />,
        },
      ],
    },
    {
      name: "left contents",
      type: "dropdown",
      components: [
        {
          name: "Left Content 1",
          type: "component",
          component: <LeftContent1 />,
        },
        {
          name: "Left Content 2",
          type: "component",
          component: <LeftContent2 />,
        },
        {
          name: "Left Content 3",
          type: "component",
          component: <LeftContent3 />,
        },
        {
          name: "Left Content 4",
          type: "component",
          component: <LeftContent4 />,
        },
        {
          name: "Left Content 5",
          type: "component",
          component: <LeftContent5 />,
        },
        {
          name: "Left Content 6",
          type: "component",
          component: <LeftContent6 />,
        },
        {
          name: "Left Content 7",
          type: "component",
          component: <LeftContent7 />,
        },
        {
          name: "Left Content 8",
          type: "component",
          component: <LeftContent8 />,
        },
        {
          name: "Left Content 9",
          type: "component",
          component: <LeftContent9 />,
        },
        {
          name: "Left Content 10",
          type: "component",
          component: <LeftContent10 />,
        },
        {
          name: "Left Content 11",
          type: "component",
          component: <LeftContent11 />,
        },
        {
          name: "Left Content 12",
          type: "component",
          component: <LeftContent12 />,
        },
        {
          name: "Left Content 13",
          type: "component",
          component: <LeftContent13 />,
        },
        {
          name: "Left Content 14",
          type: "component",
          component: <LeftContent14 />,
        },
      ],
    },
    {
      name: "Right contents",
      type: "dropdown",
      components: [
        {
          name: "Right Content 1",
          type: "component",
          component: <RightContent1 />,
        },
        {
          name: "Right Content 2",
          type: "component",
          component: <RightContent2 />,
        },
        {
          name: "Right Content 3",
          type: "component",
          component: <RightContent3 />,
        },
        {
          name: "Right Content 4",
          type: "component",
          component: <RightContent4 />,
        },
        {
          name: "Right Content 5",
          type: "component",
          component: <RightContent5 />,
        },
        {
          name: "Right Content 6",
          type: "component",
          component: <RightContent6 />,
        },
        {
          name: "Right Content 7",
          type: "component",
          component: <RightContent7 />,
        },
        {
          name: "Right Content 8",
          type: "component",
          component: <RightContent8 />,
        },
        {
          name: "Right Content 9",
          type: "component",
          component: <RightContent9 />,
        },
        {
          name: "Right Content 10",
          type: "component",
          component: <RightContent10 />,
        },
        {
          name: "Right Content 11",
          type: "component",
          component: <RightContent11 />,
        },
        {
          name: "Right Content 12",
          type: "component",
          component: <RightContent12 />,
        },
        {
          name: "Right Content 13",
          type: "component",
          component: <RightContent13 />,
        },
        {
          name: "Right Content 14",
          type: "component",
          component: <RightContent14 />,
        },
      ],
    },
    {
      name: "Feature Content",
      type: "dropdown",
      components: [
        {
          name: "Feature Content 1",
          type: "component",
          component: <FeatureContent1 />,
        },
      ],
    },
  ];

  return (
    <div className="">
      <div>{selectedComponent}</div>
      <SecondaryButton
        className="fixed right-2  top-2 z-30"
        onClick={() => {
          setIsNavOpen((prev) => !prev);
        }}
      >
        {isNavOpen ? (
          <Close className="text-black dark:text-white size-5" />
        ) : (
          <HamburgerMenu className="text-black dark:text-white size-5" />
        )}
      </SecondaryButton>
      {isNavOpen && (
        <div className="fixed top-0 right-0 border-l border-[#f0f0f0] dark:border-[#252528] bg-white dark:bg-black p-2 h-screen overflow-y-auto pt-16">
          <ul className="space-y-4">
            {allComponents.map((comp, index) => (
              <li key={index}>
                {comp.type === "dropdown" ? (
                  <div>
                    <SecondaryButton
                      className="w-full justify-between"
                      onClick={() => toggleCollapse(comp.name)}
                    >
                      {comp.name} <Down className="size-6" />
                    </SecondaryButton>
                    {!collapsed[comp.name] && (
                      <ul className="space-y-2 ml-4 mt-2">
                        {comp.components.map((subComp, subIndex) => (
                          <SecondaryButton
                            className="w-full  !justify-start"
                            key={subIndex}
                            onClick={() =>
                              setSelectedComponent(subComp.component)
                            }
                          >
                            {subComp.name}
                          </SecondaryButton>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <SecondaryButton
                    className="w-full !justify-start"
                    onClick={() => setSelectedComponent(comp.component)}
                  >
                    {comp.name}
                  </SecondaryButton>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ComponentsWrapper;
