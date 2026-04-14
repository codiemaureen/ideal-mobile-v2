"use client";

import dynamic from "next/dynamic";

const PopupButton = dynamic(
  () => import("react-calendly").then((mod) => mod.PopupButton),
  { ssr: false }
);

const CalendlyPopup = () => {
  return (
    <PopupButton
      url="https://calendly.com/idealmobiledetailingmi/30min"
      rootElement={document.body}
      text="Book Now"
      className="
        w-full
        rounded-xl
        bg-[#0B132B]
        px-6
        py-3
        text-center
        text-sm
        font-semibold
        text-white
        shadow-md
        transition
        duration-200
        hover:bg-[#1C2541]
        hover:cursor-pointer
        active:scale-[0.98]
      "
    />
  );
};

export default CalendlyPopup;