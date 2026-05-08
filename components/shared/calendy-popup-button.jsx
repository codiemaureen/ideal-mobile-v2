"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const PopupButton = dynamic(
  () => import("react-calendly").then((mod) => mod.PopupButton),
  { ssr: false }
);

const CalendlyPopup = () => {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    setRootElement(document.body);
  }, []);

  if (!rootElement) return null;

  return (
    <PopupButton
      url="https://calendly.com/idealmobiledetailingmi/30min"
      rootElement={rootElement}
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