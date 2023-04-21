import { ReactNode } from "react";
import { IUser } from "types/user.types";

export interface IHeader {
    children?: ReactNode | ReactNode[];
    user: IUser;
}
