import styled, { css } from "styled-components";

export const DropdownMenu = styled(({ as }) => as)``;

DropdownMenu.defaultProps = {
    as: "div",
};

export const Selector = styled(({ as }) => as)``;

Selector.defaultProps = {
    as: "div",
    active: false,
};

export const MenuPanel = styled(({ as }) => as)``;
MenuPanel.defaultProps = {
    as: "div",
    active: false,
};
