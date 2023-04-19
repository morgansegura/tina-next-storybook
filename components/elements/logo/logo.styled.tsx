import styled, { css } from "styled-components";
import { rem } from "polished";
import { colors } from "@styles/colors/colors.config";
import { font, fontSizing } from "@styles/typography/typography.config";

export const Container = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 177px;
    }
`;

export const Icon = styled.div``;
export const Text = styled.div`
    ${fontSizing("22px", "22px", 600)};
`;

export const IconSvg = styled.svg`
    display: flex;
`;

IconSvg.defaultProps = {
    width: "31",
    height: "32",
    viewBox: "0 0 31 32",
};

export const IconSvgPath = styled.path`
    ${({ fill }) => css`
        fill: ${fill ? fill : colors.primary};
    `}
`;

IconSvgPath.defaultProps = {
    fill: colors.primary,
};

export const TextSvg = styled.svg`
    display: flex;
`;

TextSvg.defaultProps = {
    width: "96",
    height: "18",
    viewBox: "0 0 96 18",
};

export const TextSvgPath = styled.path`
    ${({ fill }) => css`
        fill: ${fill ? fill : colors.black};
    `}
`;

TextSvgPath.defaultProps = {
    fill: colors.black,
};
