import {cn} from "@/lib/utils";
import {BaseProps} from "@/types/theme";
import React from "react";
import {FcLandscape} from "react-icons/fc";
import {Breadcrumbs, BreadcrumbsListProps} from "@/components/headers/title-header/breadcrumbs";

interface TitleHeaderProps extends BaseProps, BreadcrumbsListProps {
  title: string;
  showBreadcrumb?: boolean;
  icon?: React.ReactNode;
}

const TitleHeader = ({
  title,
  className,
  children,
  showBreadcrumb,
  breadcrumbList,
  icon = <FcLandscape className="mb-1 h-auto w-8 sm:w-10" />,
}: TitleHeaderProps) => {
  return (
    <section
      className={cn("TitleHeader flexib w-full flex-col gap-2 py-4 sm:gap-4 sm:py-6", className)}
    >
      <div className="flexit-it w-full max-w-7xl gap-3 ps-5">
        {icon}
        <div className="flexi-it text-foreground flex-col">
          <h1>{title}</h1>
          {showBreadcrumb && <Breadcrumbs breadcrumbList={breadcrumbList} />}
        </div>
      </div>
      {children}
    </section>
  );
};

export default TitleHeader;
