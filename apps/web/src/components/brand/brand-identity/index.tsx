import {Brand} from "@/constants/brand";
import {cn} from "@/lib/utils";
import {BaseProps} from "@/types/theme";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BrandIdentityProps extends BaseProps {
  position?: "header" | "footer";
}

const BrandIdentity = ({className, position = "header"}: BrandIdentityProps) => {
  const brand = Brand;
  return (
    <Link href={"/"} className={cn("BrandIdentity flexi gap-x-1", className)}>
      <Image
        src={brand["whiteIcon"]}
        alt={brand.name}
        width={50}
        height={50}
        className={cn(
          "BrandIconWhite drop-shadow-md",
          position === "header" ? "flex dark:hidden" : "",
          position === "footer" ? "hidden dark:flex" : "",
        )}
      />
      <Image
        src={brand["blackIcon"]}
        alt={brand.name}
        width={50}
        height={50}
        className={cn(
          "BrandIconBlack drop-shadow-md",
          position === "header" ? "hidden dark:flex" : "",
          position === "footer" ? "flex dark:hidden" : "",
        )}
      />
      <h3
        className={cn(
          "BrandName font-secondary -mb-1 drop-shadow-md",
          position === "header" ? "text-foreground" : "",
        )}
      >
        {brand.name}
      </h3>
    </Link>
  );
};

export default BrandIdentity;
