// [Styles]
import * as s from "@components/elements/typography/typography.styled"

// [Types]
import {ITypography} from "@components/elements/typography/typography.types"

export default function Typography({children}: ITypography) {
  return (
    <s.Typography>{children}</s.Typography>
  )
}