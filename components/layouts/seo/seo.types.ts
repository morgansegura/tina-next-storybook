import { ReactNode } from "react";

export interface ISeo {
    children: ReactNode | ReactNode[];
    description: string;
    title?: string;
    image?: string;
    path?: string;
}
