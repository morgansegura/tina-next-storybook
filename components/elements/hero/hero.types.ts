import { IImage } from "@components/elements/image/image.types";
import { colors } from "@styles/colors/colors.config";

export type TContent = {
    title?: string;
    supertitle?: string;
    subtitle?: string;
    copy?: string;
};

export type TBanner = {
    src?: string;
    options?: {};
};

export type TOptions = {
    bgColor?: typeof colors | string;
    shadowColor?: typeof colors | string;
    textColor?: typeof colors | string;
};

export type TVideo = {
    src?: string;
    options?: {};
};

export interface IHeroImage extends IImage {}

export interface IHero {
    content?: TContent;
    video?: TVideo;
    image?: IHeroImage[];
    options?: TOptions;
    banner?: TBanner;
}
