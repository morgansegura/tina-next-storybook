import styled, { css } from "styled-components";
import { colors } from "@styles/colors/colors.config";
import {
    IconSvg,
    IconSvgPath,
} from "@components/elements/icons/user/user.styled";
import { sp } from "@styles/spacing";

export const Avatar = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;

    ${({ size }) =>
        size === "32"
            ? css`
                  width: ${sp[8]};
                  height: ${sp[8]};
              `
            : css``}
    ${({ user }) =>
        user === undefined
            ? css`
                  background-color: ${colors.ebony};
                  ${IconSvgPath} {
                      fill: ${colors.white};
                  }
              `
            : css``}
`;
