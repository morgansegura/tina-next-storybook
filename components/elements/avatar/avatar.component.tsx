import Link from "next/link";
// [Components]
import Image from "@components/elements/image/image.component";

// [Styles]
import * as s from "@components/elements/avatar/avatar.styled";
// [Types]
import { IAvatar } from "@components/elements/avatar/avatar.types";
import UserIcon from "../icons/user/user.component";

export default function Avatar({ size, user }: IAvatar) {
    const { avatar } = user;

    return avatar && avatar?.image?.src ? (
        <s.Avatar size={size} user={avatar}>
            <Image
                width={size}
                height={size}
                src={avatar.image.src}
                alt={avatar.image?.alt}
                quality={100}
            />
        </s.Avatar>
    ) : (
        <s.Avatar size={size} user={avatar}>
            <UserIcon />
        </s.Avatar>
    );
}
