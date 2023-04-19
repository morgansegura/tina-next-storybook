import { ReactNode } from "react";

export interface IDefaultLayout {
    children: ReactNode | ReactNode[];
    className?: string;
    description: string;
    title: string;
}
