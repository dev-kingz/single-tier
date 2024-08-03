import {cn} from "@/lib/utils";
import {BaseProps} from "@/types/theme";
import SocialIcons from "@/components/icons/socials";

const ContactUs = ({className}: BaseProps) => {
  return (
    <section className={cn("ContactUs", "flexi w-full flex-col gap-4 sm:items-start", className)}>
      <h4>Contact Us</h4>
      <div className="ContactDetails flexi-it w-full flex-col">
      <SocialIcons />
      </div>
    </section>
  );
};

export default ContactUs;
