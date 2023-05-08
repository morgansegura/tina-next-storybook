import { ElementType, ReactNode } from "react";
import clsx from "clsx";
// [Styles]
// import "./Typography.css";
export interface ITypography {
    component?: ElementType;
    children?: ReactNode;
    className?: string;
    variant?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function Typography({
    component = "p",
    className,
    children,
    variant,
}: ITypography) {
    const Component = component;
    return (
        <Component
            className={clsx("Typography", `Typography__${variant}`, className)}
        >
            {children}
        </Component>
    );
}
