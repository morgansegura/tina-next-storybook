// [Types]
import { IBox } from "@components/elements/box/box.types";
// [Styles]
import * as s from "@components/elements/box/box.styled";

export default function Box({ as, children, mb, rest }: IBox) {
    return (
        <s.Box as={as} {...rest}>
            {children}
        </s.Box>
    );
}
