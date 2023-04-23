import Link from "next/link";
// [Components]
import Image from "@components/elements/image/image.component";

// [Styles]
import * as s from "@components/elements/avatar/avatar.styled";
// [Types]
import { IAvatar } from "@components/elements/avatar/avatar.types";
import UserIcon from "../icons/user/user.component";

export default function Avatar({ properties, user }: IAvatar) {
    const { avatar } = user;

    return avatar && avatar?.image?.src ? (
        <s.Avatar
            properties={{ emboss: true, size: properties?.size }}
            user={avatar}
        >
            <Image
                width={properties?.size || 32}
                height={properties?.size || 32}
                src={avatar.image.src}
                alt={avatar.image?.alt}
                quality={100}
            />
        </s.Avatar>
    ) : (
        <s.Avatar user={avatar} properties={{ size: properties?.size }}>
            <UserIcon />
        </s.Avatar>
    );
}
