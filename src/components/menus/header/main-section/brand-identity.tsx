import {Brand} from "@/constants/brand";
import Image from "next/image";
import React from "react";

const BrandIdentity = () => {
  const brand = Brand;
  return (
    <div className="flexi">
      <Image
        src={brand["white-icon"]}
        alt={brand.name}
        width={50}
        height={50}
        className="flex dark:hidden"
      />
      <Image
        src={brand["black-icon"]}
        alt={brand.name}
        width={50}
        height={50}
        className="hidden dark:flex"
      />
      <h3 className="text-foreground font-secondary font-semibold">{brand.name}</h3>
    </div>
  );
};

export default BrandIdentity;
