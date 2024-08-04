import {cn} from "@/lib/utils";
import {BaseProps} from "@/types/theme";
import SocialIcons from "@/components/icons/socials";
import Link from "next/link";
import {Brand} from "@/constants/brand";
import {Button} from "@/components/ui/button";

const ContactUs = ({className}: BaseProps) => {
  const brand = Brand;
  return (
    <section className={cn("ContactUs", "flexi w-full flex-col gap-4 sm:items-start", className)}>
      <h4>Contact Us</h4>
      <div className="ContactDetails flexi w-full flex-col gap-2 sm:items-start">
        <Button asChild variant={"link"} className="text-background px-0">
          <Link href={`mailto:${brand.email}`} className="Email">
            <p>{brand.email}</p>
          </Link>
        </Button>
        <SocialIcons />
      </div>
    </section>
  );
};

export default ContactUs;
