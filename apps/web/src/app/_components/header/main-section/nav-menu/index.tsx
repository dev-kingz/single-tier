import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {NavList} from "../../constants";
import {ListItem} from "./list-item";

const NavMenu = () => {
  const navList = NavList;
  return (
    <NavigationMenu className="hidden sm:flex">
      <NavigationMenuList className="gap-x-4">
        {navList.map((navItem) => (
          <NavigationMenuItem key={navItem.href}>
            {navItem.children ? (
              <>
                <NavigationMenuTrigger>
                  <h6>{navItem.title}</h6>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {navItem.children.map((child) => (
                      <ListItem key={child.href} title={child.title} href={child.href} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={navItem.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <h6>{navItem.title}</h6>
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
