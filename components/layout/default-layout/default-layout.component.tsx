// [Hooks]
import useScrollDirection from "@hooks/useScrollDetection";
// [Components]
import Seo from "@components/layout/seo/seo.component";
import Header from "@components/layout/header/header.component";
// [Styles]
import * as s from "@components/layout/default-layout/default-layout.styled";
// [Types]
import { IDefaultLayout } from "@components/layout/default-layout/default-layout.types";

export default function DefaultLayout({
    children,
    className,
    description,
    title,
}: IDefaultLayout) {
    const { scrollDirection, distance } = useScrollDirection();
    let scrolling =
        scrollDirection === "down" && distance > 105
            ? "fade-out"
            : scrollDirection === "up" && distance > 0
            ? "fade-in"
            : ``;

    return (
        <Seo title={title} description={description}>
            <s.Wrapper>
                <Header user={undefined} />
                <s.Main animateScrollDirection={scrolling}>
                    <s.Contain>{children}</s.Contain>
                </s.Main>
            </s.Wrapper>
        </Seo>
    );
}
