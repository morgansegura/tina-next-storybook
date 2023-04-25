import { ReactNode } from "react";

export interface IFooterNav {}

export type TNavItem = {
    label: string;
    icon?: ReactNode;
    path: string;
    title?: string;
    target?: string;
    width?: number;
    height?: number;
    order?: number;
};

export interface INav {
    socialNav: TNavItem[];
}
