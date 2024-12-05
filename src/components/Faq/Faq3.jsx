import React, { useState } from "react";
import SectionHeading from "../utils/SectionHeading";
import { Button } from "react-aria-components";
import Down from "../../assets/icons/Down";

const Faq3 = () => {
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
    <div className="container mx-auto py-10 grid items-center min-h-screen sm:gap-5 sm:grid-cols-[auto_auto]">
      <SectionHeading
        className={"w-full !text-left !p-2 sm:!p-0"}
        heading="Frequently Asked Questions"
        subHeading="Pellentesque cras adipiscing tempus libero vel nullam mauris tellus. Aliquam ultrices tellus consequat amet, lectus aliquam est in neque."
      />
      <div className="container mx-auto max-w-[45rem] my-14 px-2">
        {contents.map((content, i) => (
          <div
            key={i}
            className="flex flex-col items-start  border-b border-[#f0f0f0] dark:border-[#252528] pb-4 mb-4"
          >
            <Button
              onPress={() => handleToggle(i)}
              className="flex gap-2 font-bold text-left justify-between items-center w-full p-2"
            >
              <h3>{content.q}</h3>
              <Down
                className={`size-5 transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : "rotate-0"
                }`}
              />
            </Button>
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

export default Faq3;
