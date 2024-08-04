import {Brand} from "@/constants/brand";
import {cn} from "@/lib/utils";
import {BaseProps} from "@/types/theme";
import Link from "next/link";
import {FaInstagram, FaLinkedin} from "react-icons/fa";
import {RiFacebookCircleLine} from "react-icons/ri";
import {TbBrandTiktok} from "react-icons/tb";

const iconMap = {
  facebook: RiFacebookCircleLine,
  instagram: FaInstagram,
  tiktok: TbBrandTiktok,
  linkedin: FaLinkedin,
};

interface SocialIconsProps extends BaseProps {
  position?: "header" | "footer";
}

const SocialIcons = ({position = "footer", className}: SocialIconsProps) => {
  const brand = Brand;
  return (
    <div className="flexi gap-4">
      {Object.entries(brand.socials).map(([platform, url]) => {
        if (!url) return null;

        const IconComponent = iconMap[platform as keyof typeof iconMap];

        return (
          <Link
            key={platform}
            href={url}
            className="border-background rounded-lg border-[1px] p-1.5 drop-shadow-md transition-all hover:scale-105 hover:cursor-pointer hover:drop-shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconComponent
              className={cn(
                "h-5 w-5",
                position === "header" ? "text-foreground" : "",
                position === "footer" ? "text-background" : "",
                className,
              )}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialIcons;
