import { colors } from "@styles/colors/colors.config";
import styled, { css } from "styled-components";

export const IconSvg = styled.svg`
    transform-origin: 50%;

    ${({ direction }) =>
        direction === "up"
            ? css`
                  transform: rotate(180deg);
              `
            : direction === "down"
            ? css`
                  transform: rotate(0deg);
              `
            : direction === "right"
            ? css`
                  transform: rotate(-90deg);
              `
            : direction === "left" &&
              css`
                  transform: rotate(90deg);
              `}
`;

IconSvg.defaultProps = {
    direction: "down",
    width: "11",
    height: "7",
    viewBox: "0 0 11 7",
};

export const IconSvgPath = styled.path`
    ${({ fill }) => css`
        fill: ${fill ? fill : colors.ebony};
    `}
`;

IconSvgPath.defaultProps = {
    fill: colors.ebony,
};
