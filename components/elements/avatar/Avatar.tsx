import clsx from "clsx";
// [Components]
import Image from "@components/elements/imagekit/Imagekit";
import UserIcon from "@components/elements/icons/user/User";

// [Styles]
import s from "./Avatar.module.css";
// [Types]
import { IUserPreferences } from "types/user.types";

export interface IAvatar {
    className?: string;
    user: IUserPreferences;
    emboss?: boolean;
    size: "sm" | "md" | "lg" | "xl" | "2xl";
}

export default function Avatar({
    className,
    emboss,
    size = "md",
    user,
}: IAvatar) {
    const { avatar } = user;

    let avatarSize: number;

    switch (size) {
        case "sm":
            avatarSize = 24;
            break;
        case "md":
            avatarSize = 32;
            break;
        case "lg":
            avatarSize = 40;
            break;
        case "xl":
            avatarSize = 64;
            break;
        case "2xl":
            avatarSize = 120;
            break;
    }

    return avatar && avatar?.image?.src ? (
        <div
            className={clsx(
                s.Avatar,
                `${s.Avatar}__${size}`,
                emboss && s.Avatar__emboss,
                className
            )}
        >
            <Image
                className={s.Avatar__image}
                width={avatarSize}
                height={avatarSize}
                src={avatar.image.src}
                alt={avatar.image?.alt}
                quality={100}
            />
        </div>
    ) : (
        <div
            className={clsx(
                s.Avatar,
                `${s.Avatar}__${size}`,
                emboss && s.Avatar__emboss,
                className
            )}
        >
            <UserIcon />
        </div>
    );
}
