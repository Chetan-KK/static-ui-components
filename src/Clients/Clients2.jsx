import React from "react";

const Clients2 = () => {
  return (
    <div className="sm:container mx-auto py-10 px-2">
      <div className="bg-white dark:bg-black border mx-auto max-w-[55rem] rounded-2xl p-4 text-center border-[#f0f0f0] dark:border-[#252528] grid grid-cols-1 sm:grid-cols-2 gap-y-10 md:grid-cols-4">
        <div className="sm:border-r border-[#f0f0f0] dark:border-[#252528]">
          <h1 className="text-3xl mb-2 font-bold">1B+</h1>
          <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
            Images Generated
          </p>
        </div>
        <div className="md:border-r border-[#f0f0f0] dark:border-[#252528]">
          <h1 className="text-3xl mb-2 font-bold">300k+</h1>
          <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
            Users
          </p>
        </div>

        <div className="sm:border-r border-[#f0f0f0] dark:border-[#252528]">
          <h1 className="text-3xl mb-2 font-bold">5k+</h1>
          <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
            Discord Community
          </p>
        </div>

        <div>
          <h1 className="text-3xl mb-2 font-bold">25+</h1>
          <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
            APIs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clients2;
