export interface NavItemProps {
  title: string;
  icon?: React.ReactNode;
  href: string;
  children?: NavItemProps[];
}

export const NavList: NavItemProps[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Web Development",
        href: "/services/web-development",
      },
      {
        title: "Mobile Development",
        href: "/services/mobile-development",
      },
      {
        title: "Design",
        href: "/services/design",
      },
    ],
  },
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "About",
    href: "/about-us",
  },
  {
    title: "Contact",
    href: "/contact-us",
  },
];
