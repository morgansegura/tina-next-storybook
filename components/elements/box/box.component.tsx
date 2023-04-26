// [Types]
import { IBox } from "@components/elements/box/box.types";
// [Styles]
import * as s from "@components/elements/box/box.styled";

export default function Box({ children, mb, rest }: IBox) {
    return (
        <s.Box mb={mb} {...rest}>
            {children}
        </s.Box>
    );
}
