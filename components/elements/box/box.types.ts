import { ReactNode } from "react";
import { GenericType } from "types/generic.type";
import { colors } from "@styles/colors/colors.config";

export type TVariant = {
    style?: string;
};

export type TDevice = {
    mobile?: {
        sm?: number;
        base?: number;
    };
    tablet?: number;
    desktop?: {
        sm?: number;
        base?: number;
        lg?: number;
    };
};

export type TSpacing = {
    x?: TDevice;
    y?: TDevice;
    top?: TDevice;
    right?: TDevice;
    bottom?: TDevice;
    left?: TDevice;
};

export type TProperties = {
    mb?: TDevice;
    padding?: TDevice;
    textColor?: typeof colors | string;
    bgColor?: typeof colors | string;
};

export interface IBox {
    as?: any;
    className?: string;
    children?: ReactNode;
    rest?: GenericType;
    variant?: string;
}
