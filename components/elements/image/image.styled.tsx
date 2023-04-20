import Image from "next/image";
import styles from "styled-components";

export const Img = styles(Image)``;

Img.defaultProps = {
    alt: "",
    fill: false,
    height: 720,
    src: "explore-v2/headers/2021-05-25/wide/hero-themes.jpg",
    quality: 65,
    width: 1280,
};
