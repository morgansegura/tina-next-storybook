import { useEffect, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
// [Hooks]
import useScrollDirection from "@hooks/useScrollDetection";
import useWindowSize from "@hooks/useWindowSize";
//[Components]
import Logo from "@components/elements/logo/Logo";
import HeaderNavUser from "@components/layouts/header/HeaderNav";
import HeaderNavMain from "@components/layouts/header/HeaderUser";

//[Styled]
// import "./Header.css";
// [Types]
import { IUser } from "types/user.types";
export interface IHeader {
    children?: ReactNode;
    user?: IUser;
}

function HeaderLogo() {
    return (
        <Link href="/">
            <div className="Header__logo">
                <Logo />
            </div>
        </Link>
    );
}

export default function Header({ user }: IHeader) {
    const size = useWindowSize();
    const { scrollDirection, distance } = useScrollDirection();
    const mobile = size.width <= 1023;

    useEffect(() => {}, []);

    let scrolling =
        scrollDirection === "down" && distance > 105
            ? "fade-out"
            : scrollDirection === "up" && distance > 0
            ? "fade-in"
            : ``;

    return (
        <header className={clsx("Header__wrapper", scrolling)}>
            <div className={"Header__contain"}>
                <HeaderLogo />
                {!mobile && <HeaderNavMain />}
                <HeaderNavUser user={user} />
            </div>
        </header>
    );
}
