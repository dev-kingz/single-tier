import * as React from "react";
import Link from "next/link";

import {cn} from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {NavList} from "../hamburger-sidebar/constants";

const NavMenu = () => {
  const navList = NavList;
  return (
    <NavigationMenu className="hidden sm:flex">
      <NavigationMenuList>
        {navList.map((navItem) => (
          <NavigationMenuItem key={navItem.href}>
            <Link href={navItem.href} passHref>
                {navItem.title}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
