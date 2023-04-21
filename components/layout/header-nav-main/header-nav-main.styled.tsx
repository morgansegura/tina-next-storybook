import styled, { css } from "styled-components";
// [Utilities]
import { fontSizing } from "@styles/typography/typography.config";
import { sp } from "@styles/spacing";
import { colors } from "@styles/colors/colors.config";
import { minwidth, screens } from "@styles/screens/screens.config";
// [Styles]
import { MenuDivider, MenuItem } from "@components/elements/menu/menu.styled";
import { Selector } from "@components/elements/dropdown-menu/dropdown-menu.styled";

export const HeaderNavMain = styled.nav`
    display: flex;
    justify-self: center;
    position: relative;

    div {
        &:not(:first-child) {
            margin-left: ${sp[8]};

            ${minwidth(screens.desktop.base)(`
                margin-left: ${sp[14]};
            `)}
        }
    }
`;

export const HeaderNavItem = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    user-select: none;
    cursor: pointer;
    ${fontSizing("16px", "24px", 500)}
    color: ${colors.grey};
    transition: color 0.3s ease-out;

    ${Selector} {
        display: flex;
        align-items: center;
    }

    svg {
        margin-top: 3px;
        margin-left: ${sp[2]};
        width: ${sp[4]};
        height: ${sp[4]};
        transition: transform 0.3s ease-out;

        path {
            fill: ${colors.grey};
            transition: fill 0.3s ease-out;
        }
    }

    &:hover {
        color: ${colors.ebony};

        svg path {
            fill: ${colors.ebony};
        }
    }
`;

HeaderNavItem.defaultProps = {
    selectable: true,
};

export const NavMenuLinkDivider = styled(MenuDivider)`
    height: 1px;
    margin-top: ${sp[4.5]};
    margin-bottom: ${sp[4.5]};
    margin-left: ${sp[4]};
    background-color: rgba(${colors.black}, 0.12);
`;

export const NavMenuLinks = styled.nav`
    ${fontSizing("18px", "24px", 700)}

    ${HeaderNavItem} {
        padding-left: ${sp[8]};

        &:first-of-type {
            padding-top: 29px;
        }

        &:not(:first-of-type) {
            padding-top: ${sp[4]};
        }

        &:not(:last-of-type) {
            padding-bottom: ${sp[4]};
        }
    }
`;
NavMenuLinks.defaultProps = {};

export const NavMenuLinkItem = styled(MenuItem)`
    padding-left: ${sp[8]};

    &:not(:first-child) {
        padding-top: 13px;
    }
    &:not(:last-child) {
        padding-bottom: 13px;
    }
    &:first-child {
        padding-top: 29px;
    }
    &:last-child {
        padding-top: 18px;
    }
`;
NavMenuLinks.defaultProps = {
    active: false,
};

export const NavMenuAllLink = styled(MenuItem)`
    a {
        padding-left: ${sp[8]};
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 14px;

        ${fontSizing("18px", "24px", 700)}

        svg {
        }
    }
`;
NavMenuAllLink.defaultProps = {};

// [NavMenuImage Section]

export const NavMenuImagePlayButton = styled.div`
    position: absolute;
    align-self: center;
    justify-self: center;
    display: grid;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    width: ${sp[16]};
    height: ${sp[16]};
    background-color: ${colors.white};
    transition: opacity 0.3s ease-out;

    svg {
        position: relative;
        top: 0;
        left: 2px;
        /* border: 1px solid lime; */
        width: 20px;
        height: 20px;
    }
`;
NavMenuImagePlayButton.defaultProps = {};

export const NavMenuImage = styled.div`
    position: relative;
    display: grid;
    width: 392px;
    height: 392px;
    border-radius: ${sp[3]};
    overflow: hidden;
    cursor: pointer;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(
            0deg,
            rgba(1, 1, 1, 0.5) 10.57%,
            rgba(1, 1, 1, 0) 72.42%
        );
    }

    &:hover {
        ${NavMenuImagePlayButton} {
            opacity: 0.75;
        }
    }
`;
NavMenuImage.defaultProps = {};
export const NavMenuImageContent = styled.div`
    position: absolute;
    bottom: ${sp[6]};
    left: ${sp[6]};
`;
NavMenuImageContent.defaultProps = {};
export const NavMenuImageSubtitle = styled.div`
    ${fontSizing("15px", "20px", 700)};
    color: ${colors.white};
`;
NavMenuImageSubtitle.defaultProps = {};
export const NavMenuImageTitle = styled.div`
    ${fontSizing("24px", "28px", 700)};
    color: ${colors.white};
`;
NavMenuImageTitle.defaultProps = {};
