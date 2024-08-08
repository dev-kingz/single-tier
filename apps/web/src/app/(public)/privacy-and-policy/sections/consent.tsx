import SectionHeader from "@/components/headers/section-header";
import React from "react";

const Consent = () => {
  return (
    <section className="Consent flexit-it flex-col px-8 py-4 sm:px-48">
      <SectionHeader title="Consent" />
      <p className="Text">
        By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        <br />
        <br />
      </p>
    </section>
  );
};

export default Consent;
