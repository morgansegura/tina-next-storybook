import { colors } from "@styles/colors/colors.config";
import styled, { css } from "styled-components";

export const IconSvg = styled.svg``;

IconSvg.defaultProps = {
    width: "21",
    height: "21",
    viewBox: "0 0 21 21",
};

export const IconSvgPath = styled.path`
    ${({ fill }) => css`
        fill: ${fill ? fill : colors.ebony};
    `}
`;

IconSvgPath.defaultProps = {
    fill: colors.ebony,
};
