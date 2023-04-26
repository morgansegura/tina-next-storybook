import styled, { css } from "styled-components";
// [Utilities]
import { colors } from "@styles/colors/colors.config";
import { sp } from "@styles/spacing";
import { fontSizing } from "@styles/typography/typography.config";
import { rem } from "polished";

export const Button = styled(({ as }) => as)`
    cursor: pointer;
    align-items: center;
    justify-content: center;

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
            : variant === "play-rounded-light"
            ? css`
                  display: flex;
                  align-items: center;
                  background-color: ${colors.white};
                  border-radius: ${sp[3]};
                  color: ${colors.ebony};
                  padding: ${sp[4]} ${sp[6]};

                  span {
                      ${fontSizing("16px", "20px", 600)}
                  }

                  svg {
                      width: ${sp[4]};
                      margin-right: ${sp[3]};
                  }

                  path {
                      fill: ${colors.ebony};
                  }
              `
            : variant === "outline-squarish-light"
            ? css`
                  display: flex;
                  align-items: center;
                  border: 2px solid ${colors.white};
                  border-radius: ${sp[1]};
                  color: ${colors.white};
                  padding: ${sp[4]} ${sp[6]};

                  span {
                      ${fontSizing("16px", "20px", 600)}
                  }

                  path {
                      fill: ${colors.ebony};
                  }
              `
            : css``}

    ${({ icon }) =>
        icon === "left"
            ? `
                span {
                    order: 2;
                }
                svg {
                    order: 1;
                }
    `
            : icon === "right"
            ? `
                span {
                    order: 2;
                }
                svg {
                    order: 2;
                }
            `
            : ``}
`;

Button.defaultProps = {
    as: "button",
    layout: "default",
};
