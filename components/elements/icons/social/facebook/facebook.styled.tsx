import { colors } from "@styles/colors/colors.config";
import styled, { css } from "styled-components";

export const IconSvg = styled.svg``;

IconSvg.defaultProps = {
    width: "10",
    height: "16",
    viewBox: "0 0 10 16",
};

export const IconSvgPath = styled.path`
    ${({ fill }) => css`
        fill: ${fill ? fill : colors.ebony};
    `}
`;

IconSvgPath.defaultProps = {
    fill: colors.ebony,
};
