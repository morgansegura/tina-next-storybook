// [Components]
import Typography from "@components/elements/typography/typography.component";
// [Styles]
import s from "@components/layout/hero/hero-explore/hero-explore.module.scss";
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
        <div className="wrapper">
            <div>
                <Typography as="h1" className={s.Title}>
                    {title}
                </Typography>
                <Typography as="p" className={s.Copy}>
                    {copy}
                </Typography>

                {selectors && <div className={s.Selectors}>{selectors}</div>}
            </div>
            {image && <div className={s.ImageContainer}>{image}</div>}
            {children}
        </div>
    );
}
