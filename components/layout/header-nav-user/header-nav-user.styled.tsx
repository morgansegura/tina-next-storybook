import styled from "styled-components";
// [Utilities]
import { sp } from "@styles/spacing";
// [Styles]

import { MenuDivider, MenuItem } from "@components/elements/menu/menu.styled";
import { minwidth, screens } from "@styles/screens/screens.config";

export const UserMenu = styled.nav`
    display: flex;
    justify-self: flex-end;
`;

export const UserMenuNavItem = styled(MenuItem)`
    cursor: pointer;
    display: flex;
    align-items: center;
    opacity: 1;
    transition: opacity 0.3s ease-in;

    &:not(:first-child) {
        margin-left: ${sp[2]};

        ${minwidth(screens.desktop.base)(`
                margin-left: ${sp[6]};
        `)}
    }
    &:not(:last-child) {
        margin-right: ${sp[2]};

        ${minwidth(screens.desktop.base)(`
                margin-left: ${sp[5]};
        `)}
    }

    &:hover {
        opacity: 0.5;
        transition: opacity 0.3s ease-out;
    }
`;

UserMenu.defaultProps = {};

export const UserMenuLinkDivider = styled(MenuDivider)`
    width: 1px;
    height: ${sp[6]};
`;
