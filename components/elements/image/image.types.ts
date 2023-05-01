import { ImageLoaderProps } from "next/image";
import { GenericType } from "types/generic.type";

export interface IImage {
    fill?: boolean;
    alt: string;
    height?: number;
    src: string;
    quality: number;
    priority?: boolean;
    width?: number;
    sizes?: string;
    rest?: GenericType;

    options?: {
        variant?: "background-image";
    };
}
