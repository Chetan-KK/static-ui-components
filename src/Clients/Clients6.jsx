import React from "react";
import SectionHeading from "../components/utils/SectionHeading";

const Clients6 = () => {
  return (
    <div className="py-10">
      <SectionHeading
        heading="what our clients says"
        subHeading="what our clients says"
      />
      <div className="lg:container mx-auto p-2 my-7 md:px-20 md:my-16 grid grid-cols-1 md:grid-cols-[auto_1fr] items-center justify-items-center md:justify-items-end gap-0 sm:gap-20">
        <video
          src="/dummyVideo.mp4"
          className="w-full h-auto sm:w-[30rem] md:h-[25rem] object-cover rounded-xl"
          autoPlay
          loop
          // controls
        ></video>

        <div className={`mx-2 sm:mx-auto my-5 space-y-5`}>
          <q className="text-center text-xl sm:text-2xl md:text-5xl mb-3 md:mb-5">
            Etiam nulla lectus amet nunc molestie at vulputate.
          </q>
          <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
            <b> Courtney Henry </b> - Marketing Coordinator
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clients6;
