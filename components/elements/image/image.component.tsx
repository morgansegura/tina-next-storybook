import { ImageLoaderProps } from "next/image";
// [Styles]
import * as s from "@components/elements/image/image.styled";
// [Types]
import { IImage } from "@components/elements/image/image.types";

const imageKitLoader = ({ src, width, quality }: ImageLoaderProps) => {
    if (src[0] === "/") src = src.slice(1);
    const params = [`w-${width}`];
    if (quality) {
        params.push(`q-${quality}`);
    }
    const paramsString = params.join(",");
    var urlEndpoint = "https://ik.imagekit.io/bpweb1/web/media";
    if (urlEndpoint[urlEndpoint.length - 1] === "/")
        urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
    return `${urlEndpoint}/${src}?tr=${paramsString}`;
};

export default function Image({
    alt,
    fill,
    height,
    src,
    quality,
    width,
}: IImage) {
    return (
        <s.Img
            alt={alt}
            fill={fill}
            height={height}
            loader={imageKitLoader}
            src={src}
            width={width}
            quality={quality}
        />
    );
}
