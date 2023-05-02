import styled, { css } from "styled-components";
import { colors } from "@styles/colors/colors.config";
import { sp } from "@styles/spacing";
import { inset } from "@utils/helpers";
import { Typography } from "@components/elements/typography/typography.styled";
import { minwidth, screens } from "@styles/screens/screens.config";
import { rgba } from "polished";
import { bg } from "@styles/backgrounds";
import { fontSizing } from "@styles/typography/typography.config";

export const Hero = styled.div`
    position: relative;
    display: grid;
    overflow: hidden;
    width: 100%;
    border-radius: ${sp[3]};
    background-color: ${colors.neutral300};
    filter: drop-shadow(0px 3.81757px 3.81757px rgba(62, 64, 84, 0.2))
        drop-shadow(0px 6.10811px 7.63514px rgba(107, 115, 132, 0.14))
        drop-shadow(0px 2.29054px 10.6892px rgba(164, 171, 183, 0.12));

    &:before {
        content: "";
        position: absolute;
        ${inset()};
        z-index: 1;
        ${({ shadowColor }: any) =>
            shadowColor
                ? css`
                      ${bg.linear([
                          "180deg",
                          "rgba(92, 86, 74, 0) 19.04%",
                          `${shadowColor} 58.64%`,
                      ])};

                      ${minwidth(screens.desktop.sm)(`
                            ${bg.linear([
                                "90deg",
                                `${shadowColor} 20.18%`,
                                `${rgba(shadowColor, 0.62)} 45.1%`,
                                "rgba(92, 86, 74, 0) 67.47%",
                            ])}
                        `)};
                  `
                : css`
                rgba(1,1,1,0) 0%, rgba(0,0,0,.7) 100%
                      ${bg.linear([
                          "180deg",
                          "rgba(92, 86, 74, 0) 19.04%",
                          `${colors.ebony} 58.64%`,
                      ])}

                      ${minwidth(screens.desktop.sm)(`
                        ${bg.linear([
                            "90deg",
                            `${rgba(colors.ebony, 0.62)} 20.18%`,
                            `${rgba(colors.ebony, 0)} 45.1%`,
                            "rgba(92, 86, 74, 0) 67.47%",
                        ])}
                  `)};
                  `}
    }
`;
export const Content = styled.div`
    z-index: 1;
    position: relative;
    padding: ${sp[71.5]} ${sp[4]} ${sp[6]} ${sp[4]};
    justify-self: center;

    ${minwidth(screens.tablet)(`
        padding: 406px 124px ${sp[16]} 148px;
    `)};

    ${minwidth(screens.desktop.sm)(`
        justify-self: flex-start;
        padding: ${sp[16]} 0 ${sp[16]} ${sp[12]};
    `)};

    ${minwidth(screens.desktop.base)(`
        padding: 154px 0 114px 128px;
    `)};

    ${minwidth(screens.desktop.lg)(`
        padding: 245px 0 179px 152px;
    `)};
`;
// [Content]
export const Title = styled(Typography)`
    color: ${colors.white};
    margin-bottom: ${sp[2]};
    max-width: 366px;
    ${fontSizing("32px", "36px", 600)};

    ${minwidth(screens.tablet)(`
        margin-bottom: ${sp[4]};
        text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
        max-width: 448px;
        ${fontSizing("48px", "52px", 600)};
    `)};

    ${minwidth(screens.desktop.sm)(`
        max-width: 412px;
    `)};

    ${minwidth(screens.desktop.base)(`
        margin-bottom: ${sp[6]};
        max-width: 448px;
        ${fontSizing("56px", "64px", 600)};
    `)};

    ${minwidth(screens.desktop.lg)(`
        max-width: 538px;
        ${fontSizing("58px", "64px", 600)}
    `)};
`;
Title.defaultProps = {
    as: "h1",
    variant: "lg",
};
export const Copy = styled(Typography)`
    color: ${colors.white};
    margin-bottom: ${sp[6]};
    max-width: 366px;
    ${fontSizing("16px", "24px")}

    ${minwidth(screens.tablet)(`
        margin-bottom: ${sp[8]};
        max-width: 412px;
        ${fontSizing("18px", "28px")}
    `)};

    ${minwidth(screens.desktop.base)(`
        margin-bottom: ${sp[10]};
        max-width: 448px;
        ${fontSizing("22px", "30px")}
    `)};

    ${minwidth(screens.desktop.lg)(`
        max-width: 538px;
        ${fontSizing("24px", "32px")}
    `)};
`;
Copy.defaultProps = {
    as: "p",
    variant: "sm",
};

// [Media]
export const Image = styled.div`
    z-index: 0;
    position: absolute;
    ${inset()};

    img {
        position: absolute;
        ${inset()};
        width: 100%;
        object-fit: cover;
    }
`;

// [Media]
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;

    ${minwidth(screens.tablet)(`
        flex-direction: row;
    `)};

    button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        ${fontSizing("14px", "15px", 600)}
        padding: ${sp[4.5]} ${sp[8]};
        border-radius: ${sp[1]};
        transition: color 0.3s linear, background-color 0.3s ease-out,
            border-color 0.3s ease-out;

        &:first-child {
            background-color: ${colors.white};
            color: ${colors.ebony};
            margin-bottom: ${sp[3]};

            ${minwidth(screens.tablet)(`
                border-radius: ${sp[3]};
                margin-bottom: unset;
                margin-right: ${sp[4]};
            `)};

            &:hover {
                background-color: ${colors.neutral100};
            }

            svg {
                margin-right: ${sp[2.5]};
                width: ${sp[3]};
                height: ${sp[3]};
            }
        }
        &:not(:first-child) {
            background-color: transparent;
            border: 2px solid ${colors.white};
            color: ${colors.white};

            ${minwidth(screens.desktop.sm)(`
                border-radius: ${sp[3]};
            `)};

            &:hover {
                border-color: ${colors.neutral200};
            }
        }
    }
`;
