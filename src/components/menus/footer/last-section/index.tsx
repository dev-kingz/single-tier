import React from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Brand} from "@/constants/brand";

const LastSection = () => {
  const brand = Brand;
  return (
    <section className="LastSection flexib w-full flex-col bg-background py-2 sm:flex-row lg:px-36">
      <div className="AllRightsReserved">
        <p className="ppl">
          ©2024{" "}
          <Link href={"/"} className="DevKingzHome">
            {brand.name}
          </Link>{" "}
          - All Rights Reserved
        </p>
      </div>

      <div className="PrivacyAndTerms flexi flex-col sm:flex-row">
        <Button asChild variant="link" className="py-0 text-foreground">
          <Link href={"/privacy-and-policy"} className="PrivacyAndPolicy">
            <p className="ppl">Privacy and Policy</p>
          </Link>
        </Button>
        <p className="ppl">&nbsp;-&nbsp;</p>
        <Button asChild variant="link" className="py-0 text-foreground">
          <Link href={"/terms-and-conditions"} className="TermsAndConditions">
            <p className="ppl">Terms and Conditions</p>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LastSection;
