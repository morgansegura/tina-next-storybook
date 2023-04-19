import React from "react";
// [Types]
import { TContainer } from "@components/elements/container/container.types";
// [Styles]
import * as s from "@components/elements/container/container.styled";

export default function Header({
    as,
    children,
    className,
    disableGutters,
    fixed,
    maxWidth,
    rest,
}: TContainer) {
    return (
        <s.Container
            as={as}
            className={className}
            disableGutters={disableGutters}
            fixed={fixed}
            maxWidth={maxWidth}
            {...rest}
        >
            {children}
        </s.Container>
    );
}
