import React, { useState } from "react";
import CircleIcon from "./CircleIcon";
import Copy from "../../assets/icons/Copy";
import Tick from "../../assets/icons/Tick";

const CopyIcon = ({ copyText = "" }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  return (
    <>
      {isCopied ? (
        <CircleIcon
          size={25}
          Icon={Tick}
          className="rounded-md"
          onPress={handleCopy}
        />
      ) : (
        <CircleIcon
          size={25}
          Icon={Copy}
          className="rounded-md"
          onPress={handleCopy}
        />
      )}
    </>
  );
};

export default CopyIcon;
