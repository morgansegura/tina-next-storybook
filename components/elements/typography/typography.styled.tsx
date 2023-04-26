import { fontSizing } from "@styles/typography/typography.config";
import styled, { css } from "styled-components";
import { Box } from "@components/elements/box/box.styled";
import { colors } from "@styles/colors/colors.config";

export const Typography = styled(Box)`
    color: ${colors.ebony};

    ${({ as }) =>
        as === "h1"
            ? `
                  ${fontSizing("64px", "72px", 800)}
              `
            : ``};
`;

Typography.defaultProps = {
    as: "h1",
};
