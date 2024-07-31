import {Brand} from "@/constants/brand";
import Image from "next/image";
import React from "react";

const BrandIdentity = () => {
  const brand = Brand;
  return (
    <div className="flexi">
      <Image
        src={brand["whiteIcon"]}
        alt={brand.name}
        width={50}
        height={50}
        className="flex drop-shadow-md dark:hidden"
      />
      <Image
        src={brand["blackIcon"]}
        alt={brand.name}
        width={50}
        height={50}
        className="hidden drop-shadow-md dark:flex"
      />
      <h3 className="font-secondary font-semibold text-foreground drop-shadow-md">{brand.name}</h3>
    </div>
  );
};

export default BrandIdentity;
