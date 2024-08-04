import {Brand} from "@/constants/brand";
import Link from "next/link";
import React from "react";

const FirstCol = () => {
  const brand = Brand;

  return (
    <div className="AllRightsReserved">
      <p className="ppl">
        ©2024&nbsp;
        <Link href={"/"} className="DevKingzHome">
          {brand.name}
        </Link>
        - All Rights Reserved
      </p>
    </div>
  );
};

export default FirstCol;
