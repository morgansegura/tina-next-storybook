import Image from "next/image";
import styles from "styled-components";

export const Img = styles(Image)``;

Img.defaultProps = {
    alt: "",
    fill: false,
    src: "",
    quality: 65,
};
