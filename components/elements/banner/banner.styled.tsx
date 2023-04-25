import styled from "styled-components";
import { rgba } from "polished";
import { fontSizing } from "@styles/typography/typography.config";
import { colors } from "@styles/colors/colors.config";
import { minwidth, screens } from "@styles/screens/screens.config";
import { Button } from "@components/elements/button/button.styled";
import { sp } from "@styles/spacing";
import { IBanner } from "@components/elements/banner/banner.types";

export const Banner = styled.div`
    display: grid;
    justify-content: center;
    position: relative;
    ${fontSizing("13px", "16px")};

    ${minwidth(screens.desktop.sm)(`
        grid-template-columns: 898px 1fr;
    `)}
`;

export const Title = styled((title) => title?.as)`
    ${({ title }: IBanner) =>
        title?.textColor
            ? `color: ${title?.textColor};`
            : `
            background: linear-gradient(
                91.71deg,
                rgba(105, 180, 226, 0.4) 5.53%,
                rgba(215, 145, 216, 0.4) 93.91%
            ),
            #ffffff;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        `};
`;
Title.defaultProps = {
    title: {
        as: "h4",
    },
};

export const Selector = styled(Button)`
    background-color: ${({ selector }: IBanner) =>
        selector?.bgColor ? selector?.bgColor : colors.button};
    color: ${({ selector }: IBanner) =>
        selector?.textColor ? selector?.textColor : colors.grey};
    ${fontSizing("16px", "20px", 500)};
    padding-top: ${sp[4.5]};
    padding-bottom: ${sp[4.5]};
    flex: 1 0 auto;
    margin-bottom: ${sp[14]};
    letter-spacing: -0.2px;
    border-radius: ${sp[4]};
    align-self: center;

    ${minwidth(screens.desktop.base)(`
        width: 220px;
        height: 80px;
        justify-self: center;
    `)}
`;
