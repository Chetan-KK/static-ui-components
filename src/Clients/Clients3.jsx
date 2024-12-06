import React from "react";

const Clients3 = () => {
  const contents = [
    "/clientLogo.png",
    "/clientLogo.png",
    "/clientLogo.png",
    "/clientLogo.png",
    "/clientLogo.png",
    "/clientLogo.png",
  ];

  return (
    <div className=" sm:container mx-auto py-10">
      <h1 className="font-bold text-center text-sm sm:text-base mb-10 mx-5">
        Organizations of all sizes builds with ModelsLab for their production of
        AI applications
      </h1>
      <div className=" flex gap-10 10 items-center justify-center flex-wrap">
        {contents.map((img, _) => (
          <img key={_} src={img} className="h-10 w-auto" alt="" />
        ))}
      </div>
    </div>
  );
};

export default Clients3;
