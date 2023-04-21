import { colors } from "@styles/colors/colors.config";
import { minwidth, screens } from "@styles/screens/screens.config";
import { sp } from "@styles/spacing";
import styled, { css } from "styled-components";

export const DropdownMenu = styled(({ as }) => as)``;

DropdownMenu.defaultProps = {
    as: "div",
};

export const Selector = styled(({ as }) => as)`
    ${({ active }) =>
        active
            ? css`
                  svg {
                      transform: rotate(-180deg);
                  }
              `
            : css`
                  svg {
                      transform: rotate(0);
                  }
              `}
`;

Selector.defaultProps = {
    as: "div",
    active: false,
};

export const MenuPanel = styled(({ as }) => as)`
    position: fixed;
    z-index: 3000;
    top: 0;
    transform-origin: top left;

    display: grid;
    grid-template-columns: 1fr 392px;
    column-gap: ${sp[16]};
    background-color: ${colors.white};
    border-radius: ${sp[4]};
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
    width: 100%;
    max-width: 867px;
    padding: ${sp[6]};
    transition: opacity 0.3s linear, transform 0.3s linear;

    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        user-select: none;
        pointer-events: none;
        top: 0;
        left: ${({ xPos }) => xPos}px;
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
        clip-path: polygon(
            100% 0%,
            75% 50%,
            100% 100%,
            25% 100%,
            0% 50%,
            25% 0%
        );
        filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.15));
        transform: rotate(90deg) translateX(-13px);
        transition: transform 0.9s ease-out;
    }

    ${({ active }) =>
        active
            ? css`
                  opacity: 1;
                  z-index: 1;
                  left: 50%;
                  transform: translateX(-50%) translateY(85px);

                  ${minwidth(screens.desktop.sm)(`
                    left: ${({ xPos }) => xPos}px;
                    transform: translateX(-${({ xPos }) =>
                        xPos}px) translateY(85px);
                  `)}
              `
            : css`
                  opacity: 0;
                  user-select: none;
                  pointer-events: none;
                  z-index: -50;
                  left: 50%;
                  transform: translateX(-50%) translateY(165px);

                  ${minwidth(screens.desktop.sm)(`
                    left: ${({ xPos }) => xPos}px;
                    transform: translateX(-${({ xPos }) =>
                        xPos}px) translateY(165px);
                  `)}
              `}
`;
MenuPanel.defaultProps = {
    as: "div",
    active: "is--not-active",
};
