import { GenericType } from "types/generic.type";
import { ReactNode } from "react";
import { colors } from "../../../styles/colors/colors.config";

export type TVariant = {
    rounded?: number;
    theme?: "light" | "dark";
    color?: typeof colors | string;
    icon?: "left" | "right";
    outline?: number;
};

export interface IButton {
    as?: any;
    bgColor?: string;
    children?: ReactNode;
    icon?: "right" | "left";
    label?: string;
    path?: string;
    onClick?: Function;
    textColor?: string;
    variant?: string;
    rest?: GenericType;
}
