import { ReactNode } from "react";

export interface IDropdownMenu {
    children: ReactNode;
}

export interface ISelector {
    children: ReactNode;
    icon: ReactNode;
}
export interface IMenu {
    as?: any;
    children: ReactNode;
}
