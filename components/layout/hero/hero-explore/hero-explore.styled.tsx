import styled from "styled-components";
import { Typography } from "@components/elements/typography/typography.styled";
import { sp } from "@styles/spacing";
import { Container } from "@components/elements/container/container.styled";
import { fontSizing } from "@styles/typography/typography.config";
import { minwidth, screens } from "@styles/screens/screens.config";
import { Button } from "@components/elements/button/button.styled";
import { colors } from "@styles/colors/colors.config";
import { IHeroExplore } from "./hero-explore.types";
import { rgba } from "polished";

export const Wrapper = styled(Container)`
    z-index: 1;
    position: relative;
    box-shadow: 0px 3.81757px 3.81757px rgba(62, 64, 84, 0.2),
        0px 6.10811px 7.63514px rgba(107, 115, 132, 0.14),
        0px 2.29054px 10.6892px rgba(164, 171, 183, 0.12);
    border-radius: ${sp[3]};
    overflow: hidden;

    &:before {
        content: "";
        z-index: 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background-image: linear-gradient(
            180deg,
            rgba(92, 86, 74, 0) 19.04%,
            ${({ bgColor }: any) => (bgColor ? bgColor : colors.pink50)} 58.64%
        );

        ${minwidth(screens.desktop.sm)(`
            background-image: linear-gradient(
                90deg,
                ${({ bgColor }: any) =>
                    bgColor ? bgColor : colors.pink50} 20.18%,
                rgba(
                        ${({ bgColor }: any) =>
                            bgColor ? bgColor : colors.pink50},
                        0.62
                    )
                    45.1%,
                rgba(92, 86, 74, 0) 67.47%
            );
        `)}
    }
`;

export const Content = styled.div`
    position: relative;
    display: grid;
    color: ${({ textColor }: any) => (textColor ? textColor : colors.white)};
    max-width: 366px;
    padding: ${sp[70]} ${sp[4]} ${sp[6]} ${sp[4]};

    ${minwidth(screens.tablet)(`
        max-width: 448px;
        padding: 406px 124px ${sp[10]} 148px;
    `)}

    ${minwidth(screens.desktop.sm)(`
        padding: ${sp[16]} 0 ${sp[16]} ${sp[12]};
    `)}

    ${minwidth(screens.desktop.base)(`
        padding: 154px 0 114px 128px;
    `)}

    ${minwidth(screens.desktop.lg)(`
        max-width: 538px;
        padding: 245px 0 179px 152px;
    `)}
`;
export const Title = styled(Typography)`
    ${fontSizing("32px", "36px", 600)};
    margin-bottom: ${sp[2]};
`;

Title.defaultProps = {
    as: "h1",
};

export const Copy = styled(Typography)`
    ${fontSizing("16px", "24px", 400)};
    margin-bottom: ${sp[6]};
`;
Copy.defaultProps = {
    as: "p",
};

export const Selectors = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: ${sp[3]};

    ${Button} {
        border-radius: ${sp[1]};
    }

    ${minwidth(screens.desktop.sm)(`
        ${Button} {
            &:first-child {
                border-radius: ${sp[3]};
            }
        }
        grid-template-columns: repeat(auto-fit, minmax(366px, 1fr));
        column-gap: ${sp[4]};
    `)}
`;
export const ImageContainer = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    img {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;

        ${minwidth(screens.desktop.sm)(`
            /* top: -135px; */
        `)}
    }
`;
