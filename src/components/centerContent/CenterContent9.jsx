import React from "react";

const CenterContent9 = () => {
  return (
    // todo: this component need some chages (not perfect yet)
    <div className="flex px-2 gap-5 mt-20 flex-col sm:flex-row items-center sm:items-start justify-center">
      <div className="max-w-72 md:max-w-96 space-y-7 md:space-y-14">
        <img
          className="h-40 rounded-md object-cover w-full max-w-80 mx-auto"
          src="/dummyImgLight.png"
          alt=""
        />
        <div>
          <h1 className="font-bold text-xl mb-3 sm:mb-5">
            Choose language, emotion
          </h1>
          <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
            Select the language and desired emotion. Click on Generate.
          </p>
        </div>
        <img
          className="h-40 rounded-md object-cover w-full max-w-80 mx-auto"
          src="/dummyImgLight.png"
          alt=""
        />
        <div>
          <h1 className="font-bold text-xl mb-3 sm:mb-5">Download File</h1>
          <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
            Download the generated audio; stream it directly as MP3 or WAV, and
            export it as other formats.
          </p>
        </div>
      </div>
      <svg
        className="hidden sm:block stroke-[#2b2b2b] dark:stroke-[#4d4d4d] text-[#e6e6e6] dark:text-[#2b2b2b]"
        width="26"
        height="685"
        viewBox="0 0 26 685"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="12.5" y1="12" x2="12.5" y2="685" stroke="currentColor" />
        <circle cx="12" cy="12" r="11.5" fill="gray" stroke="currentColor" />
        <circle cx="12" cy="12" r="3" fill="white" />
        <circle cx="12" cy="196" r="11.5" fill="gray" stroke="currentColor" />
        <circle cx="12" cy="196" r="3" fill="white" />
        <circle cx="14" cy="411" r="11.5" fill="gray" stroke="currentColor" />
        <circle cx="14" cy="411" r="3" fill="white" />
        <circle cx="12" cy="602" r="11.5" fill="gray" stroke="currentColor" />
        <circle cx="12" cy="602" r="3" fill="white" />
      </svg>
      <div className="max-w-72 md:max-w-96 space-y-14">
        <div>
          <h1 className="font-bold text-xl mb-3 sm:mb-5">
            Enter Prompt or Upload script
          </h1>
          <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
            Type in, paste, or upload texts or scripts to convert to speech.
          </p>
        </div>
        <img
          className="h-40 rounded-md object-cover w-full max-w-80 mx-auto"
          src="/dummyImgLight.png"
          alt=""
        />
        <div>
          <h1 className="font-bold text-xl mb-3 sm:mb-5">Do Customization</h1>
          <p className="text-[#4d4d4d] dark:text-[#ababab] text-sm sm:text-base">
            Wait for AI voices to get ready. Edit them, fine-tune origins, and
            customise narration speed.
          </p>
        </div>

        <img
          className="h-40 rounded-md object-cover w-full max-w-80 mx-auto"
          src="/dummyImgLight.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default CenterContent9;
