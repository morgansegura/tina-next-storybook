import styled from "styled-components";
import { rgba } from "polished";
// [Config Defaults]
import { colors } from "@styles/colors/colors.config";

export const Menu = styled.div`
    position: fixed;
`;

Menu.defaultProps = {};

export const MenuItem = styled.div``;
MenuItem.defaultProps = {};

export const MenuContent = styled.div``;
MenuContent.defaultProps = {};

export const MenuImage = styled.div`
    overflow: hidden;
`;
MenuImage.defaultProps = {};

export const MenuImageContent = styled.div``;
MenuImageContent.defaultProps = {};

export const MenuImageTitle = styled.div``;
MenuImageTitle.defaultProps = {};

export const MenuImageSubtitle = styled.div``;
MenuImageSubtitle.defaultProps = {};

export const MenuDivider = styled.nav`
    display: flex;
    user-select: none;
    background-color: ${({ color }) => (color ? color : colors.ebony)};
`;

MenuDivider.defaultProps = {
    color: rgba(colors.ebony, 0.25),
};
