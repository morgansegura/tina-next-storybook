import { ReactNode } from "react";
// [Styles]
// // import "./Banner.css";
import clsx from "clsx";
// [Types]
export interface IBanner {
    children?: ReactNode;
    variant: "footer" | "beard";
}

export default function Banner({ children, variant = "footer" }: IBanner) {
    return (
        <div className={clsx("Banner", `Banner__${variant}`)}>{children}</div>
    );
}
