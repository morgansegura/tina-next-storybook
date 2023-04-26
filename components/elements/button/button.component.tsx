// [Styles]
import * as s from "@components/elements/button/button.styled";
// [Types]
import { IButton } from "@components/elements/button/button.types";
import Link from "next/link";

export default function Button({
    as,
    children,
    icon,
    label,
    onClick,
    path,
    rest,
    variant,
}: IButton) {
    return (
        <s.Button
            as={path ? Link : as}
            href={path}
            icon={icon}
            onClick={onClick}
            variant={variant}
            {...rest}
        >
            {label && <span>{label}</span>}
            {children}
        </s.Button>
    );
}
