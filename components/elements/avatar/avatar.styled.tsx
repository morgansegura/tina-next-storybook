import styled, { css } from "styled-components";
import { colors } from "@styles/colors/colors.config";
import { IconSvgPath } from "@components/elements/icons/user/user.styled";
import { sp } from "@styles/spacing";

export const Avatar = styled.div`
    position: relative;
    display: grid;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    overflow: hidden;

    ${({ properties }) => css`
        ${properties.size === 32
            ? `
                width: ${sp[8]};
                height: ${sp[8]};
            `
            : ``}

        ${properties.emboss &&
        `
            &:before {
                border: 2px solid rgba(25, 26, 27, 0.15);
            }
        `}
    `}

    ${({ user }) =>
        // @ts-ignore
        user?.image
            ? css`
                  background-color: ${colors.ebony};

                  ${IconSvgPath} {
                      fill: ${colors.white};
                  }
              `
            : css`
                  background-color: ${colors.neutral70};
              `}
`;

Avatar.defaultProps = {
    properties: {
        emboss: false,
        size: 32,
    },
};
