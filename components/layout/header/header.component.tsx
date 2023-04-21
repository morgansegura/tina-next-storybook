import { useEffect, useRef, useState } from "react";
import Link from "next/link";
// [Hooks]
import useScrollDirection from "@hooks/useScrollDetection";
//[Components]
import Logo from "@components/elements/logo/logo.component";
import HeaderNavUser from "@components/layout/header-nav-user/header-nav-user.component";
import HeaderNavMain from "@components/layout/header-nav-main/header-nav-main.component";

//[Styled]
import * as s from "@components/layout/header/header.styled";
// [Types]
import { IHeader } from "@components/layout/header/header.types";

function HeaderLogo() {
    return (
        <Link href="/">
            <s.LogoSvg>
                <Logo />
            </s.LogoSvg>
        </Link>
    );
}

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
        <s.Wrapper animateScrollDirection={scrolling}>
            <s.Contain animateScrollDirection={scrolling}>
                <HeaderLogo />
                <HeaderNavMain />
                <HeaderNavUser user={user} />
            </s.Contain>
        </s.Wrapper>
    );
}
