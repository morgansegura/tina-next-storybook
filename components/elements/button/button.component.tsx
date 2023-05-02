// [Styles]
import * as s from "@components/elements/button/button.styled";
// [Types]
import { IButton } from "@components/elements/button/button.types";

export default function Button({
    as,
    children,
    href,
    icon,
    label,
    onClick,
    target,
    title,
    size,
    variant,
}: IButton) {
    return onClick ? (
        <s.Button
            as={as}
            onClick={onClick}
            data-title={title}
            size={size}
            variant={variant}
        >
            <span>{icon}</span>
            <span>{label}</span>
        </s.Button>
    ) : (
        <s.Button
            as={as}
            href={href}
            icon={icon}
            data-title={title}
            target={target}
            size={size}
            variant={variant}
        >
            <span>{icon}</span>
            <span>{label}</span>
        </s.Button>
    );
}
