import {Brand} from "@/constants/brand";
import {cn} from "@/lib/utils";
import {BaseProps} from "@/types/theme";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BrandIdentityProps extends BaseProps {
  inverted?: boolean;
}

const BrandIdentity = ({className, inverted = false}: BrandIdentityProps) => {
  const brand = Brand;
  return (
    <div className={cn("gap--x-1 flexi", className)}>
      <Link href={"/"}>
        <Image
          src={brand["whiteIcon"]}
          alt={brand.name}
          width={50}
          height={50}
          className={cn(
            "BrandIconWhite drop-shadow-md",
            inverted ? "hidden dark:flex" : "flex dark:hidden",
          )}
        />
        <Image
          src={brand["blackIcon"]}
          alt={brand.name}
          width={50}
          height={50}
          className={cn(
            "BrandIconBlack drop-shadow-md",
            inverted ? "flex dark:hidden" : "hidden dark:flex",
          )}
        />
        <h3
          className={cn(
            "BrandName -mb-1 font-secondary drop-shadow-md",
            inverted ? "text-background" : "",
          )}
        >
          {brand.name}
        </h3>
      </Link>
    </div>
  );
};

export default BrandIdentity;
