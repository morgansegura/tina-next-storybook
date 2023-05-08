import { ReactNode } from "react";

declare module "react" {
    export interface HTMLAttributes<T> {
        animateScrollDirection?: string;
        size?: string | number;
        user?: {} | undefined;
        selectable?: boolean;
        active?: boolean | string;
        as?: (as) => as;
        properties?: any;
        shadowColor?: typeof colors | string;
        bgColor?: typeof colors | string;
        textColor?: typeof colors | string;
        variant?: any;
        direction?: "top" | "right" | "bottom" | "left";
    }
}
