import styled from "styled-components";
import { minwidth, screens } from "@styles/screens/screens.config";
import { rem } from "polished";
import { IBox } from "@components/elements/box/box.types";

export const Box = styled((as) => as)`
    ${({ mb }: IBox) =>
        mb
            ? `
            ${
                mb?.mobile?.sm
                    ? `
                ${minwidth(screens.desktop.sm)(`
                    margin-bottom: ${rem(`${mb?.mobile?.sm}px`)};
                `)};
            `
                    : ``
            };
            ${
                mb?.mobile?.base
                    ? `
                ${minwidth(screens.mobile.base)(`
                    margin-bottom: ${rem(`${mb?.mobile?.base}px`)};
                `)};
            `
                    : ``
            };
            ${
                mb?.tablet
                    ? `
                ${minwidth(screens.tablet)(`
                    margin-bottom: ${rem(`${mb?.tablet}px`)};
                `)};
            `
                    : ``
            };
            ${
                mb?.desktop?.sm
                    ? `
                ${minwidth(screens.desktop.sm)(`
                    margin-bottom: ${rem(`${mb?.desktop?.sm}px`)};
                `)};
            `
                    : ``
            };
            ${
                mb?.desktop?.base
                    ? `
                ${minwidth(screens.desktop.base)(`
                    margin-bottom: ${rem(`${mb?.desktop?.base}px`)};
                `)};
            `
                    : ``
            };
            ${
                mb?.desktop?.lg
                    ? `
                ${minwidth(screens.desktop.lg)(`
                    margin-bottom: ${rem(`${mb?.desktop?.lg}px`)};
                `)};
            `
                    : ``
            };
        `
            : ``};
`;

Box.defaultProps = {
    as: "div",
};
