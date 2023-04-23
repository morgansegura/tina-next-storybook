import { colors } from "@styles/colors/colors.config";
import { minwidth, screens } from "@styles/screens/screens.config";
import { sp } from "@styles/spacing";
import styled, { css } from "styled-components";

export const DropdownMenu = styled(({ as }) => as)``;

DropdownMenu.defaultProps = {
    as: "div",
};

export const Selector = styled(({ as }) => as)`
    ${({ properties }) => css`
        ${properties.active && properties.rotate
            ? `
                  svg {
                      transform: rotate(-180deg);
                  }
              `
            : `
                  svg {
                      transform: rotate(0);
                  }
              `}
    `};
`;

Selector.defaultProps = {
    as: "div",
    properties: { active: false, rotate: true },
};

export const MenuPanel = styled(({ as }) => as)`
    position: fixed;
    z-index: 3000;
    top: 0;
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
        transform: rotate(90deg) translateX(13px);
        transform-origin: top center;
        transition: transform 0.9s ease-out;
    }

    ${({ properties }) => css`
        ${properties?.position === "left"
            ? `
                  ${
                      properties?.active
                          ? `
                            transform-origin: top left;
                            right: calc(${properties?.posX}px - 750px);
                            transform: translateY(85px);

                            ${minwidth(screens.desktop.sm)(`
                                transform: translateY(85px);
                            `)}

                        `
                          : `
                            transform-origin: top left;
                            right: calc(${properties?.posX}px - 750px);
                            transform: translateY(165px);

                            ${minwidth(screens.desktop.sm)(`
                                transform: translateY(165px);
                        `)}
                        `
                  }
            `
            : properties?.position === "right"
            ? `
                  ${
                      properties?.active
                          ? `
                            left: calc(${properties?.posX}px - 750px);
                            transform: translateY(85px);

                            &:before {
                                right: 40px;
                            }

                            ${minwidth(screens.desktop.sm)(`
                                transform: translateY(85px);
                            `)}
                        `
                          : `
                            left: calc(${properties?.posX}px - 750px);
                            transform: translateY(165px);

                            ${minwidth(screens.desktop.sm)(`
                                transform: translateY(165px);
                        `)}
                        `
                  }
              `
            : css`
                  ${properties?.active
                      ? `
                            left: 50%;
                            transform: translateX(-50%) translateY(85px);

                            &:before {
                                left: calc(${properties?.posX}px + ${
                            properties?.width
                        }px + 25px);
                            }

                            ${minwidth(screens.desktop.sm)(`
                                transform: translateX(-50%) translateY(85px);
                            &:before {
                                left: calc(${properties?.posX}px - 433px + ${properties?.width}px + 15px);
                            }
                            `)}

                        `
                      : `
                        left: 50%;
                        transform: translateX(-50%) translateY(165px);

                            &:before {
                                left: calc(${properties?.posX}px + ${
                            properties?.width
                        }px + 25px);
                            }

                        ${minwidth(screens.desktop.sm)(`
                            transform: translateX(-50%) translateY(165px);

                            &:before {
                                left: calc(${properties?.posX}px - 433px + ${properties?.width}px + 15px);
                            }
                        `)}
                  `}
              `}
        ${properties?.active
            ? css`
                  opacity: 1;
                  z-index: 1;
              `
            : css`
                  opacity: 0;
                  user-select: none;
                  pointer-events: none;
                  z-index: -50;
              `}
    `}
`;
MenuPanel.defaultProps = {
    as: "div",
    properties: {
        active: "is--not-active",
        position: "center",
        panelPosX: 50,
    },
};
