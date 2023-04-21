import styled, { css } from "styled-components";
// [Utilities]
import { colors } from "@styles/colors/colors.config";
import { sp } from "@styles/spacing";
import { fontSizing } from "@styles/typography/typography.config";

export const Button = styled(({ as }) => as)`
    cursor: pointer;

    svg {
    }

    ${({ variant }) =>
        variant === "header-login"
            ? css`
                  text-decoration: none;
                  //   background-color: ${colors.neutral70};
                  border: 2px solid ${colors.ebony};
                  border-radius: ${sp[3]};
                  ${fontSizing("14px", "18px", 500)};
                  text-align: center;
                  letter-spacing: -0.2px;
                  padding: ${sp[1]} ${sp[3]};
              `
            : css``}
`;

Button.defaultProps = {
    as: "button",
    layout: "default",
};
