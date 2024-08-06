import {ThemeToggle} from "@/components/theme/toggle";
import {SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {RxHamburgerMenu} from "react-icons/rx";
import ProfileActions from "./profile-actions";

const LastCol = () => {
  return (
    <div className="LastCol flexi gap-x-1 sm:gap-x-3">
      <ProfileActions />
      <ThemeToggle rounded={"full"} className="hidden sm:flex" />
      <SheetTrigger asChild className="flex sm:hidden hover:scale-125 active:scale-125 duration-200 transition-all">
        <Button variant="link">
          <RxHamburgerMenu className="text-foreground h-6 w-6 stroke-1" />
        </Button>
      </SheetTrigger>
    </div>
  );
};

export default LastCol;
