import { fontSizing } from "@styles/typography/typography.config"
import styled, { css } from "styled-components"

export const Typography = styled(as=>as)`
    color: #000;

    ${({as}) => as === "h1" ? css` ${fontSizing("64px","72px",800)}` : css``};
`

Typography.defaultProps={
    as:"h1"
}