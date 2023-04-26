// [Components]
import Typography from "@components/elements/typography/typography.component";
// [Styles]
import * as s from "@components/layout/hero/hero-explore/hero-explore.module.scss";
// [Types]
import { IHeroExplore } from "@components/layout/hero/hero-explore/hero-explore.types";

export default function HeroExplore({
    bgColor,
    children,
    copy,
    image,
    selectors,
    textColor,
    title,
}: IHeroExplore) {
    return (
        <div className={wrapper}>
            <div>
                <Typography as={h1} className={}>
                    {title}
                </Typography>
                <s.Copy>{copy}</s.Copy>
                {selectors && <s.Selectors>{selectors}</s.Selectors>}
            </div>
            {image && <s.ImageContainer>{image}</s.ImageContainer>}
            {children}
        </div>
    );
}
