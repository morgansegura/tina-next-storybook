import { ReactNode } from "react";
import { GenericType } from "types/generic.type";

export type TContainer = {
    as?: any;
    children?: ReactNode | ReactNode[];
    className?: string;
    disableGutters?: boolean;
    fixed?: boolean;
    maxWidth?:
        | false
        | "mobile"
        | "tablet"
        | "desktop-small"
        | "desktop"
        | "desktop-large"
        | "desktop-huge"
        | "full";
    rest?: GenericType;
};
