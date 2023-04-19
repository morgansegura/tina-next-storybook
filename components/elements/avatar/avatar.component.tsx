import Link from "next/link";
// [Styles]
import * as s from "@components/elements/avatar/avatar.styled";
// [Types]
import { IAvatar } from "@components/elements/avatar/avatar.types";
import UserIcon from "../icons/user/user.component";

export default function Avatar({ size, user }: IAvatar) {
    return user ? (
        <s.Avatar size={size} user={user}>
            avatar.component
        </s.Avatar>
    ) : (
        <Link href="/login">
            <s.Avatar size={size} user={user}>
                <UserIcon />
            </s.Avatar>
        </Link>
    );
}
