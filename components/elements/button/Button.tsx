import { ElementType, ReactNode } from "react";
// [Styles]
// // import "./Button.css";
import Link from "next/link";
import clsx from "clsx";
// [Types]

export interface IButton {
    className?: string;
    component?: ElementType;
    children?: ReactNode;
    href?: string;
    icon?: {
        image?: ReactNode;
        direction?: "right" | "left";
    };
    label?: string;
    onClick?: Function;
    target?: string;
    title?: string;
    variant?: "solid" | "ghost" | "minimal";
    theme?: "dark" | "light";
    size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export default function Button({
    className,
    children,
    component = "button",
    href,
    icon,
    label,
    onClick,
    target,
    title,
    theme = "dark",
    size = "md",
    variant = "minimal",
}: IButton) {
    const Component = component;
    return href ? (
        <Link
            className={clsx(
                "Button",
                `Button__${theme}--${variant}`,
                `Button__${size}`,
                className
            )}
            data-title={title}
            href={href}
            target={target}
        >
            {icon && <span className="Button__icon">{icon.image}</span>}
            {label && <span className="Button__label">{label}</span>}
            {children && children}
        </Link>
    ) : (
        <Component
            className={clsx(
                "Button",
                `Button__${theme}--${variant}`,
                `Button__${size}`,
                className
            )}
            data-title={title}
            onClick={onClick}
        >
            {icon && <span className="Button__icon">{icon.image}</span>}
            {label && <span className="Button__label">{label}</span>}
            {children && children}
        </Component>
    );
}
