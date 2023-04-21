import styled, { css } from "styled-components";
import { rem, rgba } from "polished";
// [Variables]
import { colors } from "@styles/colors/colors.config";
import { minwidth, screens } from "@styles/screens/screens.config";
import { sp } from "@styles/spacing";
import { fontSizing } from "@styles/typography/typography.config";
// [Styles]
import { Container } from "@components/elements/container/container.styled";
import {
    IconSvg,
    IconSvgPath,
    TextSvg,
    TextSvgPath,
} from "@components/elements/logo/logo.styled";
import { MenuItem, MenuDivider } from "@components/elements/menu/menu.styled";

import {
    Selector,
    MenuPanel,
} from "@components/elements/dropdown-menu/dropdown-menu.styled";

export const Wrapper = styled.div`
    position: sticky;
    z-index: 50;
    left: 0;
    right: 0;
    display: grid;
    align-items: center;
    transform: translateY(0);
    min-height: 104px;
    max-height: 104px;
    opacity: 1;

    ${({ animateScrollDirection }) =>
        animateScrollDirection === "fade-in"
            ? css`
                  position: fixed;
              `
            : animateScrollDirection === "fade-out"
            ? css``
            : css`
                  position: relative;
              `}

    ${minwidth(screens.mobile.sm)(`
    `)}
`;

Wrapper.defaultProps = {};

export const Contain = styled(Container)`
    align-self: center;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 2fr 1fr;
    height: 72px;
    border-radius: ${sp[2]};

    ${({ animateScrollDirection }) =>
        animateScrollDirection === "fade-in"
            ? css`
                  background-color: ${colors.white};
                  opacity: 1;
                  transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
              `
            : animateScrollDirection === "fade-out"
            ? css`
                  background-color: transparent;
                  opacity: 0;
                  transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
              `
            : css``}

    ${minwidth(screens.mobile.sm)(`
        padding-right: ${sp[4]};
        padding-left: ${sp[4]};
    `)}
    ${minwidth(screens.desktop.sm)(`
        padding-right: ${sp[8]};
        padding-left: ${sp[8]};
    `)}
`;

Contain.defaultProps = {};

export const LogoSvg = styled.div`
    ${minwidth(screens.mobile.sm)(`
        ${IconSvg} {
            width: ${rem("31px")};
            height: ${rem("31px")};
        }
        ${IconSvgPath} {}
        ${TextSvg} {
            margin-left: ${rem("8px")};
            width: ${rem("95.51px")};
            height: auto;
        }
        ${TextSvgPath} {}
    `)}
    ${minwidth(screens.tablet)(`
        ${IconSvg} {
            width: ${rem("32px")};
            height: ${rem("32px")};
        }
        ${IconSvgPath} {}
        ${TextSvg} {
            margin-left: ${rem("8.61px")};
            width: ${rem("99.38px")};
        }
        ${TextSvgPath} {}
    `)}
    ${minwidth(screens.desktop.sm)(`
        ${IconSvg} {
            width: ${rem("32px")};
            height: ${rem("32px")};
        }
        ${IconSvgPath} {}
        ${TextSvg} {
            margin-left: ${rem("8.73px")};
            width: ${rem("100.79px")};
        }
        ${TextSvgPath} {}
    `)}
    ${minwidth(screens.desktop.base)(`
        ${IconSvg} {
            width: ${rem("40px")};
            height: ${rem("40px")};
        }
        ${IconSvgPath} {}
        ${TextSvg} {
            margin-left: ${rem("10.94px")};
            width: ${rem("126.35px")};
        }
        ${TextSvgPath} {}
    `)};
`;

LogoSvg.defaultProps = {};

export const NavItem = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    user-select: none;
    cursor: pointer;

    ${({ selectable }) =>
        !selectable
            ? css`
                  user-select: none;
                  cursor: default;
              `
            : css``}
    transition: fill 0.3s ease-out, color 0.3s ease-out;

    ${Selector} {
        display: flex;
        align-items: center;
        border: 1px solid red;
    }
`;

NavItem.defaultProps = {
    selectable: true,
};

export const NavMenu = styled.nav`
    display: flex;
    position: relative;

    div {
        &:not(:first-child) {
            margin-left: ${sp[8]};
        }
    }

    ${NavItem} {
        ${fontSizing("16px", "24px", 700)}

        svg {
            margin-top: 3px;
            margin-left: ${sp[2]};
            width: ${sp[4]};
            height: ${sp[4]};
            transition: transform 0.3s ease-out;
        }
    }
`;

NavMenu.defaultProps = {};

export const NavMenuPanel = styled.div`
    ${MenuPanel} {
    }
`;

NavMenu.defaultProps = {
    active: false,
};

export const NavMenuLinkDivider = styled(MenuDivider)`
    height: 1px;
    margin-top: ${sp[4.5]};
    margin-bottom: ${sp[4.5]};
    margin-left: ${sp[4]};
    background-color: ${rgba(colors.black, 0.12)};
`;

export const NavMenuLinks = styled.nav`
    ${NavItem} {
        ${fontSizing("18px", "24px", 700)}

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

    a {
        ${fontSizing("18px", "24px", 700)}
    }

    /* ${({ active }) =>
        active
            ? css`
                  svg {
                      transform: rotate(180deg);
                  }
              `
            : css`
                  transform: rotate(0deg);
              `} */
`;
NavMenuLinks.defaultProps = {
    active: false,
};

export const NavMenuAllLink = styled(MenuItem)`
    padding-left: ${sp[8]};
    display: flex;
    align-items: center;
    ${fontSizing("18px", "24px", 700)}

    span:nth-child(1) {
        flex: 1 0 auto;
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

// [User Menu]

export const UserMenu = styled.nav`
    display: flex;
    justify-self: flex-end;

    ${NavItem} {
        align-items: center;
        opacity: 1;
        transition: opacity 0.3s ease-in;

        &:not(:first-child) {
            margin-left: ${sp[2]};
        }
        &:not(:last-child) {
            margin-right: ${sp[2]};
        }

        &:hover {
            opacity: 0.5;
            transition: opacity 0.3s ease-out;
        }
    }
`;

UserMenu.defaultProps = {};

export const UserMenuLinkDivider = styled(MenuDivider)`
    width: 1px;
    height: ${sp[6]};
`;
