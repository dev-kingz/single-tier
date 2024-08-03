import {ThemeToggle} from "@/components/theme/toggle";
import {SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {RxHamburgerMenu} from "react-icons/rx";


const LastCol = () => {
  return (
    <div className="LastCol flexi">
        <ThemeToggle rounded={"full"} />
        <SheetTrigger asChild className="flex sm:hidden">
          <Button variant="link">
            <RxHamburgerMenu className="text-foreground h-6 w-6 stroke-1" />
          </Button>
        </SheetTrigger>
      </div>
  )
}

export default LastCol