import { cn } from "@/lib/utils";
import { BaseProps } from "@/types/theme";
import React from "react";
import { FcLandscape } from "react-icons/fc";

interface SectionHeaderProps extends BaseProps {
    title: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

const SectionHeader = ({
    title,
    className,
    icon,
    children,
}: SectionHeaderProps) => {
    return (
        <section
            className={cn("SectionHeader flexib w-full flex-col gap-2 sm:gap-4 sm:px-42 pb-4", className)}
        >
            <div className="flexit-it w-full max-w-7xl gap-3">
                {icon && <div className="icon-container">{icon}</div>}
                <div className="flexi-it text-foreground flex-col">
                    <h2>
                        {title}
                    </h2>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default SectionHeader;
