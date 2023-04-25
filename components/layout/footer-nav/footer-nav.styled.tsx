import styled, { css } from "styled-components";
import { rgba } from "polished";
import { sp } from "@styles/spacing";
import { colors } from "@styles/colors/colors.config";
import { fontSizing } from "@styles/typography/typography.config";
import { minwidth, screens } from "@styles/screens/screens.config";

export const SectionTitle = styled.h4`
    ${fontSizing("14px", "18px", 600)};
    text-transform: uppercase;
    margin-bottom: ${sp[4]};
`;

type TFooterNav = {
    order?: number;
};

export const FooterNavMain = styled.nav`
    display: grid;
    grid-template-columns: 172px 1fr;
    grid-column: ${sp[5]};
    margin-bottom: ${sp[8]};

    ${minwidth(screens.desktop.sm)(`
        grid-template-columns: 1fr;
    `)}
`;

export const FooterNavMainItem = styled.div`
    ${fontSizing("16px", "22px", 400)};
    padding-bottom: ${sp[4]};

    ${({ order }: TFooterNav) =>
        css`
            order: ${order};
        `};

    ${minwidth(screens.desktop.sm)(`
        order: initial;
    `)}
`;

export const SocialNavWrapper = styled.nav``;

export const SocialNav = styled.nav`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
    column-gap: ${sp[2.5]};

    ${minwidth(screens.desktop.sm)(`
        order: initial;
    `)}
`;

export const SocialNavItem = styled.div`
    cursor: pointer;
    display: grid;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    width: ${sp[10]};
    height: ${sp[10]};
    border: 1px solid;
    border-color: rgba(255, 255, 255, 0.15);
    transition: border-color 0.3s ease-out;
    margin-bottom: ${sp[12]};

    svg {
    }
    path {
        fill: ${colors.white};
    }

    &:hover {
        border-color: ${rgba(colors.white, 0.25)};
    }
`;

SocialNavItem.defaultProps = {};
