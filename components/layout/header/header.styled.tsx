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
import {
    Menu,
    MenuItem,
    MenuDivider,
    MenuImage,
    MenuImageContent,
    MenuImageSubtitle,
    MenuImageTitle,
} from "@components/elements/menu/menu.styled";
import { MenuPanel } from "@components/elements/dropdown-menu/dropdown-menu.styled";

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
    cursor: pointer;

    ${({ selectable }) =>
        !selectable
            ? css`
                  user-select: none;
                  cursor: default;
              `
            : css``}
    transition: fill 0.3s ease-out, color 0.3s ease-out;
`;

NavItem.defaultProps = {
    selectable: true,
};

export const HeaderMenuDropdown = styled(Menu)`
    z-index: 1;
    display: grid;
    column-gap: ${sp[16]};
    grid-template-columns: 1fr 1fr;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${colors.white};
    padding: ${sp[6]};
    min-width: 867px;
    min-height: 440px;
    border-radius: ${sp[4]};
    filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.15));
    box-shadow: 0px 4px 15px rgba("black", 0.15);

    &::before {
        content: "";
        position: absolute;
        z-index: 0;
        user-select: none;
        pointer-events: none;
        top: 0;
        left: 50%;
        width: 50px;
        height: 50px;
        background-color: ${colors.white};
        clip-path: polygon(
            100% 0%,
            75% 50%,
            100% 100%,
            25% 100%,
            0% 50%,
            25% 0%
        );
        filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.15));
        transition: transform 0.9s ease-out;
        transform: rotate(90deg) translateX(-12px) translateY(calc(-50% + 50px));
    }

    ${MenuImage} {
        position: relative;
        width: 392px;
        height: 392px;
        border-radius: ${sp[3]};
        background-color: ${colors.black};

        &:before {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;

            content: "";
            background-image: linear-gradient(
                0deg,
                rgba(1, 1, 1, 0.5) 10.57%,
                rgba(1, 1, 1, 0) 72.42%
            );
        }
    }
    ${MenuImageContent} {
        position: absolute;
        bottom: 0;
    }
`;

export const NavMenu = styled.nav`
    display: flex;
    position: relative;

    ${NavItem} {
        ${fontSizing("16px", "24px", 700)}

        &:not(:first-child) {
            margin-left: ${sp[8]};
        }

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
    position: fixed;
    z-index: 3000;
    top: 90px;
    left: 50%;

    display: grid;
    grid-template-columns: 1fr 392px;
    column-gap: ${sp[16]};
    background-color: ${colors.white};
    border-radius: ${sp[4]};
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
    width: 100%;
    max-width: 867px;
    padding: ${sp[6]};
    transform: translateX(-50%);

    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        user-select: none;
        pointer-events: none;
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        background-color: ${colors.white};
        clip-path: polygon(
            100% 0%,
            75% 50%,
            100% 100%,
            25% 100%,
            0% 50%,
            25% 0%
        );
        filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.15));
        /* bos-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15); */
        transform: rotate(90deg) translateX(-13px) translateY(-145px);
        transition: transform 0.9s ease-out;
    }

    ${({ active }) =>
        active
            ? css`
                  opacity: 1;
                  user-select: none;
                  pointer-events: none;
                  z-index: 1;
              `
            : css`
                  /* opacity: 0;
                  user-select: none;
                  pointer-events: none;
                  z-index: -50; */
              `}
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
    top: 50%;
    left: 50%;
    display: grid;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    width: ${sp[16]};
    height: ${sp[16]};
    background-color: ${colors.white};
    transform: translate(-50%);
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
