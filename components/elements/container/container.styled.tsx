import styled, { css } from "styled-components";

import {
    between,
    container,
    minwidth,
    screens,
} from "@styles/screens/screens.config";
import { sp, spacing } from "@styles/spacing";
import { Box } from "@components/elements/box/box.styled";

export const Container = styled(Box)`
    position: relative;
    display: grid;
    ${spacing("mx", "auto")};

    ${({ disableGutters, maxWidth }) =>
        maxWidth === "mobile"
            ? css`
                  max-width: ${container.mobile.base};
                  ${!disableGutters ? spacing("px", 2, "sp") : ``};
              `
            : maxWidth === "tablet"
            ? css`
                  max-width: ${container.tablet};
                  ${!disableGutters ? spacing("px", 4, "sp") : ``};
              `
            : maxWidth === "desktop-small"
            ? css`
                  max-width: ${container.desktop.sm};
                  ${!disableGutters ? spacing("px", 4, "sp") : ``};
              `
            : maxWidth === "desktop"
            ? css`
                  max-width: ${container.desktop.base};
                  ${!disableGutters ? spacing("px", 4, "sp") : ``};
              `
            : maxWidth === "desktop-large"
            ? css`
                  max-width: ${container.desktop.lg};
                  ${!disableGutters ? spacing("px", 6, "sp") : ``};
              `
            : maxWidth === "full"
            ? css`
                  width: 100%;
                  max-width: ${container.desktop.lg};
              `
            : css`
                  ${!maxWidth &&
                  css`
                      max-width: ${container.desktop.lg};

                      ${between(
                          "0px",
                          container.tablet
                      )(`
                        ${spacing("mx", 2, "sp")};
                      `)};

                      ${between(
                          container.tablet,
                          container.desktop.lg
                      )(`
                        ${spacing("mx", 4, "sp")};
                      `)};

                      ${minwidth(container.desktop.lg)(`
                          width: 100%;
                      `)};
                  `}
              `}
`;

Container.defaultProps = {
    as: "div",
    className: "",
    disableGutters: false,
    fixed: false,
    maxWidth: false,
    rest: "",
};
