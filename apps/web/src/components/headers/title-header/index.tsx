import {cn} from "@/lib/utils";
import {BaseProps} from "@/types/theme";
import React from "react";
import {FcLandscape} from "react-icons/fc";
import {Breadcrumbs, BreadcrumbsListProps} from "@/components/headers/title-header/breadcrumbs";
import {Separator} from "@/components/ui/separator";

interface TitleHeaderProps extends BaseProps, BreadcrumbsListProps {
  title: string;
  subTitle?: string;
  showBreadcrumb?: boolean;
  icon?: React.ReactNode;
}

const TitleHeader = ({
  title,
  subTitle,
  className,
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
          <h2>{title}</h2>
          <h6 className="text-sm font-normal">{subTitle}</h6>
          {showBreadcrumb && <Breadcrumbs breadcrumbList={breadcrumbList} />}
        </div>
      </div>
      <Separator />
    </section>
  );
};

export default TitleHeader;
