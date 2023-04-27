import { fontSizing } from "@styles/typography/typography.config";
import styled, { css } from "styled-components";
import { Box } from "@components/elements/box/box.styled";
import { colors } from "@styles/colors/colors.config";

export const Typography = styled((as) => as)`
    ${({ as, variant }) => `
        ${
            as === "h1" && variant === "default"
                ? `
                ${fontSizing("24px", "24px", 800)};
            `
                : as === "h1" && variant === "prose"
                ? `
                ${fontSizing("24px", "24px", 800)};
            `
                : ``
        }
        ${
            as === "p" && variant === "default"
                ? `
                ${fontSizing("34px", "34px", 800)};
            `
                : as === "p" && variant === "prose"
                ? `
                ${fontSizing("24px", "24px", 900)};
            `
                : ``
        }
    `}
`;

Typography.defaultProps = {
    as: "h1",
};
