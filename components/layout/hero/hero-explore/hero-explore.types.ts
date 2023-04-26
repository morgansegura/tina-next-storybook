import { IColors } from "@styles/colors/colors.types";
import { ReactNode } from "react";

export interface IHeroExplore {
    children?: ReactNode;
    copy?: string;
    title: string;
    selectors?: ReactNode;
    image?: ReactNode;
    bgColor?: string;
    textColor?: IColors | string;
}
