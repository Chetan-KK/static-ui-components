import React from "react";

const Clients4 = () => {
  const contents = [
    "/clientLogo.png",
    "/clientLogo.png",
    "/clientLogo.png",
    "/clientLogo.png",
    "/clientLogo.png",
  ];

  return (
    <div className="sm:container mx-auto py-10 flex gap-10 10 items-center justify-center flex-wrap">
      {contents.map((img, _) => (
        <img key={_} src={img} className="h-14 w-auto" alt="" />
      ))}
    </div>
  );
};

export default Clients4;
