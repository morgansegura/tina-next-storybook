import useWindowSize from "@hooks/useWindowSize";
// [Components]
import Image from "@components/elements/image/image.component";
// [Styled]
import * as s from "@components/elements/hero/hero.styled";
// [Types]
import { IHero } from "@components/elements/hero/hero.types";

export default function Hero({ content, image, video }: IHero) {
    const size = useWindowSize();

    const imageSwap = size.width <= 1023;

    return (
        <s.Hero>
            {/* <s.Content>
                {content?.supertitle && (
                    <s.Supertitle>{content?.supertitle}</s.Supertitle>
                )}
                {content?.title && (
                    <s.Title variant="xl">{content?.title}</s.Title>
                )}
                {content?.subtitle && (
                    <s.Subtitle variant="lg">{content?.subtitle}</s.Subtitle>
                )}
                {content?.copy && <s.Copy variant="sm">{content?.copy}</s.Copy>}
            </s.Content>
            <s.Media>
                {image && (
                    <s.Image>
                        {image.length > 1 ? (
                            image.map((item: any, i: number) =>
                                imageSwap ? (
                                    <Image
                                        key={i}
                                        src={image[0].src}
                                        width={image[0].width}
                                        alt={image[0].alt}
                                        quality={image[0].quality}
                                        priority
                                    />
                                ) : (
                                    <Image
                                        key={i}
                                        src={image[1].src}
                                        width={image[1].width}
                                        alt={image[1].alt}
                                        quality={image[1].quality}
                                        priority
                                    />
                                )
                            )
                        ) : (
                            <Image
                                src={image[0].src}
                                width={image[0].width}
                                alt={image[0].alt}
                                quality={image[0].quality}
                                priority
                            />
                        )}
                    </s.Image>
                )}
                {video && <s.Video></s.Video>}
            </s.Media> */}
        </s.Hero>
    );
}
