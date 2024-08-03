import {cn} from "@/lib/utils";
import {BaseProps} from "@/types/theme";
import SocialIcons from "@/components/icons/socials";

const ContactUs = ({className}: BaseProps) => {
  return (
    <section className={cn("ContactUs", "flexi w-full flex-col sm:items-start gap-2", className)}>
      <h4>Contact Us</h4>
      <SocialIcons />
    </section>
  );
};

export default ContactUs;
