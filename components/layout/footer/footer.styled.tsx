import styled from "styled-components";
import { rgba } from "polished";

import { Button } from "@components/elements/button/button.styled";
import { Container } from "@components/elements/container/container.styled";

import { colors } from "@styles/colors/colors.config";
import { minwidth, screens } from "@styles/screens/screens.config";
import { sp } from "@styles/spacing";
import { fontSizing } from "@styles/typography/typography.config";

export const Footer = styled.footer`
    display: grid;
    background-color: ${colors.ebony};
    color: ${colors.white};
    padding-top: ${sp[12]};

    ${minwidth(screens.desktop.sm)(`
        padding-top: ${sp[20]};
    `)}
`;

export const Contain = styled(Container)`
    padding-right: ${sp[8]};
    padding-left: ${sp[8]};
    max-width: 1792px;

    ${minwidth(screens.desktop.base)(`
        padding-right: unset;
        padding-left: unset;
    `)}
`;

export const Grid = styled.div`
    display: grid;

    ${minwidth(screens.desktop.sm)(`
        grid-template-columns: 172px 250px 1fr 1fr;
        margin-bottom: 148px;
    `)}

    ${minwidth(screens.desktop.lg)(`
        grid-template-columns: 1fr 1fr 1fr 1fr;
    `)}
`;

export const Copyright = styled.p`
    ${fontSizing("13px", "16px", 400)};
    color: ${rgba(colors.white, 0.7)};
    margin-bottom: ${sp[8]};
`;

export const Banner = styled.div`
    display: grid;
    justify-content: center;
    position: relative;
    ${fontSizing("13px", "16px")};
    color: ${rgba(colors.white, 0.7)};
    margin-bottom: ${sp[14]};

    &:before {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-image: linear-gradient(
                90deg,
                transparent,
                transparent 50%,
                ${colors.ebony} 50%,
                ${colors.ebony} 100%
            ),
            linear-gradient(91.71deg, #69b4e2 5.53%, #d791d8 93.91%);
        background-size: 20px 3px, 100% 3px;
        border: none;
    }

    ${minwidth(screens.desktop.sm)(`
        grid-template-columns: 898px 1fr;
        margin-bottom: ${sp[18]};
    `)}
`;

export const Title = styled.h4`
    ${fontSizing("32px", "38px", 700)};
    margin-bottom: ${sp[8]};
    background: linear-gradient(
            91.71deg,
            rgba(105, 180, 226, 0.4) 5.53%,
            rgba(215, 145, 216, 0.4) 93.91%
        ),
        #ffffff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    max-width: 745px;

    ${minwidth(screens.desktop.sm)(`
        ${fontSizing("42px", "52px", 700)};
        margin-bottom: ${sp[20]};
    `)}

    ${minwidth(screens.desktop.base)(`
        ${fontSizing("48px", "56px", 700)};
    `)}
`;

export const Selector = styled(Button)`
    background-color: ${colors.button};
    ${fontSizing("16px", "20px", 500)};
    padding-top: ${sp[4.5]};
    padding-bottom: ${sp[4.5]};
    color: ${colors.grey};
    flex: 1 0 auto;
    margin-bottom: ${sp[14]};
    letter-spacing: -0.2px;
    border-radius: ${sp[4]};
    align-self: center;

    ${minwidth(screens.desktop.base)(`
        width: 220px;
        height: 80px;
        justify-self: center;
    `)}
`;

export const IconContainer = styled.div`
    margin-bottom: ${sp[6]};
`;
