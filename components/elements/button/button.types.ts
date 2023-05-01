import { ReactNode } from "react";

export interface IButton {
    as?: any;
    bgColor?: string;
    children?: ReactNode;
    href?: string;
    icon?: ReactNode;
    label?: string;
    onClick?: Function;
    target?: string;
    textColor?: string;
    title?: string;
    variant?: "header-login" | "default";
}
