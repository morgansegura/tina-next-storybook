// [Components]
import Button from "@components/elements/button/button.component";
import Image from "@components/elements/image/image.component";
// [Styled]
import * as s from "@components/layout/hero-explore/hero-explore.styled";
// [Types]
import { IHeroExplore } from "@components/layout/hero-explore/hero-explore.types";
import useWindowSize from "@hooks/useWindowSize";

export default function HeroExplore({
    copy,
    image,
    title,
    shadowColor,
    textColor,
    bgColor,
    selectors,
}: IHeroExplore) {
    const size = useWindowSize();

    const mobileImage = size.width <= 1023;
    const desktopImage = size.width > 1023;

    return (
        <s.Hero
            shadowColor={shadowColor}
            bgColor={bgColor}
        >
            <s.Content>
                <s.Title
                    textColor={textColor}
                    variant="xl"
                >
                    {title}
                </s.Title>
                <s.Copy
                    textColor={textColor}
                    variant="p"
                >
                    {copy}
                </s.Copy>
                {selectors && (
                    <s.ButtonContainer>
                        <>
                            <Button
                                href={selectors[0]?.href}
                                icon={selectors[0]?.icon}
                                label={selectors[0]?.label}
                                onClick={selectors[0]?.onClick}
                                target={selectors[0]?.target}
                                title={selectors[0]?.title}
                            >
                                {selectors[0]?.children}
                            </Button>
                            <Button
                                href={selectors[1]?.href}
                                icon={selectors[1]?.icon}
                                label={selectors[1]?.label}
                                onClick={selectors[1]?.onClick}
                                target={selectors[1]?.target}
                                title={selectors[1]?.title}
                            >
                                {selectors[1]?.children}
                            </Button>
                        </>
                    </s.ButtonContainer>
                )}
            </s.Content>
            {image &&
                (image.length > 1 ? (
                    <s.Image>
                        <>
                            {mobileImage && (
                                <Image
                                    src={image[0].src}
                                    alt={image[0].alt}
                                    fill={true}
                                    quality={image[0].quality}
                                    priority
                                />
                            )}
                            {desktopImage && (
                                <Image
                                    src={image[1].src}
                                    fill={true}
                                    alt={image[1].alt}
                                    quality={image[1].quality}
                                    priority
                                />
                            )}
                        </>
                    </s.Image>
                ) : (
                    <s.Image>
                        <Image
                            src={image[0].src}
                            alt={image[0].alt}
                            fill={true}
                            quality={image[0].quality}
                            priority
                        />
                    </s.Image>
                ))}
        </s.Hero>
    );
}
