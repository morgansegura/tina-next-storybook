import { colors } from "@styles/colors/colors.config";
import { sp } from "@styles/spacing";
import styled, { css } from "styled-components";

export const IconSvg = styled.svg`
    border-radius: ${sp[8]};
`;

IconSvg.defaultProps = {
    width: "14",
    height: "15",
    viewBox: "0 0 14 15",
};

export const IconSvgPath = styled.path`
    ${({ fill }) => css`
        ${fill ? fill : colors.white}
    `}
`;

IconSvgPath.defaultProps = {
    fill: colors.ebony,
};
