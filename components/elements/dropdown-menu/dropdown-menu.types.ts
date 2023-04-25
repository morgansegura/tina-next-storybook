import { ReactNode } from "react";

export interface IProperties {
    active?: boolean;
}

export interface IDropdownMenu {
    children: ReactNode;
}

export interface ISelector {
    children: ReactNode;
    icon?: ReactNode;
    rotate?: boolean;
}
export interface IMenu {
    as?: any;
    children: ReactNode;
    forceArrowPosX?: number;
    position?: "center" | "left" | "right";
}
