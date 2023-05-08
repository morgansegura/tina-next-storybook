import { colors } from "@styles/colors/colors.config";
import { screens } from "@styles/screens/screens.config";
import { minwidth } from "@styles/screens/screens.config";
import { sp } from "@styles/spacing";
import { rem } from "polished";
import styled from "styled-components";
import css from "styled-jsx/css";

export const Spacer = styled((as) => as)`
    position: relative;

    ${({ bottom }) =>
        bottom &&
        css`
            ${bottom?.mobile?.sm
                ? `
                ${minwidth(screens.desktop.sm)(`
                    padding-bottom: ${rem(`${bottom.mobile.sm}px`)};
                `)};
            `
                : ``};
            ${bottom?.mobile?.base
                ? `
                ${minwidth(screens.mobile.base)(`
                    padding-bottom: ${rem(`${bottom.mobile.base}px`)};
                `)};
            `
                : ``};
            ${bottom?.tablet
                ? `
                ${minwidth(screens.tablet)(`
                    padding-bottom: ${rem(`${bottom.tablet}px`)};
                `)};
            `
                : ``};
            ${bottom?.desktop?.sm
                ? `
                ${minwidth(screens.desktop.sm)(`
                    padding-bottom: ${rem(`${bottom.desktop.sm}px`)};
                `)};
            `
                : ``};
            ${bottom?.desktop?.base
                ? `
                ${minwidth(screens.desktop.base)(`
                    padding-bottom: ${rem(`${bottom.desktop.base}px`)};
                `)};
            `
                : ``};
            ${bottom?.desktop?.lg
                ? `
                ${minwidth(screens.desktop.lg)(`
                    padding-bottom: ${rem(`${bottom.desktop.lg}px`)};
                `)};
            `
                : `
                    padding-bottom: ${sp[14]};

                    ${minwidth(screens.tablet)(`
                        padding-bottom: var(--size-8);
                    `)};

                    ${minwidth(screens.desktop.sm)(`
                        padding-bottom: var(--size-8);
                    `)};

                    ${minwidth(screens.desktop.base)(`
                        padding-bottom: ${sp[18]};
                    `)};

                    ${minwidth(screens.desktop.lg)(`
                        padding-bottom: ${sp[20]};
                    `)};
                `};
        `};

    ${({ top }) =>
        top &&
        css`
            ${top?.mobile?.sm
                ? `
                ${minwidth(screens.desktop.sm)(`
                    padding-top: ${rem(`${top.mobile.sm}px`)};
                `)};
            `
                : ``};
            ${top?.mobile?.base
                ? `
                ${minwidth(screens.mobile.base)(`
                    padding-top: ${rem(`${top.mobile.base}px`)};
                `)};
            `
                : ``};
            ${top?.tablet
                ? `
                ${minwidth(screens.tablet)(`
                    padding-top: ${rem(`${top.tablet}px`)};
                `)};
            `
                : ``};
            ${top?.desktop?.sm
                ? `
                ${minwidth(screens.desktop.sm)(`
                    padding-top: ${rem(`${top.desktop.sm}px`)};
                `)};
            `
                : ``};
            ${top?.desktop?.base
                ? `
                ${minwidth(screens.desktop.base)(`
                    padding-top: ${rem(`${top.desktop.base}px`)};
                `)};
            `
                : ``};
            ${top?.desktop?.lg
                ? `
                ${minwidth(screens.desktop.lg)(`
                    padding-top: ${rem(`${top.desktop.lg}px`)};
                `)};
            `
                : `
                    padding-top: ${sp[14]};

                    ${minwidth(screens.tablet)(`
                        padding-top: var(--size-8);
                    `)};

                    ${minwidth(screens.desktop.sm)(`
                        padding-top: var(--size-8);
                    `)};

                    ${minwidth(screens.desktop.base)(`
                        padding-top: ${sp[18]};
                    `)};

                    ${minwidth(screens.desktop.lg)(`
                        padding-top: ${sp[20]};
                    `)};
                `};
        `};

    ${({ variant }) =>
        variant &&
        css`
            ${variant?.border === "center-dashed-rainbow"
                ? `
                &:before {
                    content: "";
                    position: absolute;
                    bottom: 50%;
                    right: 0;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background-image: linear-gradient(
                            90deg,
                            transparent,
                            transparent 50%,
                            ${
                                variant?.bg === "body"
                                    ? colors.neutral70
                                    : variant?.bg === "white"
                                    ? colors.white
                                    : variant?.bg === "ebobye"
                                    ? colors.ebony
                                    : colors.black
                            } 50%,
                            ${
                                variant?.bg === "body"
                                    ? colors.neutral70
                                    : variant?.bg === "white"
                                    ? colors.white
                                    : variant?.bg === "ebony"
                                    ? colors.ebony
                                    : colors.black
                            } 100%
                        ),
                        linear-gradient(91.71deg, #69b4e2 5.53%, #d791d8 93.91%);
                    background-size: 20px 3px, 100% 3px;
                    border: none;
                }
            `
                : ``};
        `}
`;

Spacer.defaultProps = {
    as: "div",
};
