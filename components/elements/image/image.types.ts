import { GenericType } from "types/generic.type";
import { ImageLoaderProps } from "next/image";

export type TVariant = {};
// @ts-ignore
export interface IImage extends ImageLoaderProps {
    alt: string;
    height?: number;
    objectFit?: string;
    objectPosition?: string;
    rest?: GenericType;
    src: string;
    quality: number;
    width?: number;
    variant?: any;
}
