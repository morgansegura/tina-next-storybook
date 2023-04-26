import { useEffect } from "react";
import Link from "next/link";
// [Hooks]
import useScrollDirection from "@hooks/useScrollDetection";
//[Components]
import Logo from "@components/elements/logo/logo.component";
import HeaderNavUser from "@components/layout/header-nav-user/header-nav-user.component";
import HeaderNavMain from "@components/layout/header-nav-main/header-nav-main.component";

//[Styled]
import s from "@components/layout/header/header.module.scss";
// [Types]
import { IHeader } from "@components/layout/header/header.types";
import clsx from "clsx";

export default function Header({ user }: IHeader) {
    const { scrollDirection, distance } = useScrollDirection();

    useEffect(() => {}, []);

    let scrolling =
        scrollDirection === "down" && distance > 105
            ? "fade-out"
            : scrollDirection === "up" && distance > 0
            ? "fade-in"
            : ``;

    return (
        <div
            className={clsx(
                s.Wrapper,
                scrolling === "fade-in"
                    ? s.WrapperFadeIn
                    : scrolling === "fade-out"
                    ? s.WrapperFadeOut
                    : s.WrapperStatic,
                "contain-xxl"
            )}
        >
            <div
                className={clsx(
                    s.Contain,
                    scrolling === "fade-in"
                        ? s.ContainFadeIn
                        : scrolling === "fade-out"
                        ? s.ContainFadeOut
                        : s.ContainStatic,
                    "contain-xl"
                )}
            >
                <Link href="/">
                    <div className={s.LogoSvg}>
                        <Logo />
                    </div>
                </Link>

                {/* <HeaderNavMain />
                <HeaderNavUser user={user} /> */}
            </div>
        </div>
    );
}
