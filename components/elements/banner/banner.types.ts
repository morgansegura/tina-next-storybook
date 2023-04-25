import { ReactNode } from "react";
import { IButton } from "@components/elements/button/button.types";

export type TVariant = {};

export type TTitle = {
    as?: any;
    label?: string;
    textColor?: string;
};

export type TSelector = {
    path?: string;
    label?: string;
    bgColor?: string;
    textColor?: string;
};

export interface IBanner {
    children?: ReactNode;
    title?: TTitle;
    selector?: TSelector;
    variant?: TVariant;
}
