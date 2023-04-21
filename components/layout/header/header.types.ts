import { ReactNode } from "react";

export interface IHeader {
    children?: ReactNode | ReactNode[];
    user: {} | undefined;
}

export interface IMenuChildren {
    label?: string;
    path: string;
    target?: string;
    icon?: ReactNode;
}

export interface IMenuCta {
    icon?: ReactNode;
    image?: {
        alt: string;
        src: string;
        type?: string;
    };
    path?: string;
    title?: string;
    subtitle?: string;
}

export type TMenuItems = {
    id: string | number;
    label?: string;
    path?: string;
    cta?: IMenuCta;
    submenu?: IMenuChildren[];
    all?: IMenuChildren;
};

export interface IUserMenu {
    user?: {};
}

export interface IDropdownPanel {
    id: string | number;
    data: TMenuItems;
}
