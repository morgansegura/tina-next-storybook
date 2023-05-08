import useWindowSize from "@hooks/useWindowSize";
// [Components]
import Button, { IButton } from "@components/elements/button/Button";
import Image from "@components/elements/imagekit/Imagekit";
// [Styled]
import './HeroExplore.css'
// [Types]
export interface IImage {
    fill?: boolean;
    alt: string;
    height?: number;
    src: string;
    quality: number;
    priority?: boolean;
    width?: number;
    sizes?: string;

    options?: {
        variant?: "background-image";
    };
}
export interface IHeroExplore {
    bgColor?: string;
    copy?: string;
    image?: IImage[];
    shadowColor?: string;
    textColor?: string;
    selectors?: IButton[];
    title?: string;
}



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
                                icon={image: selectors[0]?.icon, direction: "left"}
                                label={selectors[0]?.label}
                                onClick={selectors[0]?.onClick}
                                target={selectors[0]?.target}
                                title={selectors[0]?.title}
                                size={selectors[0]?.size}
                                variant={selectors[0]?.variant}
                            />
                            <Button
                                href={selectors[1]?.href}
                                icon={image: selectors[1]?.icon, direction: "left"}
                                label={selectors[1]?.label}
                                onClick={selectors[1]?.onClick}
                                target={selectors[1]?.target}
                                title={selectors[1]?.title}
                                size={selectors[1]?.size}
                                variant={selectors[1]?.variant}
                            />
                        </>
                    </s.ButtonContainer>
                )}
            </s.Content>
            {image &&
                (image.length > 1 ? (
                    <s.Image>
                        <>
                            {mobileImage ? (
                                <Image
                                    src={image[0].src}
                                    alt={image[0].alt}
                                    fill={true}
                                    quality={image[0].quality}
                                    priority
                                />
                            ) : (
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
