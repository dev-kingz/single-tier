import React from "react";
import FirstCol from "./first-col";
import LastCol from "./last-col";

const LastSection = () => {
  return (
    <section className="LastSection flexi bg-background w-full">
    <section className="flexib bg-background w-full flex-col py-2 sm:flex-row max-w-7xl">
      <FirstCol />
    <LastCol />
    </section>
    </section>
  );
};

export default LastSection;
