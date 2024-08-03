import {Button} from "@/components/ui/button";
import {Brand} from "@/constants/brand";
import Link from "next/link";
import React from "react";

const LastCol = () => {
  const brand = Brand;

  return (
    <div className="PrivacyAndTerms flexi flex-col sm:flex-row">
      <Button asChild variant="link" className="text-foreground py-0">
        <Link href={"/privacy-and-policy"} className="PrivacyAndPolicy">
          <p className="ppl">Privacy and Policy</p>
        </Link>
      </Button>
      <p className="ppl">&nbsp;-&nbsp;</p>
      <Button asChild variant="link" className="text-foreground py-0">
        <Link href={"/terms-and-conditions"} className="TermsAndConditions">
          <p className="ppl">Terms and Conditions</p>
        </Link>
      </Button>
    </div>
  );
};

export default LastCol;
