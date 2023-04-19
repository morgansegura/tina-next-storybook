import { ReactNode } from "react";

export interface IButton {
    as?: any;
    children?: ReactNode;
    icon?: "right" | "left";
}
