// [Styles]
import * as s from "@components/elements/icons/social/apple/apple.styled";
// [Types]
import { IApple } from "@components/elements/icons/social/apple/apple.types";

export default function AppleIcon({ fill, height, width, viewBox }: IApple) {
    return (
        <s.IconSvg
            width={width}
            height={height}
            viewBox={viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <s.IconSvgPath
                d="M9.9375 7.40625C9.9375 6.25 10.4688 5.40625 11.5 4.75C10.9062 3.90625 10.0312 3.46875 8.875 3.375C7.75 3.28125 6.53125 4 6.09375 4C5.625 4 4.5625 3.40625 3.71875 3.40625C1.96875 3.4375 0.125 4.78125 0.125 7.5625C0.125 8.375 0.25 9.21875 0.5625 10.0938C0.96875 11.25 2.40625 14.0625 3.90625 14C4.6875 14 5.25 13.4375 6.28125 13.4375C7.28125 13.4375 7.78125 14 8.65625 14C10.1875 14 11.5 11.4375 11.875 10.2812C9.84375 9.3125 9.9375 7.46875 9.9375 7.40625ZM8.1875 2.28125C9.03125 1.28125 8.9375 0.34375 8.9375 0C8.1875 0.0625 7.3125 0.53125 6.8125 1.09375C6.25 1.71875 5.9375 2.5 6 3.34375C6.8125 3.40625 7.5625 3 8.1875 2.28125Z"
                fill={fill}
            />
        </s.IconSvg>
    );
}
