import styled from "styled-components";
import { rgba } from "polished";

import { Button } from "@components/elements/button/button.styled";
import { Container } from "@components/elements/container/container.styled";

import { colors } from "@styles/colors/colors.config";
import { minwidth, screens } from "@styles/screens/screens.config";
import { sp } from "@styles/spacing";
import { fontSizing } from "@styles/typography/typography.config";
import {
    Banner,
    Title,
    Selector,
} from "@components/elements/banner/banner.styled";

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

export const FooterBanner = styled.div`
    ${Banner} {
        display: grid;
        justify-content: center;
        position: relative;
        ${fontSizing("13px", "16px")};
        color: ${rgba(colors.white, 0.7)};

        ${minwidth(screens.desktop.sm)(`
        grid-template-columns: 898px 1fr;
    `)}
    }

    ${Title} {
        ${fontSizing("32px", "38px", 700)};
        max-width: 745px;

        ${minwidth(screens.desktop.sm)(`
        ${fontSizing("42px", "52px", 700)};
    `)}

        ${minwidth(screens.desktop.base)(`
        ${fontSizing("48px", "56px", 700)};
    `)}
    }

    ${Selector} {
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
    }
`;

export const IconContainer = styled.div`
    margin-bottom: ${sp[6]};
`;
