import { colors } from "@styles/colors/colors.config";
import styled, { css } from "styled-components";

export const IconSvg = styled.svg`
    transform-origin: 50%;

    ${({ direction }) =>
        direction === "up"
            ? css`
                  transform: rotate(-90deg);
              `
            : direction === "down"
            ? css`
                  transform: rotate(90deg);
              `
            : direction === "right"
            ? css`
                  transform: rotate(0deg);
              `
            : direction === "left" &&
              css`
                  transform: rotate(180deg);
              `}
`;

IconSvg.defaultProps = {
    direction: "down",
    width: "14",
    height: "8",
    viewBox: "0 0 14 8",
};

export const IconSvgPath = styled.path`
    ${({ fill }) => css`
        fill: ${fill ? fill : colors.ebony};
    `}
`;

IconSvgPath.defaultProps = {
    fill: colors.ebony,
};
