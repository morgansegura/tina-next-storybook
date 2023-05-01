import { IButton } from "@components/elements/button/button.types";
import { IHeroImage } from "@components/elements/hero/hero.types";
import { colors } from "@styles/colors/colors.config";

export interface IHeroExplore {
    bgColor?: typeof colors | string;
    copy?: string;
    image?: IHeroImage[];
    shadowColor?: typeof colors | string;
    textColor?: typeof colors | string;
    selectors?: IButton[];
    title?: string;
}
