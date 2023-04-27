// [Styles]
import * as s from "@components/elements/typography/typography.styled";

// [Types]
import { ITypography } from "@components/elements/typography/typography.types";

export default function Typography({
    as,
    className,
    children,
    rest,
    variant,
}: ITypography) {
    return (
        <s.Typography
            as={as}
            className={className}
            rest={rest}
            variant={variant}
        >
            {children}
        </s.Typography>
    );
}
