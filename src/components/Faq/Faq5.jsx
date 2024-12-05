import React, { useState } from "react";
import SectionHeading from "../utils/SectionHeading";
import Down from "../../assets/icons/Down";
import SecondaryButton from "../utils/SecondaryButton";
import Button from "../utils/Button";
import Sun from "../../assets/icons/Sun";
import Moon from "../../assets/icons/Moon";

const Faq5 = () => {
  const contents = [
    {
      q: "How soon will my order ship?",
      a: "Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.",
    },
    {
      q: "Can I track my order?",
      a: "Pellentesque habitant morbi tristique senectus et netus et malesuada.",
    },
    {
      q: "What payment methods are accepted?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    },
    {
      q: "Can I change my order after placing it?",
      a: "Quisque sagittis purus sit amet volutpat consequat. In congue tortor nec urna sollicitudin.",
    },
    {
      q: "What is your return policy?",
      a: "Fusce ut placerat orci nulla. Pellentesque eget nunc sit amet urna ullamcorper fermentum.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-10 grid  min-h-screen sm:gap-5 md:grid-cols-[auto_auto]">
      <div className="p-5 mb-10">
        <SectionHeading
          className={"w-full !text-left !p-2 sm:!p-0"}
          heading="Still Have Questions? We have answers"
          subHeading="Want to know more? You can email us anytime at "
        />
        <a href="mailto:support@modelslab.com" className="text-[#005cf0]">
          support@modelslab.com
        </a>
        <div className="flex gap-2 mt-5 flex-wrap">
          <Button className={"!rounded-full"}>
            {" "}
            <Sun className="size-5" /> Book a Meeting
          </Button>
          <Button color={"dark"} className={"!rounded-full"}>
            <Moon className="size-5" /> View Docs
          </Button>
        </div>
      </div>
      <div className="container mx-auto max-w-[45rem] px-2">
        {contents.map((content, i) => (
          <div key={i} className="flex flex-col items-start pb-4 mb-4">
            <SecondaryButton
              onPress={() => handleToggle(i)}
              className="justify-between w-full !text-left !whitespace-normal p-2"
            >
              <h3>{content.q}</h3>
              <Down
                className={`size-5 transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : "rotate-0"
                }`}
              />
            </SecondaryButton>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="p-2 text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
                {content.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq5;
