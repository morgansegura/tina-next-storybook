import { ImageLoaderProps } from "next/image";

export interface IImage extends ImageLoaderProps {
    alt: string;
    fill?: boolean;
    height?: number;
    src: string;
    quality: number;
    width: number;
}
