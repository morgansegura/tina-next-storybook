import Image, { ImageLoaderProps } from "next/image";
// [Styles]
// import "./Imagekit.css";
// [Types]
export interface IImage {
    alt: string;
    className: string;
    fill?: boolean;
    height?: number;
    src: string;
    quality: number;
    priority?: boolean;
    width?: number;
    sizes?: string;
}

const imageKitLoader = ({ src, width, quality }: ImageLoaderProps) => {
    if (src[0] === "/") src = src.slice(1);
    const params = [`w-${width}`];
    if (quality) {
        params.push(`q-${quality}`);
    }
    const paramsString = params.join(",");
    var urlEndpoint = "https://ik.imagekit.io/bpweb1/web/media/";
    if (urlEndpoint[urlEndpoint.length - 1] === "/")
        urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
    return `${urlEndpoint}/${src}?tr=${paramsString}`;
};

export default function Imagekit({
    alt,
    className,
    height,
    fill,
    priority,
    quality,
    src,
    width,
    sizes,
}: IImage) {
    return fill ? (
        <Image
            alt={alt}
            className={className}
            loader={imageKitLoader}
            src={src}
            sizes={sizes}
            quality={quality}
            priority={priority}
            fill={fill}
        />
    ) : (
        <Image
            alt={alt}
            className={className}
            height={height}
            loader={imageKitLoader}
            src={src}
            width={width}
            quality={quality}
            priority={priority}
        />
    );
}
