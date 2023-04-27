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
        variant?: any;
    }
}
