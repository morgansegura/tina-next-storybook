import { ReactNode } from "react";
import { colors } from "@styles/colors/colors.config";
import { GenericType } from "types/generic.type";

export interface ITypography {
    as?: any;
    className?: string;
    children?: ReactNode;
    rest?: GenericType;
}
