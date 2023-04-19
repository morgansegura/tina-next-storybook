// [Styles]
import * as s from "@components/elements/button/button.styled";
// [Types]
import { IButton } from "@components/elements/button/button.types";

export default function Button({ as, children, icon }: IButton) {
    return (
        <s.Button as={as}>
            {icon === "left" && icon}
            {children}
            {icon === "right" && icon}
        </s.Button>
    );
}
