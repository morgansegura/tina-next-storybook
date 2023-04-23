import { IUserPreferences } from "types/user.types";

export type TProperties = {
    emboss?: boolean;
    size: number;
};

export interface IAvatar {
    user: IUserPreferences;
    properties?: TProperties;
}
