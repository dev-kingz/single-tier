import React from "react";
import FirstCol from "./first-col";
import LastCol from "./last-col";

const LastSection = () => {
  return (
    <section className="LastSection flexi bg-background w-full">
      <section className="flexib bg-background w-full max-w-7xl flex-col px-8 py-2 sm:flex-row">
        <FirstCol />
        <LastCol />
      </section>
    </section>
  );
};

export default LastSection;
