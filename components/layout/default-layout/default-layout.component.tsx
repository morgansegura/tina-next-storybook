// [Hooks]
import useScrollDirection from "@hooks/useScrollDetection";
// [Components]
import Seo from "@components/layout/seo/seo.component";
import Header from "@components/layout/header/header.component";
import Footer from "@components/layout/footer/footer.component";
// [Styles]
import * as s from "@components/layout/default-layout/default-layout.styled";
// [Types]
import { IDefaultLayout } from "@components/layout/default-layout/default-layout.types";
import { IUser } from "types/user.types";

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

    const avatar = {
        image: { src: "/v5/avatar/avatar-nogen4.jpeg", alt: "Snake Avatar" },
        // image: { src: "", alt: "Snake Avatar" },
    };

    const user: IUser = {
        preferences: { avatar },
        authenticated: true,
    };

    return (
        <Seo title={title} description={description}>
            <s.Wrapper>
                <Header user={user} />
                <s.Main animateScrollDirection={scrolling}>
                    <s.Contain>{children}</s.Contain>
                </s.Main>
                <Footer />
            </s.Wrapper>
        </Seo>
    );
}
