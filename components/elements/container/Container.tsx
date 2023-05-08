import { ElementType, ReactNode } from "react";
import clsx from "clsx";
// [Styles]
// import "./Container.css";

// [Types]
export type TContainer = {
    component?: ElementType;
    children?: ReactNode;
    className?: string;
    variant?: "sm" | "md" | "lg" | "xl" | "full";
};

export default function Container({
    component = "div",
    children,
    className,
    variant = "full",
}: TContainer) {
    const Component = component;

    return (
        <Component
            className={clsx("Container", `Container__${variant}`, className)}
        >
            {children}
        </Component>
    );
}
