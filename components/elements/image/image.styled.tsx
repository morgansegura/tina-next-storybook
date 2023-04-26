import Image from "next/image";
import styles from "styled-components";

export const Img = styles(Image)`
    ${({ variant }) =>
        variant === "cover-image"
            ? `
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
    `
            : ``}
`;

Img.defaultProps = {
    alt: "",
    height: 720,
    src: "explore-v2/headers/2021-05-25/wide/hero-themes.jpg",
    quality: 65,
    width: 1280,
    variant: "",
};
