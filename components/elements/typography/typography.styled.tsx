import { minwidth, screens } from "@styles/screens/screens.config";
import { sp } from "@styles/spacing";
import { fontSizing } from "@styles/typography/typography.config";
import styled from "styled-components";

export const Typography = styled((as) => as)`
    ${({ variant }) => (variant === "xs" ? xs : ``)};
    ${({ variant }) => (variant === "sm" ? sm : ``)};
    ${({ variant }) => (variant === "md" ? md : ``)};
    ${({ variant }) => (variant === "lg" ? lg : ``)};
    ${({ variant }) => (variant === "xl" ? xl : ``)};
`;

const xs = `
    font-size: ${sp[8]};z
    line-height: ${sp[9]};
    font-weight: 700;

    ${minwidth(screens.tablet)(`
        font-size: ${sp[12]};
        line-height: ${sp[13]}
    `)};

    ${minwidth(screens.desktop.base)(`
        font-size: ${sp[14]};
        line-height: ${sp[16]}
    `)};
`;

const sm = `
    font-size: ${sp[4]};
    line-height: ${sp[6]};
    font-weight: 400;

    ${minwidth(screens.tablet)(`
        font-size: ${sp[4.5]};
        line-height: ${sp[7]}
    `)};

    ${minwidth(screens.desktop.base)(`
        font-size: ${sp[5.5]};
        line-height: ${sp[7.5]}
    `)};

    ${minwidth(screens.desktop.lg)(`
        font-size: ${sp[6]};
        line-height: ${sp[8]}
    `)};
`;
const md = `
    font-size: ${sp[8]};
    line-height: ${sp[9]};
    font-weight: 700;

    ${minwidth(screens.tablet)(`
        font-size: ${sp[12]};
        line-height: ${sp[13]}
    `)};

    ${minwidth(screens.desktop.base)(`
        font-size: ${sp[14]};
        line-height: ${sp[16]}
    `)};
`;
const lg = `
    font-size: ${sp[8]};
    line-height: ${sp[9]};
    font-weight: 700;

    ${minwidth(screens.tablet)(`
        font-size: ${sp[12]};
        line-height: ${sp[13]}
    `)};

    ${minwidth(screens.desktop.base)(`
        font-size: ${sp[14]};
        line-height: ${sp[16]}
    `)};
`;
const xl = `
    font-size: ${sp[8]};
    line-height: ${sp[9]};
    font-weight: 700;

    ${minwidth(screens.tablet)(`
        font-size: ${sp[12]};
        line-height: ${sp[13]}
    `)};

    ${minwidth(screens.desktop.base)(`
        font-size: ${sp[14]};
        line-height: ${sp[16]}
    `)};
`;

Typography.defaultProps = {
    as: "h1",
};
