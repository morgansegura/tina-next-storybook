// [Styles]
import * as s from "@components/elements/typography/typography.styled";

// [Types]
import { ITypography } from "@components/elements/typography/typography.types";

export default function Typography({ as, children, rest }: ITypography) {
    return (
        <s.Typography as={as} {...rest}>
            {children}
        </s.Typography>
    );
}
