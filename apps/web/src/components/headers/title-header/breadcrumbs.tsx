import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export interface BreadcrumbsProps {
  label: string;
  href?: string;
  currentPage?: boolean;
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
                {breadcrumb.currentPage ? (
                  <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={`${breadcrumb.href}`}>{breadcrumb.label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < breadcrumbList.length - 1 && <BreadcrumbSeparator />}
            </>
          ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
