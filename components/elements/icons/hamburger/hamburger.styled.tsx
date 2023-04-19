import { colors } from "@styles/colors/colors.config";
import styled, { css } from "styled-components";

export const IconSvg = styled.svg``;

IconSvg.defaultProps = {
    width: "20",
    height: "15",
    viewBox: "0 0 20 15",
};

export const IconSvgPath = styled.path`
    ${({ fill }) => css`
        fill: ${fill ? fill : colors.ebony};
    `}
`;

IconSvgPath.defaultProps = {
    fill: colors.ebony,
};
