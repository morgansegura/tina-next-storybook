import { colors } from "@styles/colors/colors.config";
import styled, { css } from "styled-components";

export const IconSvg = styled.svg``;

IconSvg.defaultProps = {
    width: "24",
    height: "19",
    viewBox: "0 0 24 19",
};

export const IconSvgPath = styled.path`
    ${({ fill }) => css`
        fill: ${fill ? fill : colors.ebony};
    `}
`;

IconSvgPath.defaultProps = {
    fill: colors.ebony,
};
