export type TUserAvatar = {
    image?: {
        src: string;
        alt: string;
    };
};

export interface IUserPreferences {
    avatar?: TUserAvatar;
}

export interface IUser {
    preferences: IUserPreferences;
    authenticated: boolean;
}
