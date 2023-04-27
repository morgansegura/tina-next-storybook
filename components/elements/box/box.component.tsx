// [Types]
import { IBox } from "@components/elements/box/box.types";
// [Styles]
import * as s from "@components/elements/box/box.styled";

export default function Box({ as, className, children, rest, variant }: IBox) {
    return (
        <s.Box
            as={as}
            className={className}
            variant={variant}
        >
            {children}
        </s.Box>
    );
}
