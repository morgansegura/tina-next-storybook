// [Types]
import { TBox } from "@components/elements/box/box.types";
// [Styles]
import * as s from "@components/elements/box/box.styled";

export default function Box({
    as,
    children,
    className,
    disableGutters,
    maxWidth,
    rest,
}: TBox) {
    return (
        <s.Box
            as={as}
            className={className}
            disableGutters={disableGutters}
            maxWidth={maxWidth}
            {...rest}
        >
            {children}
        </s.Box>
    );
}
