import { ReactNode } from "react";
import clsx from "clsx";
import useScrollDirection from "@hooks/useScrollDetection";
// [Components]
import Container from "@components/elements/container/Container";
import Seo from "@components/layouts/seo/seo.component";
import Header from "@components/layouts/header/Header";
import Footer from "@components/layouts/footer/Footer";
// [Styles]
// import "./Layout.css";
// [Types]
import { IUser } from "types/user.types";

export interface ILayout {
    children: ReactNode;
    className?: string;
    description: string;
    title: string;
}

export default function Layout({
    children,
    className,
    description,
    title,
}: ILayout) {
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
        <Seo
            title={title}
            description={description}
        >
            <section className="Layout__wrapper">
                <Header user={user} />
                <main className={clsx("Layout__main", scrolling)}>
                    <Container>{children}</Container>
                </main>
                <Footer />
            </section>
        </Seo>
    );
}
