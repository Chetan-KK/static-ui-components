import React, { useState, useEffect } from "react";
import SecondaryButton from "./utils/SecondaryButton";
import Down from "../assets/icons/Down";
import HamburgerMenu from "../assets/icons/HamburgerMenu";
import Close from "../assets/icons/Close";

// all components
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
import CenterContent10 from "./centerContent/CenterContent10";
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
import FeatureContent2 from "./FeatureContent/FeatureContent2";
import FeatureContent3 from "./FeatureContent/FeatureContent3";
import FeatureContent4 from "./FeatureContent/FeatureContent4";
import FeatureContent5 from "./FeatureContent/FeatureContent5";
import FeatureContent6 from "./FeatureContent/FeatureContent6";
import FeatureContent7 from "./FeatureContent/FeatureContent7";
import FeatureContent8 from "./FeatureContent/FeatureContent8";
import FeatureContent9 from "./FeatureContent/FeatureContent9";
import FeatureContent10 from "./FeatureContent/FeatureContent10";
import FeatureContent11 from "./FeatureContent/FeatureContent11";
import FeatureContent12 from "./FeatureContent/FeatureContent12";
import FeatureContent13 from "./FeatureContent/FeatureContent13";
import FeatureContent14 from "./FeatureContent/FeatureContent14";
import FeatureContent15 from "./FeatureContent/FeatureContent15";
import FeatureContent16 from "./FeatureContent/FeatureContent16";
import FeatureContent17 from "./FeatureContent/FeatureContent17";
import FeatureContent18 from "./FeatureContent/FeatureContent18";
import Faq1 from "./Faq/Faq1";
import Faq2 from "./Faq/Faq2";
import Faq3 from "./Faq/Faq3";
import Faq4 from "./Faq/Faq4";
import Faq5 from "./Faq/Faq5";
import CallToAction1 from "./callToAction/CallToAction1";
import CallToAction2 from "./callToAction/CallToAction2";
import CallToAction3 from "./callToAction/CallToAction3";
import CallToAction4 from "./callToAction/CallToAction4";
import CallToAction5 from "./callToAction/CallToAction5";
import CallToAction6 from "./callToAction/CallToAction6";
import CallToAction7 from "./callToAction/CallToAction7";
import CallToAction8 from "./callToAction/CallToAction8";
import Clients1 from "./Clients/Clients1";
import Clients3 from "./Clients/Clients3";
import Clients2 from "./Clients/Clients2";
import Clients4 from "./Clients/Clients4";
import Clients5 from "./Clients/Clients5";
import Clients6 from "./Clients/Clients6";
import Hero1 from "./heros/Hero1";
import Hero2 from "./heros/Hero2";
import Hero3 from "./heros/Hero3";
import Hero4 from "./heros/Hero4";
import Hero5 from "./heros/Hero5";
import Hero6 from "./heros/Hero6";
import Hero7 from "./heros/Hero7";
import Hero8 from "./heros/Hero8";
import Hero9 from "./heros/Hero9";
import Hero10 from "./heros/Hero10";
import Hero13 from "./heros/Hero13";
import Hero12 from "./heros/Hero12";
import Hero11 from "./heros/Hero11";
import Hero14 from "./heros/Hero14";
import Hero15 from "./heros/Hero15";
import CenterContent12 from "./centerContent/CenterContent12";
import Clients7 from "./Clients/Clients7";
import Clients14 from "./Clients/Clients14";
import Clients13 from "./Clients/Clients13";
import Clients8 from "./Clients/Clients8";
import Clients9 from "./Clients/Clients9";
import Footer1 from "./footer/Footer1";
import Footer2 from "./footer/Footer2";

const ComponentsWrapper = () => {
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
      name: "heros",
      type: "dropdown",
      components: [
        {
          name: "hero 1",
          type: "component",
          component: <Hero1 />,
        },
        {
          name: "hero 2",
          type: "component",
          component: <Hero2 />,
        },
        {
          name: "hero 3",
          type: "component",
          component: <Hero3 />,
        },
        {
          name: "hero 4",
          type: "component",
          component: <Hero4 />,
        },
        {
          name: "hero 5",
          type: "component",
          component: <Hero5 />,
        },
        {
          name: "hero 6",
          type: "component",
          component: <Hero6 />,
        },
        {
          name: "hero 7",
          type: "component",
          component: <Hero7 />,
        },
        {
          name: "hero 8",
          type: "component",
          component: <Hero8 />,
        },
        {
          name: "hero 9",
          type: "component",
          component: <Hero9 />,
        },
        {
          name: "hero 10",
          type: "component",
          component: <Hero10 />,
        },
        {
          name: "hero 11",
          type: "component",
          component: <Hero11 />,
        },
        {
          name: "hero 12",
          type: "component",
          component: <Hero12 />,
        },
        {
          name: "hero 13",
          type: "component",
          component: <Hero13 />,
        },
        {
          name: "hero 14",
          type: "component",
          component: <Hero14 />,
        },
        {
          name: "hero 15",
          type: "component",
          component: <Hero15 />,
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
        {
          name: "Center Content 10",
          type: "component",
          component: <CenterContent10 />,
        },
        {
          name: "Center Content 12",
          type: "component",
          component: <CenterContent12 />,
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
      name: "Feature Contents",
      type: "dropdown",
      components: [
        {
          name: "Feature Content 1",
          type: "component",
          component: <FeatureContent1 />,
        },
        {
          name: "Feature Content 2",
          type: "component",
          component: <FeatureContent2 />,
        },
        {
          name: "Feature Content 3",
          type: "component",
          component: <FeatureContent3 />,
        },
        {
          name: "Feature Content 4",
          type: "component",
          component: <FeatureContent4 />,
        },
        {
          name: "Feature Content 5",
          type: "component",
          component: <FeatureContent5 />,
        },
        {
          name: "Feature Content 6",
          type: "component",
          component: <FeatureContent6 />,
        },
        {
          name: "Feature Content 7",
          type: "component",
          component: <FeatureContent7 />,
        },
        {
          name: "Feature Content 8",
          type: "component",
          component: <FeatureContent8 />,
        },
        {
          name: "Feature Content 9",
          type: "component",
          component: <FeatureContent9 />,
        },
        {
          name: "Feature Content 10",
          type: "component",
          component: <FeatureContent10 />,
        },
        {
          name: "Feature Content 11",
          type: "component",
          component: <FeatureContent11 />,
        },
        {
          name: "Feature Content 12",
          type: "component",
          component: <FeatureContent12 />,
        },
        {
          name: "Feature Content 13",
          type: "component",
          component: <FeatureContent13 />,
        },
        {
          name: "Feature Content 14",
          type: "component",
          component: <FeatureContent14 />,
        },
        {
          name: "Feature Content 15",
          type: "component",
          component: <FeatureContent15 />,
        },
        {
          name: "Feature Content 16",
          type: "component",
          component: <FeatureContent16 />,
        },
        {
          name: "Feature Content 17",
          type: "component",
          component: <FeatureContent17 />,
        },
        {
          name: "Feature Content 18",
          type: "component",
          component: <FeatureContent18 />,
        },
      ],
    },
    {
      name: "FAQs",
      type: "dropdown",
      components: [
        {
          name: "Faq 1",
          type: "component",
          component: <Faq1 />,
        },
        {
          name: "Faq 2",
          type: "component",
          component: <Faq2 />,
        },
        {
          name: "Faq 3",
          type: "component",
          component: <Faq3 />,
        },
        {
          name: "Faq 4",
          type: "component",
          component: <Faq4 />,
        },
        {
          name: "Faq 5",
          type: "component",
          component: <Faq5 />,
        },
      ],
    },
    {
      name: "Call to actions",
      type: "dropdown",
      components: [
        {
          name: "CallToAction 1",
          type: "component",
          component: <CallToAction1 />,
        },
        {
          name: "CallToAction 2",
          type: "component",
          component: <CallToAction2 />,
        },
        {
          name: "CallToAction 3",
          type: "component",
          component: <CallToAction3 />,
        },
        {
          name: "CallToAction 4",
          type: "component",
          component: <CallToAction4 />,
        },
        {
          name: "CallToAction 5",
          type: "component",
          component: <CallToAction5 />,
        },
        {
          name: "CallToAction 6",
          type: "component",
          component: <CallToAction6 />,
        },
        {
          name: "CallToAction 7",
          type: "component",
          component: <CallToAction7 />,
        },
        {
          name: "CallToAction 8",
          type: "component",
          component: <CallToAction8 />,
        },
      ],
    },
    {
      name: "Clients",
      type: "dropdown",
      components: [
        {
          name: "Clients 1",
          type: "component",
          component: <Clients1 />,
        },
        {
          name: "Clients 2",
          type: "component",
          component: <Clients2 />,
        },
        {
          name: "Clients 3",
          type: "component",
          component: <Clients3 />,
        },
        {
          name: "Clients 4",
          type: "component",
          component: <Clients4 />,
        },
        {
          name: "Clients 5",
          type: "component",
          component: <Clients5 />,
        },
        {
          name: "Clients 6",
          type: "component",
          component: <Clients6 />,
        },
        {
          name: "Clients 7",
          type: "component",
          component: <Clients7 />,
        },
        {
          name: "Clients 8",
          type: "component",
          component: <Clients8 />,
        },
        {
          name: "Clients 9",
          type: "component",
          component: <Clients9 />,
        },
        {
          name: "Clients 13",
          type: "component",
          component: <Clients13 />,
        },
        {
          name: "Clients 14",
          type: "component",
          component: <Clients14 />,
        },
      ],
    },
    {
      name: "Footer",
      type: "dropdown",
      components: [
        {
          name: "Footer 1",
          type: "component",
          component: <Footer1 />,
        },
        {
          name: "Footer 2",
          type: "component",
          component: <Footer2 />,
        },
      ],
    },
  ];

  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedComponentName, setSelectedComponentName] = useState(null);
  const [collapsed, setCollapsed] = useState({
    navbars: true,
    heros: true,
    "center contents": true,
    "left contents": true,
    "Right contents": true,
    "Feature Contents": true,
    FAQs: true,
    Clients: true,
    "Call to actions": true,
  });

  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const savedComponentIndex = localStorage.getItem("selectedComponentIndex");
    const savedComponentSubIndex = localStorage.getItem(
      "selectedComponentSubIndex"
    );
    if (savedComponentIndex && savedComponentSubIndex) {
      setSelectedComponent(
        allComponents[savedComponentIndex].components[savedComponentSubIndex]
          .component
      );
      setSelectedComponentName(
        allComponents[savedComponentIndex].components[savedComponentSubIndex]
          .name
      );
    } else {
      setSelectedComponent(allComponents[0].components[0].component);
      setSelectedComponentName(allComponents[0].components[0].name);
    }
  }, []);

  const toggleCollapse = (name) => {
    setCollapsed((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleComponentSelect = (index, subIndex, Name) => {
    setSelectedComponent(allComponents[index].components[subIndex].component);
    setSelectedComponentName(Name);
    localStorage.setItem("selectedComponentIndex", index);
    localStorage.setItem("selectedComponentSubIndex", subIndex);
  };

  return (
    <div className="">
      <div>{selectedComponent}</div>
      <SecondaryButton
        className={`fixed ${
          isNavOpen ? "right-60" : "right-0"
        } top-[30%] rounded-r-none z-30`}
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
      <div
        className={`fixed w-60 top-0 right-0 border-l border-[#f0f0f0] dark:border-[#252528] bg-white dark:bg-black p-2 h-screen overflow-y-auto pt-16 z-30 ${
          isNavOpen ? " right-0" : " right-[-100%]"
        } transition-all`}
      >
        <ul className="space-y-4">
          {allComponents.map((comp, index) => (
            <li key={index}>
              {comp.type === "dropdown" ? (
                <div>
                  <SecondaryButton
                    className="w-full justify-between "
                    onPress={() => toggleCollapse(comp.name)}
                  >
                    {comp.name}{" "}
                    <Down
                      className={`size-6 transition-transform ${
                        !collapsed[comp.name] && "rotate-180"
                      }`}
                    />
                  </SecondaryButton>
                  {!collapsed[comp.name] && (
                    <ul className="space-y-2 ml-4 mt-2">
                      {comp.components.map((subComp, subIndex) => (
                        <SecondaryButton
                          className={`w-full  !justify-start ${
                            selectedComponentName === subComp.name &&
                            " !bg-[#005cf0] !text-white"
                          }`}
                          key={subIndex}
                          onPress={() =>
                            handleComponentSelect(index, subIndex, subComp.name)
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
                  onPress={() =>
                    handleComponentSelect(index, subIndex, subComp.name)
                  }
                >
                  {comp.name}
                </SecondaryButton>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComponentsWrapper;
