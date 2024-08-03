import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export interface BreadcrumbsProps {
  label: string;
  href: string;
}

export interface BreadcrumbsListProps {
  breadcrumbList?: BreadcrumbsProps[];
}

export function Breadcrumbs({breadcrumbList}: BreadcrumbsListProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="py-0">
        {breadcrumbList &&
          breadcrumbList.map((breadcrumb, index) => (
            <>
              <BreadcrumbItem key={index}>
                <BreadcrumbLink href={`${breadcrumb.href}`}>{breadcrumb.label}</BreadcrumbLink>
              </BreadcrumbItem>
              {index < breadcrumbList.length - 1 && <BreadcrumbSeparator />}
            </>
          ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
